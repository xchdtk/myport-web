<template>
    <div class="header_main">
        <div class="title">
            myport
        </div>
        <div class="navbar">
            <div @click="() => fnMovePage('/')">홈</div>
            <div @click="() => fnMovePage('/activity')">공모전/대외활동</div>
            <div @click="() => fnMovePage('/team')">팀</div>
            <div @click="() => fnMovePage('/my')">내정보</div>
        </div>
    </div>
</template>

<script>
import '@/assets/css/common.css';

export default {
    name: 'HeaderView',
    setup () {
        return {}
    },
    methods: {
        fnMovePage(page) {
            console.log('들어오긴 하니??', page);
            this.$router.push(`${page}`);
        }
    }
}
</script>

<style>
    .header_main {
        font-family: 'euljiro', -apple-system !important;
    }
    .header_main > .title {
        text-align: center;
        color: #428EFF;
        font-size: 28px;
        margin: 18px 0px;
        /* font-family: 'euljiro'; */
    }

    .header_main > .navbar {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        cursor: pointer;
    }
</style>