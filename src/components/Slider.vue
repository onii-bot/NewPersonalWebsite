<template>
    <h1 class="text-2xl font-extrabold text-left p-4">{{ slider[0].title }}</h1>
    <p class="text-2xl font-thin text-left p-4">{{ slider[0].body }}</p>
    <div class="border-2 border-purple-800 p-2 mt-5 mb-20">
        <img @click="changeSlide" class="w-[1440px] h-[600px] object-cover" :src="showSlide().image" alt="/" />
    </div>

</template>

<script>


export default {
    name: "my-slider",
    data() {
        return {
            index: 0
        }
    },
    props: {
        slider : Array
    },
    methods: {
        showSlide() {
            return this.slider[this.index]
        },
        increaseIndex() {
            if (this.index >= this.slider.length - 1) {
                return
            }
            this.index += 1;
        },
        decreaseIndex() {
            if (this.index <= 0) {
                return
            }
            this.index -= 1;
        },
        changeSlide(event) {
            let image = event.target;
            let x = event.clientX;
            console.log(x)
            let imgbaseX = image.offsetLeft
            console.log(image.width)
            if (x - imgbaseX < (image.width * 0.16)) {
                this.decreaseIndex();
            } else if(x - 1.65 * imgbaseX > (image.width * 0.725)) {
                this.increaseIndex();
            }
        }
    }
}

</script>