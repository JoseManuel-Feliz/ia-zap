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
    border: dashed black 1px;
    min-height: 40px;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    flex: 0 1 auto;

    p {
        word-break: break-word;
    }

    span {
        align-self: flex-end;
    }
}
</style>