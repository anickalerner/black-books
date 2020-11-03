<template>
  <section class="user-msg" v-show="msg">
    <b-alert
      v-model="show"
      class="position-fixed fixed-bottom m-0 rounded-0"
      style="z-index: 2000"
      variant="success"
      dismissible
    >
      {{ msg }}
    </b-alert>
  </section>
</template>

<script>
import eventBus from "@/services/eventBus.service.js";

export default {
  data() {
    return {
      show: false,
      msg: "",
    };
  },
  created() {
    eventBus.$on("showMsg", (msg) => {
      console.log("notify:", msg);
      this.show = true;
      this.msg = msg;
      setTimeout(() => {
        this.show = false;
      }, 3000);
    });    
  },
  destroyed() {
    eventBus.$off("showMsg");
  },
};
</script>