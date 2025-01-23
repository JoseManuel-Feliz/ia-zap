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
                <div>
                    <MessageSquareText />
                </div>
            </li>
            <li>
                <div>
                    <CircleDashed />
                </div>
            </li>
            <li>
                <div>
                    <MessageCircleCode />
                </div>
            </li>
            <li>
                <div>
                    <UsersRound />
                </div>
            </li>
        </ul>
        <ul>
            <li>
                <div>
                    <Settings />
                </div>
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


        li {

            margin: 10px 0;
            padding: 5px;

            &>div:hover {
                background: grey;
                color: lightgray;
            }

            &>div {
                padding: 5px;
                border-radius: 25px;
                display: flex;
                align-items: center;
                justify-content: center;
            }
        }
    }
}

.avatar {
    padding: 15px;
    border-radius: 20px;
    border: dashed black 1px;
}
</style>