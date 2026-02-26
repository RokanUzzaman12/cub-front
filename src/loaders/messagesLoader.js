import { fetchMessages, fetchSingleMessage } from '../api/messages.js';
import { messageList, singleMessage } from '../stores/messagesStore.js';

//fetch all messages
export async function fetchMessagesAndFillStore() {
  try {
    const messages = await fetchMessages();
    messageList.set(messages.data);
    localStorage.setItem('messages', JSON.stringify(messages.data));
  } catch (err) {
    console.error('Error fetching messages:', err);
  }
}
//fetch single message
export async function fetchSingleMessageAndFillStore(id) {
  try {
    const message = await fetchSingleMessage(id);
    singleMessage.set(message.data);
  } catch (err) {
    console.error('Error fetching single message:', err);
  }
}
