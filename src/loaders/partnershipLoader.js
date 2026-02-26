import { fetchPartnerships, fetchSinglePartnership } from '../api/partnership.js';
import { partnershipList, singlePartnership } from '../stores/partnershipStore.js';

//fetch all partnership
export async function fetchPartnershipAndFillStore() {
  try {
    const partnership = await fetchPartnerships();
    partnershipList.set(partnership.data);
  } catch (err) {
    console.error('Error fetching partnership:', err);
  }
}
//fetch single partnership
export async function fetchSinglePartnershipAndFillStore(id) {
  try {
    const partnership = await fetchSinglePartnership(id);
    singlePartnership.set(partnership.data);
  } catch (err) {
    console.error('Error fetching single partnership:', err);
  }
}
