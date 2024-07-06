<template>
    <div>
      <h1 class="text-2xl font-extrabold text-left p-4">{{ slider.title }}</h1>
      <p class="text-2xl font-thin text-left p-4">{{ slider.body }}</p>
      <div class="border-2 border-purple-800 p-2 mt-5 mb-20">
        <a :href="imageSource" target="_blank">
        <img :class="imageClass" :src="imageSource" alt="/" />
      </a>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "my-slider",
    data() {
      return {
        index: 0,
        windowWidth: window.innerWidth,
      };
    },
    props: {
      slider: Object,
    },
    computed: {
      imageSource() {
        return this.windowWidth > 768
          ? this.slider.desktopimage
          : this.slider.mobileimage;
      },
      imageClass() {
        return this.windowWidth > 768
          ? 'w-[1440px] h-[600px] object-cover'
          : 'w-[768px] h-[600px] object-cover';
      },
  },
    methods: {
      showSlide() {
        return this.slider[this.index];
      },
      handleResize() {
      this.windowWidth = window.innerWidth;
      },
    },
    mounted() {
      window.addEventListener("resize", this.handleResize);
    },
    beforeUnmount() {
      window.removeEventListener("resize", this.handleResize);
    },
  }
  </script>
  
  