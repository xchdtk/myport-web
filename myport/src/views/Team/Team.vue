<template>
    <div class="team_main">
        <div class="search_team">
            <input type="text" placeholder="팀 이름을 검색하세요.">
            <button>검색</button>
            <button>설정</button>
        </div>
        <div class="my_team">
            <div class="title">내가 소속된 팀</div>
            <div class="my_team_group" v-for="(item, idx) in my_teams">
                <div class="my_team_content_01">
                    <div class="team_info">
                        <img src="@/assets/images/team/team_person_green.svg" alt="사람 이미지">
                        <div class="role">{{ item.type }}</div>
                    </div>
                    <div class="team_title">{{ item.title }}</div>
                    <div class="team_cate">{{ item.category }}</div>
                </div>
                <div class="my_team_content_02">
                    <img src="@/assets/images/team/team_main_img.svg" alt="팀 대표 이미지">
                </div>
            </div>
        </div>
        <div class="team_br_line"></div>
        <div class="recruitment_team">
            <div class="title">팀원 모집 중인 글</div>
            <div class="recruitment_team_group" v-for="(item, idx) in recruitment_teams">
                <div class="recruitment_team_content_01">
                    <div class="team_info">
                        <img src="@/assets/images/team/team_person_blue.svg" alt="사람 이미지">
                        <div class="role">{{ item.people }}명</div>
                        <div class="role">모집</div>
                        <div class="role">{{ item.recruitment }}명</div>
                    </div>
                    <div class="team_title">{{ item.title }}</div>
                    <div class="team_cate">{{ item.category }}</div>
                </div>
                <div class="recruitment_team_content_02">
                    <img src="@/assets/images/team/team_main_img.svg" alt="팀 대표 이미지">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { reactive } from "vue";

export default {
    name: 'TeamView',
    setup () {
        const my_teams = reactive([
            {
                type: '팀장',
                title: '메타버스 NFT 관심 많은 대학생 모임',
                category: '닥터마틴 디자인 공모전',
                img: ''
            },
            {
                type: '팀원',
                title: '세인이 행복하게 해주기 프로젝트',
                category: '닥터마틴 디자인 공모전',
                img: ''
            },
        ])

        const recruitment_teams = reactive([
            {
                people: 3,
                recruitment: 1,
                title: '메타버스 NFT 관심 많은 대학생 모임',
                category: '닥터마틴 디자인 공모전',
                img: ''
            },
            {
                recruitment: 3,
                people: 1,
                title: '세인이 행복하게 해주기 프로젝트',
                category: '닥터마틴 디자인 공모전',
                img: ''
            },
        ])
        return {
            my_teams,
            recruitment_teams
        }
    },
}
</script>

<style>
    .team_main {
        margin: 5% 0 10% 0;
    }

    .team_br_line {
        border: 5px solid #F2F4F5;
    }

    .search_team {
        width: 100%;
        margin-bottom: 15px;;
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
        border: 1px solid #428EFF;
        border-radius: 5px;
        color: #428EFF;
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
        color: #44CFAE;
    }

    .my_team > .my_team_group > .my_team_content_01 > .team_title {
        margin-top: 12px;
        font-size: 16px;
        font-weight: 500;
    }

    .my_team > .my_team_group > .my_team_content_01 > .team_cate {
        display: inline-block;
        background-color: #f1f7ff;
        color:#428EFF;
        font-size: 13px;
        font-weight: 400;
        padding: 12px;
        margin-top: 32px;
        border-radius: 3px;
    }

    .my_team > .my_team_group > .my_team_content_02 {
        flex: 1;
    }

    .my_team > .my_team_group > .my_team_content_02 > img {
        width: 120px;
        object-fit: cover
    }

    /* 팀원 모집 */
    .recruitment_team {
        margin-top: 18px;
    }

    .recruitment_team > .title {
        font-size: 20px;
        font-weight: 700;
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

    .recruitment_team > .recruitment_team_group > .recruitment_team_content_01 > .team_info {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-top: 20px;
    }

    .recruitment_team > .recruitment_team_group > .recruitment_team_content_01 > .team_info > .role {
        padding-left: 9px;
        font-size: 14px;
        font-weight: 600;
        color: #428EFF
    }

    .recruitment_team > .recruitment_team_group > .recruitment_team_content_01 > .team_title {
        margin-top: 12px;
        font-size: 16px;
        font-weight: 500;
    }

    .recruitment_team > .recruitment_team_group > .recruitment_team_content_01 > .team_cate {
        display: inline-block;
        background-color: #f1f7ff;
        color:#428EFF;
        font-size: 13px;
        font-weight: 400;
        padding: 12px;
        margin-top: 32px;
        border-radius: 3px;
    }

    .recruitment_team > .recruitment_team_group > .recruitment_team_content_02 {
        flex: 1;
    }

    .recruitment_team > .recruitment_team_group > .recruitment_team_content_02 > img {
        width: 120px;
        object-fit: cover
    }
</style>