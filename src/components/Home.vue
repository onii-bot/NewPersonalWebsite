<template>
    <Hero message="I am Ash, Web Developer/ Bot Developer/ Python Enthusiast" heading="Hey there,"  button_text="More" btn_link="/about"/>
    <div id="work" class="max-w-[1240px] mx-auto mb-10">
        <h1 class="text-2xl font-bold text-center p-4">Work</h1>
        <h2 class="text-xl font-sans text-center p-4">Here are some of the projects I have had the opportunity to work
            on.</h2>
        <Slider v-for="slider in SliderData" :key="slider" :slider="slider" />
        <h1 class="text-2xl font-bold text-center p-4">These are just basic projects. Check out my <a class="underline" href="https://github.com/onii-bot" target="_blank">Github</a> for more</h1>
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
    
