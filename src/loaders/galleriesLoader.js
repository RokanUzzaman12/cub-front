import { fetchGalleries, fetchSingleGallery } from '../api/galleries.js';
import { galleryList, singleGallery } from '../stores/galleriesStore.js';

//fetch all galleries
export async function fetchGalleriesAndFillStore() {
  try {
    const galleries = await fetchGalleries();
    galleryList.set(galleries.data);
  } catch (err) {
    console.error('Error fetching galleries:', err);
  }
}
//fetch single gallery
export async function fetchSingleGalleryAndFillStore(id) {
  try {
    const gallery = await fetchSingleGallery(id);
    singleGallery.set(gallery.data);
  } catch (err) {
    console.error('Error fetching single gallery:', err);
  }
}
