<template>
    <div id="mb-nav">
        <div class="nav-m-links">
            <nuxt-link :to="{name: 'index'}" class="nav-link">Главная</nuxt-link>
            <nuxt-link :to="{name: 'about'}" class="nav-link">О нас</nuxt-link>
            <nuxt-link :to="{name: 'portfolio'}" class="nav-link">Портфолио</nuxt-link>
            <nuxt-link :to="{name: 'contact'}" class="nav-link">Контакт</nuxt-link>
            <nuxt-link to="#" class="nav-link search-i">
                <b-icon-search class="bag-icon me-3" style="margin-bottom: 4px;" />
                <span style="font-size: 16px;">Search</span>

            </nuxt-link>


            <div class="account-i">
                <nuxt-link to=""  @click="toggleStoreModal" v-if="isLogined == false"  role="button" class="nav-link">
                    <b-icon-person class="bottom-icon" />
                </nuxt-link>
                
                <nuxt-link :to="{name: 'myprofile'}"  v-if="isLogined"  role="button" class="nav-link account-true">
                    <b-icon-person class="bottom-icon" />
                    <span class="firstName">{{  first_name }}</span>
                </nuxt-link>

            </div>

            

            {{ countOfCart }}

        </div>
    </div>
</template>

<script>
export default {
    props: ['isLogined', 'showMenu','first_name'],

    data() {
        return {
        }
    },
    methods: {
        toggleStoreModal() {
            this.$emit('updateshowmenu', false)
            // this.$parent.toggleStoreModal()
        }
    }
}
</script>

<style>
    #mb-nav {
        width: 100%;
        height: 100vh;
    }
    
</style>