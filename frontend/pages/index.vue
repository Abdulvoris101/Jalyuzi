
<template>
    <div id="index">
        <Head>
            <Title>Купить жалюзи для окон в Ташкенте по доступным ценам | Diamond Jalyuzi </Title>

           
            <Meta name="keywords" content="жалюзи,рулонные шторы, горизонтальные жалюзи, жалюзи Ташкент цена, Jalyuzi narxlari, Jalyuzi pardalar narxi" />
            <Meta name="description" content="Diamond Jalyuzi предлагает высококачественные жалюзи для окон, включая горизонтальные и вертикальные жалюзи, рулонные шторы и многое другое. Наши индивидуально изготовленные жалюзи идеально подходят для домов и бизнеса в Ташкенте, обеспечивая как конфиденциальность, так и контроль за освещением. Свяжитесь с нами сегодня для бесплатной консультации и найдите идеальное решение для окон в вашем пространстве" />


            <Meta property="og:title" content="Jalyuzi - жалюзи и шторы в Ташкенте" />
            <Meta property="og:description" content="Jalyuzi - ваш надежный партнер в области жалюзи Мы предлагаем широкий ассортимент штор, жалюзи, ролетов и других изделий, а также услуги по установке." />
            <Meta property="og:image" content="http://www.jalyuzi.uz/image/catalog/favicon.png" />
            <Meta property="og:url" content="https://jalyuzi.com/" />

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
                                Компания Jalyuzi предлагает широкий выбор жалюзи в Ташкенте по выгодным ценам. Наши продукты изготовлены из качественных материалов, которые обеспечивают надежность и долговечность. Мы предлагаем жалюзи различных типов, таких как вертикальные, горизонтальные, рулонные и др., которые подходят для любого помещения. Кроме того, мы предлагаем услуги установки и обслуживания жалюзи. Свяжитесь с нами и получите бесплатную консультацию от наших опытных специалистов!
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
