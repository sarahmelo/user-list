<template>
  <v-col class="v-col d-inline-flex pa-0 mx-13 justify-end">
    <v-card color="cardLogin" class="d-inline-flex">
      <v-list-item hide-details>
        <v-avatar class="mx-3">
          <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
        </v-avatar>
        <v-list-item-content>
          <p class="white--text">Jonas Doe</p>
          <v-list-item-subtitle class="font-weight-light caption white--text">
            Último Login: 12/10/2019
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-divider vertical></v-divider>
      <v-btn
        color="cardLogin"
        hide-details
        height="auto"
        style="box-shadow: none"
      >
        <v-icon>mdi-menu-down</v-icon>
      </v-btn>
    </v-card>
  </v-col>
</template>

<script>
export default {
  name: "account",
};
</script>

<style>
div.v-col {
  height: 64px !important;
}
</style>