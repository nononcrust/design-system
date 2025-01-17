"use client";

import { menu } from "@/configs/menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Sidebar = () => {
  return (
    <aside className="fixed left-0 top-[56px] hidden h-[calc(100vh-56px)] min-w-[240px] flex-col overflow-y-auto bg-background py-12 scrollbar-hide md:flex">
      <nav className="flex flex-col gap-6 px-6">
        {menu.map((group) => (
          <SidebarGroup key={group.title}>
            <SidebarSubtitle key={group.title} title={group.title} />
            {group.items.map((item) => (
              <SidebarItem key={item.title} title={item.title} href={item.href} />
            ))}
          </SidebarGroup>
        ))}
      </nav>
    </aside>
  );
};

type SidebarItemProps = {
  title: string;
  href: string;
};

const SidebarItem = ({ title, href }: SidebarItemProps) => {
  const pathname = usePathname();

  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={cn(
        "flex h-8 items-center rounded-lg px-3 text-sm font-medium hover:bg-background-hover",
        isActive && "bg-background-hover font-semibold hover:bg-background-hover",
      )}
    >
      {title}
    </Link>
  );
};

type SidebarSubtitleProps = {
  title: string;
};

const SidebarSubtitle = ({ title }: SidebarSubtitleProps) => {
  return <span className="px-3 text-[13px] font-medium text-subtle">{title}</span>;
};

const SidebarGroup = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex flex-col">{children}</div>;
};
