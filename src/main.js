import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'
import { createMemoryHistory, createRouter } from 'vue-router'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import ParentComponent from './components/ParentComponent.vue'
import SecondAssessment from './components/SecondAssessment.vue'
import ThirdAssessment from './components/ThirdAssessment.vue'

const store = createStore({
    state () {
        return {
            usersDataList: []
        }
    },
    mutations: {
        setData (state, data) {
            state.usersDataList = data
        }
      },
    getters: {
        getUsersDataList (state) {
            console.log(state, 'hhh')
            return state.usersDataList
        }
    }
  })

const routes = [
  { path: '/', component: ParentComponent },
  { path: '/SecondAssessment', component: SecondAssessment },
  { path: '/ThirdAssessment', component: ThirdAssessment },
  { path: '/', component: ParentComponent },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})
const vuetify = createVuetify({
    components,
    directives,
  })

createApp(App)
  .use(router)
  .use(vuetify)
  .use(store)
  .mount('#app')
