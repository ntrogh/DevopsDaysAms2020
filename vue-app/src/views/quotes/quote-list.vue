<script>
import CardContent from '@/components/card-content.vue';

const captains = console;

export default {
  name: 'QuoteList',
  props: {
    quotes: {
      type: Array,
      default: () => [],
    },
    errorMessage: {
      type: String,
      default: () => '',
    },
  },
  components: {
    CardContent,
  },
  methods: {
    selectQuote(quote) {
      captains.log(`You tried to select ${quote.repoUrl}`);
      this.$emit('selected', quote);
    },
  },
};
</script>

<template>
  <div>
    <div v-if="errorMessage">{{ errorMessage }}</div>
    <div v-if="!quotes.length && !errorMessage">
      Loading data ...
    </div>
    <ul class="flex-container">
      <li
        v-for="(quote) in quotes"
        :key="quote.id"
        role="presentation"
      >
        <div class="card">
          <CardContent
            :repoUrl="quote.repoUrl"
            :quoteText="quote.quoteText"
          />
        </div>
      </li>
    </ul>
  </div>
</template>
