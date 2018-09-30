<template>
  <div>
  </div>

</template>

<script>
import { mapGetters } from 'vuex';


export default {
  name: 'CookieSection',
  data() {
    return {
    };
  },
  // This is the right part of the lifecycle right now, may need to change later for nav
  mounted() {
    console.log('in mounted');
    this.$cookie.set('lastVisited', Date.now());
  },
  watch: {
    completedPomodoros() {
      // increment the completed pomodoros in the cookie and tell the modal to pop if at threshold
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
