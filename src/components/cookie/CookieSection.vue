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
    this.$cookie.set('lastVisited', Date.now());
  },
  watch: {
    completedPomodoros() {
      let numberCompleted = +this.$cookie.get('completed') || 0;
      numberCompleted += 1;
      // pop modal if over threshold
      this.$cookie.set('completed', numberCompleted);
    },
  },
  methods: {
  },
  computed: {
    ...mapGetters(['completedPomodoros']),
  },
};

</script>

<style lang="sass">

</style>
