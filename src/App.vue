<script>

import AppSidebar from './components/sidebar/AppSidebar.vue';
import AppMain from './components/main-content/AppMain.vue';

export default {
  components: {
    AppSidebar,
    AppMain
  },
  data() {
    return {

    }
  }
}
</script>

<template>
  <div class="wrapper">
    <div class="container">
      <div class="row">

        <AppSidebar />
        <AppMain />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@use "./styles/general.scss"
</style>