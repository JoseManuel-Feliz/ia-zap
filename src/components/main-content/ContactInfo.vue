<script>
import { Video, Search, EllipsisVertical } from 'lucide-vue-next';

export default {
    name: 'ContactInfo',
    components: {
        Video,
        Search,
        EllipsisVertical
    },
    data() {
        return {

        }
    }
}
</script>

<template>
    <header class="d-flex justify-space-between align-center">
        <div class="d-flex align-center gap-15">
            <div class="avatar">

            </div>
            <div class="name">Contact-name</div>
        </div>
        <ul class="d-flex gap-10">
            <li>
                <Video />
            </li>
            <li>
                <Search />
            </li>
            <li>
                <EllipsisVertical />
            </li>
        </ul>
    </header>
</template>

<style scoped lang="scss">
@use "@styles/partials/_mixins.scss" as *;

header {
    background-color: #F0F2F5;
    min-height: 80px;
    padding: 0 15px;

    div {
        .avatar {
            padding: 20px;
            border-radius: 20px;
            border: dashed black 1px;
        }
    }

    ul {
        @include reset-list;

    }
}
</style>