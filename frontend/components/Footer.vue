<template>
    <div id="footer">
       <div class="container-fluid">
            <div class="row">
                <div class="col-md-6">
                    <section class="left-side">
                        <div class="logo">
                            <img src="@/assets/images/logo.png" alt="">
                        </div> 
                        <div class="footer_info me-4">
                            <h4>Information</h4>
                            <ul>
                                <li><nuxt-link :to="{ name: 'index' }" class="footer_link">Home</nuxt-link></li>
                                <li><nuxt-link :to="{ name: 'contact' }"  class="footer_link">Contact</nuxt-link></li>
                                <li><nuxt-link :to="{ name: 'about' }" class="footer_link">About</nuxt-link></li>
                                <li><nuxt-link :to="{ name: 'contact' }" class="footer_link">Portfolio</nuxt-link></li>
                            </ul>
                        </div>
                        <div class="footer_info">
                            <h4 class="telegram-last">Last telegram posts</h4>
                            <div class="telegram-channel">

                            </div>
                        </div>
                    </section>
                </div>
                <div class="col-md-6">
                    <section class="right-side">
                        <div class="footer_info">
                            <h4>Contact</h4>
                            <p>Beruniy, Huvaydo m.
                                100169 Tashkent, 
                                Uzbekistan
                            </p>
                        </div>
                        <div class="footer_info">
                            <h4>Phone</h4>
                            <ul>
                                <li><nuxt-link to="tel:90-994-00-00" class="footer_link">+998 90-994-00-00</nuxt-link></li>
                                <li><nuxt-link to="tel:91-994-00-00"  class="footer_link">+998 91-994-00-00</nuxt-link></li>
                                <li><nuxt-link to="tel:94-994-00-00"  class="footer_link">+998 94-994-00-00</nuxt-link></li>
                            </ul>
                        </div>
                        <div class="footer_info ms-5">

                            <nuxt-link href="https://www.instagram.com/Jalyuzi.uz/" class="icon-link">
                                <img src="@/assets/images/social/instagram.png" alt="" />
                            </nuxt-link>
                            <nuxt-link to="https://www.facebook.com/Jalyuzi.uz/" target="_blank" class="icon-link">
                                <img src="@/assets/images/social/facebook.png" alt="">
                            </nuxt-link>
                            <nuxt-link to="https://t.me/jalyuzi" target="_blank" class="icon-link">
                                <img src="@/assets/images/social/telegram.png" alt="">
                            </nuxt-link>
                            <nuxt-link to="https://twitter.com/Jalyuzi" target="_blank" class="icon-link">
                                <img src="@/assets/images/social/twitter.png" alt="">
                            </nuxt-link>
                        
                        </div>
                    </section>
                </div>
            </div>
       </div>
    </div>
</template>


<script setup>

</script>

<style>

    #footer {
        padding-top: 40px;
        background: #F9F9F9;
        height: 294px;
    }
    .logo {
        margin-left: 40px;
        padding-bottom: 0px;
        margin-right: 60px;
        margin-top: 3px;
    }
    .left-side {
        display: flex;
        align-items: flex-start;
    }
    .right-side {
        display: flex;
        padding-top: 1px;
        align-items: flex-start;
        margin-left: 60px;
    }
    
    .footer_info h4 {
        font-weight: normal;
        font-size: 20px;
    }
    .footer_info ul {
        list-style: none;
        margin: 0 !important;
        padding: 0;
    }
    .footer_info li {
        margin: 0;
    }
    .footer_info p {
        max-width: 170px;
    }
    .footer_link {
        text-decoration: none;
        color: #333;
        font-size: 16px;
    }
    .twitter {
        width: 280px;
        height: 100px;
        background: #000;
    }
    .icon-link {
        margin-right: 10px;
    }
    .telegram-channel {
        
    }
</style>