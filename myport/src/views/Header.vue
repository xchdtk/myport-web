<template>
    <div class="header_main">
        <div class="title">
            <div class="logo">
                <img class="img" src="@/assets/images/logo.svg">
            </div>
            <div class="main">Folio</div>
            <div class="login">로그인</div>
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
        font-family: 'hanna', -apple-system !important;
    }
    .header_main > .title {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin: 24px 0px;
    }

    .header_main > .title > .logo > .img {
        width: 25px;
        height: 25px;
    }

    .header_main > .title > .main {
        color: black;
        font-size: 28px;
    }

    .header_main > .title > .login {
        font-size: 12px;
        color: #428EFF;
    }

    .header_main > .navbar {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        cursor: pointer;
    }
</style>