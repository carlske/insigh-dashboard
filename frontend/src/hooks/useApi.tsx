import { API_URL } from "@/config/settings";
import { useState, useCallback } from "react";

interface ApiResponse<T> {
  data: T | null;
  error: string | null;
  loading: boolean;
  request: (url: string, options?: RequestInit) => Promise<void>;
}

export function useApi<T = unknown>(): ApiResponse<T> {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const request = useCallback(
    async (url: string, options: RequestInit = {}) => {
      setLoading(true);
      setError(null);

      try {
        const res = await fetch(`${API_URL}${url}`, {
          method: options.method || "GET",
          headers: {
            "Content-Type": "application/json",
            ...(options.headers || {}),
          },
          credentials: "include",
          body: options.body,
        });

        if (!res.ok) throw new Error(`Error ${res.status}: ${res.statusText}`);

        const json = await res.json();
        setData(json);
      } catch (err: any) {
        setError(err.message || "Unexpected error");
      } finally {
        setLoading(false);
      }
    },
    []
  );

  return { data, error, loading, request };
}
