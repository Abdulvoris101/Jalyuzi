<template>
    <nav class="nav">
        <div class="top-nav " :class="{ 'sticky': sticky }">
            <div class="container">
                <div class="row">
                    <div class="col-lg-9">
                        <nuxt-link to="tel:99894-994-00-00" class="phone_numb top-link">
                            <b-icon-telephone class="top-icon" />
                            
                            +998 94-994-00-00
                        </nuxt-link>
                        <nuxt-link to="mailto:jalyuzi@mail.com"   class="email top-link">
                            <b-icon-envelope class="top-icon" />
                            jalyuzi@mail.com
                        </nuxt-link>
                    </div>
                    <div class="col-lg-3">
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
                <div class="row gx-5">
                    <div class="col-lg-3">
                        <div class="logo">
                            <img src="@/assets/images/logo.png" width="170" alt="">
                        </div>
                    </div>
                    
                    <div class="col-lg-5 nav-items">
                        <b-icon-list class="bi-list" />
                        <div class="nav-links">
                            <nuxt-link :to="{name: 'index'}" class="nav-link">Главная</nuxt-link>
                            <nuxt-link :to="{name: 'about'}" class="nav-link">О нас</nuxt-link>
                            <nuxt-link :to="{name: 'portfolio'}" class="nav-link">Портфолио</nuxt-link>
                            <nuxt-link :to="{name: 'contact'}" class="nav-link">Контакт</nuxt-link>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="nav-side-i">
                            <nuxt-link to="#" class="nav-link search-i">
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
                            
                            <nuxt-link :to="{name: 'cart'}" class="nav-link">

                                <b-icon-bag class="bag-icon" />
                            </nuxt-link>

                            {{ countOfCart }}

                        </div>
                    </div>
                </div> <!-- row end //-->

            </div> <!-- container end //-->
        </div>

    </nav>
</template>


<script>

import { AccountStore, ProductStore } from '@/stores/index'
import { mapActions, mapState, mapStores } from 'pinia'

export default {

    data() {
        return {
            store: '',
            sticky: false,
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
    },
    
    methods: {
        ...mapActions(ProductStore, ['setCartItem']),

        toggleStoreModal() {
            this.store.regToggleModal()
        },

        fixedToTop(event) {
            let sticky = this.$el.querySelector('.top-nav').offsetTop

            if (window.pageYOffset > sticky) {
                this.sticky = true
            } else {
                this.sticky = false
            }
            
        }
    }
    

}
</script>

<style>



    @media screen and (max-width: 500px) {
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
            margin-left: 15px !important;
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