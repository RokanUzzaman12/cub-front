import { fetchPages, fetchSinglePage } from '../api/newpages.js';
import { pageList,singlePage, latestPage } from '../stores/newpagesStore.js';

//fetch all pages
export async function fetchPageAndFillStore() {
  try {
    const pages = await fetchPages();
    const sortedData = pages.data.sort((a, b) => {
      const dateA = new Date(`${a.date} ${a.time}`);
      const dateB = new Date(`${b.date} ${b.time}`);
      return dateB - dateA;
    });
    pageList.set(sortedData);
    latestPage.set(sortedData[0]);
  } catch (err) {
    console.error('Error fetching pages:', err);
  }
}
//fetch single page
export async function fetchSinglePageAndFillStore(id) {
  try {
    const page = await fetchSinglePage(id);
    singlePage.set(page.data);
  } catch (err) {
    console.error('Error fetching page:', err);
  }
}

