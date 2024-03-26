<script setup>
  import {RouterLink, RouterView} from 'vue-router';

</script>

<template>
  <header>
    <RouterLink to="/board/fairs">페어 게시판</RouterLink>
  </header>
  <main>
    <RouterView/>
  </main>
  <footer>

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
</style>
