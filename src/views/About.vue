<template>
  <section class="container">
    <b-card no-body class="overflow-hidden">
      <b-row no-gutters>
        <b-col md="6">
          <b-card-img
            src="https://res.cloudinary.com/dbfuiddgm/image/upload/v1602354596/black-books/about_cpixxl.jpg"
            alt="Bernard Black"
            class="rounded-20"
          ></b-card-img>
        </b-col>
        <b-col md="6">
          <b-card-body>
            <b-card-text>
              Bernard Black runs his own bookshop even though he doesn't much
              like people who buy books and hates having customers. Next door to
              Bernard's shop is the Nifty Gifty gift shop run by Fran, probably
              Bernard's only friend in the world. When Bernard's accountant goes
              on the run Bernard employs stress victim, Manny to help in his
              shop. This leads to a series of surreal adventures around the
              shop.
            </b-card-text>
            <transition name="fade">
              <b-card-text v-if="isLinkShown">
                <small class="text-muted"
                  >See more on
                  <a
                    href="https://www.imdb.com/title/tt0262150/"
                    target="_blank"
                    >IMDB</a
                  ></small
                ></b-card-text
              >
            </transition>
          </b-card-body>
        </b-col>
      </b-row>
    </b-card>
  </section>
</template>

<script>
export default {
  data() {
    return {
      isLinkShown: true,
      interval: null,
    };
  },
  created() {
    this.interval = setInterval(() => {
      this.isLinkShown = false;
    }, 5000);
  },
  destroyed() {
    clearInterval(this.interval);
    this.interval = null;
  },
};
</script>


  
</style>
