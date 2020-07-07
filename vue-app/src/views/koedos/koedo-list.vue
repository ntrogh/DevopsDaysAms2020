<script>
import CardContent from '@/components/card-content.vue';

const captains = console;

export default {
  name: 'KoedoList',
  props: {
    koedos: {
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
    deleteKoedo(koedo) {
      this.$emit('deleted', koedo);
      captains.log(`You tried to delete ${koedo.to}`);
    },
    selectKoedo(koedo) {
      captains.log(`You tried to select ${koedo.to}`);
      this.$emit('selected', koedo);
    },
  },
};
</script>

<template>
  <div>
    <div v-if="errorMessage">{{ errorMessage }}</div>
    <div v-if="!koedos.length && !errorMessage">
      Loading data ...
    </div>
    <ul class="flex-container">
      <li
        v-for="(koedo) in koedos"
        :key="koedo.id"
        role="presentation"
      >
        <div class="card">
          <CardContent
            :repoUrl="koedo.repoUrl"
            :quoteText="koedo.quoteText"
          />
        </div>
      </li>
    </ul>
  </div>
</template>
