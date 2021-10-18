<template>
<div>
<Header></Header>
<Content></Content>

</div>
</template>

<script>
import Header from './Header.vue'
import Content from './Content.vue'
export default {
  name: 'Home',
  props: {
    msg: String
  },
  components : {
    Header,
    Content
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped> 
.Content-Wrapper {
  height: 100%;
  background-color: #f4f6f9;
  padding: 10px;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
