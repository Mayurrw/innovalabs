<template>
    <h2>Child second</h2>
    <h3>{{ msg }}</h3>
</template>
<script>
export default {
    name: 'SecondChild',
        props: {
            msg: String,
        },
}
</script>
<style scoped>
</style>
