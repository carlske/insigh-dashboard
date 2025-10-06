"use client";
import { clickRangeAdapter } from "@/adapter/clickRange";
import InsighButton from "@/design-system/ui/insigh-components/InsighButton/InsighButton";
import InsighCard from "@/design-system/ui/insigh-components/InsighCard/InsighCard";
import { useApi } from "@/hooks/useApi";
import { exportData } from "@/lib/utils";
import { useState } from "react";

export const ExportOptions = () => {
  const { data, error, loading, request } = useApi<any>();
  const [exporting, setExporting] = useState(false);

  const handleExportJSON = () => {
    clickRangeAdapter({
      component: "ExportOptions",
      variant: "primary",
      action: "export-json",
    });

    request("/components/export?format=json", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    if (data) {
      exportData(data, "data.json", "application/json");
    }
  };

  const handleExportCSV = () => {
    clickRangeAdapter({
      component: "ExportOptions",
      variant: "primary",
      action: "export-csv",
    });

    request("/components/export?format=csv", {
      method: "GET",
      headers: {
        Accept: "text/csv",
        "Content-Type": "text/csv",
      },
    });

    if (data) {
      exportData(data, "data.csv", "text/csv");
    }
  };

  return (
    <div className="flex flex-col md:flex-row gap-6 p-10">
      <InsighCard>
        <InsighCard.Header title="Export Options" />
        <InsighCard.Image src="/card-input.jpg" alt="Export Illustration" />
        <InsighCard.Body>
          <div className="mb-4">
            <p className="text-gray-600">
              Here can you download your data in JSON format.
            </p>
            <div className="h-4" />
            <InsighButton
              onClick={handleExportJSON}
              icon="download"
              variant="primary"
              size="stretched"
            >
              Export Data JSON
            </InsighButton>
          </div>
        </InsighCard.Body>
      </InsighCard>

      <InsighCard>
        <InsighCard.Header title="Export Options" />
        <InsighCard.Image src="/card-input.jpg" alt="Export Illustration" />
        <InsighCard.Body>
          <div className="mb-4">
            <p className="text-gray-600">
              Here can you download your data in CSV format.
            </p>
            <div className="h-4" />
            <InsighButton
              onClickCapture={handleExportCSV}
              icon="download"
              variant="primary"
              size="stretched"
            >
              Export Data CSV
            </InsighButton>
          </div>
        </InsighCard.Body>
      </InsighCard>
    </div>
  );
};

export default ExportOptions;
