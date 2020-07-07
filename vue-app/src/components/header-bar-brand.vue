<script>
export default {
  name: 'HeaderBarBrand',
};
</script>

<template>
  <div class="navbar-brand">
    <a
      class="navbar-item"
      href="https://vuejs.org/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <i aria-hidden="true">
        <img  src="../assets/devopsdaysams-logo-square.jpg"/>
      </i>
    </a>
    <router-link to="/" class="navbar-item nav-home">
      <span class="brand-first">Wall</span>
      <span class="brand-second">of</span>
      <span class="brand-third">ZEN</span>
    </router-link>
  </div>
</template>
