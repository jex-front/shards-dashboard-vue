<template>
  <component :is="layout">
    <router-view/>
  </component>
</template>

<script>
export default {
  computed: {
    layout() {
      return `${this.$route.meta.layout || 'default'}-layout`;
    },
  },
};
</script>

<style scoped lang="sass">
  .fullHeightViewport
    height: 100vh
  .fullHeight
    height: 100%
</style>