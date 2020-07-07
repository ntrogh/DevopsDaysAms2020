<script>
import { mapActions, mapGetters } from 'vuex';
import KoedoDetail from './koedos/koedo-detail.vue';
import KoedoList from './koedos/koedo-list.vue';

export default {
  name: 'Koedos',
  data() {
    return {
      errorMessage: '',
      message: '',
      routePath: '/koedos',
      selected: null,
      title: 'My Koedos',
    };
  },
  components: {
    KoedoList,
    KoedoDetail,
  },
  async created() {
    await this.getKoedos();
  },
  computed: {
    ...mapGetters('koedos', { koedos: 'koedos' }),
  },
  methods: {
    ...mapActions('koedos', [
      'getKoedosAction',
    ]),
    clear() {
      this.selected = null;
    },
    async getKoedos() {
      this.errorMessage = undefined;
      try {
        await this.getKoedosAction();
      } catch (error) {
        this.errorMessage = 'Unauthorized';
      }
      this.clear();
    },
    select(koedo) {
      this.selected = koedo;
    },
  },
};
</script>

<template>
  <div class="content-container">
    <div class="columns is-multiline is-variable">
      <div v-if="koedos">
        <KoedoList
          v-if="!selected"
          :koedos="koedos"
          :errorMessage="errorMessage"
          @selected="select($event)"
          @deleted="askToDelete($event)"
        ></KoedoList>
        <KoedoDetail
          v-if="selected"
          :koedo="selected"
          @unselect="clear"
          @save="save"
        ></KoedoDetail>
      </div>
    </div>
  </div>
</template>
