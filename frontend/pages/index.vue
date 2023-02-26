
<template>
    <div id="index">
        <Head>
            <Title>Jalyuzi -  жалюзи в ташкенте жалюзи в г.ташкенте цены и адреса </Title>

           
            <Meta name="keywords" content="Жалюзи в ташкенте, купить жалюзи в ташкенте, жалюзи в узбекистане, жалюзи уз, Производство и установка жалюзей в Ташкенте, фото жалюзи в ташкенте, jalyuzi, jalyuzi uz, jalyuzi pardalar" />
            <Meta name="description" content="цены на жалюзи в ташкенте" />

        </Head>
        
        

        <Slide />


        <div class="container">
            <UnderIntro />
        
            <Categories />

        </div>
        
        
        
        <section class="getsample_section">
            <div class="container-fluid">
                <div class="row gx-4">
                    <div class="col-md-6 mb-3">
                        <img src="@/assets/images/bg-home-sec.webp" class="img-fluid" alt="jalyuzi-cards">
                    </div>
                    <div class="col-md-6 text-col pb-4 pt-3">
                        <div class="getsample_text">
                            <h3>Доступные цены</h3>
                            <p>
                                Современые и комфортные жалюзи на доступных ценах.
                                Перейдите на покупку и получаете новые современые жалюзи
                            </p>
                            <NuxtLink :to="{name: 'products'}" class="btn btn-outline-light">Покупайте сейчас!</NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
         </section>  
        <div class="container">
            <Companies />
        </div>
         
    </div>
</template>



<script>


export default {
    created() {
        console.log(this.$config.baseUrl);
    }
}
</script>



<style>
    .getsample_section {
        margin-top: 30px;
        background: #51575d;
        width: 100%;
        margin-bottom: 20px;
    }
    .text-col {
        display: flex;
        align-items: center;
    }
    .getsample_text {
        color: #fff;
    }
    .getsample_text h3 {
        font-size: 30px;
        padding-bottom: 10px;
    }
    .getsample_text p {
        font-size: 18px;
        color: rgb(247, 247, 247);
    }
    .getsample_text .btn {
        padding: 6px 24px !important;
        border-radius: 3px !important;
    }
    .guarente {
        background: #fdfdfd;
        margin-top: 40px;
        margin-bottom: 48px;
    }
    .guarente_title {
        font-size: 28px;
        padding-bottom: 35px;
        text-align: center;
    }
    .guarente_icon {
        font-size: 27px;
        text-align: center;
    }
    .guarente_text {
        text-align: center;
        margin-bottom: 20px;
    }
    .guarente_text p{
        font-size: 16px;
        color: rgb(92, 92, 92);
    }
    .guarente_text h4 {
        font-size: 22px;
    }
</style>
