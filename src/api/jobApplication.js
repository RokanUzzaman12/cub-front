import { apiPost } from "./apiFetch";

/**
 * Submit a job application to the backend.
 * Accepts either a FormData instance (for file uploads) or a plain object.
 * If a plain object is provided, it's converted to FormData so files can be added later.
 * Returns the parsed API response.
 */
export async function submitJobApplication(payload) {
  // payload can be FormData or plain object
  let body = payload;

  if (!(payload instanceof FormData)) {
    const fd = new FormData();
    for (const key of Object.keys(payload || {})) {
      const v = payload[key];
      // If value is an array, append each item
      if (Array.isArray(v)) {
        v.forEach((item) => fd.append(key, item));
      } else if (v !== undefined && v !== null) {
        fd.append(key, v);
      }
    }
    body = fd;
  }

  // default endpoint - posting to the server's job applications route
  const path = "/job-applications";
  return await apiPost(path, body);
}
