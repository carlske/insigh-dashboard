"use client";

import { usePathname } from "next/navigation";

export default function ConditionalNavBar({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isAuthPage = pathname?.startsWith("/auth");

  if (isAuthPage) {
    return null;
  }

  return <>{children}</>;
}
