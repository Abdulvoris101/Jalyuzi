<template>
    <div id="detail-product">
        <div class="container">

            <div class="row desk">
                <div class="col-md-3 col-5">
                    <div class="card-left card">
                        <div class="card-img">
                            <img :src="product.image" class=" img-product img-fluid"  alt="">
                        </div>
                    </div>
                </div>
                <div class="col-md-5 col-7">
                    <div class="product-detail">
                        <h4 class="product-title">{{ product.name }} {{ getMyCatalog.name }} {{ getMyColors.name }}</h4>


                        <table class="table table-hover table-bordered mt-3">
                            
                            <tbody>
                              <tr>
                                <td>Категория</td>
                                <td>{{ getMyCategory.name }}</td>
                              </tr>
                              <tr>
                                <td>Каталог</td>
                                <td>{{ getMyCatalog.name }}</td>
                              </tr>
                              <tr>
                                <td>Цвет</td>
                                <td>{{ getMyColors.name }}</td>
                              </tr>
                              <tr>
                                <td>Ширина</td>
                                <td>{{ product.weight }}</td>
                              </tr>
                              <tr>
                                <td>Затемнение</td>
                                <td>{{ product.blackout }}</td>
                              </tr>
                              <tr>
                                <td>Свойство</td>
                                <td>{{ getMyProperty.name }}</td>
                              </tr>
                              
                            </tbody>
                          </table>

                    </div>
                </div>
                <div class="col-md-4 col-12">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="product-price-title">Цена {{ showPrice }} сум за 1m <sup>2</sup> </h4>
                            <ul class="product-dt">
                                <li class="product-dt-item"><span>Ширина *см</span> <input type="text"  v-model="width" @change="changeSquary" class="form-control form-control-sm">
                                </li>
                                <li class="product-dt-item"><span>Высота *см</span> <input type="text" v-model="height" @change="changeSquary" class="form-control form-control-sm">
                                </li>
                                <li class="product-dt-item"><span>Площадь: </span> <span style="font-size: 17px;">{{ square }}  кв.м.</span> 
                                </li>
                                
                            </ul>
                            <div class="d-flex mt-3"><span style="font-size: 17px;">Общ.цена: </span><h4 class="product-price ps-3"> {{ overall_price }} сум </h4></div>

                            <div>
                                <button v-if="inCart"  class="btn btn-success  w-100 mt-3" disabled> Продукт в корзине </button>

                                <button v-else  class="btn btn-success w-100 mt-3" @click="toBuy(product)">  <b-icon-cart3 class="cart3-icon pb-1" style="font-size: 20px"> </b-icon-cart3>   Добавить на корзину</button>

                            </div>
                        
                        </div>
                    </div>
                </div>
            </div>

            <div class="mb-detail row">

                <div class="col-md-3 col-5">
                    <div class="card-left card">
                        <div class="card-img">
                            <img :src="product.image" class=" img-product img-fluid"  alt="">
                        </div>
                        <h4 class="product-title pt-4 ps-2" style="font-size: 18px;">{{ product.name }} {{ getMyCatalog.name }} {{ getMyColors.name }}</h4>

                    </div>
                </div>

                <div class="col-md-4 col-7">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="product-price-title pt-0 pb-0">Цена {{ showPrice }} сум за 1m <sup>2</sup> </h4>
                            <ul class="product-dt">
                                <li class="product-dt-item"><span>Ширина</span> <input type="text"  v-model="width" @change="changeSquary" class="form-control form-control-sm">
                                </li>
                                <li class="product-dt-item"><span>Высота</span> <input type="text" v-model="height" @change="changeSquary" class="form-control form-control-sm">
                                </li>
                                <li class="product-dt-item"><span>Площадь: </span> <span style="font-size: 17px;">{{ square }}  кв.м.</span> 
                                </li>
                                
                            </ul>
                            <div class="d-flex mt-3"><span style="font-size: 17px;">Общ.цена: </span><h4 class="product-price ps-3"> {{ overall_price }} сум </h4></div>

                            <div>
                                <button v-if="inCart"  class="btn btn-success  w-100 mt-3" disabled> Продукт в корзине </button>

                                <button v-else  class="btn btn-success w-100 mt-3" @click="toBuy(product)">  <b-icon-cart3 class="cart3-icon pb-1" style="font-size: 20px"> </b-icon-cart3>   Добавить на корзину</button>

                            </div>
                        
                        </div>
                    </div>
                </div>

                <div class="col-md-5 col-12">
                    <div class="product-detail">


                        <table class="table table-hover table-bordered mt-3">
                            
                            <tbody>
                              <tr>
                                <td>Категория</td>
                                <td>{{ getMyCategory.name }}</td>
                              </tr>
                              <tr>
                                <td>Каталог</td>
                                <td>{{ getMyCatalog.name }}</td>
                              </tr>
                              <tr>
                                <td>Цвет</td>
                                <td>{{ getMyColors.name }}</td>
                              </tr>
                              <tr>
                                <td>Ширина</td>
                                <td>{{ product.weight }}</td>
                              </tr>
                              <tr>
                                <td>Затемнение</td>
                                <td>{{ product.blackout }}</td>
                              </tr>
                              <tr>
                                <td>Свойство</td>
                                <td>{{ getMyProperty.name }}</td>
                              </tr>
                              
                            </tbody>
                          </table>

                    </div>
                </div>
                
                
            </div>
            <div class="recommend-products">
                <h4 class="recommend-title">Рекомендуемые</h4>
                <PopProducts :category_id="product.category" />
            </div>
            
        </div>
    </div>
</template>

<script>
import { mapActions, mapState, mapStores } from 'pinia'
import { FilterStore, ProductStore } from '~~/stores'


export default {
    data() {
        return {
            product: [],
            square: '1,5',
            height: '150',
            width: '100',
            overall_price: '',
            endSquare: '',
            showPrice: '',
            inCart: false,
        }
    },
    computed: {
        ...mapState(FilterStore, ['getMyCatalog', 'getMyColors', 'getMyCategory', 'getMyProperty']),
        ...mapStores(FilterStore),

        getId() {
            const route = useRoute()
            return route.params.id
        },
        
        
    },
    methods: {
        ...mapActions(FilterStore, ['getDetailCatalog', 'getDetailColor', 'getDetailCategory', 'getDetailSubCategory', 'getDetailProperty']),
        ...mapActions(ProductStore, ['setCategoryId', 'addToCart', 'increaseCart']),

        async getProduct() {
            const { data } = await useFetch(`http://localhost:8000/api/product/${this.getId}`, { initialCache: false})
            this.product = data.value
            this.inTheCart()
            

            let pri = this.product.price.toString()
            this.showPrice = `${pri.slice(0, -3)},${pri.slice(3)}`

            this.overall_price = this.showPrice
            this.endSquare = `${this.width / 100}x${this.height / 100}`
            

            if (this.product.category != null) {
                this.getDetailCategory(this.product.category)
                this.setCategoryId(this.product.category, 'category')

            } else if (this.product.subcategory) {
                this.getDetailSubCategory(this.product.subcategory)
                this.setCategoryId(this.product.subcategory, 'subcategory')

            }
            

            if (this.product.color.length == 1) {
                this.getDetailColor(this.product.color)

            } else if (this.product.color.length > 1) {
                this.getDetailColor(this.product.color[0])
            }
            this.getDetailCatalog(this.product.catalog)
            this.getDetailProperty(this.product.property)

            
        },
        changeSquary() {
            let width = parseInt(this.width)
            let height = parseInt(this.height)
            let price = parseInt(this.product.price)

            if (width < 100) {
                this.width = '100'
            }
            if (height < 100) {
                this.height = '100'
            }

            this.square = (this.width / 100) * (this.height / 100)
            this.overall_price = price * this.square

            this.endSquare = `${this.width / 100}x${this.height / 100}`
            
        },

        toBuy(obj) {
            let new_p = {
                'id': obj.id,
                'width': this.width / 100,
                'height': this.height / 100,
                'overall_price': this.overall_price
            }
            
            let json_obj = JSON.stringify(new_p)

            this.inCart = true
            this.increaseCart()
            this.addToCart(json_obj, obj.id)
        },

        inTheCart() {
            let name = 'product' + this.product.id
            let obj = window.localStorage.getItem(name)


            if (obj) {
                this.inCart = true
            } else {
                this.inCart = false
            }

        }

    },
    created() {
        this.getProduct()
        
    },
}
</script>

<style scoped>

.mb-detail {
    display: none;
}

@media (max-width: 762px) {
    .mb-detail {
        display: flex;
    }
    .desk {
        display: none;
    }

}
#detail-product {
    padding-top: 30px;
    padding-bottom: 30px;
}
.product-price-title {
    font-size: 20px;
    font-weight: normal;
    padding-top: 9px;
    padding-bottom: 9px;
}
.img-product {
    width: 100%;
}
.product-title {
    font-weight: 600;
}
.card-left {
    padding: 25px 5px;
}
.product-charachter {
    font-weight: normal;
    font-size: 17px;
    padding-top: 10px;
    padding-bottom: 10px;
}
.product-price {
    font-weight: 500;
    font-size: 17px;
    padding-top: 3px;
}
.product-dt {
    padding: 0;
    margin: 0;
    list-style: none;
}
.product-dt-item {
    display: flex;
    margin-top: 9px;
    padding-top: 6px;
}
.product-dt-item span {
    width: 50%;
    padding-bottom: 5px;
}
.product-dt-item:last-of-type span {
    width: 32% !important;
}
.product-dt-item {
    margin-top: 10px;
    align-items: center;
}
.product-dt-item input {
    margin-right: 3px;
}
.btn-success {
    background: #12bf6c;
    border: 1px solid #12bf6c;
    transition: .1s all linear;
}
.btn-success:hover {
    background: #fff;
    border: 1px solid rgb(95, 95, 95);
    color: #333;
}
.recommend-title {
    padding-top: 25px;
}
</style>