<template>
  <div class="header_main">
    <div class="title">
      <div class="logo">
        <img class="img" src="@/assets/images/logo.svg" />
      </div>
      <div class="main" @click="() => fnMovePage('/')">Folio</div>
      <div class="login" @click="() => fnMovePage('/auth/login')">
        로그인 및 회원가입
      </div>
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
import "@/assets/css/common.css";
import router from "@/router";

export default {
  name: "HeaderView",
  setup() {
    const fnMovePage = (page) => {
      router.push(page);
    };

    return { fnMovePage };
  },
};
</script>

<style>
.header_main {
  font-family: "hanna", -apple-system !important;
}
.header_main > .title {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 24px 0px;
}

.header_main > .title > .main {
  cursor: pointer;
}

.header_main > .title > .logo > .img {
  width: 25px;
  height: 25px;
}

.header_main > .title > .main {
  color: #428eff;
  font-size: 28px;
}

.header_main > .title > .login {
  font-size: 13px;
  color: #428eff;
  cursor: pointer;
}

.header_main > .navbar {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  cursor: pointer;
  font-size: 16px;
}
</style>
