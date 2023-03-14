<script>
import axios from "axios";
export default {
  data() {
    return {
      key: "https://reqres.in/api/users?page=1",
      members: [],
    };
  },
  methods: {
    getAllUser() {
      axios({
        url: this.key,
        method: "GET",
      }).then((response) => {
        this.$toast.open({
          message: "Kullanıcılar başarıyla listelendi.",
          type: "success",
          duration: 5000,
          dismissible: true,
        });
        response.data.data.forEach((item) => {
          this.members.push(item);
        });
      });
    },
    detail(id) {
      this.$router.push({ name: "Detail", params: { id: id.id } });
    },
    createMember() {
      this.$router.push("/createMember");
    },
  },
  created() {
    this.getAllUser();
  },
};
</script>

<template>
  <div>
    <div class="row">
      <br />
      <div class="menu">
        <div style="float: left">
          <span class="members">All Members</span>
        </div>
        <div style="float: right">
          <b-button class="review2" @click="createMember"
            >Create New Member</b-button
          >
        </div>
      </div>
      <div class="col-12">
        <div class="container">
          <b-row>
            <div class="box" v-for="(id, i) in members" :key="i">
              <div class="top">
                <img class="profile" :src="id.avatar" alt="" />

                <h1 class="title">{{ id.first_name }} {{ id.last_name }}</h1>
                <h3 class="job">{{ id.email }}</h3>
                <div style="position: relative">
                  <b-col
                    ><b-button
                      lg="4"
                      class="review"
                      @click="detail(id)"
                      size="lg"
                      >Review</b-button
                    ></b-col
                  >
                </div>
              </div>
            </div>
          </b-row>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.left-btn {
  float: left;
}
.right-btn {
  float: right;
}
</style>
