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
import { mapMutations, mapGetters } from 'vuex';
import timeFilter from './time-filter';

export default {
  name: 'TimerSection',
  data() {
    return {
      startTime: 0,
      startingMinutes: 1,
      startingSeconds: 20, // consider rewrite to make this start at 0
      minutesLeft: 0,
      secondsLeft: 20,
    };
  },
  filters: {
    time: timeFilter,
  },
  created() {
    this.debouncedUpdateTime = debounce(this.updateTime, 500);
  },
  methods: {
    ...mapMutations(['pomodoroComplete']),
    ...mapMutations('timer', ['timerOff', 'timerOn']),
    updateTime() {
      const currentTime = Date.now();
      const totalSecondsElapsed = Math.floor((currentTime - this.startTime) / 1000);
      const secondsElapsed = totalSecondsElapsed % 60;
      // So that the time rolls over properly
      // (i.e. immediately goes to 24 on start, then 24:01, 24:00, 23:59)
      const extraMinute = secondsElapsed > 0 ? 1 : 0;
      const minutesElapsed = ((totalSecondsElapsed - secondsElapsed) / 60) + extraMinute;
      this.minutesLeft = this.startingMinutes - minutesElapsed;
      if (secondsElapsed === 0) {
        this.secondsLeft = 0;
      } else {
        this.secondsLeft = this.startingSeconds - secondsElapsed;
      }
      if (this.secondsLeft === 0 && this.minutesLeft === 0) {
        this.timerOff();
        this.pomodoroComplete();
      }
      if (this.isTimerRunning) this.debouncedUpdateTime();
    },
    startTimer() {
      this.startTime = Date.now();
      this.timerOn();
      this.debouncedUpdateTime();
    },
  },
  computed: {
    ...mapGetters(['completedPomodoros']),
    ...mapGetters('timer', ['isTimerRunning']),
  },
};

</script>

<style lang="sass">

</style>
