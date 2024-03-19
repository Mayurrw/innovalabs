<template>
    <v-data-table v-model="usersData">
        Users Data
    </v-data-table>
</template>

<script>
export default {
    data (){
        return {
            usersData: []
        }
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

<style scoped>

</style>
