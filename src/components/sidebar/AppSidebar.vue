<script>
import NavIcons from './NavIcons.vue';
import SearchBar from './contacts/SearchBar.vue';
import NotificationBanner from './contacts/NotificationBanner.vue';
import { MessageSquarePlus, EllipsisVertical } from 'lucide-vue-next';
export default {
    name: 'Sidebar',
    components: {
        NavIcons,
        MessageSquarePlus,
        EllipsisVertical,
        NotificationBanner,
        SearchBar
    },
    data() {
        return {

        }
    }
}
</script>

<template>
    <aside class="sidebar">
        <NavIcons />

        <section>

            <header class="user-info">
                <h2> Chat</h2>
                <div>
                    <MessageSquarePlus />
                    <EllipsisVertical />
                </div>
                <SearchBar />
                <NotificationBanner />
            </header>

        </section>
    </aside>
</template>

<style scoped>
.sidebar {
    height: 800px;
    background: #fff;
    width: 30%;
}
</style>