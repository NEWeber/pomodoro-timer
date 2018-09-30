<template>
  <div class="home">
    <TimerSection></TimerSection>
    <AudioSection></AudioSection>
    <CookieSection></CookieSection>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import TimerSection from '@/components/timer/TimerSection.vue';
import AudioSection from '@/components/audio/AudioSection.vue';
import CookieSection from '@/components/cookie/CookieSection.vue';

export default {
  name: 'home',
  components: {
    HelloWorld,
    TimerSection,
    AudioSection,
    CookieSection,
  },
};
</script>
