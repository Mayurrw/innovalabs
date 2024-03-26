<template>
  <div id="app">
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>User Name</th>
          <th>Email</th>
          <th>Address</th>
          <th>Contact</th>
          <th>Company</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="record in paginatedRecords" :key="record.id">
          <td>{{ record.id }}</td>
          <td>{{ record.name }}</td>
          <td>{{ record.username }}</td>
          <td>{{ record.email }}</td>
          <td>{{ record.address }}</td>
          <td>{{ record.phone }}</td>
          <td>{{ record.company }}</td>
        </tr>
      </tbody>
    </table>
    <div class="pagination">
      <v-btn @click="previousPage" :disabled="currentPage === 1">Previous</v-btn>
      <span class='mx-4'>{{ currentPage }}</span>
      <v-btn @click="nextPage" :disabled="currentPage === totalPages">Next</v-btn>
    </div>
  </div>
    <!-- <div class="second-assessment">
      <v-row>
        <v-col cols="6" align="left">
          <v-btn class="back-button ml-8" color="primary" @click="goToHomePage">Go BACK</v-btn>
        </v-col>
        <v-col cols="6" align="end">
          <v-btn class="back-button mr-4" color="secondary" @click="goToThirdAssessment">Third Assessment</v-btn>
        </v-col>
      </v-row>
      <v-row class="ml-4">
        <v-col cols=12>
          <h5 align="start">{{ "Question:- "+quetsion }}</h5>
        </v-col>
        <v-col cols=12>
          <h4 align="start">Answer:-</h4>
        </v-col>
      </v-row>
      <h3>Assessment Second</h3>
      <v-text-field class="search ml-4" v-model='search' label="Search" clearable></v-text-field>
      <v-data-table class="data-table ml-4" :headers="headers" :search="search" :items="getUsersDataList">
        
      </v-data-table> -->
</template>
<script>
import { mapMutations } from 'vuex'
import { mapGetters } from 'vuex'


export default {
  name: 'SecondAssessment',
  data () {
      return {
        search: '',
        itemsPerPage: 5,
        currentPage: 1,
        quetsion: "Need to list total users from an API in a paginated list. The list can be searched and filtered.The user can search and filter the user list with all parameters.Must use Vuex",
        headers: [
            {
                title: 'ID',
                key: 'id'
            },
            {
                title: 'Name',
                key: 'name'
            },
            {
                title: 'User Name',
                key: 'username'
            },
            {
                title: 'Email',
                key: 'email'
            },
            {
                title: 'Address',
                key: 'address'
            },
            {
                title: 'Phone',
                key: 'phone'
            },
            {
                title: 'Website',
                key: 'website'
            },
            {
                title: 'Company',
                key: 'company'
            }
        ]
    }
  },
  computed: {
      ...mapGetters([
        'getUsersDataList'
      ]),
    paginatedRecords() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      return this.getUsersDataList.slice(startIndex, endIndex);
    },
    totalPages() {
      return Math.ceil(this.getUsersDataList.length / this.itemsPerPage);
    }
  },
  async mounted () {
    this.setData(await this.getUserData())
  },
  methods: {
    ...mapMutations([
      'setData'
  ]),
  previousPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
    async getUserData () {
      const response = await fetch('https://jsonplaceholder.typicode.com/users')
      const data = await response.json()
      return data
    },
    goToHomePage () {
      this.$router.push('/')
    },
    goToThirdAssessment () {
      this.$router.push('/ThirdAssessment')
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
.back-button {
  justify-content: end;
}
</style>
<style>
.second-assessment .v-data-table-header__content {
  display: ruby-text;
}
</style>
