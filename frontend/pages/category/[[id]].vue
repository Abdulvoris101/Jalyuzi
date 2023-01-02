<template>
    <div id="products">
        <div class="row gx-0">
            <div class="col-lg-3">
                <ProductFilter :showFilter="showFilterStatus" @closeFilter="closeFilter" />
            </div>
            <div class="col-lg-9">
                <section class="main">
                    <div class="main-container">

                        <div class="main-top-card card">

                            <div class="card-body d-flex " style="justify-content:space-between">
                                <div style="width:100%">
                                    <h4 class="card-title">Категории - {{ category_name }}</h4>
    
                                </div>
                                <div class="d-flex" style="justify-content: flex-end">
                                    <select name="" id="" class="form-select">
                                        <option value="">Сортировка по новизне</option>
                                        <option value="">Сортировка по цене: по возрастанию</option>
                                        <option value="">Сортировка по цене: по возрастанию</option>
                                    </select>
                                    <div class="ms-4 me-2 mt-1 icon-filter">
                                        <a @click="showFilter"><b-icon-funnel class=""></b-icon-funnel></a>
    
                                    </div>
                                </div>
    
                            </div>
                        </div>

                        

                        <div v-if="subcategory_status">
                            <div class="row gx-3">
                                <div class="col-md-3 col-6 col-sm-4"  v-for="subcategory in subcategories" :key="subcategory.id">
                                    <div class="card main-card">
                                        <NuxtLink :to='"subcategory/" + subcategory.id' class="me-auto ms-auto nav-link">
                                            <img :src="subcategory.image" class="card-img" alt="...">
                                            
                                        </NuxtLink>
                                        <div class="card-body">
                                            <NuxtLink :to='"subcategory/" + subcategory.id' class="me-auto ms-auto nav-link">
                                                <h4 class="card-title">{{ subcategory.name }}</h4>
                                            
                                                <div>
                                                    <button class="btn btn-success w-100 btn-more"><span>Перейти</span> </button>
                                                </div>
                                            </NuxtLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        <div v-else>
                            <div class="row gx-3" v-if="is_data">
                                <div class="col-md-3 col-6 col-sm-4"  v-for="product in getData" :key="product.id">
                                    <div class="card main-card">
                                        <NuxtLink :to="{ name: 'product-id', params: { id: product.id } }" class="me-auto ms-auto"><img :src="'http://localhost:8000' + product.image" class="card-img" alt="..."></NuxtLink>
                                        <div class="card-body">
                                            <NuxtLink :to="{ name: 'product-id', params: { id: product.id } }" class="nav-link">
                                                <h4 class="card-title">{{ product.name }} - {{ product.weight }}</h4>
                                                <span class="card-price">{{ product.price }} сум</span>
                                            </NuxtLink>
                                            <div>
                                                <div v-if="product.inCart" class="btn-dis" >Продукт в корзине</div>
                                        
                                                <button v-else class="btn btn-success w-100 btn-more" @click="toBuy(product.id)"><span>Покупать</span> <b-icon-basket3 class="basket3-icon pb-1"></b-icon-basket3></button>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
    
                            <div class="row gx-3" v-else>
                                <div class="container">
                                    <h5 style="font-weight: normal"> {{ not_product }}</h5>
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
    data() {
        return {
            category_name: '',
            subcategories: [],
            subcategory_status: false,
            height: '150',
            width: '100',
            overall_price: '',
            showFilterStatus: false,
            not_product: 'Продукты нет ):',
            
        }
    },
    computed: {
        getId() {
            const route = useRoute();
            return route.params.id
        },

        ...mapStores(ProductStore, FilterStore),
        ...mapState(ProductStore, ['getData', 'is_data'])
        
    },

    created() {
        this.getCategoryProducts(this.getId)
        this.getSubcategories()
        this.getCategory()
    },

    methods: {
        ...mapActions(ProductStore, ['getCategoryProducts']),

        closeFilter() {
            this.showFilterStatus = !this.showFilterStatus

        },  


        showFilter() {
            this.showFilterStatus = !this.showFilterStatus
        },



        ...mapActions(ProductStore, ['addToCart', 'increaseCart', 'inCategoryCart']),

        async getProduct(id) {
            const { data } = await useFetch(`http://localhost:8000/api/product/${id}`, { initialCache: false})
            data.value.inCart = true
            
            this.getCategoryProducts(this.getId)


            return data.value
        },
        

        toBuy(id) {
            let product = this.getProduct(id)
            let product_obj;

            product.then((resp) => {
                product_obj = resp

                let price = product_obj.price

                let square = (this.width / 100) * (this.height / 100)

                this.overall_price = price * square

                let new_p = {
                    'id': product_obj.id,
                    'width': this.width / 100,
                    'height': this.height / 100,
                    'overall_price': this.overall_price
                }

                let json_obj = JSON.stringify(new_p)


                this.addToCart(json_obj, product_obj.id)
                this.increaseCart()

            })
        },


        async getSubcategories() {
            const { data } = await useAsyncData('subcategory', () => $fetch('http://localhost:8000/api/subcategory/'))
            this.subcategories = data.value
        },
        
        async getCategory() {
            const { data, error } = await useAsyncData('category', () => $fetch(`http://localhost:8000/api/category/${this.getId}/`, {
                headers: useRequestHeaders(['cookie'])
            }), { initialCache : false })

            this.category_name = data.value.name

            if (data.value.subcategories.length > 1) {
                this.subcategory_status = true
            } else {
                this.subcategory_status = false
            }
        },

    },
    

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
        margin-left: auto;
        margin-right: auto;
    }
    .card-title {
        font-size: 18px;
        font-weight: normal;
    }

    @media (min-width: 997px) {
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