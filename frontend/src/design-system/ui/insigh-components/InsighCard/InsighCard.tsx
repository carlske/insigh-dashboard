import { ReactNode } from "react";
import Image from "next/image";
import { cn } from "@insigh-shared/utils/cn";

interface InsighCardProps {
  children: ReactNode;
  border?: boolean;
  borderstyle?: "solid" | "dashed" | "dotted";
}

const Root = ({ children, border, borderstyle }: InsighCardProps) => {
  const borderStyleMap = {
    solid: "border-solid",
    dashed: "border-dashed",
    dotted: "border-dotted",
  } as const;

  return (
    <div
      className={cn(
        "max-w-sm rounded overflow-hidden shadow-lg bg-insigh-monsoon-100 transition-all duration-300 ease-in-out hover:opacity-90 hover:-translate-y-1",
        border && "border-4 border-insigh-chambray-200",
        border && borderstyle && borderStyleMap[borderstyle]
      )}
    >
      {children}
    </div>
  );
};

const Header = ({ title }: { title: string }) => {
  return <div className="px-6 py-4 font-bold text-xl mb-2">{title}</div>;
};

const Body = ({ children }: { children: ReactNode }) => {
  return <div className="px-6 py-4">{children}</div>;
};

const Footer = ({ text }: { text: string }) => {
  return (
    <div className="px-6 pt-4 pb-2 text-sm text-insigh-monsoon-900">{text}</div>
  );
};

const CardImage = ({ src, alt }: { src: string; alt: string }) => {
  return (
    <div className="relative w-full h-48">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="(max-width: 640px) 100vw, 640px"
        priority
      />
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
