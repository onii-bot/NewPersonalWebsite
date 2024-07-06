<template>
    <div :style="{backgroundColor:color}" class="fixed top-0 left-0 z-10 w-full ease-in duration-300">
        <div class="max-w-[1240px] m-auto flex justify-between items-center p-4 text-white">
            <router-link @click="toTop" to="/"><h1 :style="{color:textColor}" class="font-bold text-4xl">新</h1></router-link>
            <ul :style="{color:textColor}" class="hidden sm:flex">
                <router-link @click="toTop" to="/">
                <li :class="{ 'text-blue-500': this.$route.path === '/' }" class="p-4 hover:text-yellow-300 hover:mr-1">Home</li>
                </router-link>
                <router-link @click="toTop" to="/about">
                <li :class="{ 'text-blue-500': this.$route.path === '/about' }" class="p-4 hover:text-yellow-300 hover:mr-1">About</li>
                </router-link>
                <a href="/#work">
                <li class="p-4 hover:text-yellow-300 hover:mr-1">Work</li>
                </a>
                <router-link @click="toTop" to="/contact">
                <li :class="{ 'text-blue-500': this.$route.path === '/contact' }" class="p-4 hover:text-yellow-300 hover:mr-1">Contact</li>
                </router-link>

            </ul>
            <!-- Mobile Button -->
            <div @click="handleNav" class="block sm:hidden z-10">
                <!-- Hamburger -->
                <Icon v-if="nav" icon="radix-icons:cross-1" 
                        color="#ffffff"
                        width="20"/>
                <Icon :style="{color:textColor}" v-else icon="radix-icons:hamburger-menu"
                        color="#ffffff"
                        width="20" />
            </div>
            <div class="sm:hidden absolute top-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black/95 text-center ease-in duration-300" :class="[{'left-0': nav}, {'left-[-100%]': !nav}]">
                <ul>
                    <router-link to="/" @click="toTop"><li :class="{ 'text-stone-800': this.$route.path === '/' }" class="p-4 text-4xl hover:text-gray-500">Home</li></router-link>
                    <router-link to="/about" @click="toTop"><li :class="{ 'text-stone-800': this.$route.path === '/about' }" class="p-4 text-4xl hover:text-gray-500">About</li></router-link>
                    <a href="#work"><li class="p-4 text-4xl hover:text-gray-500">Work</li></a>
                    <router-link to="/contact" @click="toTop"><li :class="{ 'text-stone-800': $route.path === '/contact' }" class="p-4 text-4xl hover:text-gray-500">Contact</li></router-link>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>

import { Icon } from '@iconify/vue';

export default {
    name: "my-navbar",
    components: {
        Icon
    },
    data(){
        return{
            nav: false,
            color : "transparent",
            textColor : "white"
        }
    },
    methods: {
        handleNav(){
            this.nav = !this.nav
        },
        changeColor() {
            const screenHeight = window.innerHeight;
            const scrollThreshold = screenHeight * 0.8;

            if (window.scrollY >= scrollThreshold) {
                this.color = "#ffffff";
                this.textColor = "#000000";
            } else {
                this.color = "transparent";
                this.textColor = "#ffffff";
            }
        },
        toTop(){
            window.scrollTo(0,0)
            this.nav = !this.nav
        }
    },
    created() {
        window.addEventListener("scroll", this.changeColor);
        console.log(this.$route.path)
    },
    unmounted() {
        window.removeEventListener("scroll", this.changeColor);
    }
}
</script>