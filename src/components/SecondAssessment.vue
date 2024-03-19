<template>
    <h4>Assessment Second</h4>
    <v-text-field class="search" v-model='search' label="Search" clearable></v-text-field>
    <v-data-table class="data-table" :search="search" :items="getUsersDataList" :headers="headers">

    </v-data-table>
</template>
<script>
// import { mapState } from 'vuex'
import { mapMutations } from 'vuex'
import { mapGetters } from 'vuex'


export default {
  name: 'SecondAssessment',
  data () {
      return {
        search: '',
        headers: [
            {
                text: 'ID',
                value: 'id'
            },
            {
                text: 'Name',
                value: 'name'
            },
            {
                text: 'User Name',
                value: 'username'
            },
            {
                text: 'Email',
                value: 'email'
            },
            {
                text: 'Website',
                value: 'website'
            },
            {
                text: 'Phone',
                value: 'phone'
            }
        ]
    }
  },
  computed: {
      ...mapGetters([
        // usersDataList: state => state.usersDataList
        'getUsersDataList'
      ]),
  },
  async mounted () {
    // this.usersDataList = await this.getUserData()
    // console.log(this.usersDataList, 'Mayur')
    this.setData(await this.getUserData())
  },
  methods: {
    ...mapMutations([
      'setData'
  ]),
    async getUserData () {
      const response = await fetch('https://jsonplaceholder.typicode.com/users')
      const data = await response.json()
      return data
    //   .then(response => this.usersDataList = response.json())
    //   .then(json => console.log(json))
    }
  }
}
</script>

<style scoped>
.search {
    width: 200px;
    display: block;
}
.data-table {
  margin-left: 2px;
    width: 99%;
    border: 1px solid green;
}
</style>
