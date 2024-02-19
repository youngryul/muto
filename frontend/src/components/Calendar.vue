<template>
  <div class="wrap">
    <div class="wrap-image">
      <img src="/src/img/1m-canlendar.jpg">
    </div>

    <div class="title">
      <button type="button" @click="changeCalendar(-1)"> < </button>
      <span class="span-title">{{ calendarHeader }}</span>
      <button type="button" @click="changeCalendar(1)"> > </button>
    </div>

    <div class="wrap-table">
      <div class="table-tr" v-for="(row, index) in days" :key="index">
        <div class="table-td" v-for="(day, index2) in row" :key="index2">
          <span class="day">{{ day }}</span>
        </div>
      </div>
    </div>

    <div class="wrap-button">
      <button class="diary-button">
        <router-link to="/diary" class="router-button">Diary</router-link>
      </button>
    </div>

  </div>



</template>

<script>
export default {
  data() {
    return {
      today: new Date(),
      days: [],
      calendarHeader: '',
    }
  },

  mounted() {
    this.calendar()
  },

  methods: {
    calendar() {
      this.days = []

      const year = this.today.getFullYear()
      const month = this.today.getMonth()

      // 시작 요일
      const startDay = new Date(year, month, 1).getDay()

      // 마지막 날
      const endDay = new Date(year, month + 1, 0).getDate()

      // 날짜 배열 생성
      const basicDays = Array.from({length: endDay}, (v, i) => i + 1)

      // 빈 날짜 생성
      const emptyDays = Array(startDay).fill(null)

      // Days 배열 가공
      const combinedDays = [...emptyDays, ...basicDays]

      for (let i = 0; i < endDay + startDay; i += 7) {
        this.days.push(combinedDays.slice(i, i + 7))
      }

      this.calendarHeader = `${year}년 ${month + 1}월`

    },

    changeCalendar(val) {
      this.today = new Date(this.today.setMonth(this.today.getMonth() + val, 1))
      this.calendar()
    }
  }
}
</script>

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

  img {
    width: 100%;
    height: 100%;
  }

  .wrap{
    position: relative;
  }

  .title {
    position: absolute;
    left: 43%;
    top: 8%;
  }

  .span-title {
    font-size: 20px;
  }

  .wrap-table {
    position : absolute;
    left: 17%;
    top: 22%;
    width: 83%;
    height:100%;
  }

  .table-tr {
    display: flex;
    flex-direction: row;
  }

  .table-td {
    width: 11%;
    position: relative;
    text-align: left;
    margin-left: 4px;
    margin-top: 2px;
  }

  .table-td:after {
    content:"";
    display:block;
    padding-bottom:80%;
  }

  .day {
    position: absolute;
  }

  .wrap-button{
    position : absolute;
    margin-left: 1045px;
    margin-top: -105px;
  }

  .diary-button {
    background-color: transparent;
    border: none;
  }

  .router-button {
    color: black;
    text-decoration: none;
    font-size : 30px
  }



</style>
