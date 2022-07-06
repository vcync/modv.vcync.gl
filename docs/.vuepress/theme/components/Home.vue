<template>
  <main class="home" aria-labelledby="main-title">
    <header class="hero">
      <!-- <h1 v-if="data.heroText !== null" id="main-title">
        {{ data.heroText || $title || "Hello" }}
      </h1> -->

      <iframe
        class="sixteen-nine hero-video"
        src="https://www.youtube-nocookie.com/embed/?autoplay=1&color=white&disablekb=1&mute=1&rel=0&showinfo=0&playsinline=1&loop=1&list=PL4xuaQNtunCy6gE9OFkD__DigHtz8tDmn&listType=playlist&enablejsapi=1&widgetid=1&controls=0"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>

      <p v-if="data.tagline !== null" class="description">
        {{ data.tagline || $description || "Welcome to your VuePress site" }}
      </p>

      <p v-if="data.actionText && data.actionLink" class="action">
        <NavLink class="action-button" :item="actionLink" />
      </p>
    </header>

    <!-- https://www.youtube.com/embed/3YpmyMcI0kk?autoplay=1&color=white&disablekb=1&mute=1&rel=0&showinfo=0&playsinline=1&loop=1&enablejsapi=1&origin=https%3A%2F%2Fwray.pro&widgetid=1 -->

    <div v-if="data.features && data.features.length" class="features">
      <div
        v-for="(feature, index) in data.features"
        :key="index"
        class="feature"
      >
        <h2>{{ feature.title }}</h2>
        <p>{{ feature.details }}</p>
      </div>
    </div>

    <Content class="theme-default-content custom" />

    <div v-if="footer" class="footer">
      {{ footer }}
    </div>
  </main>
</template>

<script>
import NavLink from "@parent-theme/components/NavLink.vue";

export default {
  name: "Home",

  components: { NavLink },

  data() {
    return {
      captures: [],
      currentCapture: 0,
      footer: `MIT Licensed | Copyright © 2014-${new Date().getFullYear()} vcync`
    };
  },

  computed: {
    data() {
      return this.$page.frontmatter;
    },

    actionLink() {
      return {
        link: this.data.actionLink,
        text: this.data.actionText
      };
    },

    capture() {
      return this.captures[this.currentCapture];
    }
  },

  created() {
    this.captures = [
      "8.jpg",
      "7.jpg",
      "2.jpg",
      "4.jpg",
      "5.jpg",
      "6.jpg",
      "1.jpg",
      "3.jpg"
    ];

    this.currentCapture = 0;
  },

  mounted() {
    setInterval(this.rotateImage, 7000);
  },

  methods: {
    rotateImage() {
      if (this.currentCapture < this.captures.length - 1) {
        this.currentCapture += 1;
      } else {
        this.currentCapture = 0;
      }
    }
  }
};
</script>

<style lang="stylus">
.home
  padding $navbarHeight 2rem 0
  max-width $homePageWidth
  margin 0px auto
  display block
  .hero
    text-align center
    img
      max-width: 100%
      max-height 280px
      display block
      margin 3rem auto 1.5rem
    h1
      font-size 3rem
    h1, .description, .action
      margin 1.8rem auto
    .description
      max-width 75rem
      font-size 1.6rem
      line-height 1.3
      color lighten($textColor, 40%)
    .action-button
      display inline-block
      font-size 1.2rem
      color #fff
      background-color $accentColor
      padding 0.8rem 1.6rem
      border-radius 4px
      transition background-color .1s ease
      box-sizing border-box
      border-bottom 1px solid darken($accentColor, 10%)
      &:hover
        background-color lighten($accentColor, 10%)
  .features
    border-top 1px solid $borderColor
    padding 1.2rem 0
    margin-top 2.5rem
    display flex
    flex-wrap wrap
    align-items flex-start
    align-content stretch
    justify-content space-between
  .feature
    flex-grow 1
    flex-basis 30%
    max-width 30%
    h2
      font-size 1.4rem
      font-weight 500
      border-bottom none
      padding-bottom 0
      color lighten($textColor, 10%)
    p
      color lighten($textColor, 25%)
  .footer
    padding 2.5rem
    border-top 1px solid $borderColor
    text-align center
    color lighten($textColor, 25%)

@media (max-width: $MQMobile)
  .home
    .features
      flex-direction column
    .feature
      max-width 100%
      padding 0 2.5rem

@media (max-width: $MQMobileNarrow)
  .home
    padding-left 1.5rem
    padding-right 1.5rem
    .hero
      img
        max-height 210px
        margin 2rem auto 1.2rem
      h1
        font-size 2rem
      h1, .description, .action
        margin 1.2rem auto
      .description
        font-size 1.2rem
      .action-button
        font-size 1rem
        padding 0.6rem 1.2rem
    .feature
      h2
        font-size 1.25rem
</style>

<style lang="scss">
@media (max-width: 419px) {
  .home .hero img {
    max-height: unset;
  }
}

.home .hero .hero-video {
  border-radius: 4px;
  margin-top: 1.8rem;
}

.hero-image-container {
  border-radius: 50%;
  overflow: hidden;
  max-height: 280px;
  max-width: 280px;
  display: inline-flex;
  width: 100%;
  height: 100%;
  position: relative;

  margin: 3rem auto 1.5rem;

  img.capture-image {
    object-fit: cover;
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: #000;
    margin: 0;
    // transform: scale(1.5);
  }

  img.hero-image {
    margin: 0 !important;
    width: 100%;
    height: 100%;
    position: relative;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: all 4s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: scale(1.3);
}
</style>
