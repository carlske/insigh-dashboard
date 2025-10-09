"use client";
import { InsighButton } from "@insigh-design/insigh-components";
import InsighModal, {
  InsighModalActions,
  InsighModalDescription,
  InsighModalTitle,
} from "@insigh-design/insigh-components/InsighModal/InsighModal";
import { useState } from "react";

export default function ModalPage() {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = () => {
    handleClose();
  };

  return (
    <div>
      <main className="flex flex-col md:flex-row gap-8 p-8 flex-wrap sm:p-20 w-full">
        <InsighButton variant="primary" onClick={() => setOpen(true)}>
          Open Modal
        </InsighButton>

        <InsighModal open={open} onClose={handleClose} size="medium">
          <InsighModalTitle>Confirm Action</InsighModalTitle>
          <InsighModalDescription>
            Are you sure you want to delete this item?
          </InsighModalDescription>
          <InsighModalActions>
            <InsighButton variant="secondary" onClick={handleClose}>
              Cancel
            </InsighButton>
            <InsighButton variant="danger" onClick={handleDelete}>
              Delete
            </InsighButton>
          </InsighModalActions>
        </InsighModal>
      </main>
    </div>
  );
}
