import { cn } from "@insigh-shared/utils/cn";
import { ComponentPropsWithoutRef, ReactNode } from "react";

interface InsighCardProps extends ComponentPropsWithoutRef<"div"> {
  /**
   * The variant of the card
   * @defaultValue 'top-image'
   */
  variant?: "top-image" | "full-image";

  /**
   * The opaque property of image,
   * only on card variant 'full-image'
   * @defaultValue false
   */
  contentOpaque?: boolean;

  /**
   * The content to render inside the component.
   * @defaultValue undefined
   */
  children?: ReactNode;

  /** If true, the card will have a border.
   * @defaultValue false
   */
  borderStyle?: "solid" | "dashed" | "dotted" | "none";

  /**
   * Additional class names to apply to the card container.
   */
  className?: string;
}

const Root = ({
  children,
  borderStyle = "none",
  contentOpaque = false,
  className,
}: InsighCardProps) => {
  return (
    <div
      className={cn(
        "insigh-card",
        { [`insigh-card_container--border-${borderStyle}`]: borderStyle },
        { "insigh-card_container--content-opaque": contentOpaque },
        className
      )}
    >
      {children}
    </div>
  );
};

const Content = ({ children }: { children: ReactNode }) => {
  return <div className={cn("insigh-card_content--body")}>{children}</div>;
};

const Header = ({ title }: { title: string }) => {
  return <h1 className={cn("insigh-card_content--title")}>{title}</h1>;
};

const Image = ({
  children,
  fullImage = false,
}: {
  children: ReactNode;
  fullImage?: boolean;
}) => {
  return (
    <div
      className={cn("insigh-card_image", {
        "insigh-card_image--full": fullImage,
      })}
    >
      {children}
    </div>
  );
};

const Body = ({ children }: { children: ReactNode }) => {
  return <div className={cn("insigh-card_content--body")}>{children}</div>;
};

const Footer = ({ children }: { children: ReactNode }) => {
  return <div className={cn("insigh-card_content--footer")}>{children}</div>;
};

export const InsighCard = Object.assign(Root, {
  Header,
  Image,
  Body,
  Content,
  Footer,
});

export default InsighCard;
