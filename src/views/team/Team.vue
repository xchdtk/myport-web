<template>
  <div class="team_main">
    <div class="support_team" @click="() => fnMovePage('/team/apply')">
      팀원 모집하기
    </div>
    <div class="search_team">
      <input type="text" placeholder="팀 이름을 검색하세요." />
      <button>검색</button>
      <button>설정</button>
    </div>
    <div class="my_team">
      <div class="title" v-if="userTeams.length">내가 소속된 팀</div>
      <div
        class="my_team_group"
        v-if="userTeams"
        v-for="(item, idx) in userTeams"
        @click="() => fnMoveTeamDetail(item?.team?.team_seq)"
      >
        <div class="my_team_content_01">
          <div class="team_info">
            <img
              src="@/assets/images/team/team_person_green_icon.svg"
              alt="사람 이미지"
            />
            <div class="role">{{ item?.team?.userTeam?.user_role }}</div>
          </div>
          <div class="name">{{ item?.team?.name }}</div>
          <div class="description">{{ item?.team?.description }}</div>
          <div class="type">{{ item?.team?.type }}</div>
        </div>
        <div class="my_team_content_02">
          <img
            src="@/assets/images/team/team_main_img.svg"
            alt="팀 대표 이미지"
          />
        </div>
      </div>
    </div>
    <div class="team_br_line" v-if="teams.length"></div>
    <div class="recruitment_team" v-if="teams.length">
      <div class="title">팀원 모집 중인 글</div>
      <div
        class="recruitment_team_group"
        v-for="(item, idx) in teams"
        @click="() => fnMoveTeamDetail(item?.team_seq)"
      >
        <div class="recruitment_team_content_01">
          <div class="name">{{ item?.name }}</div>
          <div class="description">{{ item?.description }}</div>
          <div class="type">{{ item?.type }}</div>
        </div>
        <div class="recruitment_team_content_02">
          <img
            src="@/assets/images/team/team_main_img.svg"
            alt="팀 대표 이미지"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, reactive, onMounted } from "vue";
import { useStore } from "vuex";
import router from "@/router";

export default {
  name: "TeamView",
  setup() {
    const store = useStore();

    const userTeams = ref([]);
    const teams = ref([]);

    onMounted(async () => {
      const userTeamsStatus = await store.dispatch("Team/GetUserTeams");
      if (userTeamsStatus) {
        userTeams.value = store.state.Team.userTeams;
      }

      const teamsStatus = await store.dispatch("Team/GetTeams");
      if (teamsStatus) {
        teams.value = store.state.Team.teams;
        console.log("teams", teams.value);
        return;
      }

      router.push("/error");
    });

    const fnMoveTeamDetail = (value) => {
      console.log("fnMoveTeamDetail query", value);
      router.push(`/team/detail?teamSeq=${value}`);
    };

    const fnMovePage = (page) => {
      router.push(page);
    };
    return {
      userTeams,
      teams,
      fnMovePage,
      fnMoveTeamDetail,
    };
  },
};
</script>

<style>
.team_main {
  margin: 5% 0 10% 0;
}

.team_br_line {
  border: 4.2px solid #f2f4f5;
}

.support_team {
  width: 20%;
  margin: 20px 0px;
  font-size: 16px;
  font-weight: 700;
  color: #428eff;
  border: 1px solid #428eff;
  border-radius: 5px;
  text-align: center;
  padding: 4px 8px;
  cursor: pointer;
}

.search_team {
  width: 100%;
  margin-bottom: 15px;
  display: flex;
  flex-direction: row;
}

.search_team > input {
  width: 80%;
  height: 40px;
  padding: 12px;
  border-radius: 5px;
}

.search_team > button {
  width: 8%;
  margin-left: 2%;
  background-color: white;
  border: 1px solid #428eff;
  border-radius: 5px;
  color: #428eff;
  font-size: 14px;
  font-weight: 700;
}

.my_team {
  margin-bottom: 18px;
}

/* 소속되어 있는 팀 */
.my_team > .my_team_group {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 15px;
}

.my_team > .my_team_group > .my_team_content_01 {
  flex: 9;
  margin-right: 7%;
}

.my_team > .title {
  font-size: 20px;
  font-weight: 700;
  color: #428eff;
}

.my_team > .my_team_group > .my_team_content_01 > .team_info {
  display: flex;
  flex-direction: row;
  margin-top: 20px;
}

.my_team > .my_team_group > .my_team_content_01 > .team_info > .role {
  padding-left: 9px;
  font-size: 14px;
  font-weight: 600;
  color: #44cfae;
}

.my_team > .my_team_group > .my_team_content_01 > .name {
  margin-top: 12px;
  font-size: 19px;
  font-weight: 700;
}

.my_team > .my_team_group > .my_team_content_01 > .description {
  margin-top: 12px;
  font-size: 14.5px;
  font-weight: 500;
}

.my_team > .my_team_group > .my_team_content_01 > .type {
  display: inline-block;
  background-color: #f1f7ff;
  color: #428eff;
  font-size: 16px;
  font-weight: 400;
  padding: 12px;
  margin-top: 12px;
  border-radius: 3px;
}

.my_team > .my_team_group > .my_team_content_02 {
  flex: 1;
}

.my_team > .my_team_group > .my_team_content_02 > img {
  width: 120px;
  object-fit: cover;
}

/* 팀원 모집 */
.recruitment_team {
  margin-top: 18px;
}

.recruitment_team > .title {
  font-size: 20px;
  font-weight: 700;
  color: #428eff;
}

.recruitment_team > .recruitment_team_group {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 15px;
}

.recruitment_team > .recruitment_team_group > .recruitment_team_content_01 {
  flex: 9;
  margin-right: 7%;
}

.recruitment_team
  > .recruitment_team_group
  > .recruitment_team_content_01
  > .name {
  margin-top: 12px;
  font-size: 19px;
  font-weight: 700;
}

.recruitment_team
  > .recruitment_team_group
  > .recruitment_team_content_01
  > .description {
  margin-top: 12px;
  font-size: 14.5px;
  font-weight: 500;
}

.recruitment_team
  > .recruitment_team_group
  > .recruitment_team_content_01
  > .type {
  display: inline-block;
  background-color: #f1f7ff;
  color: #428eff;
  font-size: 13px;
  font-weight: 400;
  padding: 17px;
  margin-top: 12px;
  border-radius: 3px;
}

.recruitment_team > .recruitment_team_group > .recruitment_team_content_02 {
  flex: 1;
}

.recruitment_team
  > .recruitment_team_group
  > .recruitment_team_content_02
  > img {
  width: 120px;
  object-fit: cover;
}
</style>
f
