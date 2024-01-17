<template>
    <div>
      <h1 class="text-2xl font-extrabold text-left p-4">{{ slider[0].title }}</h1>
      <p class="text-2xl font-thin text-left p-4">{{ slider[0].body }}</p>
      <div class="border-2 border-purple-800 p-2 mt-5 mb-20">
        <img class="w-[1440px] h-[600px] object-cover" :src="showSlide().image" alt="/" />
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "my-slider",
    data() {
      return {
        index: 0,
      };
    },
    props: {
      slider: Array,
    },
    methods: {
      showSlide() {
        return this.slider[this.index];
      },
    }
  };
  </script>
  