<template>
    <Hero message="Hey there, Got a project, job offer or consulting work? Feel free to contact me." heading="Contact" button_text="Sure" btn_link="#lwt"/>
    <div class="max-w-[1240px] m-auto p-4 h-screen">
        <h1 id="lwt" classs="text-2xl font-bold text-center p-4" style="text-align: center;font-size: larger;font-weight: bold;margin-bottom: 2px;padding: 10px 10px;" >Let's Work Together </h1>
        <form class="max-w-[600px] m-auto">
            <div class="grid grid-cols-2 gap-2">
                <input class="border shadow-lg p-3" type="text" placeholder="Name" />
                <input class="border shadow-lg p-3" type="email" placeholder="Email" />
            </div>
            <input class="border shadow-lg p-3 w-full my-2" type="text" placeholder="Subject" />
            <textarea class="border shadow-lg p-3 w-full" cols="30" rows="20" placeholder="Message"></textarea>
            <button class="border shadow-lg p-3 w-full mt-2">Submit</button>

        </form>
    </div>

</template>

<script>

import Hero from './Hero.vue'

export default{
    name: "my-contact",
    components: {
        Hero
    },
    mounted(){
        window.scrollTo(0, 0)
    }
}

</script>