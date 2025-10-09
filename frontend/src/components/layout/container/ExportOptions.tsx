"use client";
import { clickRangeAdapter } from "@/adapter/clickRange";
import { exportFileCSV, exportFileJSON } from "@/adapter/exportFile";
import { InsighButton, InsighCard } from "@insigh-design/insigh-components";
import { useState } from "react";

export const ExportOptions = () => {
  const [isExportingJSON, setIsExportingJSON] = useState(false);
  const [isExportingCSV, setIsExportingCSV] = useState(false);

  const handleExportJSON = async () => {
    try {
      setIsExportingJSON(true);
      await exportFileJSON();
      clickRangeAdapter({
        component: "ExportOptions",
        variant: "primary",
        action: "export-json",
      });
    } catch (error) {
      console.error("Error exporting JSON:", error);
    } finally {
      setIsExportingJSON(false);
    }
  };

  const handleExportCSV = async () => {
    try {
      setIsExportingCSV(true);
      clickRangeAdapter({
        component: "ExportOptions",
        variant: "primary",
        action: "export-csv",
      });
      await exportFileCSV();
    } catch (error) {
      console.error("Error exporting CSV:", error);
    } finally {
      setIsExportingCSV(false);
    }
  };

  return (
    <div className="flex flex-col md:flex-row gap-6 p-10">
      <InsighCard>
        <InsighCard.Header title="Export Options" />
        <InsighCard.Body>
          <div className="mb-4">
            <p className="text-gray-600">
              Here can you download your data in JSON format.
            </p>
            <div className="h-4" />
            <InsighButton
              disabled={isExportingJSON}
              onClick={handleExportJSON}
              icon="download"
              variant="primary"
              size="stretched"
            >
              {isExportingJSON ? "Exporting..." : "Export Data JSON"}
            </InsighButton>
          </div>
        </InsighCard.Body>
      </InsighCard>

      <InsighCard>
        <InsighCard.Header title="Export Options" />
        <InsighCard.Body>
          <div className="mb-4">
            <p className="text-gray-600">
              Here can you download your data in CSV format.
            </p>
            <div className="h-4" />
            <InsighButton
              disabled={isExportingCSV}
              onClick={handleExportCSV}
              icon="download"
              variant="primary"
              size="stretched"
            >
              {isExportingCSV ? "Exporting..." : "Export Data CSV"}
            </InsighButton>
          </div>
        </InsighCard.Body>
      </InsighCard>
    </div>
  );
};
export default ExportOptions;
