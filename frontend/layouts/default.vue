<template>
    <div id="app">
        
        <TheHeader />
        

        

        <main>
            <slot />
            <Register />
            <Login />
            <Verification />
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
        
        prStore.fetchProducts()
        prStore.inTheCart()
        flStore.fetchCatalogs('catalog')
        flStore.fetchColors()
        flStore.fetchProperties()
        flStore.fetchCategories()
        flStore.fetchSubCategories()

        store.getMe()
        store.setCsrfToken()
        store.getAdresses()

    },

}
</script>