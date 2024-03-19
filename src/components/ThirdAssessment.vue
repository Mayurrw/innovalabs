<template>
    <h3>Third Assignment</h3>
    <v-sheet class="mx-auto">
        <v-form @submit.prevent="onFormSubmit">
            <template v-for="blockInput in formData.blocks" :key="blockInput.token">
                <label class="block-label" :for="blockInput.token">{{ blockInput.props.title }}</label>
                <input class="block-input" :id="blockInput.token" :type="blockInput.type" :placeholder="blockInput?.props?.placeholder" :required="!!(blockInput?.props?.required)"/>
            </template>
            <button class="mt-2" type="submit" block>Submit</button>
        </v-form>
  </v-sheet>
</template>

<script>
 export default {
    name: "ThirdAssessment",
    data () {
        return {
            formData: {
                blocks: [
                    {
                        token: "PERSON_NAME",
                        type: "text",
                        props: {
                            title: "Enter Your Name",
                            required: true,
                            placeholder: "e.g. John Doe"
                        }
                    },
                    {
                        token: "IS_PERSON_MINOR",
                        type: "checkbox",
                        props: {
                            title: "Is the current person minor",
                            default: false
                        }
                    },
                    {
                        token: "PERSONS DOB",
                        type: "date",
                        props: {
                            title: "Enter Your DOB",
                            required: "IS_PERSON_MINOR",
                            placeholder: "01-01-2000"
                        }
                    }
                ]
            }
        }
    },
    methods: {
        onFormSubmit () {
            let userAge = document.getElementById("IS_PERSON_MINOR").checked
            let userName = document.getElementById("PERSON_NAME")
            if (userName && !userName.value){
                alert("Please Input Name")
            }
            if (userAge.checked) {
                console.log("Please check age")
            } else {
                alert("Please Check if you are not minor")
            }
        }
    }
 }
</script>

<style scoped>
.block-input {
    display: block;
    min-width: 100px;
    margin: 16px;
    border-bottom: 1px solid lightgray;
    padding-bottom: 16px;
}
.block-label {
    text-align: left;
    margin-left: 16px;
    display: block;
    min-width: 100px;
}
</style>
