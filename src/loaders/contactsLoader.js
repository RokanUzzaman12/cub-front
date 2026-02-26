import { fetchContacts, fetchSingleContact } from '../api/contacts.js';
import { contactList, singleContact } from '../stores/contactsStore.js';

//fetch all contacts
export async function fetchContactsAndFillStore() {
  try {
    const contacts = await fetchContacts();
    contactList.set(contacts.data);
  } catch (err) {
    console.error('Error fetching contacts:', err);
  }
}
//fetch single contact
export async function fetchSingleContactAndFillStore(id) {
  try {
    const contact = await fetchSingleContact(id);
    singleContact.set(contact.data);
  } catch (err) {
    console.error('Error fetching single contact:', err);
  }
}
