<template>
  <div>
    <sign-up-modal/>
    <p v-if="completedPomodoros > 1 && !this.hasSignedUp">Get inspiration for your work!
      <button @click="showModal">Sign up</button>
      for our newsletter!</p>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
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
    this.setPomodoroComplete(+this.$cookie.get('completed') || 0);
    if (this.$cookie.get('signed-up') === 'true') {
      this.signedUp();
    }
  },
  watch: {
    completedPomodorosThisSession() {
      this.$cookie.set('completed', this.completedPomodoros, { expires: '3M' });
      // pop modal if at offer point

      if (this.offerEmail.indexOf(this.completedPomodoros) !== -1 && !this.hasSignedUp) {
        setTimeout(() => {
          this.showModal();
        }, 1500);
      }
    },
    hasSignedUp() {
      this.$cookie.set('signed-up', true, { expires: '3M' });
    },
  },
  methods: {
    ...mapMutations(['setPomodoroComplete']),
    ...mapMutations('email', ['signedUp']),
    showModal() {
      this.$modal.show('sign-up-modal');
    },
  },
  computed: {
    ...mapGetters(['completedPomodoros', 'completedPomodorosThisSession']),
    ...mapGetters('email', ['hasSignedUp']),

  },
};

</script>

<style lang="scss">
  p {
    text-align: left;
    button {
      font-family: 'Avenir', Helvetica, Arial, sans-serif;
      font-size: 16px;
      padding: 0;
      text-decoration: underline;
      color: rgb(0, 0, 238);
    }
  }
</style>
