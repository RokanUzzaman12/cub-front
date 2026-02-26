import { apiFetch } from './apiFetch';

//fetch all contacts
export async function fetchContacts() {
  return await apiFetch('/campus_contacts');
}

//fetch single contact
export async function fetchSingleContact(id) {
  return await apiFetch(`/campus_contacts/${id}`);
}
