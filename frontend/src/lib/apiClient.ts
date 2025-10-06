import { API_URL } from "@/config/settings";

interface ApiOptions extends RequestInit {
  skipJsonParse?: boolean;
}

export async function apiClient<T = unknown>(
  endpoint: string,
  options: ApiOptions = {}
): Promise<T> {
  const { skipJsonParse, ...fetchOptions } = options;

  try {
    const response = await fetch(`${API_URL}${endpoint}`, {
      method: fetchOptions.method || "GET",
      headers: {
        "Content-Type": "application/json",
        ...(fetchOptions.headers || {}),
      },
      credentials: "include",
      body: fetchOptions.body,
    });

    if (!response.ok) {
      const text = await response.text();
      throw new Error(
        `API error ${response.status}: ${text || response.statusText}`
      );
    }

    if (skipJsonParse || response.status === 204) {
      return null as T;
    }

    const contentType = response.headers.get("content-type") || "";

    if (contentType.includes("application/json")) {
      return await response.json();
    }

    if (contentType.includes("text/csv")) {
      return (await response.text()) as T;
    }

    return (await response.text()) as T;
  } catch (err) {
    throw err;
  }
}
