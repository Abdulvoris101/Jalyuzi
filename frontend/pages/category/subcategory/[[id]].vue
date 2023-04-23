<template>
    <div id="subcategory">
        <div class="row gx-0">
            <div class="col-lg-3">
                <ProductFilter :showFilter="showFilterStatus" :is_sub="true" @closeFilter="closeFilter" />
            </div>

            <div class="col-lg-9">
                <section class="main">
                    <div class="main-container">

                        <div class="main-top-card card">
                            <div class="card-body d-flex " style="justify-content:space-between">
                                <div style="width:100%">
                                    <h4 class="card-title">Категории - {{ category_name }}</h4>
                                    <div class="d-flex" style="justify-content: flex-end">
                                    
                                        <div class=" icon-filter ">
                                            <a @click="showFilter"><b-icon-funnel class=""></b-icon-funnel></a>
                                        </div>
                                    
                                
                                    </div>
                                </div>
                                
    
                            </div>
                        </div>
                        <div class="row gx-3" v-if="is_data">
                            <div class="col-md-3 col-6 col-sm-4 mt-3"  v-for="product in getData" :key="product.id">
                                <div class="card main-card"  v-if="product.status">
                                    <NuxtLink :to="{ name: 'product-id', params: { id: product.slug } }" class="me-auto ms-auto"><img :src="baseUrl + product.image" class="card-img" :alt="product.name"></NuxtLink>
                                    <div class="card-body">
                                        <NuxtLink :to="{ name: 'product-id', params: { id: product.slug } }" class="nav-link">
                                            <h4 class="card-title">{{ product.name }} - {{ product.weight }}</h4>
                                            <span class="card-price">{{ product.price_sum }} сум</span>
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

                            <Pagination :item="page_size_s" :total="total_s" @page-changed="loadProducts" />
                            
                        </div>

                        <div class="row gx-3" v-else>
                            <div class="container">
                                <h5 style="font-weight: normal"> {{ not_product }} :(</h5>
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
    data() {
        return {
            is_product: false,
            not_product: 'Продукты нет',
            height: '150',
            width: '100',
            overall_price: '',
            showFilterStatus: false,
        }
    },  

    computed: {
        getId() {
            const route = useRoute();
            return route.params.id
        },

        ...mapStores(ProductStore, FilterStore),
        ...mapState(ProductStore, ['getData', 'is_data', 'total_s', 'page_size_s', 'baseUrl'])
    },

    created() {
        this.getSubCategoryProducts(this.getId, 1)
        this.fetchCatalogs('subcategory')
    },

    methods: {
        ...mapActions(ProductStore, ['getSubCategoryProducts', 'addToCart', 'increaseCart']),
        ...mapActions(FilterStore, ['fetchCatalogs']),

        closeFilter() {
            this.showFilterStatus = !this.showFilterStatus

        },  

        loadProducts(pageNumber) {
            let store = ProductStore()
            store.getSubCategoryProducts(this.getId, pageNumber)
            
            this.$router.push({path: '', query: {page: pageNumber}});
        },


        showFilter() {
            this.showFilterStatus = !this.showFilterStatus
        },

        async getProduct(id) {
            const { data } = await useFetch(`${this.baseUrl}/api/product/${id}`, { initialCache: false})
            data.value.inCart = true
            this.getSubCategoryProducts()

            return data.value
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

                } else {

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
                }

            })
        },

    }
}
</script>



<style scoped>
.btn-dis {
    background: #239b6bb2;
    padding: 4px 13px;
    cursor: pointer;
    margin-top: 10px;
    color: #fff;
    border-radius: 5px;
}
#products .main-card{
        margin-bottom: 24px;
    }
    .side-left {
        padding-left: 45px;
    }
    .main {
        padding-top: 15px;
        background: #F9F9F9;
    }
    .products .row {
        margin: 0 !important;

        padding: 0 !important;
    }
    .side-left {
        padding-bottom: 30px;
        border-right: 1px solid rgb(236, 236, 236);
    }
    .main {
        padding-left: 15px;
        min-height: 900px;
    }
    .filter-title {
        font-size: 22px;
        font-weight: normal;
        padding-top: 15px;
    }
    .catalog-title {
        font-size: 18px !important;
        padding-top: 15px;
        
    }
    .filter-link {
        text-decoration: none;
        color: rgb(68, 68, 68);
        font-weight: normal;
        font-size: 15px;
    }
    .filter-catalog {
        color: rgb(15, 15, 15) !important;
        margin: 0;
        padding: 0;
        list-style: none;
    }
    .filter-catalog-item {
        margin-top: 5px;
    }
    .main-card {
        border: 1px solid #f2f2f2;
        box-shadow: 0px 1px 4px #c5c5c5;
    }
    .card-img {
        padding-top: 12px;
        width: 170px;
        height: 100%;
        max-height: 200px;
        margin-left: auto;
        margin-right: auto;
    }
    .card-title {
        font-size: 18px;
        font-weight: normal;
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


    @media (min-width: 997px) {
        .main-container {
            width: 900px;
        }

        .icon-filter {
            display: none;
        }
        
    }

    @media (max-width: 550px) {
        .main-top-card {
            margin-bottom: 5px !important;
        }
    }
</style>