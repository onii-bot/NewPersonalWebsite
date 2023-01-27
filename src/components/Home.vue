<template>
    <Hero message="I am Ash, Web Developer/ Bot Developer/ Python Enthusiast" heading="Hey there,"  button_text="More" btn_link="/about"/>
    <div id="work" class="max-w-[1240px] mx-auto mb-10">
        <h1 class="text-2xl font-bold text-center p-4">Work</h1>
        <h2 class="text-xl font-sans text-center p-4">Here are some of the projects I have had the opportunity to work
            on.</h2>
        <h3 class="text-md text-center p-1 mb-10">Note: Clicking on the left and right side of the images allows for
            navigation</h3>
        <Slider v-for="slider in SliderData" :key="slider" :slider="slider" />
    </div>
</template>

<script>

import Hero from './Hero.vue'
import Slider from './Slider.vue'
import { SliderData } from './SliderData.js';


export default {
    name: 'my-home',
    components: {
    Hero,
    Slider
    },
    data(){
        return{
            SliderData
        }
    }
}
</script>
    