import { fetchEvents, fetchSingleEvent, fetchFacultyWiseEvents, fetchDepartmentWiseEvents } from '../api/events.js';
import { eventList, singleEvent, facultyWiseEvents, departmentWiseEvents } from '../stores/eventsStore.js';

//fetch all events
export async function fetchEventsAndFillStore() {
  try {
    const events = await fetchEvents();
    eventList.set(events.data);
  } catch (err) {
    console.error('Error fetching events:', err);
  }
}
//fetch single event
export async function fetchSingleEventAndFillStore(id) {
  try {
    const event = await fetchSingleEvent(id);
    singleEvent.set(event.data);
  } catch (err) {
    console.error('Error fetching single event:', err);
  }
}

//fetch faculty wise events
export async function fetchFacultyWiseEventsAndFillStore(slug) {
  try {
    const events = await fetchFacultyWiseEvents(slug);
    facultyWiseEvents.set(events.data);
  } catch (err) {
    console.error('Error fetching faculty wise Events:', err);
  }
}

//fetch department wise events
export async function fetchDepartmentWiseEventsAndFillStore(slug) {
  try {
    const events = await fetchDepartmentWiseEvents(slug);
    departmentWiseEvents.set(events.data);
  } catch (err) {
    console.error('Error fetching department wise Events:', err);
  }
}
