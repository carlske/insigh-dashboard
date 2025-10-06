"use client";

import { usePathname } from "next/navigation";

export default function ConditionalNavBar({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isAuthPage = pathname?.startsWith("/auth") || pathname === "/export";

  if (isAuthPage) {
    return null;
  }

  return <>{children}</>;
}
