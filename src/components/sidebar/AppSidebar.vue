<script>
import { MessageSquarePlus, EllipsisVertical, CircleDashed, Search } from 'lucide-vue-next';

export default {
    name: 'Sidebar',
    components: {
        MessageSquarePlus,
        EllipsisVertical,
        CircleDashed,
        Search
    },
    data() {
        return {

        }
    }
}
</script>

<template>
    <aside class="sidebar">
        <header class="user-info">
            <div class="right-content">
                <div class="user-name"></div>
                <div class="user-img"></div>
            </div>
            <div class="left-content">

                <div class="icons">
                    <CircleDashed />
                </div>

                <div class="icons">
                    <MessageSquarePlus />
                </div>

                <div class="icons">
                    <EllipsisVertical />
                </div>
            </div>
        </header>
        <div class="">
            <div class="notifications">

            </div>
            <div class="search-wrapper">
                <div class="magnifier-ico">
                    <Search />
                </div>
                <input type="text" />
            </div>
        </div>
        <div class="contacts">
            <div class="contact-info">
            </div>
        </div>
    </aside>
</template>

<style scoped>
.sidebar {
    height: 800px;
    background: #fff;
    width: 30%;
}
</style>