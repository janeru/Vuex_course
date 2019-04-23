<template>
  <div>
    <!-- <button class="btn btn-primary" @click="increment(100)">Increment</button>
    <button class="btn btn-primary" @click="decrement(50)">Decrement</button>-->

    <button class="btn btn-primary" @click="increment(100)">Increment</button>
    <button class="btn btn-primary" @click="decrement(50)">Decrement</button>
  </div>
</template>

<script>
// 將多個mutation放在一起，用mapMutations
import { mapActions } from "vuex";
export default {
  methods: {
    // increment() {
    //   // 用$store來拿東西
    //   // this.$store.state.counter++;

    //   // 將變化(mutation)的東西的字串放在commit裡面
    //   this.$store.commit("increment");
    // },
    // decrement() {
    //   // this.$store.state.counter--;
    //   this.$store.commit("decrement");
    // }

    // mapMutations裡面放array
    ...mapActions(["increment", "decrement"])
    // increment(by) {
    //   this.$store.dispatch("increment", by);
    // }
  }
};
</script>