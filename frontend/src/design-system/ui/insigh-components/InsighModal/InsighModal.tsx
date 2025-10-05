"use client";
import { createPortal } from "react-dom";
import clsx from "clsx";
import InsighButton from "../InsighButton/InsighButton";
import {
  Children,
  cloneElement,
  isValidElement,
  useEffect,
  useRef,
} from "react";

export interface InsighModalProps
  extends React.ComponentPropsWithoutRef<"div"> {
  /**
   * Whether to open the modal or not
   * @type {boolean}
   * @default false
   */
  open?: boolean;

  /**
   * Called when user action should close the modal
   * @type {void}
   * @default undefined
   */
  onClose?: () => void;

  /**
   * Size of the modal
   * @type {'small' | 'medium' | 'large'}
   * @default 'medium'
   */
  size?: "small" | "medium" | "large";
}

export const InsighModal = ({
  open = false,
  onClose = undefined,
  size = "medium",
  children,
  className,
  ...props
}: InsighModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";

      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [open]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && onClose) {
        onClose();
      }
    };

    if (open) {
      document.addEventListener("keydown", handleEscape);
      return () => document.removeEventListener("keydown", handleEscape);
    }
  }, [open, onClose]);

  useEffect(() => {
    if (!open || !modalRef.current) return;

    const modal = modalRef.current;
    const focusableElements = modal.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    const handleTab = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement?.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement?.focus();
        }
      }
    };

    firstElement?.focus();

    modal.addEventListener("keydown", handleTab as any);
    return () => modal.removeEventListener("keydown", handleTab as any);
  }, [open]);

  if (!open) return null;

  const modalContent = (
    <div
      className={clsx(
        "insigh-modal",
        `insigh-modal--${size}`,
        open && "insigh-modal--open",
        className
      )}
      role="dialog"
      aria-modal="true"
      aria-labelledby="insigh-modal-title"
      aria-describedby="insigh-modal-description"
      {...props}
    >
      <div
        className="insigh-modal__overlay"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="insigh-modal__content" ref={modalRef}>
        {Children.map(children, (child: React.ReactNode) =>
          isValidElement(child) && child.type === InsighModalTitle
            ? cloneElement(child, { ...child.props, onClose } as any)
            : child
        )}
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
};

export interface InsighModalTitleProps
  extends React.ComponentPropsWithoutRef<"div"> {
  onClose?: () => void;
}

export const InsighModalTitle = ({
  onClose = undefined,
  children,
  className,
  ...props
}: InsighModalTitleProps) => (
  <div
    id="insigh-modal-title"
    className={clsx("insigh-modal__title", className)}
    {...props}
  >
    <h2 className="insigh-modal__title-text">{children}</h2>
    {onClose && (
      <InsighButton
        variant="secondary"
        icon="x"
        onClick={onClose}
        aria-label="Close modal"
      >
        Close
      </InsighButton>
    )}
  </div>
);

export const InsighModalDescription = ({
  children,
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) => (
  <div
    id="insigh-modal-description"
    className={clsx("insigh-modal__body", className)}
    {...props}
  >
    {children}
  </div>
);

export const InsighModalActions = ({
  children,
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) => (
  <div className={clsx("insigh-modal__actions", className)} {...props}>
    {children}
  </div>
);

InsighModal.displayName = "InsighModal";
InsighModalTitle.displayName = "InsighModalTitle";
InsighModalDescription.displayName = "InsighModalDescription";
InsighModalActions.displayName = "InsighModalActions";

export default InsighModal;
