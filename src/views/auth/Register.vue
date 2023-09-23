<template>
  <div class="auth_register_main">
    <div class="title">회원가입</div>
    <div class="auth_register_content">
      <div class="content">
        <div class="content_item">
          <div class="title"><h4>이름</h4></div>
          <div class="content_input">
            <input type="text" />
          </div>
        </div>
        <div class="content_item">
          <div class="title">이메일</div>
          <div class="content_input">
            <input type="text" v-model="email" />
          </div>
          <div class="auth_btn" @click="() => authEmail()">인증</div>
        </div>
        <div class="content_item">
          <div class="title">비밀번호</div>
          <div class="content_input">
            <input type="password" />
          </div>
        </div>
        <div class="content_item">
          <div class="title">전화번호</div>
          <div class="content_input">
            <input type="text" />
          </div>
          <div class="auth_btn">인증</div>
        </div>
      </div>
    </div>
    <div class="register_btn">회원가입</div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";
import router from "@/router";

export default {
  name: "AuthRegisterView",
  setup() {
    const email = ref("");
    const store = useStore();
    const authEmail = async () => {
      console.log("들어오나??");
      console.log("email", email.value);
      if (!email.value) {
        alert("이메일을 입력해주세요");
        return;
      }
      console.log("들어오냐고??");
      const status = await store.dispatch("Auth/getAuthEmail", email.value);
      if (!status) {
        router.push("/error");
      }
    };
    return {
      email,
      authEmail,
    };
  },
};
</script>

<style>
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
