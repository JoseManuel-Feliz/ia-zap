<script>
import ContactListItem from './ContactListItem.vue';

export default {
  name: 'ContactList',
  components: {
    ContactListItem
  },
  data() {
    return {

    }
  }
}
</script>

<template>
  <ul>
    <ContactListItem />
  </ul>
</template>

<style scoped lang="scss">
@use "@styles/partials/_mixins.scss" as *;

ul {
  @include reset-list;
}
</style>