<template>
  <div class="time-section">
    <div class="time-display">
      {{minutesLeft | time}}:{{secondsLeft | time}} <br/>
    </div>
    <button v-if="!isTimerRunning && !isTimerComplete" @click="startTimer()">
      <img src="@/assets/play-button.png" alt="Start Timer!"/>
    </button>
    <button v-if="isTimerRunning || isTimerComplete" @click="resetTimer()">
      <img src="@/assets/refresh-page-arrow.png" alt="Reset Timer"/>
    </button>

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
      startingMinutes: 25,
      startingSeconds: 0,
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
    ...mapMutations(['pomodoroComplete']),
    ...mapMutations('timer', ['timerOff', 'timerOn', 'hasCompleted', 'readyToPlay']),
    updateTime() {
      if (this.isTimerRunning) { // catch if a user has reset in the middle of call
        const currentTime = Date.now();
        const totalSecondsElapsed = Math.floor((currentTime - this.startTime) / 1000);
        const secondsElapsed = totalSecondsElapsed % 60;

        const minutuesDecucted = (secondsElapsed - this.startingSeconds > 0 ? 1 : 0) +
          ((totalSecondsElapsed - secondsElapsed) / 60);
        this.minutesLeft = this.startingMinutes - minutuesDecucted;

        if (secondsElapsed <= this.startingSeconds) {
          this.secondsLeft = this.startingSeconds - secondsElapsed;
        } else {
          this.secondsLeft = 60 - (secondsElapsed - this.startingSeconds);
        }

        if (this.secondsLeft === 0 && this.minutesLeft === 0) {
          this.timerOff();
          this.hasCompleted();
          this.pomodoroComplete();
        }
        if (this.isTimerRunning) this.debouncedUpdateTime();
      }
    },
    startTimer() {
      this.startTime = Date.now();
      this.timerOn();
      this.debouncedUpdateTime();
    },
    resetTimer() {
      this.timerOff();
      this.secondsLeft = this.startingSeconds;
      this.minutesLeft = this.startingMinutes;
      this.readyToPlay();
    },
  },
  computed: {
    ...mapGetters(['completedPomodoros']),
    ...mapGetters('timer', ['isTimerRunning', 'isTimerComplete']),
  },
};

</script>

<style lang="scss">
.time-section {
  border: 2px solid #7AB4EF;
  border-radius: 5px;
  max-width: 500px;
  padding: 20px 25px 25px 25px;
}
.time-display {
  position: relative;
  font-size: 500%;
  @media(max-width: 400px) {
    font-size: 300%;
  }
}
  button {
    background: 0;
    border: none;
    cursor: pointer;
    img {
      height: 50px;
      width: 50px;
    }
    button:hover {
      border: 1px solid orange;
    }
  }
</style>
