<script>
import { BellOff } from 'lucide-vue-next';
export default {
    name: 'NotificationBanner',
    components: {
        BellOff
    },
    data() {
        return {

        }
    }
}
</script>

<template>
    <div class="d-flex justify-space-between align-center notification p-20">
        <BellOff />
        <div>
            <span></span>
            <p></p>
        </div>
        <div>
            &#10539;
            <!-- css contenty code \292B -->
        </div>
    </div>
</template>

<style scoped lang="scss">
.notification {
    height: 50px;
}
</style>