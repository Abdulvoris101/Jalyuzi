import VueSplide from '@splidejs/vue-splide';



export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueSplide, {
    property: {
      id: 'GA_MEASUREMENT_ID'
    }
  })
})