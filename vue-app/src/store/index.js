import Vue from 'vue';
import Vuex from 'vuex';
import koedosModule from './modules/koedos';

export * from './modules/mutation-types';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    koedos: koedosModule,
  },
  state: {
  },
});
