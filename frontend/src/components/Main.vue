<template>
  <div class="wrap">
    <div class="wrap-image">
      <img src="/src/img/main.jpg">
    </div>
  </div>

  <div class="wrap-button">
    <button>
      <router-link to="/calendar">Calendar</router-link>
    </button>
  </div>
</template>

<style scoped>

  @font-face {
    font-family: 'omyu_pretty';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2304-01@1.0/omyu_pretty.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  }

  * {
    font-family: 'omyu_pretty';
  }
  .wrap{
    position: relative;
  }

  img {
    width: 100%;
    height: 100%;
  }

  .wrap-button {
    position : absolute;
    left: 44%;
    top: 74.5%;
  }

  button {
    background-color: transparent;
    border: none;
  }

  a {
    color : black;
    text-decoration: none;
    font-size: 30px;
  }

</style>