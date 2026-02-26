import { apiFetch } from './apiFetch';

//fetch all messages
export async function fetchMessages() {
  return await apiFetch('/messages');
}

//fetch single message
export async function fetchSingleMessage(id) {
  return await apiFetch(`/messages/${id}`);
}
