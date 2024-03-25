<template>
    <v-row>
      <v-col cols=12>
        <FirstChild :msg='msg' @childToParent="getChildDataForParent" @childToChild="getDataFromFirstChild"/>
      </v-col>
      <v-col cols=12>
        <h4>{{ strDisplay ? strDisplay : childToChild }}</h4>
      </v-col>
    </v-row>
    <!-- <FirstChild :msg='msg' @getMsgFromParent="getMsgFromParent" @childToParent="getChildDataForParent" @childToChild="getDataFromFirstChild"/> -->
    <v-row>
      <v-col cols=12>
        <SecondChild/>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-btn @click="goToSecondAssessment">Assessment 2</v-btn>
        <v-btn class="ml-4" @click="goToThirdAssessment">Assessment 3</v-btn>
      </v-col>
    </v-row>
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
      msg: "Welcome to Innova Labs Assessment", //This is message from parent to child
      strDisplay: '',
      childToChild: ''
    }
  },
  methods: {
    // getMsgFromParent () {
    //   console.log("Button is clicked in child component")
    // }
    getChildDataForParent (string) {
      this.strDisplay = string
      this.childToChild = ''
    },
    getDataFromFirstChild (string) {
      this.childToChild = string
      this.strDisplay = ''
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