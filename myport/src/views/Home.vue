<template>
    <div class="home_main">
        <div class="major">
            <div class="title">
                나와 같은 전공 사람들은?
            </div>
            <div class="sub_title">
                지금 이런 활동을 하고 있어요
            </div>
            <div class="content">
                와우
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HomeView',
    setup () {
        

        return {}
    }
}
</script>

<style>
    .home_main {
        margin-top: 5%;
    }

    .home_main > .major > .title {
        font-size: 24px;
        font-weight: 700;
    }

    .home_main > .major > .sub_title {
        font-size: 16px;
        font-weight: 400;
    }
</style>