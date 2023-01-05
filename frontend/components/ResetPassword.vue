<template >

<div id="login">
    
        <section class="ftco-section modal-wrapper" v-show="resetStatus">

            <div class="container">
                <div class="row justify-content-center ">
                    
                    <div class="col-md-7 col-lg-5">
                        
                        
                        <div class="login-wrap p-4 p-md-5">
                            

                            <a @click="resetToggleModal" role="button" class="close" aria-label="close this modal">
                                <svg viewBox="0 0 24 24">
                                    <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" />
                                </svg>
                            </a>
                        
                      
                        <h3 class="text-center mb-4">Send Confirmation Code</h3>
                        
                        <form action="#" class="login-form" @submit.prevent="submitSend()">
                            <div class="form-group d-flex">
                                <input type="text" class="form-control rounded-left" placeholder="Тел Номер" v-model="phone_number" required>
                            </div>
                            <span style="color:#000; font-size:10px;" class="phoneError error" ref="phone_error"></span>
                        
                            <div class="form-group">
                                <button type="submit" class="form-control btn-custom btn btn-primary rounded submit px-3">send</button>
                            </div>
                        </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        <section class="ftco-section modal-wrapper" v-show="resetConfirmStatus">

            <div class="container">
                <div class="row justify-content-center ">
                    
                    <div class="col-md-7 col-lg-5">
                        
                        
                        <div class="login-wrap p-4 p-md-5">
                            

                            <a @click="resetConfirmToggle" role="button" class="close" aria-label="close this modal">
                                <svg viewBox="0 0 24 24">
                                    <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" />
                                </svg>
                            </a>
                        
                    
                        <h3 class="text-center mb-4">Reset Password</h3>
                        
                        <form action="#" class="login-form" @submit.prevent="submitReset()">
                            <div class="form-group d-flex">
                                <input type="text" class="form-control rounded-left" placeholder="Confirmaton code" v-model="confirm_code" required>
                            </div>
                            <span style="color:#000; font-size:15px;" class="phoneError pt-2 pb-2 error" > {{ response.errors[0] }}</span>
                            <span style="font-size:15px;" class="text-success pt-2 pb-2"> {{ response.data }}</span>
                        
                            <div class="form-group">
                                <button type="submit" class="form-control btn-custom btn btn-primary rounded submit px-3">Reset</button>
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
import { mapActions, mapState, mapStores } from 'pinia';
import { AccountStore } from '~~/stores';

export default {
    data() {
        return {
            phone_number: '',
            response: {
                errors: [],
                data: '',
                statusCode: ''
            },
            confirm_code: ''
        }
    },
    computed: {
        ...mapStores(AccountStore),
        ...mapState(AccountStore, ['resetStatus', 'resetConfirmStatus', 'username_reset']),
        ...mapActions(AccountStore, ['resetToggleModal', 'resetConfirmToggle'])
    },

    created() {
        this.store = AccountStore()
    },



    methods: {
        ...mapActions(AccountStore, ['changeResetUsername']),

        SendToReset() {
            this.store.$patch({ resetStatus: false, resetConfirmStatus: true})
        },

        submitReset() {

            let body = {
                phone_number: this.username_reset,
                confirm_code: this.confirm_code
            }

            let csrf_token = useCookie('csrftoken').value
            
            fetch('http://localhost:8000/api/users/reset_password/', {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                    'x-csrftoken': csrf_token
                },
                body: JSON.stringify(body),
            })
            .then((response) => {
                this.statusCode = response.status
                return response.json()
            })
            .then((data) => {
                if (this.statusCode == 400){
                    this.response.errors.push(data.detail)
                }
                else if (this.statusCode == 200) {
                    this.response.errors = []
                    this.response.data = data.detail
                    this.confirm_code = ''
                } else {
                    console.log(data);
                }
            })
            .catch((error) => {
                console.log(error);
            }); 
        },

        submitSend() {
            let body = {
                phone_number: this.phone_number,
            }

            let csrf_token = useCookie('csrftoken').value
            
            fetch('http://localhost:8000/api/users/send_to_reset/', {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                    'x-csrftoken': csrf_token
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
                else if (this.statusCode == 200) {
                    this.response.errors = []

                    this.changeResetUsername(data.user)
                    this.SendToReset()

                    console.log(data);

                } else {
                    console.log(data);
                }
            })
            .catch((error) => {
                console.log(error);
            }); 

        },

        
    }
}
</script>




<style scoped>

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
    z-index: 1000 !important;

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
  display: flex;
  justify-content: center;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 1000 !important;
  

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

