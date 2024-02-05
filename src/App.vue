<script>
import AppHeader from './assets/components/AppHeader.vue';

export default {
  data() {
    return {};
  },
  components: {
    AppHeader,
  }
}
</script>

<template>
  <AppHeader />
  <router-view></router-view>
</template>

<style lang="scss">
@use './assets/styles/general.scss' as *;
</style>
