<template>
  <div class="wrap">
    <div class="wrap-image">
      <img src="/src/img/diary.jpg">
    </div>

    <div class="wrap-text">
      <textarea class="diary-text" v-model="diary"></textarea>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      diary : ""
    }
  }
}
</script>

<style scoped>
  .wrap {
    position: relative;
  }

  img{
    width: 100%;
    height: 100%;
  }

  .wrap-text {
    position: absolute;
    left: 25%;
    top: 7%;
    width: 100%;
    height: 100%;
  }

  .diary-text {
    resize: none;
    width: 40%;
    height: 50%;
  }


</style>