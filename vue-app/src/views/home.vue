<script>
import { mapActions, mapGetters } from 'vuex';
import QuoteList from './quotes/quote-list.vue';

export default {
  name: 'Quotes',
  data() {
    return {
      errorMessage: '',
      message: '',
      routePath: '/quotes',
      selected: null,
      title: 'All Quotes',
    };
  },
  components: {
    QuoteList,
  },
  async created() {
    await this.getQuotes();
  },
  computed: {
    ...mapGetters('quotes', { quotes: 'quotes' }),
  },
  methods: {
    ...mapActions('quotes', [
      'getQuotesAction',
    ]),
    clear() {
      this.selected = null;
    },
    async getQuotes() {
      this.errorMessage = undefined;
      try {
        await this.getQuotesAction();
      } catch (error) {
        this.errorMessage = 'Unauthorized';
      }
      this.clear();
    },
    select(quote) {
      this.selected = quote;
    },
  },
};
</script>

<template>
  <div class="content-container">
    <div class="columns is-multiline is-variable">
      <div v-if="quotes">
        <QuoteList
          v-if="!selected"
          :quotes="quotes"
          :errorMessage="errorMessage"
        ></QuoteList>
      </div>
    </div>
  </div>
</template>
