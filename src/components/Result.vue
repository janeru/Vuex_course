<template>
  <p>Counter is: {{ counter }}</p>
</template>

<script>
export default {
  // 用computed來計算從store收到的東西
  computed: {
    counter() {
      return this.$store.state.counter;
    }
  }
};
</script>