<script>
export default {
  name: 'CardContent',
  props: {
    repoUrl: {
      type: String,
      default: () => '',
    },
    quoteText: {
      type: String,
      default: () => '',
    },
  },
  methods: {
    formatTimestamp: (timestamp) => {
      const date = new Date(timestamp);
      return date.toDateString();
    },
  },
};
</script>

<template>
  <div class="card-content">
    <div class="content">
      <div class="twocolumn">
        <div class="left">
          <div class="quoteText">{{ quoteText }}</div>
          <a :href="repoUrl" target="_blank"><div class="repoUrl">{{ repoUrl }}</div></a>
        </div>
        <div class="right">
          <img src="https://octodex.github.com/images/inflatocat.png" />
        </div>
      </div>
    </div>
  </div>
</template>
