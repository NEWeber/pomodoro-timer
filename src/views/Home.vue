<template>
  <div class="home">
    <h1>Pomodoro Timer</h1>
    <TimerSection></TimerSection>
    <AudioSection></AudioSection>
    <CookieSection></CookieSection>
  </div>
</template>

<script>
// @ is an alias to /src
import TimerSection from '@/components/timer/TimerSection.vue';
import AudioSection from '@/components/audio/AudioSection.vue';
import CookieSection from '@/components/cookie/CookieSection.vue';

export default {
  name: 'home',
  components: {
    TimerSection,
    AudioSection,
    CookieSection,
  },
};
</script>

<style lang="scss">
h1 {
  text-align: left;
}
</style>
