import InsighButton from "@/design-system/ui/insigh-components/InsighButton/InsighButton";
import InsighModal, {
  InsighModalActions,
} from "@/design-system/ui/insigh-components/InsighModal/InsighModal";
interface ErrorCaseProps {
  isOpen: boolean;
  onClose?: () => void;
}

export const ErrorCase = ({ isOpen = false, onClose }: ErrorCaseProps) => {
  return (
    <InsighModal open={isOpen} onClose={onClose}>
      <div className="p-4">
        <h2 className="text-lg font-bold mb-2">Error</h2>
        <p className="text-sm text-gray-600">
          An error occurred while fetching data. Please try again later.
        </p>
        <InsighModalActions className="mt-4 flex justify-end">
          <InsighButton
            onClick={onClose}
            variant="danger"
            size="medium"
            icon="x"
          >
            Close
          </InsighButton>
        </InsighModalActions>
      </div>
    </InsighModal>
  );
};
