<script>
import HeaderBar from '@/components/header-bar.vue';

export default {
  name: 'App',
  data() {
    return {};
  },
  components: {
    HeaderBar,
  },
};
</script>

<template>
  <div id="app">
    <HeaderBar />
    <div class="section columns">
      <main class="column">
        <router-view />
      </main>
    </div>
    <hr />
    <div>
      <p class="footer">Interested in having your quote featured on this wall? Check the GitHub Actions workshop coding challenges on <a href="https://github.com/GitHub-Coding-Challenge/actions-workshop">GitHub.</a></p>
    </div>
  </div>
</template>

<style lang="scss">
@import 'styles.scss';
</style>
