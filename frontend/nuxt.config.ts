// https://v3.nuxtjs.org/api/configuration/nuxt.config


export default defineNuxtConfig({
    
    
    modules: [ [
        '@pinia/nuxt',
        {
            autoImports: [
                // automatically imports `usePinia()`
                'defineStore',
                // automatically imports `usePinia()` as `usePiniaStore()`
                ['defineStore', 'definePiniaStore'],
            ],
        },
    ], 
    ],

    css: ["bootstrap/dist/css/bootstrap.min.css"],
    

    app: {

        
        head: {
            charset: 'utf-16',
            viewport: 'width=500, initial-scale=1', 
            title: 'Jalyuzi',
            meta: [
                { name: 'description', content: 'Jalyuzi' },
            ],
            
        }
    }
    
})

