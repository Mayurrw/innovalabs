<template>
    <h2>Child first</h2>
    <h4>{{ msg }}</h4>
    <v-btn @click="childToParentCommunication">Child-Parent</v-btn>
    <v-btn class="ml-4" @click="childToChildCommunication">Child-Child</v-btn>
</template>
<script>
export default {
    name: 'FirstChild',
    props: {
        msg: String,
    },
    data () {
        return {
            msgFromChild: "Hi This is chile passing msg to parent using $emit",
            msgFromChildToChild: "Hi This is chile passing msg to child from child using $emit"
        }
    },
    methods: {
        childToParentCommunication () {
            this.$emit('childToParent', this.msgFromChild )
        },
        childToChildCommunication () {
            this.$emit('childToChild', this.msgFromChildToChild )
        }
    }
}
</script>
<style scoped>
</style>
