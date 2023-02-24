// https://v3.nuxtjs.org/api/configuration/nuxt.config
import dotenv from 'dotenv'

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
    

    app: {

        
        head: {
            charset: 'utf-16',
            viewport: 'width=device-width, initial-scale=1', 

            title: 'Jalyuzi.uz - Вертикальные тканевые жалюзи в ташкенте жалюзи в г.ташкенте цены и адреса',
            
            meta: [
                { name: 'description', content: 'Jalyuzi.uz - Вертикальные тканевые жалюзи в ташкенте жалюзи в г.ташкенте цены и адреса' },
                { name: "keywords", content: "жалюзи цена ташкентe жалюзи цена ташкентe  Жалюзи в ташкенте купить жалюзи в ташкенте жалюзи в узбекистане  жалюзи Производство и установка жалюзей в Ташкенте фото жалюзи в ташкенте жалюзи на пластиковые окна в ташкенте жалюзи комбо  жалюзи в ташкенте цена жалюзи цена узбекистан жалюзи на окна ташкент купить жалюзи в ташкенте jalyuzi Jaluz Jalyuzilar jalyuzi.uz jalyuzi v tashkente " }
            ],

            link: [
                {
                  rel: 'icon',
                  href: 'http://www.jalyuzi.uz/image/catalog/favicon.png'
                },
            ]
            
        }
    }
    
})

