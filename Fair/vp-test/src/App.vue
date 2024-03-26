<script setup>
import { RouterLink, RouterView } from "vue-router";

</script>

<template>
  <header>
    <div class="logo">
        <img src="@/assets/img/purple.png" id="logo">
    </div>
    <div class="normal-boards">

    </div>
    <div class="info-boards">

    </div>
    <!-- <div id="menu">
        <ul>
            <li><a href="#">일반 게시판 ▼</a>
                <ul>
                    <li><a href="#">페어 정보</a></li>
                    <li><a href="#">뉴스 정보</a></li>
                </ul>
            </li>
            <li><a href="#">정보 게시판 ▼</a>
                <ul>
                    <li><a href="#">후기 게시판</a></li>
                    <li><a href="#">레시피 공유 게시판</a></li>
                </ul>
            </li>
        </ul>
    </div> -->
    <div class="loginbtn">
        <button type="button" onclick="login()" id="loginbtn">로그아웃</button>
    </div>
  </header>
  <main>
]   <RouterView/>
  </main>
  <footer>
    <div class="leftthings">
        <p>
            <span class="ahub">AHUB &nbsp</span>
            <span>서비스 소개</span>
            <span> | </span>
            <span>서비스 약관</span>
            <span> | </span>
            <span>개인정보 처리방침</span>
            <span> | </span>
            <span>채용</span>
        </p>
    </div>
    <div class="rightthings">
        <p>
            <span>Team Phoenix | 대표: 백동현 | 사업자등록번호:472-56-00332</span><br>
            <span>주소: 서울특별시 동작구 보라매로 87 SFC빌딩 3층</span><br>
            <span>Copyright@2024XI#CIQ ALL RIGHTS RESERVED</span>
        </p>
    </div>
  </footer>
</template>

<style scoped>

@font-face {
    font-family: 'GmarketSansMedium';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

* {
    font-family: GmarketSansMedium;
}

main {
  border: 1px solid red;
  height: 85vh; 
  min-height: 800px; 
}

header {
    background-color: #F8F9FC;
    height: 7vh;
    min-height: 70px;
    position: relative;
    top: 0;
    display: flex;
    flex-direction: row;
}

.logo {
    width: 5vh;
    min-width: 70px;
}

#logo {
    height: 7vh;
    min-height: 70px;
}

.normal-boards {
    border: 1px solid;
    min-width: 220px;
    /* height: 70px;
    width: 30vh;
    min-width: 220px; */
    text-align: center;
    margin-left: 2%;
    margin-top: 2%;
    line-height: 30px;
    cursor: pointer;
}

.info-boards {
    border: 1px solid;
    height: 70px;
    width: 30vh;
    min-width: 220px;
}

.loginbtn {}

#loginbtn {
    height: 4vh;
    min-height: 35px;
    background-color: #6D31ED;
    color: white;
}

footer {
    background-color: #F8F9FC;
    height: 8vh;
    height: 80px;
}

.leftthings {
    margin-top: 20px;
    float: left;
    font-size: 13px;
}

.rightthings {
    float: right;
    font-size: 13px;
}
</style>
