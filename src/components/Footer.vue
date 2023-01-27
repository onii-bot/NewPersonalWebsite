<template>
    <footer class="footer bg-black/95 relative pt-1 footer-img">
    <div class="container mx-auto px-6">

        <div class="sm:flex sm:mt-8">
            <div class="mt-8 sm:mt-0 sm:w-full sm:px-8 flex flex-col md:flex-col justify-between">
                <div class="flex flex-col text-center">
                    <span class="text-5xl font-bold text-white m-4 mb-12 p-2 letter-space">Let's  Collaborate.</span>
                </div>
                <p class="text-center text-gray-400 text-xl mb-12">Always keep on moving.</p>
                <div class="flex flex-col text-center">
                    <span class="font-bold text-white mt-4 md:mt-0 mb-12">Keep in touch</span>
                    <div class="flex justify-center space-x-8">
                        <a href="https://www.instagram.com/ash._ua/" target="_blank" rel="noopener noreferrer"><img class="cursor-pointer h-6 w-6" :src="require('@/assets/github_logo.png')"></a>
                        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><img class="cursor-pointer h-6 w-6" :src="require('@/assets/twitter_logo.png')"></a>
                        <a href="https://www.linkedin.com/in/aayush-paudel-4a1731227/" target="_blank" rel="noopener noreferrer"><img class="cursor-pointer h-6 w-6" :src="require('@/assets/linkedin_logo.png')"></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="container mx-auto px-6">
        <div class="mt-5 flex flex-col items-center">
            <div class="sm:w-2/3 text-center py-6">
                <p class="text-sm text-white mb-2">
                    © 2023 by Aayush Paudel
                </p>
                <p class="text-sm text-white mb-2">
                    Created using
                </p>
            </div>
        </div>
    </div>
</footer>
</template>

<script>

export default{
    name: "my-footer"
}

</script>