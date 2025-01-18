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
    <div>
        <div>
            <MessageListItem />
            <MessageOptions />
        </div>
        <MessageReaction />
    </div>
</template>

<style scoped></style>