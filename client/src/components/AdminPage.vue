<template>
  <div class="admin_page">
      <span>admin page</span>
      <!-- <div v-for="user in users" v-bind:key="user.id">{{user.id}} {{user.first_name}} {{user.last_name}}</div> -->

    <div class="user-list-container">
        <table class="user-table">
            <tr>
                <th class="first-name-col">First Name</th>
                <th>Last Name</th>
                <th>Address1</th>
                <th>Address2</th>
                <th>City</th>
                <th>State</th>
                <th>Zip</th>
                <th>Country</th>
                <th>Registration Date</th>
            </tr>

            <tr v-for="user in users" v-bind:key="user.id">
                <td>{{user.first_name}}</td>
                <td>{{user.last_name}}</td>
                <td>{{user.address_one}}</td>
                <td>{{user.address_two}}</td>
                <td>{{user.city}}</td>
                <td>{{user.state}}</td>
                <td>{{user.zip}}</td>
                <td>{{user.country}}</td>
                <td>{{user.date}}</td>
            </tr>

        </table>

    </div>

  </div>
</template>

<script>
import axios from 'axios'

export default {
    name: "adminPage",
    data () {
        return {
            users: []
        }
    },
    mounted() {
        axios.get('http://localhost:3001/users?orderBy=registration_date').then(response => {
            this.users = response.data.data
            console.log(response.data.data);
        })
    }
}
</script>

<style>
    table, td, th {
        table-layout: fixed;
        border: 1px solid black;
    }

    .user-list-container {
        width: 90%;
        margin: auto;
    }

    .user-table{
        width: 100%;
    }

    .first-name-col{
        max-width: 20px;
    }
</style>