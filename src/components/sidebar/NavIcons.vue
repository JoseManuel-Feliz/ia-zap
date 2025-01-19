<script>
// todo add a js file to import necessary icons
import {
    MessageSquareText,
    MessageCircleCode,
    CircleDashed,
    UsersRound,
    Settings
} from 'lucide-vue-next';

export default {
    name: 'NavIcons',
    components: {
        MessageSquareText,
        CircleDashed,
        MessageCircleCode,
        UsersRound,
        Settings
    },
    data() {
        return {

        }
    }
}
</script>

<template>
    <nav>
        <ul>
            <li>
                <MessageSquareText />
            </li>
            <li>
                <CircleDashed />
            </li>
            <li>
                <MessageCircleCode />
            </li>
            <li>
                <UsersRound />
            </li>
        </ul>
        <ul>
            <li>
                <Settings />
            </li>
            <li class="avatar">

            </li>
        </ul>
    </nav>
</template>

<style scoped lang="scss">
@use '@styles/partials/_mixins.scss' as *;

nav {
    background-color: #F0F2F5;
    @include flex-col-between;
    @include flex-gsb(0, 1, 20%);
    margin: 10px 0;

    ul {
        @include reset-list;
        text-align: center;

        li {
            margin: 10px 0;
        }
    }
}

.avatar {
    padding: 15px;
    border-radius: 20px;
    border: dashed black 1px;
}
</style>