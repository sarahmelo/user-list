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
              solo
              flat
              v-model="search"
              label="nome ou e-mail"
              hide-details
              append-icon="mdi-magnify"
            />
          </v-col>
          <!-- <v-spacer class="space"></v-spacer> -->

          <v-col cols="5" sm="3" md="2" xl="2" class="justify-center ml-15">
            <v-row class="align-center" style="flex-wrap: nowrap">
              <v-select
                color="primary"
                label="Filtro"
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

        <UsersList
          :usersList="usersBySearch"
          :search="search"
          @remove="removeUser"
        ></UsersList>
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
      {
        name: "Jel Chibuzo",
        email: "sorela@gmail.com",
        phone: "(21)97957895",
        age: 31,
        lastAvaliation: "12/10/2019",
        avatar: null,
        isActive: false,
      },
      {
        name: "Ana Santos Sá",
        email: "anasantossa@gmail.com",
        phone: "(21)97957895",
        age: 31,
        lastAvaliation: "12/10/2019",
        avatar: null,
        isActive: true,
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
      }
    },
    registerUser(fields) {
      this.users.unshift(fields);
      let usersJson = JSON.stringify(this.users);
      localStorage.setItem("users", usersJson);
      localStorage.getItem("users");
    },
    removeUser(index) {
      this.users.splice(index, 1);
    },
  },
};
</script>

<style>
div.v-toolbar__content {
  padding: 0 !important;
}
#inspire {
  background-color: #f5f5f5;
}
</style>