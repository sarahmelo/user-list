!<template>
  <v-row class="flex-column" v-if="usersList.length > 0">
    <v-col v-for="(user, index) in usersList" :key="index">
      <!-- <v-card class="pa-2 rounded-0 elevation-0" width="inherit"> -->
      <v-card class="col-auto elevation-0" :disabled="!user.isActive">
        <v-list three-line class="pa-0">
          <v-list-item>
            <v-badge dot left overlap :color="user.isActive ? 'green' : 'red'">
              <v-list-item-avatar>
                <v-img
                  size="48"
                  src="https://cdn.vuetifyjs.com/images/lists/1.jpg"
                />
              </v-list-item-avatar>
            </v-badge>

            <v-list-item-content>
              <v-list-item-title>
                {{ user.name }}
              </v-list-item-title>
              <v-list-item-subtitle>
                {{ user.email }}
              </v-list-item-subtitle>
              <v-list-item-subtitle>
                {{ user.age }}
                {{ user.phone }}
              </v-list-item-subtitle>
              <v-list-item-subtitle>
                Última avaliação: {{ user.lastAvaliation }}
              </v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-action class="align-self-center">
              <v-btn small plain color="error" @click="remove(index)">
                remover
                <!-- <v-icon>mdi-minus-circle</v-icon> -->
              </v-btn>
              <v-snackbar text color="primary" v-model="snackbar">
                {{ text }}

                <template v-slot:action="{ attrs }">
                  <v-btn
                    text
                    color="primary"
                    v-bind="attrs"
                    @click="snackbar = false"
                  >
                    FECHAR
                  </v-btn>
                </template>
              </v-snackbar>
            </v-list-item-action>
          </v-list-item>
        </v-list>
      </v-card>
    </v-col>
  </v-row>
  <v-row v-else-if="!usersList.length && search" class="justify-center">
    <p>Não há usuários com os critérios de busca utilizado</p>
  </v-row>
  <v-row v-else class="justify-center">
    <p>Não há usuários cadastrados</p>
  </v-row>
</template>

<script>
export default {
  name: "users-list",
  data: () => ({
    snackbar: false,
    text: "Usuário removido",
  }),

  components: {},
  props: {
    usersList: Array,
    search: String,
  },
  methods: {
    remove(index) {
      this.$emit("remove", index);
      this.snackbar = true;
    },
  },
};
</script>

<style>
.statusOff {
  color: red;
}
.statusOn {
  color: green;
}
</style>