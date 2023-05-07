<template>
    <div id="contact">

        <Head>
            <Title>Контакты - связаться с нами | Jalyuzi.com</Title>

            <Meta name="keywords" content="Контакты, связаться, заказ, жалюзи, Ташкент, консультация" />
            <Meta name="description" content=" Свяжитесь с Jalyuzi.com для заказа жалюзи, получения консультации по выбору, оформления заказа или других вопросов. Мы находимся в Ташкенте и предоставляем широкий ассортимент жалюзи." />
            <Meta property="og:title" content="Контакты - связаться с нами | Jalyuzi.com" />
            <Meta property="og:description" content="Свяжитесь с Jalyuzi.com для заказа жалюзи, получения консультации" />
            <Meta property="og:image" content="http://www.jalyuzi.uz/image/catalog/favicon.png" />
            <Meta property="og:url" content="https://jalyuzi.com/contact/" />
        
        </Head>

        <section class="intro">
            <div class="container">
                <div class="intro-inner">
                    <div class="intro-text">
                        <h2 class="intro-title">Контакт</h2>
                        <h5 class="intro-path">Главная / Контакт</h5>
                    </div>  
                </div>
            </div>
        </section>

        <section class="contact-info">
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <div style="position:relative;overflow:hidden;"><a href="https://yandex.com/maps/10335/tashkent/?utm_medium=mapframe&utm_source=maps" style="color:#eee;font-size:12px;position:absolute;top:0px;">Ташкент</a><a href="https://yandex.com/maps/10335/tashkent/house/YkAYdw5iT0YBQFprfX91cHVkYQ==/?ll=69.191146%2C41.341967&utm_medium=mapframe&utm_source=maps&z=18.06" style="color:#eee;font-size:12px;position:absolute;top:14px;">3-й проезд Эшона Бобохонова, 23 — Яндекс Карты</a><iframe src="https://yandex.com/map-widget/v1/-/CCUvAVfUCA" width="560" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe></div>
                    </div>
                    <div class="col-md-6">
                        <div class="contact-card">
                            <h4 class="contact-card-title">
                                <img src="@/assets/images/contact-icons/phone.png" width="32" alt="phone_icon"> Phone
                            </h4>
                            <ul>
                                <li>+998 90-994-00-00</li>
                                <li>+998 91-994-00-00</li>
                            </ul>
                        </div>
                        <div class="contact-card">
                            <h4 class="contact-card-title">
                                <img src="@/assets/images/contact-icons/email.png" width="32" alt="email_icon"> Email
                            </h4>
                            <ul>
                                <li>jalyuzi@mail.com</li>
                            </ul>
                        </div>
                        <div class="contact-card">
                            <h4 class="contact-card-title">
                                <img src="@/assets/images/contact-icons/address.png" width="32" alt="address_icon"> Address
                            </h4>
                            <ul>
                                <li class="address-info">Beruniy, Huvaydo m.
                                    100169 Tashkent, Uzbekistan</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="contact-form">
            <div class="container">
                <h2 class="contact-form-title">Contact</h2>
                <div v-for="(error, index) in errors" :key="index">
                    {{ error }}
                </div>
                <div class="contact-form-inner">
                    <input type="text" class="form-control" placeholder="Имя" v-model="name">
                    <input type="text" class="form-control" placeholder="Email" v-model="email">
                    <input type="text" class="form-control" placeholder="Телефон номер" v-model="phone_number">
                </div>
                <textarea name="" class="form-control mt-3" placeholder="Сообщения" v-model="message" cols="30" rows="6"></textarea>
                <button @click="sendMessage" class="btn mt-2 btn-success">Отправить</button>
            </div>
        </section>

    </div>
</template>

<script>
import { mapState, mapStores } from 'pinia'
import { ProductStore } from '../stores'

export default {
    data() {
        return {
            name: '',
            email: '',
            phone_number: '',
            message: '',
            errors: []
        }
    },
    computed: {
        ...mapStores(ProductStore),
        ...mapState(ProductStore, ['baseUrl'])

    },


    methods: {
        sendMessage() {
            let userToken = useCookie('user_token')
            let csrfToken = useCookie('csrftoken')


            if (this.name != '' && this.email != '' && this.phone_number != '' && this.message != '') {

                let url = `${this.$config.baseUrl}/api/contact/`

                let data = JSON.stringify({
                    'name': this.name,
                    'email': this.email,
                    'phone_number': this.phone_number,
                    'message': this.message
                })

                fetch(url, {
                    method: 'POST',
                    credentials: 'include',
                    
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Token ' + userToken.value,
                        'x-csrftoken': csrfToken.value
                    },

                    body: data
                }) .then(resp => resp.json())

                .then(data => {
                    if (data.email != this.email) {
                        this.errors.push(data.email)
                    } else {
                        this.name = ''
                        this.email = ''
                        this.phone_number = ''
                        this.message = ''
                        this.errors = []
                        this.errors.push('Ваш запрос принят')
                    }
                })

                this.error = []

            } else {
                this.errors.push('Заполните все поле')
            }
        }
    }
}
</script>

<style>
#contact {
    margin-bottom: 30px;
}
.intro {
    height: 240px;
    width: 100%;
    background-blend-mode: multiply;
    background-image: url('@/assets/images/contact-bg.png');
    background-color: rgba(51, 51, 51, 0.562);
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

.contact-info {
    padding-top: 40px;
}
.contact-card {
    margin-top: 20px;
    padding-top: 14px;
    padding-left: 14px;
    border: 1px solid #02A551;   
    border-radius: 5px;
}
.contact-card:first-of-type {
    margin-top: 0;

}
.contact-card-title {
    display: flex;
    font-size: 20px;
    align-items: center;
    padding-left: 10px;
    font-weight: normal;
}
.contact-card-title img {
    padding-right: 5px;
    padding-top: 2px;
    font-size: 18px;
}
.contact-card ul {
    list-style: none;
}
.address-info {
    width: 300px;
}

.contact-form {
    padding-top: 22px;
}
.contact-form-title {
    
    font-size: 24px;
}
.contact-form-inner {
    display: flex;
    padding-top: 14px;
}
.contact-form-inner input {
    margin-right: 15px;
}
.contact-form-inner input:last-of-type {
    margin-right: 0;
}
</style>