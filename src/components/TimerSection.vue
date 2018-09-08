<template>
  <div>
    <div class="time-display">
<<<<<<< HEAD
      {{minutesLeft}}:{{secondsLeft}} <br/>
=======
      <!-- {{ startTime -  }} -->
      25:00
>>>>>>> 9f9a9587137266dfc24994b8aac0ceec1b6e99d3
    </div>
    <button @click="startTimer()">Start Timer!</button>
  </div>
</template>

<script>
import { debounce } from 'lodash';

export default {
  name: 'TimerSection',
<<<<<<< HEAD
  data() {
    return {
      startTime: 0,
      timerRunning: false,
      startingMinutes: 25,
      startingSeconds: 60,
      minutesLeft: 25,
      secondsLeft: 0,
    };
  },
  watch: {
    timerRunning() {
      if (this.timerRunning) {
        this.debouncedUpdateTime();
      }
    },
  },
  created() {
    this.debouncedUpdateTime = debounce(this.updateTime, 500);
  },
  methods: {
    updateTime() {
      const currentTime = Date.now();
      const totalSecondsElapsed = Math.floor((currentTime - this.startTime) / 1000);
      const secondsElapsed = totalSecondsElapsed % 60;
      // So that the time rolls over properly
      // (i.e. immediatly goes to 24 on start, then 24:01, 24:00, 23:59)
      const extraMinute = secondsElapsed > 0 ? 1 : 0;
      const minutesElapsed = ((totalSecondsElapsed - secondsElapsed) / 60) + extraMinute;
      this.minutesLeft = this.startingMinutes - minutesElapsed;
      if (secondsElapsed === 0) {
        this.secondsLeft = 0;
      } else {
        this.secondsLeft = this.startingSeconds - secondsElapsed;
      }
      if (this.secondsLeft <= 0 && this.minutuesLeft <= 0) this.timerRunning = false;
      if (this.timerRunning) this.debouncedUpdateTime();
    },
    startTimer() {
      this.startTime = Date.now();
      this.timerRunning = true;
    },
  },
=======
  methods: {
    startTimer() {
      const startTime = new Date(Date.now());
      console.log(startTime);
      console.log(startTime.toTimeString(startTime));
    },
  },
  // 25 - (now - startTime )
>>>>>>> 9f9a9587137266dfc24994b8aac0ceec1b6e99d3
};

</script>

<style lang="sass">

</style>
