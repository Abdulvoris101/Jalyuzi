// https://v3.nuxtjs.org/api/configuration/nuxt.config
import dotenv from 'dotenv';

dotenv.config()

export default defineNuxtConfig({


    publicRuntimeConfig: {
        baseUrl: process.env.baseUrl,
    },
    

    routeRules: {    
        '/': { swr: true },    
        '': { swr: true },    
        '/product/**': { swr: true }, 
        '/category/**': { swr: true }, 
        '/subcategory/**': { swr: true }, 
        '/contact': { static: true },    
        '/about': { static: true }, 
        '/products': { swr: true },   
        '/search': { static: true },   
    },
    
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
    
    
})

