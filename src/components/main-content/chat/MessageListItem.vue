<script>
export default {
    name: 'MessageListItem',
    data() {
        return {

        }
    }
}
</script>

<template>
    <div class="d-flex">
        <p>Text</p>
        <span>time</span>
    </div>
</template>

<style scoped lang="scss">
div {
    border-radius: 10px;
    min-height: 35px;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
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