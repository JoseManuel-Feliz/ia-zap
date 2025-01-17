<script>

import AppContacts from './components/AppContacts.vue';
import AppChat from './components/AppChat.vue';

export default {
  components: {
    AppContacts,
    AppChat
  },
  data() {
    return {

    }
  }
}
</script>

<template>
  <div class="container">
    <AppContacts />
    <AppChat />
  </div>
</template>

<style lang="scss">
@use "./styles/general.scss"
</style>