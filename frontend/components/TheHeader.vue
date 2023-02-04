<template>
    <div id="header">
        <nav class="nav">
            <div class="top-nav " :class="{ 'sticky': sticky }">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-9 col-md-8 col-sm-8">
                            <nuxt-link to="tel:99894-994-00-00" class="phone_numb top-link">
                                <b-icon-telephone class="top-icon" />
                                
                                +998 94-994-00-00
                            </nuxt-link>
                            <nuxt-link to="mailto:jalyuzi@mail.com"   class="email top-link">
                                <b-icon-envelope class="top-icon" />
                                jalyuzi@mail.com
                            </nuxt-link>
                        </div>
                        <div class="col-lg-3 col-md-4  col-sm-4 ">
                            <nuxt-link :to="{name: 'contact'}" class="phone_numb top-link">
                                <b-icon-geo-alt class="top-icon" />
                                Store Location
                            </nuxt-link>
                            <nuxt-link :to="{name: 'contact'}"  class="top-link email">
                                FAQ
                            </nuxt-link>
                        </div>
                    </div>
                </div> <!-- container end //-->
            </div> <!-- top -nav end // -->
    
            <div class="main-nav">
    
                <div class="container">
    
                    <div class="row">
    
                        <div class="col-lg-3 col-md-3 col-flex d-flex">
                            <a @click="showMenu = !showMenu">
                                    <b-icon-list class="bi-list" />
                            </a>
                            <div class="logo">
                                
                                <nuxt-link :to="{name: 'index'}" class="nav-link">      
                                    <img src="@/assets/images/logo.jpg" width="150" alt="">
                                </nuxt-link>
    
                            </div>
                            <div class="d-flex">
                                <nuxt-link :to="{name: 'cart'}" class="nav-link">
    
                                    <b-icon-bag class="bag-icon-m" />
                                </nuxt-link>
                            </div>
                        </div>
                        
                        <div class="col-lg-5 col-md-6  nav-items">
                            <div class="nav-links">
                                <nuxt-link :to="{name: 'index'}" class="nav-link">Главная</nuxt-link>
                                <nuxt-link :to="{name: 'about'}" class="nav-link">О нас</nuxt-link>
                                <nuxt-link :to="{name: 'portfolio'}" class="nav-link">Портфолио</nuxt-link>
                                <nuxt-link :to="{name: 'contact'}" class="nav-link">Контакт</nuxt-link>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-3">
    
                            <div class="nav-side-i">
                                <nuxt-link :to="{name: 'search'}" class="nav-link search-i">
                                    <b-icon-search class="bag-icon" style="margin-bottom: 4px;" />
                                </nuxt-link>
    
                                <div class="account-i">
    
                                    <nuxt-link to=""  @click="toggleStoreModal" v-if="isLogined == false"  role="button" class="nav-link">
                                        <b-icon-person class="bottom-icon" />
                                    </nuxt-link>

                                    <nuxt-link :to="{name: 'myprofile'}"  v-if="isLogined"  role="button" class="nav-link account-true">
                                        <b-icon-person class="bottom-icon" />
                                        <span class="firstName">{{ firstName }}</span>
                                    </nuxt-link>
                                </div>
                                
                                <nuxt-link :to="{name: 'cart'}" class="nav-link bag-ic">
    
                                    <b-icon-bag class="bag-icon" />
                                </nuxt-link>
    
                                {{ countOfCart }}
    
                            </div>
                        </div>
                    </div> <!-- row end //-->
    
                </div> <!-- container end //-->
            </div>
    
        </nav>
    
        <mobile-nav v-if="showMenu" :first_name="firstName" @updateshowmenu="changeShowMenu" :showMenu="showMenu" :isLogined="isLogined"></mobile-nav>
    
    </div>
</template>


<script>

import { AccountStore, ProductStore } from '@/stores/index'
import { mapActions, mapState, mapStores } from 'pinia'

export default {

    data() {
        return {
            store: '',
            sticky: false,
            showMenu: false,
        }
    },

    computed: {
        ...mapStores(AccountStore, ProductStore),

        ...mapState(AccountStore, ['firstName', 'lastName', 'isLogined', 'getFirstName']),
        ...mapState(ProductStore, ['countOfCart'] )
    },

    created() {
        this.store = AccountStore()
        
    },
    destroyed () {
        window.removeEventListener('scroll', this.fixedToTop);
    },

    mounted() {
        this.setCartItem()

        window.addEventListener('scroll', this.fixedToTop);


    },

    watch: {
        '$route' () {
            this.showMenu = false
        }
    },
    
    methods: {
        ...mapActions(ProductStore, ['setCartItem']),

        toggleStoreModal() {
            this.store.regToggleModal()
        },

        fixedToTop(event) {
            let sticky = this.$el.querySelector('.top-nav')

            if (sticky){
                if (window.pageYOffset > sticky.offsetTop) {
                    this.sticky = true
                } else {
                    this.sticky = false
                }
            }
           
            
        },
        changeShowMenu(value) {
            this.store.regToggleModal()
            this.showMenu = value
        }
    }
    

}
</script>

<style>


    .bi-list {
        display: none;
    }

    .bag-icon-m{
        display: none
    }



    

    @media screen and (max-device-width: 765px) {
        .account-i .nav-link svg {
            font-size: 32px;
            font-weight: normal;
            text-align: center;

        }

        .bag-icon-m {
            font-size: 20px;
            display: block;
        }

        .nav-m-links a {
            font-size: 25px;
            font-weight: normal;
            text-align: center;
            padding-top: 13px;
        }
        .nav-m-links {
            padding-top: 80px;
            margin-left: auto;
            margin-right: auto;
        }
        
        .top-nav {
            display: none;
        }
        .nav-links {
            display: none !important;
        }
        .nav-side-i {
            display: none !important;
        }
        .logo {
            margin-left: 0 !important;
            margin-right: 0 !important;
        }
        .col-flex {
            justify-content: space-between;
            align-items: center;
        }
        .bi-list {
            display: block;
            margin-right: 10px;
            font-size: 28px;
        }
        
    }


    


    @media (min-device-width: 576px) and (max-device-width: 768px) {
        .main-nav .container, .container-sm {
            max-width: 95%;
        }
        .top-nav .container {
            max-width: 91% !important;
        }
    }

    @media (min-device-width: 619px) and (max-device-width: 758px) {
        .container {
            max-width: 90% !important;
        }
    }
    

    

    @media screen and (min-device-width: 761px) and (max-device-width: 992px) {
        .main-nav .container, .container-sm {
            max-width: 90%;
        }
        .logo {
            margin-left: -30px !important;
            margin-right: 0 !important;
        }
        .firstName {
            display: none !important;
        }
        .nav-link {
            padding-right: 0 !important;
        }
        .nav-items {
            padding-left: 0px !important;
        }
        .nav-links a {
            font-size: 16px;
        }
        .nav-links {
            padding-left: 30px !important;
        }
    }


   
    .bag-icon {
        margin-bottom: 2px;
    }
    .bottom-icon {
        font-size: 20px;
        margin-bottom: 4px;
    }
    .top-icon {
        font-size: 17px;
        padding-bottom: 4px;
    }

    .nav-items {
        padding-left: 60px;
    }

    .search-i {
        margin-right: 5px;
    }
    
    .account-true span{
        display: inline-block;
        padding-left: 10px;
    }
    .firstName {
        font-size: 15px;
        
    }
    .nav {
        width: 100%;
    }

    .sticky {
        position: fixed;
        top: 0;
        width: 100%;
        z-index: 10000;
        border-bottom: 1px solid rgb(197, 197, 197) !important;
        transition: .2s linear all;
    }

    .top-nav {
        width:100%;
        height: 30px;
        padding-top: 2px;
        border-bottom: 1px solid #faf8f8;
        background-color: #fdfbfa;
    }
    .phone_numb i {
        font-size: 14px;
    }
    .phone_numb {
        color: #333;

    }
    .email {
        color: #333;
        display: inline-block;
        margin-left: 14px;
    }
    .email i {
        padding-top: 5px;
    }

    .main-nav {
        border-bottom: 1px solid #f1f1f1;
        width: 100%;
        padding-top: 15px;
        padding-bottom: 15px;
    }
    .nav-links {
        display: flex;
    }
    .nav-link {
        padding-right: 15px;
        color:#333;
    }
    .nav-side-i {
        margin-left: 34px;
        display: flex;
    }

    .top-link {
        text-decoration: none;
    }





</style>