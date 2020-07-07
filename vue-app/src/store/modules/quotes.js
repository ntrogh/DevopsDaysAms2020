import axios from 'axios';
import { FUNCTION_ENDPOINT } from '../config';
import { parseList } from './action-utils';
import {
  GET_QUOTES,
} from './mutation-types';

const captains = console;

export default {
  strict: process.env.NODE_ENV !== 'production',
  namespaced: true,
  state: {
    quotes: [],
  },
  mutations: {
    [GET_QUOTES](state, quotes) {
      state.quotes = quotes;
    },
  },
  actions: {
    // actions let us get to ({ state, getters, commit, dispatch }) {
    async getQuotesAction({ commit }) {
      try {
        const response = await axios.get(`${FUNCTION_ENDPOINT}/quotes`);
        const quotes = parseList(response);
        commit(GET_QUOTES, quotes);
        return quotes;
      } catch (error) {
        captains.error(error);
        throw new Error(error);
      }
    },
  },
  getters: {
    quotes: (state) => state.quotes,
  },
};
