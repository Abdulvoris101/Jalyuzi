<template>
    <div id="pop-products">
        <Splide :options="{ gap: 5, autoplay: true, perPage : 4, pagination: false, autoheight: true  }"  v-if="is_product" aria-label="My Favorite Images">
            <SplideSlide v-for="product in getData" :key="product.id">
                <div class="card main-card">
                    <NuxtLink :to="{ name: 'product-id', params: { id: product.id } }" class="me-auto ms-auto"><img :src="baseUrl + product.image" style="margin-top: 20px; padding: 0;" class="img-fluid" :alt="product.name" ></NuxtLink>
                    <div class="card-body">
                        <NuxtLink :to="{ name: 'product-id', params: { id: product.id } }" class="nav-link">
                            <h4 class="card-title">{{ product.name }} - {{ product.weight }}</h4>
                            <span class="card-price">{{ product.price }} сум</span>
                        </NuxtLink>
                        <div>
                            <nuxt-link :to="{ name: 'product-id', params: { id: product.id } }" class="btn btn-success mt-2 btn-sm"><span>Перейти</span></nuxt-link>
                        </div>
                    </div>
                </div>
            </SplideSlide>

        </Splide>
    </div>
</template>

<script>
import '@splidejs/vue-splide/css';
import { mapActions, mapState, mapStores } from 'pinia'
import { ProductStore, FilterStore } from '~~/stores'

export default {
    props: {
        category_id: {
            type: Number,
            required: true
        }
    },
    data() {
        return {
            not_product: 'Нету продуктов ):',
        }
    },
    computed: {
        ...mapStores(ProductStore, FilterStore),
        ...mapState(ProductStore, ['is_product', 'getData', 'baseUrl']),
        ...mapState(FilterStore, ['getColors', 'getCatalogs', 'getProperties']),
    },
}

</script>

<style scoped>
    #pop-products {
        padding-top: 20px;
    }
    .card-img {
        padding-top: 12px;
        width: 170px;
        margin-left: auto;
        margin-right: auto;
    }

    .card-title {
        font-size: 20px;
        padding-top: 10px;
        font-weight: normal;
    }
</style>