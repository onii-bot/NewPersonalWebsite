<template>
    <div>
        <Hero message="Hey there, Got a project, job offer or consulting work? Feel free to contact me." heading="Contact" button_text="Sure" btn_link="#lwt"/>
        <div class="max-w-[1240px] m-auto p-4 h-screen">
            <h1 id="lwt" class="text-2xl font-bold text-center p-4">Let's Work Together</h1>
            <form class="max-w-[600px] m-auto" @submit.prevent="sendMessage">
                <div class="grid grid-cols-2 gap-2">
                    <input v-model="formData.name" class="border shadow-lg p-3" type="text" placeholder="Name" required />
                    <input v-model="formData.email" class="border shadow-lg p-3" type="email" placeholder="Email" required />
                </div>
                <input v-model="formData.subject" class="border shadow-lg p-3 w-full my-2" type="text" placeholder="Subject" required />
                <textarea v-model="formData.message" class="border shadow-lg p-3 w-full" rows="5" placeholder="Message" required></textarea>
                <button type="submit" class="border shadow-lg p-3 w-full mt-2">Submit</button>
                <div v-if="showAlert" class="bg-green-500 text-white p-4">
                    <p>{{ alertMessage }}</p>
                </div>
            </form>
        </div>

    </div>
</template>

<script>
import Hero from './Hero.vue';
import axios from 'axios';

export default {
    name: "my-contact",
    components: {
        Hero
    },
    data() {
        return {
            formData: {
                name: '',
                email: '',
                subject: '',
                message: ''
            },
            showAlert: false,
            alertMessage: '',
            webhookUrl: process.env.VUE_APP_DISCORD_WEBHOOK_URL
        };
    },
    methods: {
        async sendMessage() {
            try {
                if (!this.webhookUrl) {
                    console.error('Discord webhook URL not available');
                    return;
                }

                const { name, email, subject, message } = this.formData;

                const payload = {
                    content: `New message from ${name} (${email}):\nSubject: ${subject}\nMessage: ${message}`
                };

                await axios.post(this.webhookUrl, payload);

                this.formData = {
                    name: '',
                    email: '',
                    subject: '',
                    message: ''
                };

                // Show success alert
                this.showAlert = true;
                this.alertMessage = 'Message sent successfully!';

                // Hide alert after 5 seconds
                setTimeout(() => {
                    this.showAlert = false;
                }, 5000);
            } catch (error) {
                console.error('Error sending message:', error);
                // Show error alert
                this.showAlert = true;
                this.alertMessage = 'Failed to send message. Please try again later.';
            }
        },
    },
    mounted() {
        window.scrollTo(0, 0);
    }
};
</script>

<style>
button.float-right {
    cursor: pointer;
}
</style>
