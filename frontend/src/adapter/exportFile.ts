import { exportData } from "@/lib/utils";
import { get } from "http";

export const exportFileCSV = async () => {
  const response = await get("/components/export?format=csv", {
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
  const response = await get("/components/export?format=json", {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  if (response) {
    exportData(response, "data.json", "application/json");
  }
};
