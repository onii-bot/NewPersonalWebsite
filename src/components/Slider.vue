<template>
    <div>
      <h1 class="text-2xl font-extrabold text-left p-4">{{ slider[0].title }}</h1>
      <p class="text-2xl font-thin text-left p-4">{{ slider[0].body }}</p>
      <div class="border-2 border-purple-800 p-2 mt-5 mb-20">
        <img @click="changeSlide" class="w-[1440px] h-[600px] object-cover" :src="showSlide().image" alt="/" />
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "my-slider",
    data() {
      return {
        index: 0,
        maxIndex: 2, // Set your maximum index value
        minIndex: 0, // Set your minimum index value
        intervalId: null,
      };
    },
    props: {
      slider: Array,
    },
    mounted() {
      // Start the automatic index change every 5 seconds
      this.intervalId = setInterval(() => {
        this.autoChangeIndex();
      }, 5000);
    },
    methods: {
      showSlide() {
        return this.slider[this.index];
      },
      increaseIndex() {
        if (this.index >= this.maxIndex) {
          this.index = this.minIndex;
        } else {
          this.index += 1;
        }
      },
      decreaseIndex() {
        if (this.index <= this.minIndex) {
          this.index = this.maxIndex;
        } else {
          this.index -= 1;
        }
      },
      changeSlide(event) {
            let image = event.target;
            let x = event.clientX;
            console.log(x);

            // Calculate thresholds based on image width
            const leftThresholdPixels = image.width * 0.16;
            const rightThresholdPixels = image.width * 0.725;

            let imgbaseX = image.offsetLeft;
            console.log(image.width);

            if (x - imgbaseX < leftThresholdPixels) {
                this.decreaseIndex();
            } else if (x - 1.65 * imgbaseX > rightThresholdPixels) {
                this.increaseIndex();
            }
        },
      autoChangeIndex() {
        this.increaseIndex();
      },
    },
    beforeUnmount() {
      clearInterval(this.intervalId);
    },
  };
  </script>
  