<template>
  <div class="auth_register_main">
    <div class="auth_register_loading_view" v-if="emailAuthResponseStatus">
      <div>잠시만 기다려주세요.</div>
    </div>

    <div class="title">회원가입</div>
    <div class="auth_register_content">
      <div class="content">
        <div class="content_item">
          <div class="title">
            이름&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </div>
          <div class="content_input">
            <input type="text" v-model="name" />
          </div>
        </div>
        <div class="content_item">
          <div class="title">
            이메일&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </div>
          <div class="content_input">
            <input type="text" v-model="email" />
          </div>
          <div class="auth_btn" @click="() => authEmail()">인증</div>
        </div>
        <div class="content_item" v-if="emailAuthAreaStatus">
          <div class="title">
            인증번호&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </div>
          <div class="content_input">
            <input type="text" v-model="authCode" />
          </div>
          <div class="auth_btn" @click="() => confirmAuth()">확인</div>
        </div>
        <div class="content_item">
          <div class="title">
            비밀번호&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </div>
          <div class="content_input">
            <input type="password" v-model="password" />
          </div>
        </div>
        <div class="content_item">
          <div class="title">비밀번호 확인&nbsp;</div>
          <div class="content_input">
            <input type="password" v-model="confirmPassword" />
          </div>
        </div>
        <div class="content_item">
          <div class="title">
            전화번호&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </div>
          <div class="content_input">
            <input type="text" v-model="phone" />
          </div>
        </div>
      </div>
    </div>
    <div class="register_btn" @click="() => authRegister()">회원가입</div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";
import router from "@/router";

export default {
  name: "AuthRegisterView",
  setup() {
    const store = useStore();

    // 이름
    const name = ref("");
    // 이메일
    const email = ref("");
    // 이메일 인증코드
    const authCode = ref("");
    // 인증번호 응답상태
    const emailAuthResponseStatus = ref(false);
    // 인증번호 노출상태
    const emailAuthAreaStatus = ref(false);
    // 이메일 인증상태
    const emailAuthStatus = ref(false);
    // 휴대폰
    const phone = ref("");
    // 비밀번호
    const password = ref("");
    // 비밀번호 확인
    const confirmPassword = ref("");

    const authEmail = async () => {
      const emailRegex = new RegExp(
        "/^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;"
      );
      if (emailAuthAreaStatus.value) {
        return;
      }

      if (!email.value) {
        alert("이메일을 입력해주세요.");
        return;
      }

      // if (!emailRegex.test(email.value)) {
      //   alert("이메일 형식을 지켜주세요.");
      //   return;
      // }

      emailAuthResponseStatus.value = true;
      const status = await store.dispatch("Auth/GetAuthEmail", email.value);
      emailAuthResponseStatus.value = false;

      if (!status) {
        alert("이미 가입된 이메일이거나 아닐경우 다시한번 시도해주세요.");
        email.value = "";

        return;
      }

      emailAuthAreaStatus.value = true;
    };

    const confirmAuth = async () => {
      if (emailAuthStatus.value) {
        return;
      }

      if (
        !store.state.Auth.authCode ||
        store.state.Auth.authCode !== authCode.value
      ) {
        alert("인증번호가 잘못되었습니다.");
        return;
      }

      emailAuthStatus.value = true;
      alert("이메일 인증이 정상적으로 확인되었습니다.");
    };

    const authRegister = async () => {
      if (!name.value) {
        alert("이름을 입력해주세요.");
        return;
      }

      if (!email.value) {
        alert("이메일을 입력해주세요.");
        return;
      }

      if (!emailAuthStatus.value) {
        alert("이메일 인증을 해주세요.");
        return;
      }

      if (!password.value) {
        alert("비밀번호를 입력해주세요.");
        return;
      }

      if (password.value !== confirmPassword.value) {
        alert("비밀번호 확인이 잘못되었습니다.");
        return;
      }

      if (!phone.value) {
        alert("전화번호를 입력해주세요.");
        return;
      }

      const body = {
        name: name.value,
        email: email.value,
        phone: phone.value,
        password: password.value,
      };
      const status = await store.dispatch("Auth/AuthRegister", body);

      if (status) {
        alert("회원가입이 완료되었습니다. 로그인 해주세요.");
        router.push("/auth/login");
        return;
      }
    };
    return {
      name,
      email,
      emailAuthAreaStatus,
      emailAuthResponseStatus,
      authCode,
      phone,
      password,
      confirmPassword,
      authEmail,
      confirmAuth,
      authRegister,
    };
  },
};
</script>

<style>
.auth_register_loading_view {
  position: fixed;
  transform: translate(0%, 550%);
  z-index: 5;
  font-size: 22px;
  font-weight: 700;
}

.auth_register_main {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20% 0% 0% 0%;
}

.auth_register_main > .title {
  font-size: 33px;
  font-weight: 700;
  text-align: center;
}

.auth_register_main > .auth_register_content {
  width: 100%;
  padding: 30px;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.auth_register_main > .auth_register_content > .content > .content_item {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-top: 40px;
}

.auth_register_main
  > .auth_register_content
  > .content
  > .content_item
  > .title {
  display: flex;
  justify-content: row;
  padding-right: 30px;
  align-items: center;
  font-size: 24px;
  font-weight: 700;
  color: #428eff;
}

.auth_register_main
  > .auth_register_content
  > .content
  > .content_item
  > .content_input {
  display: flex;
  justify-content: row;
  align-items: center;
}

.auth_register_main
  > .auth_register_content
  > .content
  > .content_item
  > .content_input
  > input {
  border: none;
  padding: 8px 8px 8px 0px;
  border-bottom: 1px solid black;
  font-size: 20px;
  font-weight: 700;
}

.auth_register_main
  > .auth_register_content
  > .content
  > .content_item
  > .content_input
  > input:focus {
  outline: none;
}

.auth_register_main
  > .auth_register_content
  > .content
  > .content_item
  > .auth_btn {
  font-size: 18px;
  font-weight: 700;
  padding-left: 12px;
  cursor: pointer;
}

.auth_register_main > .register_btn {
  background-color: #428eff;
  color: white;
  padding: 15px 48px;
  margin-top: 48px;
  font-size: 19px;
  font-weight: 700;
}
</style>
