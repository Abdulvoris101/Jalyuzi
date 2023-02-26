<template>
    <div id="app">
        <Head>
            <Script async src="https://www.googletagmanager.com/gtag/js?id=G-YJ22K55C06" ></Script>
            <Script children='window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag("js", new Date());gtag("config", "G-YJ22K55C06");'></Script>

            <Script children='
                (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
            
                m[i].l=1*new Date();
                for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
                k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
                (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

                ym(92601372, "init", {
                        clickmap:true,
                        trackLinks:true,
                        accurateTrackBounce:true,
                        webvisor:true,
                        ecommerce:"dataLayer"
                });
        '></Script>
               
        </Head>

        <NoScript><div><img src="https://mc.yandex.ru/watch/92601372" style="position:absolute; left:-9999px;" alt="" /></div></NoScript>

        
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