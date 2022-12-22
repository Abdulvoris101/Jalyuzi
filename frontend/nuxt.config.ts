// https://v3.nuxtjs.org/api/configuration/nuxt.config
import * as path from 'path';
import * as fs from 'fs';




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
            title: 'My App',
            meta: [
            // <meta name="description" content="My amazing site">
                { name: 'description', content: 'My amazing site.' },
                
            ],
            

            link: [
                {
                  rel: 'stylesheet',
                  href: 'assets/css/style.css'
                },
            ],
        }
    }
    
})

