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

<style scoped></style>