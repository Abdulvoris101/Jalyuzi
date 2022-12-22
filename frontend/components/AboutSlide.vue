<template>
    <div id="slide-about">
        <div class="container">
            <Splide :options="{ type: 'loop', autoplay: true, pagination:false }" aria-label="My Favorite Images">
                <SplideSlide>
                    <figure class="slide-img slide1">

                    </figure>
                </SplideSlide>
                <SplideSlide>
                    <figure class="slide-img slide2">

                    </figure>
                </SplideSlide>
                <SplideSlide>
                    <figure class="slide-img slide3">

                    </figure>
                </SplideSlide>
            </Splide>
        </div>
    </div>
</template>

<style>
    #slide-about {
        margin-top: 26px;
        margin-bottom: 15px;
    }
    .slide-img{
        width: 100%;
        height: 350px;
        background-blend-mode: multiply;
        background-color: rgba(51, 51, 51, 0.315);
        background-size: cover;
        background-position: center;
       
    }
    .slide1 {
        background-image: url('@/assets/images/about-slide1.jpg');
        
    }
    .slide2 {
        background-position: bottom !important;

        background-image: url('@/assets/images/about-slide2.jpg');
    }
    .slide3 {
        background-image: url('@/assets/images/about-slide3.jpg');
    }
</style>