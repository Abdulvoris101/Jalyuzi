<template>
    <div id="my-profile">
        <div class="container">
            <div class="row myprofile">
                <div class="col-lg-4">
                    <div class="list-group list-profile">
                        <a @click="status = 'MyProfile'" style="cursor:pointer;"  class="list-group-item list-group-item-action" :class="myclass()">
                          Мой профиль
                        </a>
                        <a @click="status = 'UpdateProfile'" style="cursor:pointer;" :class="updateclass()" class="list-group-item list-group-item-action">Обновить профиль</a>
                        <a @click="status = 'Logout' " style="cursor:pointer;" :class="logoutclass()" class="list-group-item list-group-item-action">Выйти</a>
                      </div>

                </div>
                <div class="col-lg-8">
                    <div class="card" v-if="status == 'MyProfile'">
                        <div class="card-body">
                            <h4 class="myprofile-title">Личный кабинет</h4>
                            <table class="table">
                                <thead>
                                    <tr>
                                        <td>Имя</td>
                                        <td>Фамилия</td>
                                        <td>Телефон номер</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{{ firstName }}</td>
                                        <td>{{ lastName }}</td>
                                        <td>{{ phone_number }}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div class="card" v-else-if="status == 'UpdateProfile'">
                        <div class="card-body">
                            <h4 class="myprofile-title">Обновить профиль</h4>
                            <form action="" class="form">
                                <div class="card-inp">
                                    <input type="text" class="form-control" placeholder="Имя">
                                    <input type="text" class="form-control" placeholder="Фамилия">
                                </div>
                                <div class="card-inp">
                                    <input type="text" class="form-control" placeholder="Телефон">
                                </div>
                                <button class="btn btn-outline-danger mt-4">Обновить</button>
                            </form>
                        </div>
                    </div>

                    
                    <div class="card" v-else-if="status == 'Logout'">
                        <div class="card-body">
                            <h4 class="myprofile-title">Выйти</h4>
                            {{ logout }}
                            <p>
                                {{ sure }}
                            </p>
                            <button class="btn btn-warning w-25" @click="user_logout()">Да</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    
</template>

<script>
import { mapState, mapStores } from 'pinia'
import { AccountStore } from '../stores'
export default {
    data() {
        return {
            status: 'MyProfile',
            logout: '',
            sure: 'Вы точно выходит от аккаунта?'
        }
    },
    computed: {
        ...mapStores(AccountStore),
        ...mapState(AccountStore, ['firstName', 'lastName', 'phone_number'])
    },
    methods: {
        myclass() {
            if (this.status == 'MyProfile') {
                return {
                    'active': true
                }
            }
        },
        updateclass() {
            if (this.status == 'UpdateProfile') {
                return {
                    'active': true
                }
            }
        },
        logoutclass() {
            if (this.status == 'Logout') {
                return {
                    'active': true
                }
            }
        },

        user_logout() {
            fetch('http://localhost:8000/api/users/logout/', {
                method: 'GET',
                credentials: 'include',
            })
            .then(resp => resp.json())
            .then(data => {
                if (data.Logout) {
                    this.sure = ''
                    this.logout = 'Вы выходили из аккаунта!'
                    let userToken = useCookie('user_token')
                    userToken.value = null
                    let store = AccountStore()
                    store.getMe()
                    store.getAdresses()
                }
            })

        }
    }
}
</script>
<style>

.list-group-item.active {
    z-index: 0;
}

#my-profile {
    margin-bottom: 35px;
}

.myprofile {
    margin-top: 30px;
}
.myprofile-title {
    padding-top: 15px;
    padding-bottom: 5px;
    font-weight: normal;
}

.card-inp {
    display: flex;
}

.card-inp input {
    margin-top: 15px;
    width: 48%;
    padding-top: 9px;
    padding-bottom: 9px;
}

.card-inp input:first-of-type {
    margin-right: 10px;
}

.list-profile .list-group-item {
    padding: 11px 18px;
}
.active {
    background: #d5333a !important;
    color: #ffffff !important;
    border: 0;
}
</style>

