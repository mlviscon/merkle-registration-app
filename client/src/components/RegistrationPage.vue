<template>
  <div class="registration_page">
      <!-- <span>Registration page</span> -->
      <div class="form">
        <div class="form_input">
            <div>First Name</div>
            <input v-model="firstName" type="text">
        </div>
        <div class="form_input">
            <div>Last Name</div>
            <input v-model="lastName" type="text">
        </div>
        <div class="form_input">
            <div>Address 1</div>
            <input v-model="addressOne" type="text">
        </div>
        <div class="form_input">
            <div>Address 2</div>
            <input v-model="addressTwo" type="text">
        </div>
        <div class="form_input">
            <div>City</div>
            <input v-model="city" type="text">
        </div>
        <div class="form_input">
            <div>State</div>
            <input v-model="state" type="text">
        </div>
        <div class="form_input">
            <div>Zip</div>
            <input v-model="zip" type="text">
        </div>
        <div class="form_input">
            <div>Country</div>
            <input v-model="country" type="text">
        </div>
      </div>
      <div class="submit_button" @click="submitForm">
          <div>Submit</div>
      </div>

      <div class="error-pop" v-if="error">
          Error: {{error}}
      </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
    name: "registrationPage",
    data () {
        return {
            submitted: false,
            firstName: undefined,
            lastName: undefined,
            addressOne: undefined,
            addressTwo: undefined,
            city: undefined,
            state: undefined,
            zip: undefined,
            country: undefined,
            error: undefined
        }
    },
    methods: {
        submitForm() {
            this.error = undefined

            const stateAbbreviations = [
            'AL','AK','AS','AZ','AR','CA','CO','CT','DE','DC','FM','FL','GA',
            'GU','HI','ID','IL','IN','IA','KS','KY','LA','ME','MH','MD','MA',
            'MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND',
            'MP','OH','OK','OR','PW','PA','PR','RI','SC','SD','TN','TX','UT',
            'VT','VI','VA','WA','WV','WI','WY'
            ];


            if (!this.firstName || !this.lastName) {
                this.error = 'invalid name'
                return;
            } 
            if (!this.addressOne) {
                this.error = 'invalid address'
                return;
            }
            if (!this.city) {
                this.error = 'invalid city'
                return;
            }
            if (!this.state || !stateAbbreviations.includes(this.state.toUpperCase())) {
                this.error = 'invalid state'
                return;
            }
            if (!new RegExp(/(^\d{5}$)|(^\d{5}-\d{4}$)/).test(this.zip) ) {
                this.error = 'invalid zip';
                return;
            }
            if (!this.country || this.country.toUpperCase() != 'US') {
                this.error = 'invalid country (only US is allowed)'
                return;
            }
            if (this.error) {
                return;
            }
            const body = {
                firstName: this.firstName,
                lastName: this.lastName,
                addressOne: this.addressOne,
                addressTwo: this.addressTwo,
                city: this.city,
                state: this.state.toUpperCase(),
                zip: this.zip,
                country: this.country.toUpperCase()
            }
            axios.post('http://merkleregistrationapi-env.eba-apbizruq.us-east-2.elasticbeanstalk.com/users', body).then(response => {
                console.log(response.data)
                this.$router.push('/confirmation');
            }).catch(error => {
                console.log(error.response)
                this.error = error.response.data.message;
            })
        }
    }
}
</script>

<style>
    .form_input{
        margin-top: 10px;
    }
    input{
        /* margin-top: 10px; */
        width: 100%;
    }
    .form {
        /* padding-left: 50px; */
        max-width: 50%;
        margin: auto;
    }
    .submit_button {
        /* box-sizing: border-box; */
        background-color: green;
        color: white;
        font-size: 24px;
        text-align: center;
        line-height: 80px;
        margin: auto;
        margin-top: 20px;
        /* max-width: 50%; */
        max-width: 190px;
        height: 80px;
        border-radius: 10px;
        /* box-shadow: 3px 3px 5px 3px rgba(0, 0, 0, 0.623); */
        /* padding-top: 100%; */
    }

    .submit_button div {
        text-align: center;
        margin: auto;
    }

    .submit_button:hover {
        cursor: pointer;
    }

    .submit_button:active {
        transform: scale(0.98);
        /* Scaling button to 0.98 to its original size */
        box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
        /* Lowering the shadow */
    }

    .error-pop {
        background-color: rgb(255, 74, 74);
        color: white;
        width: 50%;
        margin: auto;
        margin-top: 20px;
        padding-left: 20px;
        min-height: 40px;
        border-radius: 10px;
        line-height: 40px;
    }
</style>