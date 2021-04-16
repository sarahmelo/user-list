<template>
  <v-app id="inspire">
    <v-app-bar dense flat app color="primary" class="pa-0"> </v-app-bar>

    <v-main>
      <v-container class="fill-height align-content-start">
        <v-row align="center" class="justify-space-between pa-3 mt-3">
          <v-col col="12" xs="2" sm="3" md="3" lg="3" xl="2" class="px-0">
            <v-text-field
              class="text-area rounded-0"
              dense
              label="nome ou e-mail"
              solo
              v-model="search"
              hide-details
              append-icon="mdi-magnify"
            />
          </v-col>
          <!-- <v-spacer class="space"></v-spacer> -->

          <v-col cols="5" sm="3" md="2" xl="2" class="justify-center ml-15">
            <v-row class="align-center" style="flex-wrap: nowrap">
              <v-select
                small-chips
                color="primary"
                label="Filtro"
                chips
                hide-details
                standard
                dense
                :items="status"
                v-model="currentStatus"
              />
              <NewUser v-on:dataNewUser="registerUser" />
            </v-row>
          </v-col>
        </v-row>

        <UsersList :usersList="usersBySearch" :search="search"></UsersList>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import NewUser from "./components/NewUser";
import UsersList from "./components/users-list/UsersList";

export default {
  name: "App",

  components: {
    UsersList,
    NewUser,
  },

  data: () => ({
    search: "",
    status: ["Todos", "Ativo", "Inativo"],
    currentStatus: "",

    users: [
      {
        name: "Ana Santos Sá",
        email: "anasantossa@gmail.com",
        phone: "(21)97957895",
        age: 31,
        lastAvaliation: "12/10/2019",
        avatar: null,
        isActive: true,
      },
      // {
      //   name: "Zarela Reed",
      //   email: "anasantossa@gmail.com",
      //   phone: "(21)97957895",
      //   age: 31,
      //   lastAvaliation: "12/10/2019",
      //   avatar: null,
      //   isActive: false,
      // },
      // {
      //   name: "Laquita Elliot",
      //   email: "roberto@gmail.com",
      //   phone: "(21)97957895",
      //   age: 31,
      //   lastAvaliation: "12/10/2019",
      //   avatar: null,
      //   isActive: true,
      // },
      {
        name: "Jel Chibuzo",
        email: "sorela@gmail.com",
        phone: "(21)97957895",
        age: 31,
        lastAvaliation: "12/10/2019",
        avatar: null,
        isActive: false,
      },
    ],
  }),

  computed: {
    usersBySearch: function () {
      return this.usersByStatus.filter((user) => {
        return user.name.match(this.search) || user.email.match(this.search);
      });
    },
    usersByStatus: function () {
      return this.users.filter((user) => {
        if (this.currentStatus == "Ativo") {
          return user.isActive;
        } else if (this.currentStatus == "Inativo") {
          return !user.isActive;
        }
        return true;
      });
    },
  },

  mounted() {
    let usersJson = JSON.stringify(this.users);
    localStorage.setItem("users", usersJson);
  },

  methods: {
    sendProfile() {
      if (localStorage.users) {
        this.$emit("profile", this.users);
        console.log("empurrou");
      }
    },
    registerUser(fields) {
      this.users.unshift(fields);
      let usersJson = JSON.stringify(this.users);
      localStorage.setItem("users", usersJson);
      localStorage.getItem("users");
    },
  },
};
</script>

<style>
div.v-toolbar__content {
  padding: 0 !important;
}
</style>