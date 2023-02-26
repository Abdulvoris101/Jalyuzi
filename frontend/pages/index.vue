
<template>
    <div id="index">
        <Head>
            <Title>Jalyuzi -  жалюзи в ташкенте жалюзи в г.ташкенте цены и адреса </Title>

            <Script async src="https://www.googletagmanager.com/gtag/js?id=G-YJ22K55C06" ></Script>
            <Script children='
        (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
    
        m[i].l=1*new Date();
        for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
        k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
        (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

        ym(92601372, "init", {
                clickmap:true,
                trackLinks:true,
                accurateTrackBounce:true,
                webvisor:true,
                ecommerce:"dataLayer"
        });
'></Script>
            <Script children='
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag("js", new Date());

                gtag("config", "G-YJ22K55C06");

            '></Script>
            <Meta name="keywords" content="Жалюзи в ташкенте, купить жалюзи в ташкенте, жалюзи в узбекистане, жалюзи уз, Производство и установка жалюзей в Ташкенте, фото жалюзи в ташкенте, jalyuzi, jalyuzi uz, jalyuzi pardalar" />
            <Meta name="description" content="цены на жалюзи в ташкенте" />

        </Head>
        
        <NoScript><div><img src="https://mc.yandex.ru/watch/92601372" style="position:absolute; left:-9999px;" alt="" /></div></NoScript>
        

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
