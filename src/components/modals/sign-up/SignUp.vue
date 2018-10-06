<template>
  <modal name="sign-up-modal"
    :min-width="200"
    :min-height="200"
    :pivot-y="0.5"
    :adaptive="true"
    :reset="true"
    width="80%"
    height="auto">
    <div class="cta-copy">
      Great work!
      <br>Get inspiration to continue succeeding by email. Sign up:
      <form>
        <input id="name" type="text" placeholder="First Name">
        <input id="email" type="email" placeholder="Email">
      </form>
      <div class="button-set">
        <button id="submit">Sign up!</button>
        <button id="decline">No thanks</button>
      </div>
    </div>
  </modal>
</template>

<script>
export default {
  name: 'SignUp',
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
