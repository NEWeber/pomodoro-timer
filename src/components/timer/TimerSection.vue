<template>
  <div>
    <div class="time-display">
      {{minutesLeft | time}}:{{secondsLeft | time}} <br/>
    </div>
    <button @click="startTimer()">Start Timer!</button>
  </div>
</template>

<script>
import { debounce } from 'lodash';
import timeFilter from './time-filter';

export default {
  name: 'TimerSection',
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
  filters: {
    time: timeFilter,
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
      this.debouncedUpdateTime();
    },
  },
};

</script>

<style lang="sass">

</style>
