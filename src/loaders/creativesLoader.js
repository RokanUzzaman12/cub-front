import { fetchCreatives, fetchSingleCreatives } from '../api/creatives.js';
import { creativeList, singleCreative, latestCreative } from '../stores/creativeStore.js';

//fetch all creatives
export async function fetchCreativesAndFillStore() {
  try {
    const creatives = await fetchCreatives();
    const sortedData = creatives.data.sort((a, b) => {
      const dateA = new Date(`${a.date} ${a.time}`);
      const dateB = new Date(`${b.date} ${b.time}`);
      return dateB - dateA;
    });
    creativeList.set(sortedData);
    latestCreative.set(sortedData[0]);
  } catch (err) {
    console.error('Error fetching creatives:', err);
  }
}
//fetch single creative
export async function fetchSingleCreativeAndFillStore(id) {
  try {
    const creative = await fetchSingleCreatives(id);
    singleCreative.set(creative.data);
  } catch (err) {
    console.error('Error fetching creative:', err);
  }
}
