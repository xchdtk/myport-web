<template>
  <div class="team_apply_main">
    <div class="title">팀원 모집하기</div>
    <div class="team_apply_content">
      <div class="subject">
        <div class="title">어떤 종류의 팀인가요?</div>
        <div class="content">
          <div
            class="item"
            :class="{
              select_team_type: team.type === teamTypeGroup.competition,
            }"
            @click="() => selectTeamType(teamTypeGroup.competition)"
          >
            공모전 / 해커톤
          </div>
          <div
            class="item"
            :class="{ select_team_type: team.type === teamTypeGroup.study }"
            @click="() => selectTeamType(teamTypeGroup.study)"
          >
            스터디
          </div>
          <div
            class="item"
            :class="{
              select_team_type: team.type === teamTypeGroup.activity,
            }"
            @click="() => selectTeamType(teamTypeGroup.activity)"
          >
            대외활동
          </div>
          <div
            class="item"
            :class="{
              select_team_type: team.type === teamTypeGroup.project,
            }"
            @click="() => selectTeamType(teamTypeGroup.project)"
          >
            프로젝트
          </div>
          <div
            class="item"
            :class="{ select_team_type: team.type === teamTypeGroup.other }"
            @click="() => selectTeamType(teamTypeGroup.other)"
          >
            기타
          </div>
        </div>
      </div>
      <div class="name">
        <div class="title">팀 이름</div>
        <div class="content">
          <input
            type="text"
            @focus="addTeamApplyNameInputFocus"
            @blur="removeTeamApplyNameInputFocus"
            placeholder="팀 이름"
            :class="{ name_input_focus: teamApplyNameInputFocus }"
            v-model="team.name"
          />
        </div>
      </div>
      <div class="description">
        <div class="title">간단한 설명</div>
        <div class="content">
          <input
            type="text"
            @focus="addTeamApplyDescriptionInputFocus"
            @blur="removeTeamApplyDescriptionInputFocus"
            placeholder="간단한 설명"
            :class="{ description_input_focus: teamApplyDescriptionInputFocus }"
            v-model="team.description"
          />
        </div>
      </div>
      <div class="detail_description">
        <div class="title">자세한 설명</div>
        <div class="content">
          <textarea
            id="detail_description"
            rows="10"
            @focus="addTeamApplyDetailDescriptionInputFocus"
            @blur="removeTeamApplyDetailDescriptionInputFocus"
            placeholder="자세한 설명"
            :class="{
              detail_description_input_focus:
                teamApplyDetailDescriptionInputFocus,
            }"
            v-model="team.detailDescription"
          ></textarea>
        </div>
      </div>
      <div class="recruitment">
        <div class="title">모집 분야</div>
        <div class="content">
          <textarea
            id="recruitment"
            rows="10"
            @focus="addTeamApplyRecruitmentInputFocus"
            @blur="removeTeamApplyRecruitmentInputFocus"
            placeholder="모집 분야"
            :class="{
              detail_recruitment_input_focus: teamApplyRecruitmentInputFocus,
            }"
            v-model="team.recruitment"
          ></textarea>
        </div>
      </div>
    </div>
    <button class="recruitment_btn" @click="() => recruitmentTeam()">
      모집하기
    </button>
    <div class="blank"></div>
  </div>
</template>

<script>
import { ref, onMounted, reactive } from "vue";
import { useStore } from "vuex";
import router from "@/router";

export default {
  name: "ApplyView",
  setup() {
    const store = useStore();

    const teamTypeGroup = {
      competition: "공모전/해커톤",
      study: "스터디",
      activity: "대외활동",
      project: "프로젝트",
      other: "기타",
    };
    const team = reactive({
      type: "",
      name: "",
      description: "",
      detailDescription: "",
      recruitment: "",
    });
    const teamApplyNameInputFocus = ref(false);
    const teamApplyDescriptionInputFocus = ref(false);
    const teamApplyDetailDescriptionInputFocus = ref(false);
    const teamApplyRecruitmentInputFocus = ref(false);

    const selectTeamType = (value) => {
      team.type = value;
    };

    const recruitmentTeam = async () => {
      if (!team.type) {
        alert("팀 종류를 선택해주세요.");
        return;
      }

      if (!team.name) {
        alert("팀 이름을 입력해주세요.");
        return;
      }

      if (!team.description) {
        alert("팀 자세한 설명을 입력해주세요.");
      }

      const status = await store.dispatch("Team/SaveTeam", team);

      if (status) {
        alert("정상적으로 팀이 생성됐습니다.");
        router.push("/team");
        return;
      }

      router.push("/error");
    };

    const addTeamApplyNameInputFocus = () => {
      teamApplyNameInputFocus.value = true;
    };

    const removeTeamApplyNameInputFocus = () => {
      teamApplyNameInputFocus.value = false;
    };

    const addTeamApplyDescriptionInputFocus = () => {
      teamApplyDescriptionInputFocus.value = true;
    };

    const removeTeamApplyDescriptionInputFocus = () => {
      teamApplyDescriptionInputFocus.value = false;
    };

    const addTeamApplyDetailDescriptionInputFocus = () => {
      teamApplyDetailDescriptionInputFocus.value = true;
    };

    const removeTeamApplyDetailDescriptionInputFocus = () => {
      teamApplyDetailDescriptionInputFocus.value = false;
    };

    const addTeamApplyRecruitmentInputFocus = () => {
      teamApplyRecruitmentInputFocus.value = true;
    };

    const removeTeamApplyRecruitmentInputFocus = () => {
      teamApplyRecruitmentInputFocus.value = false;
    };

    return {
      team,
      teamTypeGroup,
      teamApplyNameInputFocus,
      teamApplyDescriptionInputFocus,
      teamApplyDetailDescriptionInputFocus,
      teamApplyRecruitmentInputFocus,
      selectTeamType,
      addTeamApplyNameInputFocus,
      removeTeamApplyNameInputFocus,
      addTeamApplyDescriptionInputFocus,
      removeTeamApplyDescriptionInputFocus,
      addTeamApplyDetailDescriptionInputFocus,
      removeTeamApplyDetailDescriptionInputFocus,
      addTeamApplyRecruitmentInputFocus,
      removeTeamApplyRecruitmentInputFocus,
      recruitmentTeam,
    };
  },
};
</script>

<style>
.team_apply_main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 8% 0%;
}
.team_apply_main > .blank {
  margin-bottom: 65px;
}

.team_apply_main > .title {
  font-size: 30px;
  font-weight: 700;
  text-align: center;
  color: #428eff;
}

.team_apply_main > .team_apply_content {
  display: flex;
  flex-direction: column;
  border: 3px solid #428eff;
  border-radius: 15px;
  margin-top: 4%;
  padding: 0px 35px;
  padding-bottom: 35px;
}

.select_team_type {
  border: 3px solid #428eff !important;
  color: #428eff !important;
}

.team_apply_main > .team_apply_content > .subject {
  margin-top: 55px;
}

.team_apply_main > .team_apply_content > .subject > .title {
  font-size: 23px;
  font-weight: 700;
  color: black;
}

.team_apply_main > .team_apply_content > .subject > .content {
  display: flex;
  flex-direction: row;
  margin-top: 3%;
}

.team_apply_main > .team_apply_content > .subject > .content > .item {
  border: 3.5px solid#EFF2FB;
  margin-right: 2%;
  color: #9b9b9b;
  padding: 10px 14px;
  font-size: 18px;
  font-weight: 700;
}

.team_apply_main > .team_apply_content > .name {
  margin-top: 55px;
}

.team_apply_main > .team_apply_content > .name > .title {
  font-size: 23px;
  font-weight: 700;
  color: black;
}

.team_apply_main > .team_apply_content > .name > .content {
  font-size: 23px;
  font-weight: 700;
  margin-top: 3%;
}

.team_apply_main > .team_apply_content > .name > .content > input {
  width: 100%;
  border: none;
  background-color: #eef1f2;
  padding: 20px;
  border-radius: 5px;
}

.name_input_focus {
  outline: 3px solid #428eff;
}

.team_apply_main > .team_apply_content > .description {
  margin-top: 55px;
}

.team_apply_main > .team_apply_content > .description > .title {
  font-size: 23px;
  font-weight: 700;
  color: black;
}

.team_apply_main > .team_apply_content > .description > .content {
  font-size: 23px;
  font-weight: 700;
  margin-top: 3%;
}

.team_apply_main > .team_apply_content > .description > .content > input {
  width: 100%;
  border: none;
  background-color: #eef1f2;
  padding: 20px;
  border-radius: 5px;
}

.description_input_focus {
  outline: 3px solid #428eff;
}

.team_apply_main > .team_apply_content > .detail_description {
  margin-top: 55px;
}

.team_apply_main > .team_apply_content > .detail_description > .title {
  font-size: 23px;
  font-weight: 700;
  color: black;
}

.team_apply_main > .team_apply_content > .detail_description > .content {
  font-size: 23px;
  font-weight: 700;
  margin-top: 3%;
}

.team_apply_main
  > .team_apply_content
  > .detail_description
  > .content
  > textarea {
  width: 100%;
  border: none;
  background-color: #eef1f2;
  padding: 20px;
  border-radius: 5px;
  resize: none;
}

.detail_description_input_focus {
  outline: 3px solid #428eff;
}

.team_apply_main > .team_apply_content > .recruitment {
  margin-top: 55px;
}

.team_apply_main > .team_apply_content > .recruitment > .title {
  font-size: 23px;
  font-weight: 700;
  color: black;
}

.team_apply_main > .team_apply_content > .recruitment > .content {
  font-size: 23px;
  font-weight: 700;
  margin-top: 3%;
}

.team_apply_main > .team_apply_content > .recruitment > .content > textarea {
  width: 100%;
  border: none;
  background-color: #eef1f2;
  padding: 20px;
  border-radius: 5px;
  resize: none;
}

.detail_recruitment_input_focus {
  outline: 3px solid #428eff;
}

.team_apply_main > .recruitment_btn {
  margin-top: 3%;
  border: none;
  border-radius: 5px;
  background-color: #428eff;
  color: white;
  padding: 18px 27px;
  font-size: 16px;
  font-weight: 700;
}
</style>
