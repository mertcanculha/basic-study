<script>
import axios from "axios";
export default {
    data() {
        return {
            name: "",
            job: "",
        };
    },
    methods: {
        postUser() {
            axios({
                method: "POST",
                url: "https://reqres.in/api/users",
                data: {
                    name: this.name,
                    job: this.job,
                },
            })
                .then((res) => {
                    this.$toast.open({
                        message: res.data,
                        type: "success",
                        duration: 5000,
                        dismissible: true,
                    });
                })
                .catch(() => {
                    this.$toast.open({
                        message: "Kullanıcı oluşturulurken hata oluştu.",
                        type: "error",
                        duration: 5000,
                        dismissible: true,
                    });
                });
        },
        goToDashboard() {
            this.$router.push("/dashboard");
        },
    },
};
</script>

<template>
    <div>
        <div class="col d-flex justify-content-center">
            <div class="singleContainer">
                <b-row>
                    <div class="box">
                        <div class="row">
                            <form style="margin: auto; display: block; top: ">
                                <br />
                                <div style="text-align: center; height: 1px; margin-top: 10px">
                                    <h2 style="color: #191b2c; font-size: 22px; font-weight: bold">
                                        Create Member
                                    </h2>
                                </div>
                                <input style="margin-top: 20%; width: 349px; height: 53px" class="form-control"
                                    placeholder="Name" v-model="name" />
                                <br />
                                <input style="width: 349px; height: 53px" class="form-control" placeholder="Job"
                                    v-model="job" />
                                <br />
                                <div>
                                    <b-col @click="postUser"><b-button class="btnCreate" style="
                            background: #748efc 0% 0% no-repeat padding-box;
                            border: none;
                          ">Create</b-button></b-col>
                                </div>
                                <br />
                                <div>
                                    <b-col @click="goToDashboard"><b-button style="
                            background: #748efc 0% 0% no-repeat padding-box;
                            border: none;
                          " class="btnCreate">Back</b-button></b-col>
                                </div>
                            </form>
                        </div>
                    </div>
                </b-row>
            </div>
        </div>
    </div>
</template>

<style>
.btnCreate {
    box-shadow: 0px 5px 20px #748efc80;
    border: none;
    width: 349px;
    height: 53px;
}
</style>
