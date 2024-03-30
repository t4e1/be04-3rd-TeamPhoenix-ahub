<template>
    <nav class="navbar navbar-expand-sm bg-light navbar-light">
        <div class="container-fluid">
            <RouterLink to="/"><img src="@/assets/img/purple.png" class="logoimage"></RouterLink>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="collapsibleNavbar">
                <ul class="navbar-nav" style="margin-left:30px;">
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                            style="font-size:14pt">일반 게시판</a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#" @click="reviewBoard">
                                    <RouterLink to="/post/posts">후기</RouterLink>
                                </a></li>
                            <li><a class="dropdown-item" href="#">레시피</a></li>
                        </ul>
                    </li>
                </ul>
                <ul class="navbar-nav" style="margin-left: 15px">
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                            style="font-size:14pt">정보 게시판</a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#" @click="fairBoard">
                                    <RouterLink to="/board/fairs">페어 정보</RouterLink>
                                </a></li>
                            <li><a class="dropdown-item" href="#">뉴스</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
        <div class="icon-div">
            <i class="bi bi-person-circle iconSize" @click="profile"></i>
        </div>
        <button type="button" class="loginbtn" @click="clickLoginBtn">{{ loginState }}</button>
    </nav>
</template>

<script setup>
import { ref } from 'vue';
import { RouterLink, RouterView, useRouter } from 'vue-router';

const router = useRouter();
function login() {
    router.push('/login');
}

function profile() {
    router.push('/member/findMyprofile/:id');
}

function fairBoard() {
    router.push('/board/fairs');
}

function reviewBoard() {
    router.push('/post/posts')
}

const loginState = ref('로그인');
let loginCheck = localStorage.getItem('member_id');

const clickLoginBtn = () => {
    if (loginState.value == '로그인') {
    } else {
        localStorage.clear();
        loginCheck = null;
        loginState.value = '로그인';
    }
    router.push('/login');
};

if (localStorage.getItem('member_id') !== null) {
    loginState.value = '로그아웃';
}



// watch(loginCheck, (newValue, oldValue) => {
//   if(newValue !== null) {
//     loginState.value = '로그아웃';
//   }
// });
</script>

<style scoped>
.loginbtn {
    background-color: #8c52ff;
    color: white;
    padding: 8px 14px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 12px;
    font-style: bold;
    float: right;
    /* margin-top: 1.5%; */
    margin-right: 2%;
    width: 80px;
}

.logoimage {
    width: 70px;
    height: 70px;
}

.logo {
    float: left;
    cursor: pointer;
}

.icon-div {
    width: 27px;
    height: 27px;
    margin-right: 15px;
}

.iconSize {
    font-size: 27px;
    color: #7030ee;
}

ul li {
    list-style: none;
}

a {
    text-decoration: none;
    color: #333;
}

#menu {
    text-align: center;
    float: left;
    margin-left: 2%;
    margin-top: 2%;
    line-height: 30px;
    cursor: pointer;
}
</style>