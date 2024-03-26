<template>
    <v-row align="start">
        <v-col cols="6" align="left">
          <v-btn class="back-button ml-8" color="primary" @click="goToHomePage">Go BACK</v-btn>
        </v-col>
        <v-col cols="6" align="end">
          <v-btn class="back-button mr-4" color="secondary" @click="goToSecondAssessment">Second Assessment</v-btn>
        </v-col>
      </v-row>
    <h3>Third Assignment</h3>
    <v-sheet class="mx-auto">
        <v-row class="ml-4">
            <v-col cols=12>
                <h5 align="start">{{ "Question:- "+question }}</h5>
            </v-col>
            <v-col cols=12>
                <h5 align="start">Answer:-</h5>
            </v-col>
            <v-form @submit.prevent="onFormSubmit" class="ml-4">
                <div>
                    <v-row class="d-flex" v-for="blockInput in formData.blocks" :key="blockInput.token">
                        <v-col cols="8">
                            <label class="block-label mt-4" :for="blockInput.token">{{ blockInput.props.title }}</label>
                        </v-col>
                        <v-col cols="4">
                            <input class="block-input" :id="blockInput.token" :type="blockInput.type" :placeholder="blockInput?.props?.placeholder" :required="!!(blockInput?.props?.required)"/>
                        </v-col>
                    </v-row>
                </div>
                <v-btn class="mt-2" type="submit" block>Submit</v-btn>
            </v-form>
        </v-row>
  </v-sheet>
</template>

<script>
 export default {
    name: "ThirdAssessment",
    data () {
        return {
            isMinor: false,
            question: "Write code to build form and handle this dynamically. When the user press submit button this form needs to be validated before submit. This block can be dynamic JSON. This can be N number of Blocks.",
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
                        token: "PERSONS_DOB",
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
        checkAge() {
            const userAge = document.getElementById("PERSONS_DOB")
            const today = new Date();
            const birthDate = new Date(userAge.value);
            const age = today.getFullYear() - birthDate.getFullYear();
            if (age < 18) {
                document.getElementById("IS_PERSON_MINOR").checked = true
            } else {
                document.getElementById("IS_PERSON_MINOR").checked = false
            }
        },
        onFormSubmit () {
            let userName = document.getElementById("PERSON_NAME")
            let userDob = document.getElementById("PERSONS_DOB")
            if (userName && !userName.value){
                alert("Please Input Name")
            } else if (!userDob.value) {
                alert("Please Input DOB")
            } else if (userDob.value) {
                this.checkAge()
            } else {
                alert("Form submitted successfully")
            }
        },
        goToHomePage () {
            this.$router.push('/')
        },
        goToSecondAssessment () {
            this.$router.push('/SecondAssessment')
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
