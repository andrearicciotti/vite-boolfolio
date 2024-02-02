<script>
import AppMain from "./components/AppMain.vue";

export default {
  data() {
    return {};
  },
  components: {
    AppMain,
  }
}
</script>

<template>
  <div class="row text-center my-2">
    <h1 class="my-4">Projects</h1>
    <AppMain />
  </div>
</template>

<style lang="scss">
@use './assets/styles/general.scss' as *;

</style>
