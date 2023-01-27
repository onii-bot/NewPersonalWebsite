<template>

    <Hero message="The only way to do great work is to love what you do." heading="About" button_text="Contact"
        btn_link="/contact" />

    <div class="flex flex-col">
        <div class="text-left mb-[100px]">
            <h2 class="text-2xl font-extrabold ml-20 p-2 mb-[18px]">Intro</h2>
            <p class="text-xl mx-20 p-2">I am a CS student pursuing B.Sc.CSIT. I have a strong background in building Web Applications as well as Data Science, Artificial Intelligence (AI), and Bot Development. I am passionate about the latest technologies and their applications.</p>
        </div>
        <div class="text-left mb-[100px]">
            <h2 class="text-2xl font-extrabold ml-20 p-2 mb-[18px]">What I use</h2>
            <p class="text-xl mx-20 p-2">I employ various techniques and tools to enhance my ingenuity and bring my ideas to fruition. Below are some of the techniques and technologies I have utilized throughout my career.</p>
            <div class="mt-10">
                <div class="flex flex-wrap justify-between w-full">
                    <a href="https://www.python.org" target="_blank" class="ml-20 w-[20%] p-2">
                        <h3>Python</h3>
                    </a>
                    <a href="https://javascript.com" target="_blank" class="w-[20%] p-2">
                        <h3>Javascript</h3>
                    </a>
                    <a href="https://flask.palletsprojects.com" target="_blank" class="w-[20%] p-2">
                        <h3>Flask</h3>
                    </a>
                    <a href="https://git-scm.com" target="_blank" class="w-[20%] p-2">
                        <h3>Git</h3>
                    </a>
                    <a href="https://isocpp.org" target="_blank" class="ml-20 w-[20%] p-2">
                        <h3>C++</h3>
                    </a>
                    <a href="https://vuejs.org" target="_blank" class="w-[20%] p-2">
                        <h3>VueJS</h3>
                    </a>
                    <a href="https://www.djangoproject.com" target="_blank" class="w-[20%] p-2">
                        <h3>Django</h3>
                    </a>
                    <a href="https://tailwindcss.com" target="_blank" class="w-[20%] p-2">
                        <h3>Tailwind</h3>
                    </a>
                </div>
            </div>

        </div>
        <div class="text-left mb-[100px]">
            <h2 class="text-2xl font-extrabold ml-20 p-2 mb-[18px]">Social</h2>
            <div class="flex flex-wrap">
                <a href="https://www.linkedin.com/" target="_blank">
                    <p class="text-xl ml-20 mr-3 p-2 underline">LinkedIn </p>
                </a>
                <p class="text-xl mr-3 p-2">/ </p>
                <a href="https://www.twitter.com/" target="_blank">
                    <p class="text-xl mr-3 p-2 underline">Twitter </p>
                </a>

                <p class="text-xl mr-3 p-2">/ </p>
                <a href="https://www.instagram.com/" target="_blank">
                    <p class="text-xl mr-3 p-2 underline">Instagram </p>
                </a>
            </div>
        </div>
        <div class="text-left mb-[100px]">
            <h2 class="text-2xl font-extrabold ml-20 p-2 mb-[18px]">Email</h2>
            <p class="text-xl mx-20 p-2">aayushpaudel311@gmail.com</p>
        </div>
        <h1 class="text-center font-bold text-4xl mb-24 quote">"The best revenge is to be unlike him who performed the injury."</h1>
    </div>

</template>

<script>

import Hero from "./Hero.vue"

export default {
    name: "my-about",
    components: {
        Hero
    },
    mounted(){
        window.scrollTo(0, 0)
    }
}

</script>