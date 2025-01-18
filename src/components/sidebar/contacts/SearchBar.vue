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
    <div>
        <Search />
        <input type="text" />
    </div>
</template>

<style scoped></style>