<template>
  <p class="card-text description lead">
    {{ getTextToShow }}
    <button @click="isLongTxtShown = !isLongTxtShown" class="read-more-btn">
      {{ getButtonText }}
    </button>
  </p>
</template>

<script>
export default {
  props: ["txt"],
  data() {
    return {
      text: this.txt,
      isLongTxtShown: false,
      maxLength: 100
    };
  },
  computed: {
    getTextToShow() {
      var txt = this.text;
      if (txt.length <= this.maxLength) return txt;
      return this.isLongTxtShown ? txt : txt.substr(0, this.maxLength).trim() + "...";
        
    },
    getButtonText() {
      return this.isLongTxtShown ? "Less" : "More";
    },
  },
};
</script>