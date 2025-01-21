<script>
import MessageOptions from './MessageOptions.vue';
import MessageReaction from './MessageReaction.vue';
import MessageListItem from './MessageListItem.vue';

export default {
    name: 'MessageList',
    components: {
        MessageListItem,
        MessageOptions,
        MessageReaction
    },
    data() {
        return {

        }
    }
}
</script>

<template>
    <div class="message-list bg-pattern">

        <div class="received d-flex">
            <MessageListItem />
            <!-- <MessageOptions /> -->
        </div>
        <!-- <MessageReaction /> -->
        <div class="sent d-flex">
            <MessageListItem />
            <!-- <MessageOptions /> -->
        </div>
        <!-- <MessageReaction /> -->
    </div>
</template>

<style scoped lang="scss">
.message-list {
    padding: 20px 0;
    height: calc(100% - 140px);
    overflow-y: auto;

    .received,
    .sent {


        margin: 10px 0;
        align-items: center;
        max-width: 60%;
    }

    .sent {
        margin-left: auto;
        justify-content: flex-end;

        &>div {
            background-color: #D9FDD3;
            margin-right: 20px;
        }
    }

    .received {
        justify-content: flex-start;

        &>div {
            background-color: #FFFFFF;
            margin-left: 20px;
        }
    }
}
</style>