import { API_ROOT } from "../config/api";

export async function apiFetch(path) {
  const res = await fetch(`${API_ROOT}${path}`);
  if (!res.ok) throw new Error(`API error: ${res.status}`);
  return await res.json();
}

/**
 * POST helper that accepts either a plain object (JSON) or a FormData instance.
 * - path: API path (appended to API_ROOT)
 * - body: object | FormData
 * - opts: optional fetch options (headers will be merged)
 */
export async function apiPost(path, body, opts = {}) {
  const url = `${API_ROOT}${path}`;
  let fetchOpts = { method: "POST", ...opts };

  // If body is FormData, let the browser set Content-Type (including boundary)
  if (body instanceof FormData) {
    fetchOpts.body = body;
  } else {
    // assume JSON
    fetchOpts.body = JSON.stringify(body || {});
    fetchOpts.headers = {
      "Content-Type": "application/json",
      ...(fetchOpts.headers || {}),
    };
  }

  const res = await fetch(url, fetchOpts);
  if (!res.ok) {
    // attempt to parse error body
    let errText = `API error: ${res.status}`;
    try {
      const json = await res.json();
      errText = json?.message || JSON.stringify(json) || errText;
    } catch (e) {
      // ignore parse errors
    }
    throw new Error(errText);
  }
  // try to parse JSON, but return raw text if parse fails
  const text = await res.text();
  try {
    return JSON.parse(text);
  } catch {
    return text;
  }
}
