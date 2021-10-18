<template>
      <nav class="navbar navbar-expand navbar-white navbar-light">
    <!-- Left navbar links -->
    <div class="navbar-nav">
        <h1>Dashboard</h1>
    </div>

    <!-- Right navbar links -->
    <div class="navbar-nav ml-auto">
     <button type="submit" v-on:click="logout" class="btn btn-danger">Logout</button>
    </div>
  </nav>
</template>
<script>
export default {
    name : 'Header',
    methods : {
      logout() {
         this.$store.dispatch('setUserInfo',"");
        this.$router.push('login')
      }
    }
}
</script>