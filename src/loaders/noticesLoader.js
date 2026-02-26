import { fetchNotices, fetchSingleNotice, fetchFacultyWiseNotices, fetchDepartmentWiseNotices } from '../api/notices.js';
import { noticeList, singleNotice, facultyWiseNotices, departmentWiseNotices } from '../stores/noticesStore';

//fetch all notices
export async function fetchNoticesAndFillStore() {
  try {
    const notices = await fetchNotices();
    noticeList.set(notices.data);
  } catch (err) {
    console.error('Error fetching notices:', err);
  }
}
//fetch single notice
export async function fetchSingleNoticeAndFillStore(id) {
  try {
    const notice = await fetchSingleNotice(id);
    singleNotice.set(notice.data);
  } catch (err) {
    console.error('Error fetching single notice:', err);
  }
}

//fetch faculty wise notices
export async function fetchFacultyWiseNoticesAndFillStore(slug) {
  try {
    const notice = await fetchFacultyWiseNotices(slug);
    facultyWiseNotices.set(notice.data);
  } catch (err) {
    console.error('Error fetching faculty wise notices:', err);
  }
}

//fetch department wise notices
export async function fetchDepartmentWiseNoticesAndFillStore(slug) {
  try {
    const notice = await fetchDepartmentWiseNotices(slug);
    departmentWiseNotices.set(notice.data);
  } catch (err) {
    console.error('Error fetching department wise notices:', err);
  }
}
