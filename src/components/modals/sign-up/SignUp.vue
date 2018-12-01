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
      Keep up the great work!
      <br>Get inspiration to continue succeeding by email. Sign up:
      <form
        novalidate="true">
        <p v-if="clientErrors.length">
          <b>Please correct the following error(s):</b>
          <ul>
            <li v-for="error in clientErrors" :key="error.id">{{ error }}</li>
          </ul>
        </p>
        <div class="form-container">
          <label for="name">Name</label>
          <input id="name" ref="nameField" type="text" placeholder="First Name">
        </div>

        <div class="form-container">
          <label for="email">Email</label>
          <input id="email" ref="emailField" type="email" placeholder="Email">
        </div>
      </form>
      <div class="button-set">
        <button id="decline" @click="decline">No thanks</button>
        <button id="submit" @click="mailSubmit">Sign up!</button>
      </div>
    </div>
    <div class="cta-copy" v-if="hasSignedUp">
      <p>Thanks for signing up,I'll be in touch soon!</p>
    </div>
  </modal>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'SignUp',
  data() {
    return {
      canClose: false,
      displayErrors: false,
      clientErrors: [],
    };
  },
  watch: {
    getErrors() {
      if (this.getErrors.length > 0) {
        this.clientErrors = [];
        this.getErrors.forEach((el) => {
          if (el === 'invalid name') {
            this.clientErrors.push('First name required');
          } else if (el === 'invalid email') {
            this.clientErrors.push('Invalid email');
          }
        });
        this.displayErrors = true;
      } else {
        this.displayErrors = false;
      }
    },
  },
  methods: {
    ...mapActions('email', ['signUpRequest']),
    beforeOpen() {
      this.canClose = false;
    },
    beforeClose(event) {
      // TODO: still allow close on ESC
      if (!this.canClose && !this.hasSignedUp) {
        // TODO: highlight "No thanks" button
        event.stop();
      }
    },
    decline() {
      this.canClose = true;
      this.$modal.hide('sign-up-modal');
    },
    mailSubmit() {
      this.clientErrors = [];
      if (this.verifyName() && this.verifyEmail()) {
      // Submit to mail API
        this.signUpRequest({
          email: this.$refs.emailField.value,
          first_name: this.$refs.nameField.value,
        });
        this.canClose = true;
      } else {
        this.displayErrors = true;
      }
    },
    verifyName() {
      let ret;
      if (this.$refs.nameField.value === '') {
        ret = false;
        this.clientErrors[this.clientErrors.length] = 'First name required';
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
        this.clientErrors[this.clientErrors.length] = 'Invalid email';
      }
      return result;
    },
  },
  computed: {
    ...mapGetters('email', ['hasSignedUp', 'getErrors']),
  },
};
</script>

<style lang="scss" >
  .cta-copy {
    padding:30px;
    text-align: center;
    font-size: 150%;
    line-height: 2em;
    @media(max-width: 450px) {
      font-size: 100%;
    }
  }
  .form-container {
    display: inline-block;
  }
  label {
    margin-right: 15px;
    margin-left: 15px;
    font-size: 100%;
    position: relative;
    top: 3px;
    @media(max-width: 380px) {
      display: none;
    }
  }
  input {
    margin-left: 5px;
  }
  .button-set {
    button {
      margin-top: 10px;
      font-size: 125%;
      margin-right: 10px;
    }
    #decline {
      background: #9c1414;
      color: #FFF;
      border: 2px solid #7AB4EF;
    }
    #submit {
      background: blue;
      color: #FFF;
      border: 2px solid #7AB4EF;
    }
    @media(max-width: 450px) {
      display: block;
    }
  }
</style>
