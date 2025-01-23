<script>
import NavIcons from './NavIcons.vue';
import SearchBar from './contacts/SearchBar.vue';
import NotificationBanner from './contacts/NotificationBanner.vue';
import ContactList from './contacts/ContactList.vue';
import { MessageSquarePlus, EllipsisVertical } from 'lucide-vue-next';
export default {
    name: 'Sidebar',
    components: {
        NavIcons,
        ContactList,
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
    <aside class="sidebar d-flex">
        <NavIcons />

        <section>

            <header class="user-info">

                <div class="d-flex justify-space-between align-center p-10">
                    <h2> Chat</h2>
                    <div>
                        <MessageSquarePlus />
                        <EllipsisVertical />
                    </div>
                </div>

                <SearchBar />
                <NotificationBanner />
            </header>
            <div class="contacts">
                <ContactList />
            </div>
        </section>
    </aside>
</template>

<style scoped lang="scss">
@use "@styles/partials/_mixins.scss" as *;

.sidebar {
    height: 800px;
    background: #fff;

    @include flex-gsb(0, 1, 30%);

    section {
        @include flex-gsb(0, 1, 80%);
        border-left: #D1D7DB solid 1px;

        header {
            max-height: 150px;

        }

        .contacts {
            overflow-y: auto;
            max-height: calc(100% - 150px);
        }
    }
}
</style>