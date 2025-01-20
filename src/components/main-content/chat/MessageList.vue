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
    <div class="message-list">

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
    background: url("@assets/light-backgroung.png");
    height: calc(100% - 140px);
    overflow-y: auto;

    .received,
    .sent {

        border: dashed black 1px;
        margin: 10px 0;
        align-items: center;
        max-width: 60%;
    }

    .sent {
        margin-left: auto;
        justify-content: flex-end;
    }

    .recived {
        justify-content: flex-start;
    }
}
</style>