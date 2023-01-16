<template>
    <main id="about">
        <Title>О нас</Title>
        <Meta name="description" content="Жалюзи в Ташкенте" />
        <Meta name="keywords" content="Жалюзи в Ташкенте" />

        <section class="intro">
            <div class="container">
                <div class="intro-inner">
                    <div class="intro-text">
                        <h2 class="intro-title">About Us</h2>
                        <h5 class="intro-path">Home / About</h5>
                    </div>  
                </div>
            </div>
        </section>

        <section class="about ">
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <img src="@/assets/images/about-text.jpg" alt="Jalyuzi-about" class=" about-img img-fluid" >
                    </div>
                    <div class="col-md-6">
                        <div class="about-text mt-4">
                            <h3 class="about-title">Жалюзи от компании «DIAMOND» - Jalyuzi.uz</h3>
                            <p class="about-desc">
                                Компания «DIAMOND» - JALYUZI.UZ была основана в 2000 году. Наша организация основывалась как производственная фирма, занимающаяся дизайном окон Направления деятельности компании изготовление всех видов вертикальных и горизонтальных, Рулонные шторы "Деревянные жалюзи. С каждым годом мы стремимся увеличить объёмы продаж путем конкурентно способных цен, а также за счёт высококвалифицированного персонала работающего в офисе. в магазине и на производстве, который регулярно проходит дополнительное обучение для улучшения качества услуг. Клиенты, которые приобретают нашу продукцию- жалюзи, получают гарантию сроком на один год. Постоянные проверки ОТК производимого материала и комплектующих позволяют нам давать такую гарантию. Оборудование на производстве постоянно модернизируется, что положительно влияет на сроки изготовления продукции. Сейчас невозможно выделить приоритетные направления в работе нашей фирмы,-мы в равной степени уделяем внимание каждому направлению нашей деятельности. Для нашей компании самое важное соответствовать девизу-Технология и уюта сфера нашей деятельности. 

                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <AboutSlide />


        <section class="fact">
            <div class="container">
                <div class="row">
                    <div class="col-sm-4 ">
                        <div class="fact-card">
                            <div class="fact-text">
                                <b-icon-people class="people-icon mt-2 fact-icon"></b-icon-people>
                                <h3 class="fact-numbers">{{ achivement[0].experience }}</h3>
                                <h4 class="fact-title">Опыт работы</h4>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="fact-card">
                            <div class="fact-text">
                                <b-icon-emoji-smile class="emoji-smile-icon fact-icon mt-2"></b-icon-emoji-smile>
                                <h3 class="fact-numbers">{{ achivement[0].clients }}</h3>
                                <h4 class="fact-title">Счасливые клиенты</h4>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="fact-card">
                            <div class="fact-text">
                                <b-icon-box class="box-icon mt-2 fact-icon"></b-icon-box>
                                <h3 class="fact-numbers">{{ achivement[0].products }}</h3>
                                <h4 class="fact-title">Продукты</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        <section class="about">
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <div class="about-text mb-2">
                            <h3 class="about-title">Клиент - это наше Всё !</h3>
                            <p class="about-desc">
                                "Ничто не обходится нам так Дешево и не ценится так Дорого, как Вежливость"
                                Что может быть важнее в процессе любой покупки, чем удовольствие от приобретения товара, и что может быть хуже, чем ощущение зря потраченных денег, времени и сил?
                                Некоторое время назад мне пришлось посетить одну из организаций, услугами которой приходится периодически пользоваться каждому из нас. С удивлением и ужасом я обнаружил, что в этой огромной, присутствующей в каждом городе организации абсолютно ничего не изменилось в отношении к клиентам с момента её создания! Создалось ощущение, что там работают те же сотрудницы, что и 40 лет назад, для которых слово «клиентоориентированность», вероятнее всего, является ругательным. После минутного общения с этим персоналом я испытал психологический ШОК, узнав (вспомнив) много интересного о манере общения с клиентом!
                                Представляю Вам "Diamond Exclusive" - компанию нового поколения!
                                Говорю об этом с полной уверенностью в себе и в силы сотрудников нашей компании.

                            </p>
                        </div>
                        
                    </div>
                    <div class="col-md-6">
                        <img src="@/assets/images/about-text.jpg" alt="about-jalyuzi-image" class=" about-img img-fluid">
                    </div>
                </div>
            </div>
        </section>

    </main>
</template>

<script setup>
import { ProductStore } from "../stores"

let store = ProductStore()

const { data } = await useFetch(`${store.baseUrl}/api/achivement/`)

let achivement = data

</script>

<style>
    #about {
        margin-bottom: 30px;
    }
    .intro {
        
        height: 240px;
        width: 100%;
        background-blend-mode: multiply;
        background-image: url('@/assets/images/about-bg.png');
        background-color: rgba(51, 51, 51, 0.562);
    }
    .fact-card {
        margin-top: 10px;
    }
    .intro-text {
        text-align: center;
        color: #fff;
    }
    .intro-inner {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 240px;
    }
    .intro-title {
        font-size: 32px;
    }
    .intro-path {
        font-weight: normal;
        padding-top: 10px;
        font-size: 18px;
    }

    .about {
        padding-top: 30px;
    }
    .about-title {
        font-size: 22px;
    }
    .about-desc {
        font-size: 15px;
    }
    .about-img {
        height: 420px;
    }

    .fact {
        margin-top: 40px;
        margin-bottom: 40px;
    }

    .fact-card {
        padding: 10px;
        text-align: center;
        display: flex;
        padding-top: 25px;
        justify-content: center;
        height: 170px;
        width: 100%;
        border: 1px dashed rgb(150, 74, 74);

        border-radius: 5px;
        
    }
    .fact-icon {
        font-size: 28px;
        margin-right: 4px;
        margin-bottom: 0;
    }
    .fact-card .fact-title {
        font-size: 18px;
        font-weight: medium;
        color: rgb(110, 110, 110);
    }
    .fact-card .fact-numbers {
        font-size: 26px;
        margin-top: 0;

        padding-top: 10px;
    }
</style>