<template>
    <div id="app">
        
        <TheHeader />
        

        

        <main>
            <slot />
            <Register />
            <Login />
            <Verification />
            <ResetPassword />
        </main>

        <Footer />
    </div>
</template>

<script>
import { AccountStore, ProductStore, FilterStore } from '../stores/index';

export default {

    

    created() {
        let store = AccountStore()
        let prStore = ProductStore()
        let flStore = FilterStore()
        
        
        prStore.inTheCart()
        flStore.fetchCatalogs('catalog')
        flStore.fetchColors()
        prStore.fetchProducts(1)
        
        flStore.fetchProperties()
        flStore.fetchCategories()
        flStore.fetchSubCategories()
        prStore.getAllProducts()
        
        store.getMe()
        store.setCsrfToken()
        store.getAdresses()

    },
   

}
</script>