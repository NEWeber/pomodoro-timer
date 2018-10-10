<template>
  <modal name="sign-up-modal"
    :min-width="200"
    :min-height="200"
    :pivot-y="0.5"
    :adaptive="true"
    :reset="true"
    @before-open="beforeOpen"
    @before-close="beforeClose"
    width="80%"
    height="auto">
    <div class="cta-copy" v-if="!hasSignedUp">
      Great work!
      <br>Get inspiration to continue succeeding by email. Sign up:
      <form
        novalidate="true">
        <p v-if="errors.length">
          <b>Please correct the following error(s):</b>
          <ul>
            <li v-for="error in errors" :key="error.id">{{ error }}</li>
          </ul>
        </p>
        <label for="name">Name</label>
        <input id="name" ref="nameField" type="text" placeholder="First Name">

        <label for="email">Email</label>
        <input id="email" ref="emailField" type="email" placeholder="Email">
      </form>
      <div class="button-set">
        <button id="submit" @click="mailSubmit">Sign up!</button>
        <button id="decline" @click="decline">No thanks</button>
      </div>
    </div>
    <div class="cta-copy" v-if="hasSignedUp">
      <p>Thanks for signing up!</p>
      <p>Verify your email address!</p>
      <p>That way we'll get your dose of Pomodoro coaching delivered right to you!</p>
    </div>
  </modal>
</template>

<script>
export default {
  name: 'SignUp',
  data() {
    return {
      hasSignedUp: false,
      canClose: false,
      displayErrors: false,
      errors: [],
    };
  },
  methods: {
    beforeOpen() {
      this.canClose = false;
    },
    beforeClose(event) {
      // TODO: still allow close on ESC
      if (!this.canClose) {
        // TODO: highlight "No thanks" button
        event.stop();
      }
    },
    decline() {
      this.canClose = true;
      this.$modal.hide('sign-up-modal');
    },
    mailSubmit() {
      this.errors = [];
      if (this.verifyName() && this.verifyEmail()) {
        this.hasSignedUp = true;
        this.canClose = true;
        // Submit to mail API
      } else {
        this.displayErrors = true;
      }
    },
    verifyName() {
      let ret;
      if (this.$refs.nameField.value === '') {
        ret = false;
        this.errors[this.errors.length] = 'First name required';
      } else {
        ret = true;
      }
      return ret;
    },
    verifyEmail() {
      const email = this.$refs.emailField.value;
      // eslint-disable-next-line no-useless-escape
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      const result = re.test(String(email).toLowerCase());
      if (!result) {
        this.errors[this.errors.length] = 'Invalid email';
      }
      return result;
    },
  },
};
</script>

<style lang="scss">
  .cta-copy {
    padding:30px;
    text-align: center;
    font-size: 150%;
    line-height: 2em;
  }
</style>
