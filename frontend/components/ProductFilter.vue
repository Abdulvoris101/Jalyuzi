<template>
    <div id="filter-section">
        <section class="side-left">
            <h4 class="filter-title">Filters-Diamonds</h4>

            <div>
                <ul class="filter-catalog mt-1">
                    <li ><span  class="catalog-title filter-link">Каталог</span></li>
                    <li class="filter-catalog-item" v-for="catalog in getCatalogs" :key="catalog.id"><input @change="changeCatalog(catalog.id)"  type="checkbox" class="form-check-input" :id="'catalog' + catalog.id"> <label class="filter-link" :for="'catalog' + catalog.id">{{ catalog.name }}</label></li>
                </ul>
            </div>

            <div>
                <ul class="filter-catalog mt-3">
                    <li ><span  class="catalog-title filter-link">Цветы</span></li>
                    <li class="filter-catalog-item" v-for="color in getColors" :key="color.id"><input type="checkbox" class="form-check-input" @change="changeColor(color.id)" :id="'color' + color.id"> <label  :for="'color' + color.id"  class="filter-link">{{ color.name }}</label></li>
                    
                </ul>
            </div>

            <div>
                <ul class="filter-catalog mt-3">
                    <li ><span  class="catalog-title filter-link">Свойства</span></li>
                    <li class="filter-catalog-item" v-for="property in getProperties" :key="property.id"><input type="checkbox" :id="'property' + property.id" @change="changeProperties(property.id)" class="form-check-input"> <label   class="filter-link" :for="'property' + property.id">{{ property.name }}</label></li>
                </ul>
            </div>

            <ul class="filter-catalog mt-3">
                <li ><span  class="catalog-title filter-link">Затемнение</span></li>
                <li class="filter-catalog-item"><input type="checkbox" class="form-check-input" id="idf1"> <label for="idf1"  class="filter-link">30%</label></li>
                <li class="filter-catalog-item"><input type="checkbox" class="form-check-input" id="idf3"> <label for="idf2"  class="filter-link">50%</label></li>
            </ul>

            <button class="btn btn-primary mt-4 " @click="submitFilter()">Фильтровать</button>
        
        </section>
    </div>
</template>


<script>
import { mapActions, mapState, mapStores } from 'pinia'
import { FilterStore, ProductStore } from '~~/stores'

export default {
    data() {
        return {
            category_status: false,
            is_sub: false,
            catalogs: [],
            filter: {
                catalogs: [],
                colors: [],
                properties: [],
            }
        }
    },
    computed: {

        getId() {
            const route = useRoute();
            return route.params.id
        },
        

        ...mapState(FilterStore, ['getColors', 'getProperties', 'getCatalogs']),
        
        ...mapStores(FilterStore),

        
    },  
    methods: {
        ...mapActions(ProductStore, ['changeProducts', 'fetchProducts']),

        submitFilter() {
            let catalogs = this.filter.catalogs
            let colors = this.filter.colors
            let properties = this.filter.properties
            let catalog_q = 'catalog='
            let color_q = 'color='
            let properties_q = 'property='
            let category = this.getId

            let query = '';

            if (catalogs.length >= 1) {
                for (let i = 0; i < catalogs.length; i++) {
                    catalog_q += catalogs[i] + ','
                }
                catalog_q = catalog_q.slice(0, -1)
                query += catalog_q

            } else {
                catalog_q = ''
            }
    
            if (colors.length >= 1) {
                for (let i = 0; i < colors.length; i++) {
                    color_q += colors[i] + ','
                }
                color_q = color_q.slice(0, -1)
                query += '&' + color_q

            } else {
                color_q = ''
            }

            if (properties.length >= 1) {
                for (let i = 0; i < properties.length; i++) {
                    properties_q += properties[i] + ','
                }
                properties_q = properties_q.slice(0, -1)
                query += '&' + properties_q

            } else {
                properties_q = ''
            }

            if (category) {
                if (this.is_sub) {
                    query += '&subcategory=' + category
                } else {
                    query += '&category=' + category
                }
                
            }
            if (query.length >= 1) {
                this.getFilterPosts(query)
            } else {
                this.fetchProducts()
            }
            

        },

        async getFilterPosts(query) {
            
            const { data, pending, error } = await useFetch(`http://localhost:8000/api/products/?${query}`, { initialCache : false })
            
            this.changeProducts(data)
            
        },

        changeCatalog(event) {

            let arr = this.filter.catalogs
            
            let item  = arr.find(element => element == event);

            let index = arr.indexOf(item)

            if (index > -1) {
                arr.splice(index, 1)
            } else {
                arr.push(event)
            }
            
            this.filter.catalogs = arr
        },

        changeColor(event) {
            let arr = this.filter.colors

            // 
            let item  = arr.find(element => element == event);

            let index = arr.indexOf(item)

            if (index > -1) {
                arr.splice(index, 1)
            } else {
                arr.push(event)
            }

            this.filter.colors = arr
        },

        changeProperties(event) {
            let arr = this.filter.properties

            let item  = arr.find(element => element == event);

            let index = arr.indexOf(item)

            if (index > -1) {
                arr.splice(index, 1)
            } else {
                arr.push(event)
            }

            this.filter.properties = arr

            
        },
    }
}
</script>


<style>
.side-left {
    padding-left: 45px;
}
.side-left {
    padding-bottom: 30px;
    border-right: 1px solid rgb(236, 236, 236);
}
.filter-title {
    font-size: 22px;
    font-weight: normal;
    padding-top: 15px;
}
.catalog-title {
    font-size: 18px !important;
    padding-top: 15px;
    
}
.filter-link {
    text-decoration: none;
    color: rgb(68, 68, 68);
    font-weight: normal;
    font-size: 15px;
}
.filter-catalog {
    color: rgb(15, 15, 15) !important;
    margin: 0;
    padding: 0;
    list-style: none;
}
.filter-catalog-item {
    margin-top: 5px;
}
</style>