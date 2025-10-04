import { ReactNode } from "react";
import Image from 'next/image';




const Root = ({ children }: { children: ReactNode }) => {
  return <div className="p-6 rounded-lg shadow-md bg-white dark:bg-gray-800">{children}</div>;
}

const Header = ({ title }: { title: string }) => {
  return <div className="p-6 rounded-lg shadow-md bg-white dark:bg-gray-800">{title}</div>;
}

const Body = ({ children }: { children: ReactNode }) => {
  return <div className="p-6 rounded-lg shadow-md bg-white dark:bg-gray-800">{children}</div>;
}

const Footer = ({ text }: { text: string }) => {
  return <div className="p-6 rounded-lg shadow-md bg-white dark:bg-gray-800">{text}</div>;
}

const CardImage = ({ src, alt }: { src: string; alt: string }) => {
  return <div className="w-16 h-16 bg-gray-300 rounded-full">
    <Image src={src} alt={alt} width={64} height={64} className="rounded-full" />
  </div>;
}


export const InsighCard = Object.assign(Root, {
  Header,
  Image: CardImage,
  Body,
  Footer
});

export default InsighCard;