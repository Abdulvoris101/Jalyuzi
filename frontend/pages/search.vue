<template>  
    <div id="search-res">
        <div class="container">
            <section class="search-section">
                <h4 class="search-title">Найдется все </h4>
                <input type="text" @input="queryFilter" v-model="query" placeholder="Поиск" class="form-control mt-3">


                <table class="table mt-3">
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Image</th>
                            <th scope="col">Name</th>
                            <th scope="col">Weight</th>
                            <th scope="col">Price</th>
                            <th>To</th>
                        </tr>
                    </thead>
                    <tbody>
                            <tr v-for="product in searchedProducts" :key="product.id">
                                <th scope="row">{{ product.id }}</th>
                                <td>
                                    <img :src="baseUrl + product.image"  width="50" :alt="product.name">
                                </td>
                                <td>{{  product.model }}</td>
                                <td>{{  product.weight }}</td>
                                <td>{{  product.price }}</td>

                                <td><nuxt-link class="text-dark" :to="{ name: 'product-id', params: { id: product.slug } }">
                                    Перейти
                                    </nuxt-link></td>
                        
                            </tr>
                        
                    </tbody>
                    </table>


            </section>
        </div>
    </div>
</template>

<script>
import { mapState, mapStores } from 'pinia';
import { ProductStore } from '~~/stores';

export default {
    data() {
        return {
            searchedProducts: [],
            query: ''
        }
    },
    computed: {
        ...mapStores(ProductStore),
        ...mapState(ProductStore, [ 'products', 'baseUrl'] ),
    },
    methods: {
        queryFilter() {
            this.searchedProducts = this.products.filter(product => {
                return product.name.toLowerCase().includes(this.query.toLowerCase())
            })
        }

    }

}
</script>


<style>
    .search-section {
        padding-top: 14px;
        padding-bottom: 14px;
    }
</style>