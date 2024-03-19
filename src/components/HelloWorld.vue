<template>
    <h1>{{ msg }}</h1> <!--This msg is passed through props by parent App.vue-->
    <v-btn @click="getUserData">User Data</v-btn>
</template>

<script>
export default {
  name: 'HelloWorld',
  // passing props
  props: {
    msg: String
  },
  methods: {
    getUserData () {
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => console.log(json))
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
