<template>
    
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
            if (x < (image.width / 2)) {
                this.decreaseIndex();
            } else {
                this.increaseIndex();
            }
        }
    }
}

</script>