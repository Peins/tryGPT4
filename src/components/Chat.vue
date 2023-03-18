<template>
  <div>
    <h1>ChatGPT</h1>
    <div>
      <input v-model="message" @keyup.enter="sendMessage" placeholder="Type your message...">
      <button @click="sendMessage">Send</button>
    </div>
    <div v-for="(response, index) in responses" :key="index">
      {{ response }}
    </div>
  </div>
</template>

<script>
import ChatGPTService from '../ChatGPTService';

export default {
  data() {
    return {
      message: '',
      responses: [],
        newQuestion: '',
    };
  },
  methods: {
    async sendMessage() {
        console.log("进入sendMessage方法");
      if (this.message.trim() !== '') {
        const response = await ChatGPTService.sendMessage(this.message);
          console.log('API response:', response);
        this.responses.push(response);
          console.log('Updated responses:', this.responses);
        this.message = '';
      }
    }
  },
};
</script>y
