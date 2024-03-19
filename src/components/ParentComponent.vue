<template>
    <FirstChild :msg='msg' @childToParent="getChildDataForParent" @childToChild="getDataFromChild1"/>
    <h4>{{ strDisplay }}</h4>
    <SecondChild :msg='childToChild'/>
    <v-btn @click="goToSecondAssessment">Assessment 2</v-btn>
    <v-btn class="ml-4" @click="goToThirdAssessment">Assessment 3</v-btn>
</template>
<script>
import FirstChild from './FirstChild.vue'
import SecondChild from './SecondChild.vue'

export default {
  name: 'ParentComponent',
  components: {
    FirstChild,
    SecondChild
  },
  data() {
    return {
      msg: "Welcome to Innova Labs Assessment (This is message from parent to child)", //This is message from parent to child
      strDisplay: '',
      childToChild: ''
    }
  },
  methods: {
    getChildDataForParent (string) {
      this.strDisplay = string
    },
    getDataFromChild1 (string) {
      this.childToChild = string
    },
    goToSecondAssessment () {
      this.$router.push('/SecondAssessment')
    },
    goToThirdAssessment () {
      this.$router.push('/ThirdAssessment')
    }
  }
}
</script>
<style scoped>
</style>