import { useQuery } from "@tanstack/react-query";
import { api } from "../lib/api";

export function useCurrentUser() {
  return useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const res = await api.get("/components/export");
      return res.data.user;
    },
    retry: false,
  });
}
