<template>
    <div id="categories">
        <h3 class="title mb-3">Категории</h3>

        <div class="row gx-2">
            <div class="col-lg-3 col-md-6 col-6 col-sm-6" v-for="category in categories" :key="category.id">
                
                <NuxtLink  :to='"category/" + category.id'>
                    <div class="grid">
                        <figure class="effect-lily">
                            <img :src="category.image" height="350" alt="img12"/>
                            
                            <figcaption>
                                <div>
                                    <h2>{{ category.name }}</h2>
                                </div>
                                <p>Click to detail</p>
                                
                            </figcaption>			
                        </figure>
                        
                    </div>
                      
                </NuxtLink>
            </div>
           
        </div>

        
    </div>


    
</template>


<script>
import { mapState, mapStores } from 'pinia'
import { ProductStore } from '../stores'

export default {
    data () {
        return {
            categories: []
        }
    },

    async created() {
        const { data } = await useFetch(`${this.$config.baseUrl}/api/categories/`)
        this.categories = data.value

    },
    computed: {
        ...mapStores(ProductStore),
        ...mapState(ProductStore, ['baseUrl'])
    }
}
</script>

<style>
    .title  {
        font-size: 28px;
        padding-bottom: 15px;
    }

    .card_box {
        overflow:hidden;
        transition: all .5s;
        width: 100%;
        margin-bottom: 30px;
    }
    
    
    /* Common style */
    .grid figure {
        position: relative;
        overflow: hidden;
        min-width: 273px;
        max-height: 500px;
        background: rgba(0, 0, 0, 0.925);
        text-align: center;
        cursor: pointer;
    }

    @media screen and (max-width: 500px) {
        .title {
            padding-top: 20px;
            padding-bottom: 20px;
            font-size: 24px;
            margin-bottom: 0 !important;

        }

        .grid figure {
            min-width: 165px;

        }
        
    }

    
    .grid figure img {
        position: relative;
        display: block;
        min-height: 100%;
        opacity: 0.8;
    }
    
    .grid figure figcaption {
        padding: 2em;
        color: #fff;
        font-size: 18px;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
    }
    
    .grid figure figcaption::before,
    .grid figure figcaption::after {
        pointer-events: none;
    }
    
    .grid figure figcaption,
    .grid figure figcaption > a {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
    
    /* Anchor will cover the whole item by default */
    /* For some effects it will show as a button */
    .grid figure figcaption > a {
        z-index: 1000;
        text-indent: 200%;
        white-space: nowrap;
        font-size: 0;
        opacity: 0;
    }
    
    .grid figure h2 {
        word-spacing: -0.15em;
        font-weight: 200;
        font-size: 25px;
    }
    
    .grid figure h2 span {
        font-weight: 800;
    }
    
    .grid figure h2,
    .grid figure p {
        margin: 0;
    }
    
    .grid figure p {
        letter-spacing: 1px;
        font-size: 68.5%;
    }
    
    /* Individual effects */
    
    /*---------------*/
    /***** Lily *****/
    /*---------------*/
    
    figure.effect-lily img {
        max-width: none;
        width: -webkit-calc(100% + 50px);
        opacity: 0.4;
        -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
        transition: opacity 0.35s, transform 0.35s;
        -webkit-transform: translate3d(-40px,0, 0);
        transform: translate3d(-40px,0,0);
    }
    
    figure.effect-lily figcaption {
        text-align: left;
    }
    
    figure.effect-lily figcaption > div {
        position: absolute;
        bottom: 0;
        left: 0;
        padding: 50px 20px;
        width: 100%;
        height: 50%;
    }
    
    figure.effect-lily h2,
    figure.effect-lily p {
        -webkit-transform: translate3d(0,40px,0);
        transform: translate3d(0,30px,0);
    }
    
    figure.effect-lily h2 {
        font-size: 23px;
        -webkit-transition: -webkit-transform 0.35s;
        transition: transform 0.35s;
    }
    
    figure.effect-lily p {
        color: rgb(255, 255, 255);
        opacity: 0;
        -webkit-transition: opacity 0.2s, -webkit-transform 0.35s;
        transition: opacity 0.8s, transform 0.35s;
    }
    
    figure.effect-lily:hover img,
    figure.effect-lily:hover p {
        opacity: .7;
    }
    
    figure.effect-lily:hover img,
    figure.effect-lily:hover h2,
    figure.effect-lily:hover p {
        -webkit-transform: translate3d(0,0,0);
        transform: translate3d(0,0,0);
    }
    
    figure.effect-lily:hover p {
        -webkit-transition-delay: 0.05s;
        transition-delay: 0.05s;
        -webkit-transition-duration: 0.35s;
        transition-duration: 0.35s;
    }

    .effect-lily img {
        object-fit: cover;
        object-position: center;

    }
    
      
    
</style>