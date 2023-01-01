<template>
    <div id="underintro">
        <div class="row gx-2">
            <div class="col-md-4">
                <div class="under-card card1">
                
                    <div class="text">
                        <div>
                            <h2 class="under-card-title">
                                Роскошные жалюзи для вашего дома
                            </h2>
                            <NuxtLink to="products/" class="btn btn-success mt-2">Перейти</NuxtLink>
                        </div>
                    </div>                    
                </div>
            </div>
            <div class="col-md-4">

                <div class="under-card card2">
                
                    <div class="text">
                        <div>
                            <h2 class="under-card-title">
                                Современные жалюзи для вашего офиса
                            </h2>
                            <NuxtLink to="products/" class="btn btn-success mt-2">Перейти</NuxtLink>
                        </div>
                    </div>

                    
                </div>

            </div>
            <div class="col-md-4">

                <div class="under-card card3">
                
                    <div class="text">
                        <div>
                            <h2 class="under-card-title">
                                Новые жалюзи для вашего дома
                            </h2>
                            <NuxtLink to="products/" class="btn btn-success mt-2">Перейти</NuxtLink>
                        </div>
                    </div>

                    
                </div>

            </div>
        </div>
    </div>
</template>

<style>
    .under-card {
        background-blend-mode: multiply;
        background-color: rgba(51, 51, 51, 0.753);
        width: 100%;
        height: 350px;
        background-size: cover;
        background-position: center;
        margin-bottom: 30px;
        margin-top: 20px;
    }

    @media screen and (max-width: 500px) {
        .under-card {
            margin-bottom: 0 !important;

        }
        
    }
    .under-card .text {
        color: #fff;
        display: flex;
        align-items: center;
        height: 100%;
        width: 100%;
        justify-content: center;
        text-align: center;
        flex-wrap: wrap;
    }
    .under-card .text .btn {
        background-color: #ffff;
        color: #000;
        transition: all .2s linear;
        border: 0;
    }
    .under-card .text .btn:hover {
        
        background-color: rgb(151, 184, 138);
        color: #000;

    }
    .under-card .text h2 {
        font-size: 22px;
        width: 300px;
    }

    .card1 {
        background-image: url('@/assets/images/under1.jpg');
    }

    .card2 {
        background-image: url('@/assets/images/under2.jpg');
    }

    .card3 {
        background-image: url('@/assets/images/under3.jpg');
    }


</style>