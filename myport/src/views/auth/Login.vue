<template>
  <div class="auth_login_main">
    <div class="auth_login_content">
      <div class="title">로그인</div>
      <div class="input_gr">
        <input
          type="text"
          placeholder="아이디"
          v-model="id"
          @input="onChange($event)"
        />
        <input
          type="password"
          name="focus"
          placeholder="비밀번호"
          v-model="password"
        />
      </div>
      <div class="sub_content">
        <div>회원가입</div>
        <div>비밀번호를 잃어버리셨나요?</div>
      </div>
      <div class="error_msg">
        <div v-if="inputStatus && !id && !password">
          * 아이디 또는 비밀번호가 잘못되었습니다.
        </div>
        <div v-else-if="inputStatus && !id && password">
          * 아이디를 입력해주세요.
        </div>
        <div v-else-if="inputStatus && id && !password">
          * 비밀번호를 입력해주세요
        </div>
      </div>
      <button @click="onLogin">로그인</button>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "AuthLoginView",
  setup() {
    const inputStatus = ref(false);
    const id = ref("");
    const password = ref("");

    const onLogin = () => {
      if (id.value && password.value) {
        alert("로그인 성공");
      }
    };
    const onChange = (event) => {
      inputStatus.value = true;
    };

    return {
      id,
      password,
      inputStatus,
      onLogin,
      onChange,
    };
  },
};
</script>

<style>
.auth_login_main {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 20% 0 20% 0%;
}

.auth_login_main > .auth_login_content {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 30px;
}

.auth_login_main > .auth_login_content > .title {
  font-size: 33px;
  font-weight: 700;
  text-align: center;
}

.auth_login_main > .auth_login_content > .input_gr {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 50px;
}

.auth_login_main > .auth_login_content > .input_gr > input {
  height: 45px;
  border: 3px solid #428eff;
  outline: none;
  border-radius: 5px;
  width: 415px;
  height: 57px;
  padding: 5px 10px;
  font-size: 22px;
  margin-top: 30px;
  background-color: #428eff;
  color: white;
}

.auth_login_main > .auth_login_content > .input_gr > input::placeholder {
  color: black;
  font-size: 18px;
  font-weight: 700;
}

.auth_login_main > .auth_login_content > button {
  background-color: white;
  border: 3px solid #428eff;
  border-radius: 10px;
  margin-top: 55px;
  padding: 15px 0px;
  font-size: 22px;
  width: 415px;
  font-weight: 700;
}

.auth_login_main > .auth_login_content > .error_msg {
  margin-top: 12px;
  color: #dc143c;
}

.auth_login_main > .auth_login_content > .sub_content {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 415px;
  margin: 1% 30%;
  font-size: 15px;
  cursor: pointer;
}
</style>
