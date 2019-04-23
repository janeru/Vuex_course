<template>
  <div>
    <!-- <button class="btn btn-primary" @click="increment(100)">Increment</button>
    <button class="btn btn-primary" @click="decrement(50)">Decrement</button>-->

    <button class="btn btn-primary" @click="increment">Increment</button>
    <button class="btn btn-primary" @click="decrement">Decrement</button>
  </div>
</template>

<script>
export default {
  methods: {
    increment() {
      // 用$store來拿東西
      this.$store.state.counter++;
    },
    decrement() {
      this.$store.state.counter--;
    }
  }
};
</script>