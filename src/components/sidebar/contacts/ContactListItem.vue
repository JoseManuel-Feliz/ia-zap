<script>
import { useChatStore } from '@/stores/chatStore';
export default {

    data() {
        return {
            contacts: [],
        }
    },
    created() {
        const chatStore = useChatStore();
        this.contacts = chatStore.contacts;
    }

}
</script>

<template>
    <li class="d-flex justify-space-between align-center p-10" v-for="contact in contacts">
        <div class="d-flex contacts-wrapper">
            <div class="avatar me-10"></div>
            <div class="mini-wrapper">
                <h5>{{ contact.name }}</h5>
                <p>Last message</p>
            </div>
        </div>
        <small>Date</small>

    </li>

</template>

<style scoped lang="scss">
@use "@styles/partials/_mixins.scss" as *;

li {

    .avatar {
        padding: 20px;
        border-radius: 20px;
        border: dashed black 1px;
    }

    .contacts-wrapper {

        .mini-wrapper {

            p {
                max-width: 100px;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
        }
    }
}
</style>