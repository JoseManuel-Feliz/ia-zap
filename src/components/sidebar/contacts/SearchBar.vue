<script>
import { Search } from 'lucide-vue-next';

export default {
    name: 'SearchBar',
    components: {
        Search
    },
    data() {
        return {

        }
    }
}
</script>

<template>
    <div class="d-flex justify-center align-center">
        <Search />
        <input type="text" />
    </div>
</template>

<style scoped lang="scss">
div {
    height: 40px;
}
</style>