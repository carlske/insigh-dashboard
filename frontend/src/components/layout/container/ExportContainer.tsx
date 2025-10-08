interface ExportContainerProps {
  children?: React.ReactNode;
}

const ExportContainer = ({ children }: ExportContainerProps) => {
  return (
    <>
      <div className="p-10">
        <h1 className="text-3xl font-bold mb-6">Export Page</h1>
        <p className="text-lg text-gray-700">
          This is the export page. You can add export the da data in various
          formats. (json,csv)
        </p>
      </div>

      {children}
    </>
  );
};

export default ExportContainer;
