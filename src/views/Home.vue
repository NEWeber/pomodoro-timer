<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <TimerSection></TimerSection>
    <HelloWorld msg="Welcome to Your Vue.js App"/>

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import TimerSection from '@/components/timer/TimerSection.vue';

export default {
  name: 'home',
  components: {
    HelloWorld,
    TimerSection,
  },
};
</script>
