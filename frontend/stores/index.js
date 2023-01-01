import { defineStore } from 'pinia'


export const ProductStore = defineStore('product', {
    state: () => {
        return {
            products: [],
            category_products: [],
            is_product: false,
            is_data: false,
            subcategories: [],
            current_category: '',
            current_subcategory: '',
            countOfCart: 0,
            lastId: '',
            cart_products: []
        }
    },
    actions: {
        async fetchProducts() {
            const { data, pending, error } = await useAsyncData('products',  () => $fetch('http://localhost:8000/api/products/'), { initialCache : false })

            if (data.value.length >= 1) {
                this.products = data.value
                for (let i = 0; i < this.products.length; i++) {
                    let overall_price = this.products[i].price.toString()
                    overall_price =  `${overall_price.slice(-9, -6)} ${overall_price.slice(-6, -3)} ${overall_price.slice(-3)}`
                    this.products[i].b_price = overall_price
                }
                
                this.is_product = true
            } else {
                this.products = []
                this.is_product = false
            }
        },

        setCategoryId(id, type) {
            if (type == 'category') {
                this.current_category = id
            } else if (type == 'subcategory') {
                this.current_subcategory = id
            }
            
        },

        async getCategoryProducts(category_id) {
            const { data, pending, error } = await useAsyncData('cat', () => $fetch(`http://localhost:8000/api/products/?category=${category_id}`), { initialCache : false })
            

            if (data.value.length >= 1) {
                this.category_products = data.value
                this.inCategoryCart()

                this.is_data = true
            } else {
                this.category_products = []
                this.is_data = false
            }
        },

        async getSubCategoryProducts(id) {
            const { data, pending, error } = await useFetch(`http://localhost:8000/api/products/?subcategory=${id}`, { initialCache : false })

            if (data.value.length >= 1) {
                this.category_products = data.value
                this.inCategoryCart()


                this.is_data = true
            } else {
                this.category_products = []
                this.is_data = false
            }
            
        },

        changeProducts(data) {
            
            if (data.value.length >= 1) {
                this.products = data.value
                this.category_products = data.value
                this.inCategoryCart()
                this.inTheCart()
                this.is_data = true
                this.is_data = true

            } else {
                this.products = ''
                this.category_products = ''

                this.is_data = false
                this.is_data = false
            }
        },

        addToCart(obj, id) {
            let product_name = 'product' + id
            localStorage.setItem(product_name, obj)
            let lastID = localStorage.getItem('lastID')

            if (lastID == null) {
                localStorage.setItem('lastID', id)
            } else {
                
                if (parseInt(lastID) < id) {
                    localStorage.setItem('lastID', id)
                }
            }

            this.inTheCart()
            this.inCategoryCart()
            
        },

        inCategoryCart() {

            for (let i = 0; i < this.category_products.length; i++) {
                let obj_s = window.localStorage.getItem('product' + this.category_products[i].id)
                let obj = JSON.parse(obj_s)


                if (obj == null) {
                    this.category_products[i].inCart = false
                } else {
                    this.category_products[i].inCart = true
                }

            }
        },

        inTheCart() {

            for (let i = 0; i < this.products.length; i++) {
                let obj_s = window.localStorage.getItem('product' + this.products[i].id)
                let obj = JSON.parse(obj_s)

                if (obj == null) {
                    this.products[i].inCart = false
                } else {
                    this.products[i].inCart = true
                }

            }
        },

        increaseCart() {
            this.countOfCart = this.countOfCart + 1
        },

        setCartItem() {
            if (localStorage.length > 1) {
                this.countOfCart = parseInt(localStorage.length) - 2
            } else {
                this.countOfCart = 0
            }
        },
        

        getCartProducts() {

            if (localStorage.getItem('lastID')) {
                let len = parseInt(localStorage.getItem('lastID'))
                let cart_products = localStorage.getItem('cart_products')

                for (let i = 1; i <= len; i++) {
                    let item = window.localStorage.getItem('product' + i)

                    if (item != null) {
                        let obj = this.products.find(obj => obj.id == JSON.parse(item).id)
                        obj.current_width = JSON.parse(item).width
                        obj.current_height = JSON.parse(item).height
                        obj.current_price = JSON.parse(item).overall_price
                        obj.current_count = 1
                        

                        if (cart_products != null) {
                            this.cart_products = JSON.parse(localStorage.getItem('cart_products'))
                            let finded = this.cart_products.findIndex(el => el.id  == obj.id)
                            
                            if (finded == -1) {
                                this.cart_products.push(obj)
                                localStorage.setItem('cart_products', JSON.stringify(this.cart_products))
                            }
                        }
                        else {
                            this.cart_products.push(obj)
                            localStorage.setItem('cart_products', JSON.stringify(this.cart_products))
                        }

                    }
            }
            }
            
        },
        
    },
    getters: {
        getProducts: (state) => state.products,
        getData: (state) => state.category_products,
        getCategoryId: (state) => state.current_category,
        getSubCategoryId: (state) => state.current_subcategory,
    }
})

export const FilterStore = defineStore('filter', {
    state: () => {
        return {
            colors: [],
            catalogs: [],
            properties: [],
            categories: [],
            my_catalog: [],
            my_colors: [],
            my_category: [],
            subcategories: [],
            my_subcategory: [],
            properties: [],
            my_property: []
        }
    },
    actions: {
        async fetchColors() {
            const { data } = await useAsyncData('colors', () => $fetch('http://localhost:8000/api/filter/colors/'))
            this.colors = data.value
        },

        async fetchCatalogs(type) {
            const { data } = await useAsyncData('catalog', () => $fetch(`http://localhost:8000/api/filter/catalog/?${type}=true`))
            this.catalogs = data.value
            
        },
        async fetchSubCatalogs() {
            const { data } = await useAsyncData('catalog', () => $fetch(`http://localhost:8000/api/filter/catalog/?subcategory=true`))
            this.catalogs = data.value
        },

        async fetchProperties() {
            const { data } = await useAsyncData('property', () => $fetch('http://localhost:8000/api/filter/property/'))
            this.properties = data.value
        },
        async fetchCategories() {
            const { data, pending, error } = await useAsyncData('cat', () => $fetch(`http://localhost:8000/api/categories/`), { initialCache : false })
            this.categories = data.value
        },
        async fetchSubCategories() {
            const { data, pending, error } = await useAsyncData('sub', () => $fetch('http://localhost:8000/api/subcategory/'), { initialCache : false })
            this.subcategories = data.value

        },

        getDetailCatalog(id) {
            let catalogs = this.catalogs
            let catalog = catalogs.find(el => el.id == id)
            this.my_catalog = catalog
        },
        getDetailProperty(id) {
            let properties = this.properties
            let property = properties.find(el => el.id == id)
            this.my_property = property
        },
        getDetailColor(id) {
            let colors = this.colors
            let color = colors.find(el => el.id == id)
            this.my_colors = color
        },

        getDetailCategory(id) {
            let categories = this.categories
            let category = categories.find(el => el.id == id)
            this.my_category = category
        },

        getDetailSubCategory(id) {
            let subcategories = this.subcategories
            let subcategory = subcategories.find(el => el.id == id)

            this.my_category = subcategory
        },

    },

    getters: {
        getCatalogs: (state) => state.catalogs,
        getColors: (state) => state.colors,
        getProperties: (state) => state.properties,
        getMyCatalog: (state) => state.my_catalog,
        getMyColors: (state) => state.my_colors,
        getMyCategory: (state) => state.my_category,
        getMyProperty: (state) => state.my_property
    }
})

export const AccountStore = defineStore('modal', {
    state: () => {
        return { 
            regStatus: false,
            loginStatus: false,
            verifStatus: false,
            phone_number: '',
            csrfToken: '',
            isLogined: false,
            firstConfirm: false,
            password: '',
            firstName: '',
            lastName: '',
            userToken: '',
            addresses: []
        }
    },
    actions: {
        regToggleModal() {
            this.regStatus = !this.regStatus
        },
        loginToggleModal() {
            this.loginStatus = !this.loginStatus
        },
        verifToggleModal() {
            this.verifStatus = !this.verifStatus
        },

        async getMe() {
            this.userToken = useCookie('user_token').value
            let csrfToken = useCookie('csrftoken').value



            let {data, error} = await useFetch('http://localhost:8000/api/users/me/', {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Token ' + this.userToken,
                    'x-csrftoken': csrfToken
                },
                initialCache: false,
            })


            if (data.value == null) {
                console.log('You did\'nt login');
                this.isLogined = false

            } else {
                this.firstConfirm = data.value.first_confirm
                
                this.isLogined = true   

                if (data.value.first_name == '') {
                    this.firstName = data.value.username
                } else {
                    this.phone_number = data.value.username

                    this.firstName = data.value.first_name
                }

                this.lastName = data.value.last_name
                this.getAdresses()
            }


        },



        setCsrfToken() {
            let cookie = useCookie('csrftoken')
            this.csrfToken = cookie
        },

        
        async getAdresses() {
            let user_token = useCookie('user_token').value
            let csrfToken = useCookie('csrftoken').value

            const { data, error } = await useFetch('http://localhost:8000/api/orders/address/', {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Token ' + user_token,
                    'x-csrftoken': csrfToken
                }
            })
            

            if (this.addresses != null ) {

                if (this.addresses.length < 1) {
                    this.addresses = false
                } else {

                    this.addresses = data.value
                }

            } else {
                this.addresses = false
            }

        },

    },
    
    getters: {
        getRegStatus: (state) => state.regStatus,
        getLoginStatus: (state) => state.loginStatus,
        getPhoneNumber: (state) => state.phone_number,
        getVerifStatus: (state) => state.verifStatus,
        getCsrfToken: (state) => state.csrfToken,
        getFirstName: (state) => state.firstName
    },


})
