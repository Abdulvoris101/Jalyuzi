<template> 
    <div id="cart-page">
        <div class="container">
            <div class="product-ordered" v-if="product_ordered">
                <h3 class="order-title">Ваш заказ принят!</h3>   
                <span class="order-content">
                    Если у Вас возникли вопросы, пожалуйста <nuxt-link :to="{name: 'contact'}">свяжитесь с нами</nuxt-link>.

                </span>
                <span class="order-content" style="display: block;">
                    Спасибо за покупки в нашем интернет-магазине!
                </span>
            </div>
            <div class="row" v-else>
                <div class="col-md-8">
                    <article class="card">
                        <div class="card-body">

                            <h4 class="cart-l-title mb-4">
                                В корзине {{ countOfCart }} товара
                            </h4>

                            <div class="card-item mb-3" v-for="product in cart_products" :key="product.id">
                                <div class="row gx-0 ">
                                    
                                <div class="col-md-2 col-2 ">
                                    <img :src="'http://localhost:8000' + product.image" class="img-cart" width="115" alt="">
                                </div>


                                <div class="col-md-3 col-3">
                                    <h3 class="cart-product-title"> {{ product.name }} - {{ product.weight }}</h3>
                                       
                                    <div v-if="caniEdit(product.id)">
                                        <h4 class="cart-product-comp" >Размеры: {{ product.current_width }} x {{ product.current_height }} <b-icon-pencil @click="editSquare(product.id)" class="pencil-icon pb-1" style="font-size: 18px; cursor: pointer" ></b-icon-pencil></h4> 
                                    </div>

                                    <div v-else>
                                        <h4 class="cart-product-comp">Размеры:  <b-icon-check @click="submitEdit(product.id)" class="check-icon pb-1" style="font-size: 24px; cursor:pointer" ></b-icon-check></h4> 

                                        <div class="d-flex">
                                            <input type="number" style="width: 45%" placeholder="W" class="me-2 form-control " v-model="editWidth" >
                                            <span class="pt-1 pe-2">x</span>
                                            <input type="number" style="width: 45%" placeholder="H" class="form-control" v-model="editHeight">
                                        </div>
                                    </div>


                                </div>
                                <div class="col-md-3 col-3 ">
                                    <div class="input-group mb-3">
                                        <button class="input-group-text btn btn-light toggle-btn" @click="decreaseCount(product.id)" id="basic-addon1"><b-icon-dash class="dash-icon"></b-icon-dash></button>
                                        <input type="text" class="form-control inp-count" :value="product.current_count" aria-label="Username" aria-describedby="basic-addon1" readonly>
                                        <button class="input-group-text btn btn-light toggle-btn" @click="increaseCount(product.id)" id="basic-addon1"><b-icon-plus class="plus-icon"></b-icon-plus></button>
                                    </div>
                                </div>
                                <div class="col-md-3 col-2 ps-3">
                                    <h4 class="cart-item-price">{{ product.current_price }} сум</h4>
                                </div>
                                <div class="col-md-1 col-1">
                                    <button class="btn x-icon-btn pb-2" @click="deleteItem(product.id)"><b-icon-x class="x-icon" style="font-size: 20px"></b-icon-x></button>
                                </div>

                                </div>
                                <hr>

                            </div>
                            
                        </div>

                    </article>
                   
                </div>
                
                <div class="col-md-4">
                    <div class="card card-r">
                        <div class="card-body">
                            <h4 class="product-price-title">Итого: {{ allOverPrice }} сум
                            </h4>
                            <hr>
                            <ul class="product-dt">
                                <li class="product-dt-item"><span>Стоимость:</span>  {{ allOverPrice }} сум
                                </li>
                                <li class="product-dt-item"><span>Способ оплаты:</span>  Наличные
                                </li>
                                <li class="product-dt-item"><span>Тип заказа:</span>  Продукт
                                </li>
                                
                            </ul>

                            <div  v-if="isLogined">
                                <button class="btn btn-success w-100 mt-3" v-if="(addresses)" @click="buyProducts">Оформить Заказ</button>
                                <div v-else>
                                    <button class="btn btn-success w-100 mt-3" disabled>Оформить Заказ</button>
                                    <span class="error-authenticate text-danger">*Чтобы оформить заказ добавьте адреса</span>
                                </div>
                            </div>
                            <div v-else>
                                <button class="btn btn-success w-100 mt-3" disabled>Оформить Заказ</button>

                                <span class="text-danger">*Чтобы оформить заказ входите в систему</span>
                            </div>

                        </div>
                    </div>
                    <article class="card mt-3" id="address">
                        <div class="card-body">
                            <div class="top-address">
                                <h4 class="cart-a-title pt-1">
                                    Адресы

                                </h4>
                                <div v-if="(addresses == false)">
                                    <button v-if="(addAdress == false)" class="btn btn-outline-danger" @click="(addAdress = !addAdress)">Добавить аддрес + </button>
                                    <button v-else class="btn btn-outline-success" @click="fetchAddress()">Сохранить</button>
                                </div>

                            </div>
                            
                            <div class="body-address mt-3" v-if="addAdress">
                                <div class="form-group">
                                    <input type="text" class="form-control" placeholder="Город" required v-model="city">
                                    <input type="text" class="form-control" placeholder="Район" required v-model="state">
                                </div>
                                <input type="text" class="form-control mt-3" placeholder="Улица и Махалла" v-model="fulladdress" required>
                                
                            </div>
                            <div v-if="(addresses)">
                                <table class="table">
                                    <thead>
                                        <tr>
                                          <th scope="col">#</th>
                                          <th scope="col">City</th>
                                          <th scope="col">State</th>
                                        </tr>
                                      </thead>
                                      <tbody>

                                        <tr>
                                          <th scope="row">1</th>
                                          <td>{{ addresses[0].city }}</td>
                                          <td>{{ addresses[0].state }}</td>
                                        </tr>
                                        
                                      </tbody>
                                    
                                </table>
                            </div>

                        </div>
                    </article>
                </div>
                
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapState, mapStores } from 'pinia';

import { AccountStore, ProductStore } from '~~/stores';

export default {
    data() {
        return {
            isEdit: false,
            editWidth: '',
            editHeight: '',
            changedId: null,
            allOverPrice: '',
            addAdress: false,
            city: '',
            state: '',
            fulladdress: '',
            product_ordered: false
        }
    },
    mounted() {
        this.getCartProducts()
        this.allPrice()
    },

    computed: {
        ...mapState(ProductStore, ['countOfCart', 'products', 'lastId', 'cart_products'] ),
        ...mapStores(ProductStore),
        ...mapState(AccountStore, ['isLogined', 'addresses'])
        
    },
    methods: {
        ...mapActions(ProductStore, ['getCartProducts', 'inTheCart', 'setCartItem', 'inCategoryCart']),

        buyProducts() {

            let data = []

            if (this.cart_products.length > 1) {

                for (let i = 0; i < this.cart_products.length; i++) {
                    let product = this.cart_products[i]
                    let size = `${product.current_width}x${product.current_height}`

                    data.push({
                        'product': product.id,
                        'product_price': parseInt(product.price_sum),
                        'overall_price': product.current_price,
                        'size': size,
                        'status': 'pending',
                        'address': this.addresses[0].id,
                        'amount': product.current_count
                    })

                }

                this.createOrder(JSON.stringify(data))

            } else if (this.cart_products.length == 1) {
                let product = this.cart_products[0]
                let size = `${product.current_width}x${product.current_height}`

                data = [{
                    'product': product.id,
                    'product_price': product.price_sum,
                    'overall_price': product.current_price,
                    'size': size,
                    'status': 'pending',
                    'address': this.addresses[0].id,
                    'amount': product.current_count
                }]
                
                this.createOrder(JSON.stringify(data))

            } 

        },
        createOrder(data) {

            let userToken = useCookie('user_token')
            let url = 'http://localhost:8000/api/orders/'
            let csrfToken = useCookie('csrftoken')

            this.inTheCart()
            this.inCategoryCart()

            let store = ProductStore()
            
            store.inTheCart()
            store.inCategoryCart()

            this.cart_products = []

            store.$patch({'countOfCart': 0, 'cart_products': []})
            

            fetch(url, {
                method: 'POST',
                credentials: 'include',
                
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Token ' + userToken.value,
                    'x-csrftoken': csrfToken.value
                },

                body: data
            })

            .then((resp) => {
                resp.json()

                this.product_ordered = true

                localStorage.removeItem('cart_products')
                localStorage.removeItem('lastID')

                if (JSON.parse(data).length > 1) {
                    for (let i = 0; i < JSON.parse(data).length; i++) {
                        localStorage.removeItem('product' + JSON.parse(data)[i].product)
                    }
                } else if (JSON.parse(data).length == 1) {
                    localStorage.removeItem('product' + JSON.parse(data)[0].product)
                }
                

            })

            .catch((err) => {
                console.log(err);
            })

        },  

        fetchAddress() {
            let body = {
                'city': this.city,
                'state': this.state,
                'address': this.fulladdress
            }
            
            let userToken = useCookie('user_token')
            let url = 'http://localhost:8000/api/orders/address/'
            let csrfToken = useCookie('csrftoken')

            fetch(url, {
                method: 'POST',
                credentials: 'include',
                
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Token ' + userToken.value,
                    'x-csrftoken': csrfToken.value
                },

                body: JSON.stringify(body) 

            })
            .then((resp) => {
                resp.json()
                this.addAdress = false
                this.addresses.push(body)
            })

            .catch((err) => {
                console.log(err);
            })



        },

        allPrice() {
            let overall_price = null

            for (let i = 0; i < this.cart_products.length; i++) {
                overall_price += this.cart_products[i].current_price    
            }
            if (overall_price != null) {
                overall_price = overall_price.toString()
                overall_price =  `${overall_price.slice(-9, -6)} ${overall_price.slice(-6, -3)} ${overall_price.slice(-3)}`


                this.allOverPrice = overall_price
            }
            

        },

        editSquare(id) {
            this.isEdit = true
            this.changedId = id
            this.caniEdit(id)
            this.allPrice()
        },

        increaseCount(id) {
            let product = this.cart_products.find(obj => obj.id == id)
            let product_s = JSON.parse(localStorage.getItem('product' + product.id))

            if (product.current_count <= product.count) {
                product.current_count =  product.current_count + 1
                product.current_price = parseInt(product_s.overall_price) * product.current_count
                
                localStorage.setItem('cart_products', JSON.stringify(this.cart_products))
                // localStorage.setItem('product' + id, JSON.stringify(product))

                this.allPrice()

            }
            
        },


        deleteItem(id) {
            localStorage.removeItem('product' + id)

            for( let i = 0; i < this.cart_products.length; i++){ 

                if (this.cart_products[i].id == id) { 
                    this.cart_products.splice(i, 1); 
                    localStorage.setItem('cart_products', JSON.stringify(this.cart_products))
                    this.allOverPrice = 0
                    this.allPrice()
                    this.setCartItem()
                    this.inTheCart()
                    
                }
            }


        },


        decreaseCount(id) {
            let product = this.cart_products.find(obj => obj.id == id)
            let product_s = JSON.parse(localStorage.getItem('product' + product.id))

            if (product.current_count > 1) {

            
                product.current_price = product.current_price - parseInt(product_s.overall_price)

                product.current_count =  product.current_count - 1


                // localStorage.setItem('product' + id, JSON.stringify(product))
                localStorage.setItem('cart_products', JSON.stringify(this.cart_products))

                this.allPrice() 


            } else {
                product.current_count = 1
            }
        },

        submitEdit(id) {
            let product = this.cart_products.find(obj => obj.id == id)
            let product_cart = JSON.parse(localStorage.getItem('product' + id))


            if (this.editWidth > 0 && this.editHeight > 0) {


                let overall_price = parseInt(product.price_sum) * (this.editWidth* this.editHeight)

                overall_price = overall_price * product.current_count


                let price = overall_price;

                product.current_width = this.editWidth
                product.current_height = this.editHeight



                product.current_price = price

                product_cart.width = this.editWidth
                product_cart.height = this.editHeight
                product_cart.overall_price = parseInt(overall_price)


                

                localStorage.setItem('product' + id, JSON.stringify(product_cart))
                localStorage.setItem('cart_products', JSON.stringify(this.cart_products))

                this.allPrice()


                this.isEdit = false 
                

                this.caniEdit(id)
                
            }
        },

        caniEdit(product) {
            if (this.changedId == product && this.isEdit == true) {
                return false
            }

            return true

        }
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');


@media (max-width: 992px) {
    .img-cart {
        width: 50px !important;
    }
    .cart-product-title {
        font-size: 16px !important;
    }
    .cart-product-comp {
        font-size: 15px !important;
    }
    .dash-icon {
        font-size: 10px !important;
    }
    .plus-icon {
        font-size: 10px !important;
    }
    .cart-item-price {
        font-size: 17px !important;
    }
    .card-r {
        margin-top: 10px;
    }
}
.order-content {
    font-size: 17px;
    font-weight: light;
}
.order-title {
    font-size: 27px;

}
.form-group {
    display: flex;
    
}
.form-group input {
    width: 49%;
}
.form-group input:last-of-type {
    margin-left: 15px;

}
.top-address {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
#cart-page {
    padding-top: 40px;
    padding-bottom: 40px;
}
.cart-l-title {
    padding-left: 5px;
    padding-top: 5px;
    font-weight: 500;
    font-family: 'Poppins', sans-serif;
    font-size: 27px;
}
.cart-a-title {
    font-weight: 500;
    font-family: 'Poppins', sans-serif;
    font-size: 27px;
}

.product-price-title {
    font-size: 24px;
    font-weight: normal;
    padding-top: 3px;
}
.inp-count {
    box-shadow: none;
}

.product-title {
    font-weight: 600;
}
.card-r {
    padding: 10px 5px;
}
.product-charachter {
    font-weight: normal;
    font-size: 17px;
    padding-top: 10px;
    padding-bottom: 10px;
}
.input-group-text {
    z-index: 0 !important;
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
    font-weight: 500;
}

.product-dt-item {
    margin-top: 10px;
    align-items: center;
}
.product-dt-item input {
    margin-right: 3px;
}
.btn-success {
    background: #17ce76;
    border: 1px solid #12bf6c;
    transition: .1s all linear;
    margin-bottom: 4px;
}   

.btn-success:hover {
    background: #fff;
    border: 1px solid #12bf6c;

    color: #333;
}

.cart-product-title {
    font-size: 22px;
    font-weight: 400;
}
.x-icon-btn {
    border:  none;
}
.cart-product-comp {
    font-weight: normal;
    padding-top: 5px;
    font-size: 16px;
}

.toggle-btn {
    background: #f0f0f0;
    border: 1px solid rgb(241, 241, 241)
}
.cart-item-price {
    font-weight: normal;
    font-size: 20px;
    padding-top: 6px;
}
</style>