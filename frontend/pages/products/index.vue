<template>
    <div id="products">
        <div class="row gx-0">
            <div class="col-lg-3">
               <ProductFilter :showFilter="showFilterStatus" @getProducts="getProducts" @closeFilter="closeFilter" @changeMyProducts="changeMyProducts" />
            </div>
            <div class="col-lg-9">
                <section class="main">
                    <div class="main-container">

                        <div class="main-top-card card">
                            <div class="card-body d-flex" style="justify-content:space-between">
                                <h4 class="card-title">Все продукты</h4>
                                <div class="d-flex" style="justify-content: flex-end">
                                    
                                <div class=" icon-filter ">
                                    <a @click="showFilter"><b-icon-funnel class=""></b-icon-funnel></a>
                                </div>
                            
                            </div>
                                    

                            </div>
                        </div>
                        <div>
                            <div class="row gx-3" v-if="is_product">
                                <div class="col-md-3 col-6 col-sm-4"  v-for="product in products" :key="product.id">
                                    <div class="card main-card" v-if="product.status">
                                        <NuxtLink :to="{ name: 'product-id', params: { id: product.slug } }" class="me-auto ms-auto"><img :src="'http://localhost:8000' + product.image" class="card-img" alt="..."></NuxtLink>
                                        <div class="card-body">
                                            <NuxtLink :to="{ name: 'product-id', params: { id: product.slug } }" class="nav-link">
                                                
                                                <h4 class="card-title">{{ product.name }} - {{ product.weight }}</h4>
                                                <span class="card-price">{{ product.b_price }} сум</span>
                                            </NuxtLink>
                                            <div>
                                                
                                                <div v-if="product.type_id">
                                                    <NuxtLink :to="{ name: 'product-id', params: { id: product.slug } }" class="btn-more w-100 btn btn-success">
                                                        Перейти
                                                    </NuxtLink>
                                                </div>

                                                <div v-else>


                                                    <div v-if="product.inCart" class="btn-dis" >Продукт в корзине</div>
                                                    <button v-else class="btn btn-success w-100 btn-more" @click="toBuy(product.slug)"><span>Покупать</span> <b-icon-basket3 class="basket3-icon pb-1"></b-icon-basket3></button>
                                                </div>


                                            
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <Pagination v-if="showPagination" :item="page_size" :total="total" @page-changed="loadProducts" />

                            </div>

                            

                            <div class="row gx-3" v-else>
                                <div class="container">
                                    <h5 style="font-weight: normal"> {{ not_product }} :(</h5>
                                </div>
                            </div>
                            
                        </div>

                    </div>
                </section>
            </div>
        </div>
        
    </div>
</template>

<script>
import { mapActions, mapState, mapStores } from 'pinia'
import { ProductStore, FilterStore } from '~~/stores'


export default {
    async created() {
        this.getProducts(1)
    },

    data() {
        return {
            not_product: 'Нету продуктов ):',
            product: [],
            height: '150',
            width: '100',
            overall_price: '',
            showFilterStatus: false,
            page: 1,
            products: [],
            is_product: false,
            showPagination: true
        }
    },
    computed: {
        ...mapState(ProductStore, ['total', 'page_size']),
        ...mapState(FilterStore, ['getColors', 'getCatalogs', 'getProperties']),
        ...mapStores(ProductStore, FilterStore),
    },


    methods: {

        ...mapActions(ProductStore, ['addToCart', 'increaseCart']),


        changeMyProducts(data) {
            
            if (data.value.length >= 1) {
                this.products = data.value
                this.inTheCart()
                this.is_product = true

                for (let i = 0; i < this.products.length; i++) {
                    let overall_price = this.products[i].price_sum.toString()
                    overall_price =  `${overall_price.slice(-9, -6)} ${overall_price.slice(-6, -3)} ${overall_price.slice(-3)}`
                    this.products[i].b_price = overall_price
                }
                this.showPagination = false
            } else {
                this.products = []
                this.is_product = false
                this.showPagination = false


            }
        },

        inTheCart() {

            for (let i = 0; i < this.products.length; i++) {
                let obj_s = localStorage.getItem('product' + this.products[i].id)
                let obj = JSON.parse(obj_s)

                if (obj == null) {
                    this.products[i].inCart = false
                } else {

                    this.products[i].inCart = true
                }
            }
        },


        async getProducts(page, id) {
            let { data, pending, error } = await useAsyncData('products',  () => $fetch(`http://localhost:8000/api/products/?page=${page}`), {initialCache: false})

            if (data.value.results.length >= 1) {

                this.products = data.value.results

                for (let i = 0; i < this.products.length; i++) {
                    let overall_price = this.products[i].price_sum.toString()
                    overall_price =  `${overall_price.slice(-9, -6)} ${overall_price.slice(-6, -3)} ${overall_price.slice(-3)}`
                    this.products[i].b_price = overall_price
                }

                this.is_product = true
                this.showPagination = true

                this.inTheCart()

            } else {

                this.products = []
                this.is_product = false
            }
        },


        closeFilter() {
            this.showFilterStatus = !this.showFilterStatus
        },  

        loadProducts(pageNumber) {
            let store = ProductStore()

            this.$router.push({path: '', query: {q: pageNumber}});


            store.fetchProducts(pageNumber)
            this.getProducts(pageNumber)
        },


        async getProduct(id) {
            const { data } = await useFetch(`http://localhost:8000/api/product/${id}`, { initialCache: false})
            data.value.inCart = true

            return data.value
        },

        showFilter() {
            this.showFilterStatus = !this.showFilterStatus
        },
        

        toBuy(id) {
            let product = this.getProduct(id)
            let product_obj;

            product.then((resp) => {
                product_obj = resp

                let price = parseInt(product_obj.price_sum)

                let square = (this.width / 100) * (this.height / 100)

                this.overall_price = parseInt(price * square)


                if (product_obj.type_id == true) {
                    let new_p = {
                        'id': product_obj.id,
                        'width': this.width / 100,
                        'height': this.height / 100,
                        'overall_price': this.overall_price,
                        'type_id': product_obj.type_id
                    }

                    let json_obj = JSON.stringify(new_p)

                    this.increaseCart()

                    this.addToCart(json_obj, product_obj.id)

                    this.inTheCart()
                    this.getProducts(1)



                }  else {
                    let new_p = {
                        'id': product_obj.id,
                        'width': this.width / 100,
                        'height': this.height / 100,
                        'overall_price': this.overall_price,
                        'type_id': 'None'
                    }

                    let json_obj = JSON.stringify(new_p)

                    this.increaseCart()

                    this.addToCart(json_obj, product_obj.id)

                    this.inTheCart()
                    this.getProducts(1)


                }


               


            })
        }
    }
}
</script>

<style scoped>
    #products .main-card{
        margin-bottom: 24px;
    }
    .btn-dis {
        background: #239b6bb2;
        padding: 4px 13px;
        cursor: pointer;
        margin-top: 10px;
        color: #fff;
        border-radius: 5px;
    }
    .main {
        padding-top: 15px;
        background: #F9F9F9;
    }
    .products .row {
        margin: 0 !important;

        padding: 0 !important;
    }
    
    .main {
        padding-left: 15px;
        min-height: 900px;
    }
    
    .main-card {
        border: 1px solid #f2f2f2;
        box-shadow: 0px 1px 4px #c5c5c5;
    }
    .card-img {
        padding-top: 12px;
        margin-left: auto;
        width: 170px;
        margin-right: auto;
    }
    .card-title {
        font-size: 18px;
        font-weight: normal;
    }
    
    

    @media (min-width: 926px) {
        .main-container {
            width: 900px;
        }
        .icon-filter {
            display: none;
        }
        
    }

    

    .card-price {
        font-size: 17px;
        color: #474747;
        font-weight: 500;
    }
    .btn-more {
        padding: 2px 9px;
        margin-top: 10px;
        background: #29b57e;
        border: none;
    }
    .btn-more span {
        display: inline-block;
        padding: 2px 8px !important;
    }
    .btn-more:hover {
        background: #239b6b;
    }
    .main-top-card .card-body select {
        width: 50%;
    }
    .main-top-card .card-body {
        align-items: center;
    }

    .main-top-card {
        margin-bottom: 20px;
    }

    .main-top-card .card-title {
        padding-top: 5px;
    }

</style>