<script>
import axios from "axios";
export default {
  data() {
    return {
      user: [],
    };
  },
  methods: {
    getSingleUser() {
      axios
        .get(`https://reqres.in/api/users/${this.$route.params.id}`)
        .then((response) => {
          this.user.push(response.data.data);
        });
    },
    goToDashboard() {
      this.$router.push("/dashboard");
    },
  },
  created() {
    this.getSingleUser();
  },
};
</script>

<template>
  <div>
    <div class="col d-flex justify-content-center">
      <div class="singleContainer">
        <b-row>
          <div class="box" v-for="(id, i) in user" :key="i">
            <div class="top">
              <img class="profile" :src="id.avatar" alt="" />
              <h1 class="title">{{ id.first_name }} {{ id.last_name }}</h1>
              <h3 class="job">{{ id.email }}</h3>
              <div style="position: relative">
                <b-col @click="goToDashboard"
                  ><b-button lg="4" class="review" size="lg"
                    >Back</b-button
                  ></b-col>
              </div>
            </div>
          </div>
        </b-row>
      </div>
    </div>
  </div>
</template>

<style></style>
