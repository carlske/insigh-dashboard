import CloseSection from "@/components/layout/container/CloseSeccion";
import ExportContainer from "@/components/layout/container/ExportContainer";
import ExportOptions from "@/components/layout/container/ExportOptions";

export default function ExportHome() {
  return (
    <section>
      <ExportContainer>
        <ExportOptions />
      </ExportContainer>
      <CloseSection />
    </section>
  );
}
