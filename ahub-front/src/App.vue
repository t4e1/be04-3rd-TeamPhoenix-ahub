<script setup>
import { RouterView } from 'vue-router';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

</script>
<template>
  <header class="header">
    <Header/>
  </header>
  <main>
    <RouterView />
  </main>
  <hr>
  <footer>
    <Footer/>
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
  font-size: 12px;
}

.header {
  width: 100%;
  height: 80px;
  position: relative;
  top: 0;
  background-color: #F8F9FC;
}

</style>
