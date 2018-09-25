<template>
  <div>
    <audio v-if="isTimerRunning" autoplay loop
        id="play-during-pomodoro">
        <source src="../../assets/chips.wav" type="audio/wav" />
        Your browser does not support the <code>audio</code> element.
    </audio>
    <audio
      id="completed">
        <source src="../../assets/alarm.mp3" type="audio/mp3" />
        Your browser does not support the <code>audio</code> element.
    </audio>
  </div>

</template>

<script>
import { mapGetters } from 'vuex';


export default {
  name: 'AudioSection',
  data() {
    return {
    };
  },
  watch: {
    completedPomodoros() {
      setTimeout(() => { document.getElementById('completed').setAttribute('autoplay', ''); }, 1500);
    },
  },
  methods: {
  },
  computed: {
    ...mapGetters(['completedPomodoros']),
    ...mapGetters('timer', ['isTimerRunning']),
  },
};

</script>

<style lang="sass">

</style>
