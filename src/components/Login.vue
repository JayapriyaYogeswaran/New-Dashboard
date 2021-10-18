<template>
     <div class="hold-transition login-page">
<div class="login-box">
  <div class="login-logo">
    <a href="../../index2.html"><b>Login</b></a>
  </div>
  <!-- /.login-logo -->
  <div class="card">
    <div class="card-body login-card-body">
      <p class="login-box-msg">Sign in to start your session</p>
      <div class="row pb-3">
        <div class="col">
       <span v-show="errMsg" class="required">{{errMsg}}</span>
        </div>
      </div>
       <!-- <div class="row">
         <div class="col"> -->
                 <div class="input-group mb-3">
          <input type="email" name="email" id="email" v-model="email" v-validate="'required|email'" class="form-control" placeholder="Email">
          <div class="input-group-append">
            <div class="input-group-text">
              <span class="fas fa-envelope"></span>
            </div>
          </div>
          <span v-show="errors.has('email')" class="required">{{ errors.first('email') }}</span>

        </div>
         <!-- </div>
       </div> -->
       <!-- <div class="row">
         <div class="col"> -->
               <div class="input-group mb-3">
          <input type="password" name="password" id="password" v-model="password" v-validate="'required|min:8'" class="form-control" placeholder="Password">
          <div class="input-group-append">
            <div class="input-group-text">
              <span class="fas fa-lock"></span>
            </div>
          </div>
          <span v-show="errors.has('password')" class="required">{{ errors.first('password') }}</span>

        </div>
         <!-- </div>
       </div> -->
  
    
        <div class="row">
       
          <!-- /.col -->
          <div class="col text-center">
            <button type="submit" v-on:click="login" class="btn btn-primary btn-block">Sign In</button>
          </div>
          <!-- /.col -->
        </div>
    </div>
    <!-- /.login-card-body -->
  </div>
</div>

</div>
</template>
<script>
import userList from '../assets/users.json'
import { mapGetters } from 'vuex';
export default {
    name : 'Login',
    data() {
      return {
        email : "",
        password : "",
        errMsg : ""
      }
    },
      beforeMount() {

    if(this.getUserData){
      this.$router.push('/')
		}
  },
    computed : {

      ...mapGetters(['getUserData'])
    },
    methods : {
      login() {
        this.$validator.validateAll().then((result) => {
        if (result) {
          for(let i=0;i<userList.length;i++) {
            if(userList[i].email == this.email && userList[i].password == this.password){
         
              this.$store.dispatch('setUserInfo',this.email);
              this.$router.push('/')
            }
            else {
              this.errMsg = "Please Enter Valid Email and Password"
            }
          }
        }
          })
      }
    },
      components: {
    
  }
}
</script>
<style scoped>
.required {
  width: 100%;
    margin-top: .25rem;
    font-size: .875em;
    color: #dc3545;
}
</style>