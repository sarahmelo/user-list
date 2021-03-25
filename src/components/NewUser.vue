<template>
  <v-dialog v-model="dialog" persistent max-width="600px">
    <template v-slot:activator="{ on, attrs }">
      <v-btn tile color="primary" dark v-bind="attrs" v-on="on" class="ml-3">
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
        <v-btn tile color="secondary" text @click.prevent="resetField">
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
  </v-dialog>
</template>

<script>
export default {
  name: "newUser",
  props: {
    fields: Object,
  },

  data: () => ({
    dialog: false,
    valid: false,

    nameRules: [(v) => !!v || "Insira um Nome e Sobrenome"],
    emailRules: [(v) => /.+@.+/.test(v) || "E-mail inválido"],
    ageRules: [(v) => !!v || "Idade inválida"],
    phoneRules: [
      (v) => (!!v && v.length > 13) || "Insira um número de telefone válido",
    ],
  }),
};
</script>