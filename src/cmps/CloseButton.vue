<template>
  <button
    type="button"
    class="close"
    aria-label="Close"
    @click="onCloseClicked"
  >
    <span aria-hidden="true">&times;</span>
  </button>
</template>

<script>
export default {
  props: ["onClose"],
  methods: {
    onCloseClicked() {
      this.$emit('onClose');
    },
  },
};
</script>