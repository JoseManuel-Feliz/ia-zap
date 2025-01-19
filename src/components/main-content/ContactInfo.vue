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
    <header>
        <div>
            <div>
                avatar
            </div>
            <div>Contact-name</div>
        </div>
        <ul>
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

<style scoped></style>