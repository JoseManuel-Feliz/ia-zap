<script>
import { SmilePlus, SendHorizontal } from 'lucide-vue-next';

export default {
    name: 'TextInput',
    components: {
        SmilePlus,
        SendHorizontal
    },
    data() {
        return {

        }
    }
}
</script>

<template>
    <footer class="d-flex align-center justify-space-between">
        <div>
            <SmilePlus />
        </div>
        <div>
            <input type="text" />
        </div>
        <div>
            <SendHorizontal />
        </div>
    </footer>
</template>

<style scoped lang="scss">
footer {
    background-color: #F0F2F5;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 60px;
    padding: 0 20px;
}
</style>