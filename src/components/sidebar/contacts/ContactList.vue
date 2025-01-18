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

<style scoped></style>