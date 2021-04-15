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
        <v-form no-gutters ref="form" v-model="valid" col="12">
          <v-col col="12">
            <v-col cols="12" class="pb-0 px-0">
              <v-text-field
                v-model="dataField.name"
                label="Nome"
                filled
                dense
                :rules="validations.nameRules"
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12" class="pb-0 px-0">
              <v-text-field
                v-model="dataField.email"
                hint="usuario@email.com"
                label="E-mail"
                filled
                dense
                :rules="validations.emailRules"
                required
              ></v-text-field>
            </v-col>

            <v-col cols="6" class="pb-0 px-0">
              <v-text-field
                v-model="dataField.age"
                label="Idade"
                filled
                dense
                :counter="3"
                :rules="validations.ageRules"
                required
              ></v-text-field>
            </v-col>

            <v-col cols="6" class="pb-0 px-0">
              <v-text-field
                v-model="dataField.phone"
                hint="(xx)xxxxx-xxxx"
                label="Telefone"
                type="tel"
                filled
                dense
                :rules="validations.phoneRules"
                required
              ></v-text-field>
            </v-col>
          </v-col>
        </v-form>
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
          v-on:click="callFuncRegister"
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
  props: {},

  data: () => ({
    dialog: false,
    valid: false,

    validations: {
      nameRules: [(v) => !!v || "Necessário Nome e Sobrenome"],
      emailRules: [(v) => /.+@.+\..+/.test(v) || "E-mail inválido"],
      ageRules: [(v) => !!v || "Idade inválida"],
      phoneRules: [
        (v) => (!!v && v.length > 13) || "Insira um número de telefone válido",
      ],
    },

    dataField: {
      name: "",
      email: "",
      phone: "",
      age: "",
      lastAvaliation: "12/10/2019",
      isActive: true,
    },
  }),
  methods: {
    resetField() {
      this.$refs.form.reset();
      return (this.dialog = false);
    },

    callFuncRegister() {
      this.$emit("dataNewUser", this.dataField);
      this.resetField;
      return (this.dialog = false);
    },
  },
};
</script>