import { fetchSliders } from "../api/slider.js";
import { sliderList } from "../stores/sliderStore.js";

//fetch all sliders
export async function fetchSlidersAndFillStore() {
  try {
    const sliders = await fetchSliders();
    sliderList.set(sliders);
  } catch (err) {
    console.error("Error fetching sliders:", err);
  }
}
