import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
          light: {
            primary: '#ff6450',
            secondary: '#280e95',
            cardLogin: '#ff7261',
            error: '#b71c1c',
          },
        },
      },
});
