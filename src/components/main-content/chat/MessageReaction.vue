<script>
import { Laugh } from 'lucide-vue-next';

export default {
  name: 'MessageReaction',
  components: {
    Laugh
  },

  data() {
    return {

    }
  }
}
</script>

<template>
  <div>
    <div>
      <Laugh />
    </div>
    <div>
      <select>
        <option value=""></option>
      </select>
    </div>
  </div>
</template>

<style scoped></style>