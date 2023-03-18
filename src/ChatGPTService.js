import axios from 'axios';

const API_URL = 'https://myproxy.com/v1/chat/completions';

class ChatGPTService {
  async sendMessage(question) {
    const response = await axios.post(API_URL, {
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'user',
          content: question,
        },
      ],
      temperature: 0.3,
      stream: false,
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`,
      },
    });
     console.log('Service的response:', response);

    return response.data.choices[0].message.content;
  }
}

export default new ChatGPTService();
