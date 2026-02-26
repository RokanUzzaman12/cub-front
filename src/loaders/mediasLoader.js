import { fetchMedias, fetchSingleMedias } from '../api/medias.js';
import { mediaList, singleMedia, latestMedia } from '../stores/mediasStore.js';

//fetch all medias
export async function fetchMediaAndFillStore() {
  try {
    const medias = await fetchMedias();
    const sortedData = medias.data.sort((a, b) => {
      const dateA = new Date(`${a.date} ${a.time}`);
      const dateB = new Date(`${b.date} ${b.time}`);
      return dateB - dateA;
    });
    mediaList.set(sortedData);
    latestMedia.set(sortedData[0]);
  } catch (err) {
    console.error('Error fetching medias:', err);
  }
}
//fetch single medias
export async function fetchSingleMediaAndFillStore(id) {
  try {
    const medias = await fetchSingleMedias(id);
    singleMedia.set(medias.data);
  } catch (err) {
    console.error('Error fetching medias:', err);
  }
}
