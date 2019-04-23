<template>
  <p>Counter is: {{ counter }}</p>
</template>

<script>
export default {
  // 用computed來計算從store收到的東西
  computed: {
    counter() {
      // 在這裡拿store裡面getters的東西
      return this.$store.getters.doubleCounter;
    }
  }
};
</script>