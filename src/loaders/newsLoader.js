import { fetchNews, fetchSingleNews } from '../api/news.js';
import { newsList, singleNews, latestNews } from '../stores/newsStore.js';

//fetch all news
export async function fetchNewsAndFillStore() {
  try {
    const news = await fetchNews();
    const sortedData = news.data.sort((a, b) => {
      const dateA = new Date(`${a.date} ${a.time}`);
      const dateB = new Date(`${b.date} ${b.time}`);
      return dateB - dateA;
    });
    newsList.set(sortedData);
    latestNews.set(sortedData[0]);
  } catch (err) {
    console.error('Error fetching news:', err);
  }
}
//fetch single news
export async function fetchSingleNewsAndFillStore(id) {
  try {
    const news = await fetchSingleNews(id);
    singleNews.set(news.data);
  } catch (err) {
    console.error('Error fetching news:', err);
  }
}
