<script>

export default {
    name: 'ContactListItem',
    data() {
        return {

        }
    }
}
</script>

<template>
    <li class="d-flex">
        <div class="d-flex">
            <div class="avatar"></div>
            <div>
                <div>name</div>
                <div>lastmessage</div>
            </div>
        </div>
        <div>time</div>

    </li>

</template>

<style scoped lang="scss">
@use "@styles/partials/_mixins.scss" as *;

li {
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    border: dashed black 1px;

    .avatar {
        padding: 20px;
        border-radius: 20px;
        border: dashed black 1px;
        margin-right: 10px;
    }
}
</style>