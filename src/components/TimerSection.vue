<template>
  <div>
    <div class="time-display">
      <!-- {{ startTime -  }} -->
      25:00
    </div>
    <button @click="startTimer()">Start Timer!</button>
  </div>
</template>

<script>
export default {
  name: 'TimerSection',
  methods: {
    startTimer() {
      const startTime = new Date(Date.now());
      console.log(startTime);
      console.log(startTime.toTimeString(startTime));
    },
  },
  // 25 - (now - startTime )
};

</script>

<style lang="sass">

</style>
