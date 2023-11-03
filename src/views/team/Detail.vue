<template>
  <div class="team_detail_main">
    <div class="header">
      <div class="title">{{ team.name }}</div>
      <div class="description">{{ team.description }}</div>
    </div>
    <div class="select_group">
      <div
        class="select_detail"
        :class="{ border_bottom: selectGroupStatus === 'detail' }"
        @click="() => selectGroup('detail')"
      >
        상세정보
      </div>
      <div
        class="select_team"
        :class="{ border_bottom: selectGroupStatus === 'team' }"
        @click="() => selectGroup('team')"
      >
        팀 정보
      </div>

      <div
        v-if="team.leader"
        class="select_waiting"
        :class="{ border_bottom: selectGroupStatus === 'waiting' }"
        @click="() => selectGroup('waiting')"
      >
        지원대기
      </div>
    </div>
    <div class="content_group">
      <div class="content_detail" v-if="selectGroupStatus === 'detail'">
        <div class="img_group">
          <img
            src="@/assets/images/team/team_main_img.svg"
            alt="팀 대표 이미지"
          />
        </div>
        <div class="description">
          <div class="title">팀 설명</div>
          <div class="content">
            {{ team.detail_description }}
          </div>
        </div>
        <div class="qualification">
          <div class="title">팀 자격</div>
          <div class="content">
            {{ team.recruitment }}
          </div>
        </div>
        <button
          v-if="!team.leader && !team.member && !team.support"
          class="apply"
          @click="() => applyTeam()"
        >
          지원하기
        </button>
        <div
          v-if="!team.leader && !team.member && team.support"
          class="supported"
        >
          이미 지원하셨습니다.
        </div>
      </div>
      <div class="content_team" v-if="selectGroupStatus === 'team'">
        <div class="content_team_group" v-for="(item, idx) in team.team_user">
          <img
            :src="item?.profile_image_url ? item?.profile_image_url : ''"
            alt="유저 기본이미지"
          />
          <div class="name">{{ item?.user.name }}</div>
          <div class="job">{{ item?.user_role }}</div>
        </div>
      </div>
      <div class="content_team" v-if="selectGroupStatus === 'waiting'">
        waiting
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, reactive } from "vue";
import { useStore } from "vuex";
import router from "@/router";
import { useRoute } from "vue-router";
import store from "@/store";

export default {
  name: "ApplyView",
  setup() {
    const route = useRoute();

    const teamSeq = route.query?.teamSeq;

    const selectGroupStatus = ref("detail");
    const team = ref({});

    onMounted(async () => {
      console.log("teamSeq", teamSeq);
      const teamStatus = await store.dispatch("Team/GetTeam", teamSeq);
      if (teamStatus) {
        team.value = store.state.Team.team;
        console.log("team", team.value);
        return;
      }

      router.push("/error");
    });

    const selectGroup = (value) => {
      selectGroupStatus.value = value;
    };

    const applyTeam = async () => {
      console.log("들어오냐?");
      const status = await store.dispatch("Team/ApplyTeam", {
        team_seq: teamSeq,
      });
      console.log("applyTeam status", status);
      if (status) {
        alert(
          "정상적으로 팀에 지원하였습니다. 최대 일주일 내로 연락드릴예정입니다."
        );
        router.push("/team");
        return;
      }

      router.push("/error");
    };
    return {
      team,
      selectGroupStatus,
      selectGroup,
      applyTeam,
    };
  },
};
</script>

<style>
.team_detail_main {
  margin: 10%;
}
.team_detail_main > .header {
  width: 100%;
  background-color: #428eff;
  margin-top: 30px;
  padding: 30px 22px;
  border-radius: 10px;
}

.team_detail_main > .header > .title {
  color: white;
  font-size: 26px;
  font-weight: 700;
}

.team_detail_main > .header > .description {
  color: white;
  font-size: 16px;
  font-weight: 700;
  padding-top: 10px;
}

.team_detail_main > .select_group {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 8px 30px 0px 30px;
  border-bottom: 1px solid #eaeaea;
  cursor: pointer;
}

.team_detail_main > .select_group > .select_detail,
.select_team,
.select_waiting {
  font-size: 18px;
  font-weight: 700;
}

.team_detail_main > .select_group > .border_bottom {
  border-bottom: 4px solid #428eff;
  border-radius: 3px;
}

.team_detail_main > .content_group > .content_detail {
  margin: 24px;
  display: flex;
  flex-direction: column;
}

.team_detail_main > .content_group > .content_detail > .img_group {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 2%;
}
.team_detail_main > .content_group > .content_detail > .img_group > img {
  width: 30%;
  height: 30%;
}

.team_detail_main > .content_group > .content_detail > .description {
  margin-top: 56px;
}

.team_detail_main > .content_group > .content_detail > .description > .title {
  font-size: 28px;
  font-weight: 700;
}

.team_detail_main > .content_group > .content_detail > .description > .content {
  font-size: 18px;
  font-weight: 700;
  color: #666666;
  padding-top: 11px;
}

.team_detail_main > .content_group > .content_detail > .qualification {
  margin-top: 90px;
}

.team_detail_main > .content_group > .content_detail > .qualification > .title {
  font-size: 28px;
  font-weight: 700;
}

.team_detail_main
  > .content_group
  > .content_detail
  > .qualification
  > .content {
  font-size: 18px;
  font-weight: 700;
  color: #666666;
  padding-top: 11px;
}

.team_detail_main > .content_group > .content_detail > .apply {
  margin-top: 120px;
  border: none;
  background-color: #428eff;
  color: white;
  padding: 14px 18px;
  font-size: 18px;
  font-weight: 700;
  border-radius: 5px;
}

.team_detail_main > .content_group > .content_detail > .supported {
  margin-top: 120px;
  border: none;
  background-color: #428eff;
  color: white;
  padding: 14px 18px;
  font-size: 18px;
  font-weight: 700;
  border-radius: 5px;
  text-align: center;
}

.team_detail_main > .content_group > .content_team {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 3%;
}

.team_detail_main > .content_group > .content_team > .content_team_group {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5%;
}

.team_detail_main > .content_group > .content_team > .content_team_group > img {
  width: 140px;
  height: 140px;
  border-radius: 50%;
  object-fit: cover;
}

.team_detail_main
  > .content_group
  > .content_team
  > .content_team_group
  > .name {
  margin-top: 8%;
  font-size: 20px;
  font-weight: 700;
}

.team_detail_main
  > .content_group
  > .content_team
  > .content_team_group
  > .job {
  font-size: 15px;
  font-weight: 700;
  color: #666666;
}
</style>
