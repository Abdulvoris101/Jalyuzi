<template>
    <div id="register">
        <section class="ftco-section modal-wrapper" id="reg" v-show="getRegStatus">
            <div class="container">
                <div class="row justify-content-center ">
                    
                    <div class="col-md-7 col-lg-5">
                        
                        
                        <div class="login-wrap p-4 p-md-5">
                            

                            <a @click="regToggleModal" role="button" class="close" aria-label="close this modal">
                                <svg viewBox="0 0 24 24">
                                    <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" />
                                </svg>
                            </a>
                      
                            
                        <h3 class="text-center mb-4">Регистрация</h3>
                        
                        <ul class="">
                            <li class="error" v-for="(error, index) in response.errors" :key="index">
                                {{error}}
                            </li>
                        </ul>

                        <ul>
                            <li class="success" v-for="(data, index) in response.data" :key="index">
                                {{ data }}
                            </li>
                        </ul>
                        
                        <form action="#" @submit.prevent="submitRegister($event)" class="login-form">
                            <div class="form-group">
                              <input type="text" class="form-control rounded-left" v-model="firstName" placeholder="Имя" required>
                            </div>
                            <div class="form-group d-flex">
                                <input type="text" class="form-control rounded-left" v-model="lastName" placeholder="Фамилиля" required>
                            </div>
                            <div class="form-group d-flex">
                                <input type="number"  class="form-control rounded-left" v-model="phone_number" placeholder="909174227"  required>
                            </div>
                            <span style="color:#000; font-size:10px;" class="phoneError error" ref="phone_error"></span>
                            <div class="form-group d-flex">
                                <input type="password" class="form-control rounded-left" autocomplete="on" v-model="password" placeholder="Парол" required>
                            </div>
                            <h2 style="color:#000; font-size:10px;" class="passwordError error" ref="password_error"></h2>
                            <div class="form-group">
                                <button type="submit" class="form-control btn-custom btn btn-primary rounded submit px-3">Регистрация</button>
                            </div>
                        <div class="form-group d-md-flex">
                            <span class="reg-to-log">У вас есть аккаунт?</span>
                            <div class=" text-md-right">
                                <a href="#" @click="RegToLogin">Войти</a>
                            </div>
                        </div>
                  </form>
                </div>
                    </div>
                </div>
            </div>
        </section>
       
    </div>
</template>


<script>
import { AccountStore } from '@/stores/index'
import { mapState, mapActions, mapStores } from 'pinia'




export default {

    data() {
        return {
            firstName: '',
            lastName: '',
            phone_number: '',
            password: '',
            firstConfirm: false,
            response: {
                errors: [],
                data: [],
                statusCode: ''
            },
            store: ''
        }
    },



    computed: {
        ...mapStores(AccountStore),
        ...mapState(AccountStore, ['getRegStatus', 'loginStatus', 'regStatus', 'csrfToken', 'baseUrl']),
        ...mapActions(AccountStore, ['regToggleModal', 'loginToggleModal']),
    },

    created() {
        this.store = AccountStore()
        
    },

    methods: {
        
        ToVerification() {
            this.store.$patch({ verifStatus: true, regStatus: false})
        },

        RegToLogin() {
            this.store.$patch({ loginStatus: true, regStatus: false})
        },

        formIsValid() {

            let phone_number = this.phone_number.toString()
            let password = this.password.toString()


            if (phone_number.length < 8 || phone_number.length > 11) {
                this.$refs.phone_error.innerHTML = 'Пожалуйста, напишите правилную номер телефона'
                return false

            } else if(password.length < 6) {
                this.$refs.phone_error.innerHTML = ''
                this.$refs.password_error.innerHTML = 'Пароль не должен быть меньше 8 символов'

                return false

            } else if(this.password == this.firstName || this.password == this.lastName) {
                
                this.$refs.password_error.innerHTML = 'Пароль не должен совпадат с именем'

                return false
            } 

            this.$refs.password_error.innerHTML = ''
        
            return true
        },

        submitRegister(event) {
            const isValid = this.formIsValid()

            if (isValid) {
                let body = {
                    first_name: this.firstName,
                    last_name: this.lastName,
                    phone_number: this.phone_number,
                    password: this.password,

                }
                

                this.postRegister(body)

                this.store.$patch({ password: this.password })
            } 
        },

        postRegister(body) {
            fetch(`${this.baseUrl}/api/users/`, {
                method: 'POST', // or 'PUT'
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                    'x-csrftoken': this.csrfToken
                },
                body: JSON.stringify(body),
                
            })
            .then((response) => {
                this.statusCode = response.status
                return response.json()
            })
            .then((data) => {
                if (this.statusCode == 400){
                    this.response.errors.push(data.Error)
                    console.log('Error:', data.Error);
                }
                else {
                    this.response.errors = []

                    this.store.$patch({ firstConfirm: data.firstConfirm, phone_number: data.username, userToken: data.token, isLogined: true })

                    this.ToVerification()


                    this.store.getMe()
                    this.store.getAdresses()
                    
                }
            })
            .catch((error) => {
                console.log(error);
            }); 

        }

    },

    
}
</script>





<style scoped>

                        
                        
#register {
    z-index: 1000;
}
.success {
    color: rgb(31, 129, 31);
}
.error {
    color: #ff6b6b !important;
    padding-top: 3px;
}
.d-md-flex {
    justify-content: right;
    margin-top: 10px;
}
.d-md-flex span {
    display: inline-block;
    padding-right: 10px;
}
.form-control {
    margin-top: 10px;
}
.custom-control {
    position: relative;
    display: block;
    min-height: 1rem;
    padding-left: 1.5rem; 
}
  
.custom-control-inline {
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    margin-right: 1rem; 
}

.custom-control-input {
    position: absolute;
    z-index: 1000;

    z-index: -1;
    opacity: 0; 
}
.custom-control-input:checked ~ .custom-control-label::before {
    border-color: #007bff;
    background-color: #007bff; 
}
.custom-control-input:focus ~ .custom-control-label::before {
    -webkit-box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25); 
}
.custom-control-input:focus:not(:checked) ~ .custom-control-label::before {
    border-color: #80bdff; 
}
.custom-control-input:not(:disabled):active ~ .custom-control-label::before {
    color: #fff;
    background-color: #b3d7ff;
    border-color: #b3d7ff; 
}
.custom-control-input:disabled ~ .custom-control-label {
    color: #6c757d; 
}
.custom-control-input:disabled ~ .custom-control-label::before {
    background-color: #e9ecef; 

}
  
.ftco-section {
    padding: 7em 0; 
}
  
.ftco-no-pt {
    padding-top: 0; 
}
  
.ftco-no-pb {
    padding-bottom: 0; 
}
  
.heading-section {
    font-size: 28px;
    color: #000; 
}
  
.img {
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center; 
}
  
.login-wrap {
    position: relative;
    background: #fff;
    border-radius: 10px;
    -webkit-box-shadow: 0px 10px 34px -15px rgba(0, 0, 0, 0.24);
    -moz-box-shadow: 0px 10px 34px -15px rgba(0, 0, 0, 0.24);
    box-shadow: 0px 10px 34px -15px rgba(0, 0, 0, 0.24); 
}
.login-wrap h3 {
      font-weight: 300; 
}
.login-wrap .icon {
    width: 80px;
    height: 80px;
    background: #1089ff;
    border-radius: 50%;
    font-size: 30px;
    margin: 0 auto;
    margin-bottom: 10px; }
    .login-wrap .icon span {
    color: #fff; 
}
  
.form-control {
    height: 42px;
    background: #fff;
    color: #000;
    font-size: 16px;
    border-radius: 5px;
    -webkit-box-shadow: none;
    box-shadow: none;
    border: 1px solid rgba(0, 0, 0, 0.1); 
}
.form-control:focus, .form-control:active {
    outline: none !important;
    -webkit-box-shadow: none;
    box-shadow: none;
    border: 1px solid #1089ff; 
}
  
textarea.form-control {
    height: inherit !important; 
}
  
.btn-custom {
    cursor: pointer;
    border-radius: 40px;
    -webkit-box-shadow: none !important;
    box-shadow: none !important;
    font-size: 15px; 
}
.btn:hover, .btn:active, .btn:focus {
    outline: none; 
}
.btn.btn-primary {
    background: #1089ff !important;
    border: 1px solid #1089ff !important;
    color: #fff !important; }
    .btn.btn-primary:hover {
    border: 1px solid #1089ff;
    background: transparent;
    color: #1089ff; }
    .btn.btn-primary.btn-outline-primary {
    border: 1px solid #1089ff;
    background: transparent;
    color: #1089ff; 
}
.btn.btn-primary.btn-outline-primary:hover {
    border: 1px solid transparent;
    background: #1089ff;
    color: #fff; 
}
  
.reg-to-log {
    color: #1089ff;
}


@import url("https://fonts.googleapis.com/css2?family=Lato&display=swap");


.heading {
  font-size: 1.5em;
  margin-bottom: 12px;
}

.card {
  background: #fff;
  background-image: linear-gradient(48deg, #fff 0%, #e5efe9 100%);
  border-top-right-radius: 16px;
  border-bottom-left-radius: 16px;
  box-shadow: -20px 20px 35px 1px rgba(10, 49, 86, 0.18);
  display: flex;
  flex-direction: column;
  padding: 32px;
  margin: 40px;
  max-width: 400px;
  width: 100%;
}

.content-wrapper {
  font-size: 1.1em;
  margin-bottom: 44px;
}
.content-wrapper:last-child {
  margin-bottom: 0;
}

.input-wrapper {
  display: flex;
  flex-direction: column;
}
.input-wrapper .label {
  align-items: baseline;
  display: flex;
  font-weight: 700;
  justify-content: space-between;
  margin-bottom: 8px;
}
.input-wrapper .optional {
  color: #5a72b5;
  font-size: 0.9em;
}
.input-wrapper .input {
  border: 1px solid #5a72b5;
  border-radius: 4px;
  height: 40px;
  padding: 8px;
}

code {
  background: #e5efe9;
  border: 1px solid #5a72b5;
  border-radius: 4px;
  padding: 2px 4px;
}


.close {
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  height: 16px;
  text-decoration: none;
}
.close svg {
  width: 16px;
}

.modal-wrapper {
  align-items: center;
  background: rgba(0, 0, 0, 0.7);
  /* bottom: 0; */
  display: flex;
  justify-content: center;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 1000;
}


.outside-trigger {
  bottom: 0;
  cursor: default;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
}

.button__link {
  text-decoration: none;
}
.close {
    justify-content: right;
}


</style>

