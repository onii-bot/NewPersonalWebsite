<template>
<div class="flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img">
    <!-- { /* Overlay */ } -->
    <div class="p-5 text-white z-[2]">
        <h2 class="text-5xl font-bold">{{ heading }}</h2>
        <p class="text-xl py-6 pb-[1.75rem]">{{ message }}</p>
        <a class="px-8 py-2 border hover:bg-black/50 hover:text-white" :href="btn_link">{{ button_text }}</a>
    </div>
</div>

</template>

<script>

export default{
    name: "my-hero",
    props: {
        heading : String,
        message: String,
        button_text: String,
        btn_link: String
    }
}

</script>