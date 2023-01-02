<template>
    <div>
        <Splide :options="{ type: 'loop', autoplay: true, }" aria-label="My Favorite Images">
            <SplideSlide>
                <figure class="slide-bg-img slide-1">
                    <div>
                        <h3 class="slide-subtitle">Роскошь и Элегантность
                    
                        </h3>
                        <h2 class="slide-title">
                            Звоните и Заказывайте +998909940000
                        </h2>

                        <nuxt-link  to="tel:909940000" class="btn btn-light mt-3">Звоните</nuxt-link>
                    </div>
                </figure>
            </SplideSlide>
            <SplideSlide>
                <figure class="slide-bg-img slide-2" >
                    <div>
                        <h3 class="slide-subtitle">
                            от Diamond Exclusive
                            
                            
                        </h3>
                        <h2 class="slide-title">
                            Лучшая защита от солнца
                        </h2>
                        <nuxt-link :to="{name: 'products'}" class="btn btn-light mt-3">Покупаете</nuxt-link>

                    </div>
                </figure>
            </SplideSlide>
            <SplideSlide>
                <figure class="slide-bg-img slide-3" >
                    <div>
                        <h3 class="slide-subtitle">
                            У нас есть все                              
                        </h3>
                        <h2 class="slide-title">
                             
                            Красивые Вертикальные Жалюзи
                        </h2>

                        <nuxt-link  :to="{name: 'products'}" class="btn btn-light mt-3">Покупаете</nuxt-link>
                    </div>
                </figure>
            </SplideSlide>
        </Splide>
    </div>
</template>


<script>
import '@splidejs/vue-splide/css';

</script>

<style>

    .slide-bg-img {
        
        width: 100%;
        height: 500px;
        background-position: center;
        background-size: cover;
        background-blend-mode: multiply;
        background-color: rgba(51, 51, 51, 0.575);
        color: #fff;
        text-align: left;
        padding-left: 100px;
        padding-top: 160px;
    }

    @media screen and (max-width: 649px) {
        .slide-bg-img {
            padding-left: 60px !important;

        }
        .slide-bg-img div {
            width: 95%;
        }
        .slide-title {
            font-size: 27px !important;
        }

        .slide-subtitle {
            font-size: 18px;
        }
    }

    @media screen and (min-device-width: 649px) and (max-device-width: 992px) {
        .slide-bg-img {
            padding-left: 70px !important;

        }

        .slide-title {
            font-size: 30px !important;
        }

        .slide-subtitle {
            font-size: 24px;
        }
    }

    .slide-1 {
        background-image: url('@/assets/images/1.png');
    }
    .slide-2 {
        background-image: url('@/assets/images/2.png');
    }
    .slide-3 {
        background-image: url('@/assets/images/4.jpg');
    }
    .slide-title {
        font-size: 37px;
    }
    .slide-subtitle {
        font-size: 22px;
    }
</style>