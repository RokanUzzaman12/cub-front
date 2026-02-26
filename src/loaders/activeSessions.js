import { fetchActiveSessions } from "../api/activeSession.js";
import { activeSessionList } from "../stores/activeSession.js";

//fetch all active sessions
export async function fetchActiveSessionsAndFillStore() {
  try {
    const sessions = await fetchActiveSessions();
    const activeSessions = sessions.data.filter((season) => season.status === "active");
    activeSessionList.set(activeSessions);
  } catch (err) {
    console.error("Error fetching active sesssions:", err);
  }
}
