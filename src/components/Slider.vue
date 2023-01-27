<template>
    <div id="work" class="max-w-[1240px] mx-auto mb-10">
        <h1 class="text-2xl font-bold text-center p-4">Work</h1>
        <h2 class="text-xl font-sans text-center p-4">Here are some of the projects I have had the opportunity to work
            on.</h2>
        <h3 class="text-md text-center p-1 mb-10">Note: Clicking on the left and right side of the images allows for
            navigation</h3>
        <div class="border-2 border-purple-800 p-2 mt-5">
            <img @click="changeSlide" class="w-[1440px] h-[600px] object-cover" :src="showSlide().image" alt="/" />
        </div>
        
    </div>

</template>

<script>


export default {
    name: "my-slider",
    data() {
        return {
            SliderData: [
                {
                    image:
                        'https://i.imgur.com/JudUnYl.png'
                },
                {
                    image:
                        'https://i.imgur.com/2qTP1f4.png'
                },
                {
                    image:
                        'https://i.imgur.com/aFf39z1.png'
                },
                {
                    image:
                        'https://i.imgur.com/7GZbxCV.png'
                }
            ],
            index: 0
        }
    },
    methods: {
        showSlide() {
            return this.SliderData[this.index]
        },
        increaseIndex() {
            if (this.index >= this.SliderData.length - 1) {
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