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
    <footer>
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

<style scoped></style>