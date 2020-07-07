import Vue from 'vue';
import Vuex from 'vuex';
import quotesModule from './modules/quotes';

export * from './modules/mutation-types';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    quotes: quotesModule,
  },
  state: {
  },
});
