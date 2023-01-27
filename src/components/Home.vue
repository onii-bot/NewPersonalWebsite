<template>
    <Hero message="I am Ash, Web Developer/ Bot Developer/ Python Enthusiast" heading="Hey there,"  button_text="More" btn_link="/about"/>
    <Slider />
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
    