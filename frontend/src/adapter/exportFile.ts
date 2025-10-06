import { apiClient } from "@/lib/apiClient";
import { exportData } from "@/lib/utils";

export const exportFileCSV = async () => {
  const response = await apiClient("/components/export?format=csv", {
    method: "GET",
    headers: {
      Accept: "text/csv",
      "Content-Type": "text/csv",
    },
  });

  if (response) {
    exportData(response, "data.csv", "text/csv");
  }
};

export const exportFileJSON = async () => {
  const response = await apiClient("/components/export?format=json", {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  if (response) {
    exportData(response, "data.json", "application/json");
  }
};
