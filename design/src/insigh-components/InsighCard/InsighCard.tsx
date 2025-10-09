import { ReactNode, HTMLAttributes } from "react";
import Image from "next/image";
import { cn } from "@insigh-shared/utils/cn";

interface InsighCardRootProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Content to be displayed inside the card
   */
  children: ReactNode;

  /**
   * Whether to show a border around the card
   * @default false
   */
  border?: boolean;

  /**
   * Style of the border
   * @default "solid"
   */
  borderStyle?: "solid" | "dashed" | "dotted";

  /**
   * Whether to apply hover effects
   * @default true
   */
  hoverable?: boolean;

  /**
   * Custom className to extend styles
   */
  className?: string;
}

interface InsighCardHeaderProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Title text to display in the header
   */
  title: string;

  /**
   * Optional subtitle or description
   */
  subtitle?: string;

  /**
   * Custom className
   */
  className?: string;
}

interface InsighCardBodyProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Content of the card body
   */
  children: ReactNode;

  /**
   * Custom className
   */
  className?: string;
}

interface InsighCardFooterProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Footer text content
   */
  text?: string;

  /**
   * Alternative: pass children for custom content
   */
  children?: ReactNode;

  /**
   * Custom className
   */
  className?: string;
}

interface InsighCardImageProps {
  /**
   * Image source URL
   */
  src: string;

  /**
   * Alt text for accessibility
   */
  alt: string;

  /**
   * Image width
   * @default 400
   */
  width?: number;

  /**
   * Image height
   * @default 300
   */
  height?: number;

  /**
   * Object fit style
   * @default "cover"
   */
  objectFit?: "cover" | "contain" | "fill" | "none" | "scale-down";

  /**
   * Custom className for the container
   */
  className?: string;

  /**
   * Custom className for the image
   */
  imageClassName?: string;

  /**
   * Whether to use Next.js Image component for optimization
   * @default true
   */
  useNextImage?: boolean;
}

const Root = ({
  children,
  border = false,
  borderStyle = "solid",
  hoverable = true,
  className,
  ...props
}: InsighCardRootProps) => {
  const borderStyleMap: Record<"solid" | "dashed" | "dotted", string> = {
    solid: "border-solid",
    dashed: "border-dashed",
    dotted: "border-dotted",
  };

  return (
    <div
      className={cn(
        "",
        hoverable && "hover:opacity-90 hover:-translate-y-1 hover:shadow-xl",
        border && "border-4 border-insigh-chambray-200",
        border && borderStyle && borderStyleMap[borderStyle],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

const Header = ({
  title,
  subtitle,
  className,
  ...props
}: InsighCardHeaderProps) => {
  return (
    <div className={cn("px-6 py-4", className)} {...props}>
      <h3 className="font-bold text-xl mb-1">{title}</h3>
      {subtitle && (
        <p className="text-sm text-insigh-monsoon-700">{subtitle}</p>
      )}
    </div>
  );
};

const Body = ({ children, className, ...props }: InsighCardBodyProps) => {
  return (
    <div className={cn("px-6 py-4", className)} {...props}>
      {children}
    </div>
  );
};

const Footer = ({
  text,
  children,
  className,
  ...props
}: InsighCardFooterProps) => {
  return (
    <div
      className={cn(
        "px-6 pt-4 pb-2 text-sm text-insigh-monsoon-900",
        className
      )}
      {...props}
    >
      {children || text}
    </div>
  );
};

const CardImage = ({
  src,
  alt,
  width = 400,
  height = 300,
  objectFit = "cover",
  className,
  imageClassName,
  useNextImage = true,
}: InsighCardImageProps) => {
  const containerClasses = cn("relative w-full h-48", className);
  const imageClasses = cn(`object-${objectFit} w-full h-full`, imageClassName);

  return (
    <div className={containerClasses}>
      {useNextImage ? (
        <Image
          src={src}
          alt={alt}
          fill
          className={imageClasses}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      ) : (
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={imageClasses}
        />
      )}
    </div>
  );
};

export const InsighCard = Object.assign(Root, {
  Header,
  Image: CardImage,
  Body,
  Footer,
});

export default InsighCard;
