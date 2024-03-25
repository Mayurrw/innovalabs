<template>
    <v-row>
        <v-col cols=12>
            <h4>{{ msg }}</h4>
        </v-col>
    </v-row>
    <v-row>
        <v-col cols=12>
            <!-- <v-btn @click="emitMessageFromParent">Parent to child</v-btn> -->
            <v-btn color="success" @click="childToParentCommunication">Child-Parent</v-btn>
            <v-btn color="success" class="ml-4" @click="childToChildCommunication">Child-Child</v-btn>
        </v-col>
    </v-row>
</template>
<script>
export default {
    name: 'FirstChild',
    props: {
        msg: String,
    },
    data () {
        return {
            msgFromChildToParent: "Hi This is child passing msg to parent using $emit",
            msgFromChildToChild: "Hi This is child passing msg to child from child using $emit"
        }
    },
    methods: {
        emitMessageFromParent () {
            this.$emit('getMsgFromParent')
        },
        childToParentCommunication () {
            this.$emit('childToParent', this.msgFromChildToParent )
        },
        childToChildCommunication () {
            this.$emit('childToChild', this.msgFromChildToChild )
        },
        parentToChildCommunication () {
            return this.msg
        }
    }
}
</script>
<style scoped>
</style>
