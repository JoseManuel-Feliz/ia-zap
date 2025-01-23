<script>
import { useChatStore } from '@/stores/chatStore';
export default {
    name: 'MessageListItem',
    data() {
        return {
            contacts: [],
        }
    }, mounted() {
        const chatStore = useChatStore();
        this.contacts = chatStore.contacts;
    },
}
</script>

<template>
    <div class="d-flex justify-space-between align-center gap-10">
        <p>Text</p>
        <span>time</span>
    </div>
</template>

<style scoped lang="scss">
div {
    filter: drop-shadow(0px 1px 2px #A4A4A4);
    border-radius: 10px;
    min-height: 35px;
    flex: 0 1 auto;
    padding: 0 15px;

    p {
        padding: 10px 0;
        word-break: break-word;
    }

    span {
        align-self: flex-end;
    }
}
</style>