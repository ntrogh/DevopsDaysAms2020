import axios from 'axios';
import API from '../config';
import { parseList } from './action-utils';
import {
  GET_KOEDOS,
} from './mutation-types';

const captains = console;

export default {
  strict: process.env.NODE_ENV !== 'production',
  namespaced: true,
  state: {
    koedos: [],
  },
  mutations: {
    [GET_KOEDOS](state, koedos) {
      state.koedos = koedos;
    },
  },
  actions: {
    // actions let us get to ({ state, getters, commit, dispatch }) {
    async getKoedosAction({ commit }) {
      try {
        const response = await axios.get(`${API}/quotes`);
        const quotes = parseList(response);
        commit(GET_KOEDOS, quotes);
        return quotes;
      } catch (error) {
        captains.error(error);
        throw new Error(error);
      }
    },
  },
  getters: {
    koedos: (state) => state.koedos,
  },
};
