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
    <header class="d-flex">
        <div class="d-flex">
            <div class="avatar">

            </div>
            <div class="name">Contact-name</div>
        </div>
        <ul class="d-flex">
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
    min-height: 80px;
    justify-content: space-between;
    align-items: center;
    padding: 0 15px;
    border: dashed black 1px;

    div {
        align-items: center;
        gap: 15px;

        .avatar {
            padding: 20px;
            border-radius: 20px;
            border: dashed black 1px;
        }


    }

    ul {
        @include reset-list;
        gap: 10px;
    }
}
</style>