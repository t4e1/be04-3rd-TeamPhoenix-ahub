<template>
    <!-- 
        컴포넌트 목록: 
        1. 배너 
        2. 타이틀 & 서치 
        3. 페어 카드 컨테이너 
    -->
    <section class="container" id="global-container">
        <Banner/>
        <div class="left-sidebar"></div>
        <FairTitle/>
        <article class="main-article">
            <hr>
            <FairListContainer/>
        </article>
        <div class="right-sidebar"></div>
    </section>

</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router';
import Banner from '../components/Banner/Banner.vue';
import FairTitle from '../components/FairTitle.vue';
import FairListContainer from '../components/FairList/FairListContainer.vue';
</script>

<style scoped>
section {
    display: grid;
    min-width: 100%;
    min-height: 800px;
    grid-template-columns: 0.5fr 3fr 0.5fr;
    grid-template-rows: 180px 7% 5px auto;
    grid-template-areas:
        "banner banner banner"
        "left  title   right"
        "left   none    right"
        "left   main    right";
    padding: 0;
    margin: 0;
}

hr {
    margin: 5px;
}

.main-article {
    grid-area: main;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;

}

.left-sidebar {
    grid-area: left;
}

.right-sidebar {
    grid-area: right;
}

</style>