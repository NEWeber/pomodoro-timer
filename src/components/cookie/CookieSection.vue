<template>
  <div>
    <sign-up-modal/>
  </div>

</template>

<script>
import { mapGetters } from 'vuex';
import SignUpModal from '@/components/modals/sign-up/SignUp.vue';

export default {
  name: 'CookieSection',
  components: {
    SignUpModal,
  },
  data() {
    return {
      offerEmail: [2, 5, 10, 20, 50, 90, 120],
    };
  },
  // This is the right part of the lifecycle right now, may need to change later for nav
  mounted() {
    this.$cookie.set(
      'lastVisited', Date.now(),
      { expires: '3M' },
    );
  },
  watch: {
    completedPomodoros() {
      let numberCompleted = +this.$cookie.get('completed') || 0;
      numberCompleted += 1;
      this.$cookie.set('completed', numberCompleted, { expires: '3M' });
      // pop modal if at offer point

      if (this.offerEmail.indexOf(numberCompleted) !== -1) {
        setTimeout(() => {
          this.$modal.show('sign-up-modal');
        }, 1500);
      }
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
