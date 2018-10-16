<template>
  <div class="home">
    <h1>Pomodoro Timer</h1>
    <TimerSection></TimerSection>
    <AudioSection></AudioSection>
    <CookieSection></CookieSection>
    <footer>
      Site by <a href="http://nicholasedwinweber.com">Nicholas Weber</a>
      <br>
      Ticking sound by <a href="https://freesound.org/people/InspectorJ/">InspectorJ</a>,
      Chime sound by <a href="https://freesound.org/people/LaCezio/">LaCezio</a>.
      <br>
      Play button made by <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a>,
      reset button made by <a href="https://www.flaticon.com/authors/anton-saputro" title="Anton Saputro">Anton Saputro</a>.
    </footer>
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
footer {
  padding-top: 8em;
  text-align: left;
    max-width: 500px;
}
</style>
