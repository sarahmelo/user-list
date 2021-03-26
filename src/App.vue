<template>
  <v-app id="inspire">
    <v-app-bar dense flat app color="primary" class="pa-0">
      <!-- <Account></Account> -->
    </v-app-bar>

    <v-main>
      <v-container class="fill-height align-content-start" fluid>
        <v-row col="8" align="center" class="pa-3 align-self-start mt-3">
          <v-col col="4" sm="8" md="3" class="px-0">
            <v-text-field
              class="text-area"
              dense
              label="Busque por nomes ou e-mails"
              outlined
              v-model="search"
              hide-details
              append-icon="mdi-magnify"
            />
          </v-col>
          <v-spacer></v-spacer>
          <v-col cols="3" class="justify-center">
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
              <NewUser v-on:calledFunction="registerUser" />
              <!-- <v-dialog v-model="dialog" persistent max-width="600px">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    tile
                    color="primary"
                    dark
                    v-bind="attrs"
                    v-on="on"
                    class="ml-3"
                  >
                    Novo
                  </v-btn>
                </template>

                <v-card>
                  <v-card-title class="indigo darken-4">
                    <span class="headline white--text">Cadastrar Aluno</span>
                  </v-card-title>
                  <v-card-text class="pt-4 px-6 pb-0">
                    <v-row no-gutters v-model="valid" col="12">
                      <v-col col="12">
                        <v-col cols="12" class="pb-0 px-0">
                          <v-text-field
                            hint="Nome e Sobrenome"
                            v-model="field.name"
                            label="Nome"
                            filled
                            dense
                            :rules="nameRules"
                            required
                          ></v-text-field>
                        </v-col>

                        <v-col cols="12" class="pb-0 px-0">
                          <v-text-field
                            v-model="field.email"
                            hint="usuario@email.com"
                            label="E-mail"
                            filled
                            dense
                            :rules="emailRules"
                            required
                          ></v-text-field>
                        </v-col>

                        <v-col cols="6" class="pb-0 px-0">
                          <v-text-field
                            v-model="field.age"
                            label="Idade"
                            filled
                            dense
                            :rules="ageRules"
                            required
                          ></v-text-field>
                        </v-col>

                        <v-col cols="6" class="pb-0 px-0">
                          <v-text-field
                            v-model="field.phone"
                            hint="(xx)xxxxx-xxxx"
                            label="Telefone"
                            type="tel"
                            filled
                            dense
                            :rules="phoneRules"
                            required
                          ></v-text-field>
                        </v-col>
                      </v-col>
                    </v-row>
                  </v-card-text>
                  <v-card-actions>
                    <v-btn
                      tile
                      color="secondary"
                      text
                      @click.prevent="resetField"
                    >
                      Cancelar
                    </v-btn>

                    <v-spacer></v-spacer>

                    <v-btn
                      tile
                      color="primary"
                      class="white--text px-5"
                      @click="registerUser"
                      :disabled="!valid"
                    >
                      Salvar
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog> -->
            </v-row>
          </v-col>
        </v-row>
        <UsersList :usersList="usersBySearch" :search="search"></UsersList>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
// import Account from "./components/Account";
import NewUser from "./components/NewUser";
import UsersList from "./components/users-list/UsersList";

export default {
  name: "App",

  components: {
    // Account,
    UsersList,
    NewUser,
  },

  data: () => ({
    // dialog: false,
    // valid: false,

    // nameRules: [(v) => !!v || "Insira um Nome e Sobrenome"],
    // emailRules: [(v) => /.+@.+/.test(v) || "E-mail inválido"],
    // ageRules: [(v) => !!v || "Idade inválida"],
    // phoneRules: [
    //   (v) => (!!v && v.length > 13) || "Insira um número de telefone válido",
    // ],

    search: "",
    status: ["Todos", "Ativo", "Inativo"],
    currentStatus: "",

    // field: {
    //   name: "",
    //   email: "",
    //   phone: "",
    //   age: "",
    //   lastAvaliation: "12/10/2019",
    //   isActive: true,
    // },
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
        name: "Zarela Reed",
        email: "anasantossa@gmail.com",
        phone: "(21)97957895",
        age: 31,
        lastAvaliation: "12/10/2019",
        avatar: null,
        isActive: false,
      },
      {
        name: "Laquita Elliot",
        email: "roberto@gmail.com",
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
    registerUser() {
      if (this.valid) {
        this.users.unshift(this.field);
        let usersJson = JSON.stringify(this.users);
        localStorage.setItem("users", usersJson);
        return (this.dialog = false);
      }
    },
    // resetField() {
    //   return (this.field = ""), (this.dialog = false);
    // },
  },
};
</script>

<style>
div.v-toolbar__content {
  padding: 0 !important;
}
</style>