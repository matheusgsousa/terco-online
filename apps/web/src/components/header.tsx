"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { ModeToggle } from "./mode-toggle";
import type { Route } from "next";

export default function Header() {
  const pathname = usePathname();
  const links = [
    { to: "/gozosos", label: "Mistérios Gozosos" },
    { to: "/luminosos", label: "Mistérios Luminosos" },
    { to: "/dolorosos", label: "Mistérios Dolorosos" },
    { to: "/gloriosos", label: "Mistérios Gloriosos" },
  ] as const;

  const currentPath =
    pathname.endsWith("/") && pathname !== "/"
      ? pathname.slice(0, -1)
      : pathname;

  return (
    <div>
      <div className="relative flex items-center justify-center px-2 py-6">
        <nav className="flex gap-28 text-3xl font-header">
          {links.map(({ to, label }) => {
            const isActive = currentPath === to;
            return (
              <Link
                key={to}
                href={to as Route}
                className={
                  "transition " +
                  (isActive &&
                    "font-bold underline underline-offset-8 decoration-[#CEA716]")
                }
              >
                {label}
              </Link>
            );
          })}
        </nav>
        <div className="absolute right-10 flex items-center gap-5">
          <ModeToggle />
        </div>
      </div>
    </div>
  );
}
