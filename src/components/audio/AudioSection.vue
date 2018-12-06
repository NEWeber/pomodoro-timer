<template>
  <div>
    <audio
        ref="running" loop
        id="play-during-pomodoro">
        <source src="@/assets/ticking.mp3" type="audio/mp3" />
        Your browser does not support the <code>audio</code> element.
    </audio>
    <audio
      ref="completed">
        <source src="@/assets/clock-chime.mp3" type="audio/mp3" />
        Your browser does not support the <code>audio</code> element.
    </audio>
  </div>

</template>

<script>
import { mapGetters } from 'vuex';


export default {
  name: 'AudioSection',
  data() {
    return {};
  },
  watch: {
    completedPomodorosThisSession() {
      setTimeout(() => {
        this.$refs.completed.play();
      }, 1500);
    },
    isTimerRunning() {
      if (this.isTimerRunning) {
        setTimeout(() => {
          this.$refs.running.play();
        }, 1000);
      } else {
        this.$refs.running.load();
      }
    },
  },
  methods: {
  },
  computed: {
    ...mapGetters(['completedPomodoros', 'completedPomodorosThisSession']),
    ...mapGetters('timer', ['isTimerRunning']),
  },
};

</script>

<style lang="sass">

</style>
