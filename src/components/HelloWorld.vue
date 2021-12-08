<template>
  <div class="hello">
    <div class="font">{{ msg }}</div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.font{
  width: 750px;
  height: 750px;
  background: #ff0;
}
</style>
