// src/hooks/useApi.ts
import { useState, useCallback } from "react";
import { apiClient } from "@/lib/apiClient";

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

  const request = useCallback(async (url: string, options?: RequestInit) => {
    setLoading(true);
    setError(null);

    try {
      const res = await apiClient<T>(url, options);
      setData(res);
    } catch (err: any) {
      setError(err.message || "Unexpected error");
    } finally {
      setLoading(false);
    }
  }, []);

  return { data, error, loading, request };
}
