<script>
import MessageList from './chat/MessageList.vue';
import ContactInfo from './ContactInfo.vue';
import TextInput from './TextInput.vue';

export default {
    name: 'Main',
    components: {
        ContactInfo,
        MessageList,
        TextInput
    },
    data() {
        return {

        }
    }
}
</script>

<template>
    <main class="main-content">
        <ContactInfo />
        <MessageList />
        <TextInput />
    </main>
</template>

<style scoped lang="scss">
main {
    height: 800px;
    background: #fff;
    width: 70%;
    position: relative;
}
</style>