!<template>
  <v-row v-if="usersList.length > 0">
    <v-col
      cols="12"
      sm="6"
      md="4"
      lg="3"
      v-for="(user, index) in usersList"
      :key="index"
    >
      <v-card elevation="5" class="pa-2" :disabled="!user.isActive">
        <v-card-title class="col-auto mr-auto pb-0">
          <v-list three-line class="pa-0">
            <v-list-item class="pa-0">
              <v-list-item-avatar>
                <v-img src="https://cdn.vuetifyjs.com/images/lists/1.jpg" />
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>
                  {{ user.name }}
                </v-list-item-title>
                <v-list-item-subtitle>
                  Última avaliação: {{ user.lastAvaliation }}
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card-title>

        <v-divider />
        <v-card-text>
          <v-row>
            <v-col md="8" class="pr-0 pb-0">
              <p class="pa-0 mb-0">{{ user.email }}</p>
              <p class="pa-0">
                {{ user.age }}
                {{ user.phone }}
              </p>
            </v-col>
            <v-col class="d-flex align-center" md="4">
              <v-row class="justify-space-around">
                <v-btn elevation="5" fab icon x-small>
                  <v-icon color="#280f93"> mdi-pencil</v-icon>
                </v-btn>
                <v-btn fab icon x-small>
                  <v-icon color="#280f93"> mdi-dots-horizontal </v-icon>
                </v-btn>
              </v-row>
            </v-col>
          </v-row>
        </v-card-text>
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

  components: {},
  props: {
    usersList: Array,
    search: String,
  },
};
</script>

<style>
</style>