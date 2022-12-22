import { TwitterApi } from 'twitter-api-v2';


export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(new TwitterApi, {
      property: {
        id: 'GA_MEASUREMENT_ID'
      }
    })
})