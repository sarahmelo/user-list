import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
          light: {
            primary: '#444AE4',
            secondary: '#280e95',
            cardLogin: '#444AE4',
            error: '#b71c1c',
          },
        },
      },
});
