<template>
  <div>
    <!-- <p>Counter is :{{counter}}</p>
    <p>Number of Clicks is :{{clicks}}</p>-->

    <p>Counter is :{{doubleCounter}}</p>
    <p>Number of Clicks is :{{stringCounter}}</p>
  </div>
</template>

<script>
// 如果有很多getters要引入，可以用mapGetters
import { mapGetters } from "vuex";
export default {
  computed: {
    // counter() {
    //   // 在這裡拿store裡面getters的東西
    //   return this.$store.getters.doubleCounter;
    // },
    // clicks() {
    //   return this.$store.getters.stringCounter;
    // }
    ...mapGetters(["doubleCounter", "stringCounter"])
  }
};
</script>