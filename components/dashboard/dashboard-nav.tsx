"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Settings,
  Package,
  Factory,
  Briefcase,
  MessageSquare,
  FileText,
  Users,
} from "lucide-react";

interface DashboardNavProps extends React.HTMLAttributes<HTMLElement> {
  items?: {
    href: string;
    title: string;
    icon: React.ReactNode;
  }[];
}

export function DashboardNav({ className, ...props }: DashboardNavProps) {
  const pathname = usePathname();

  const defaultItems = [
    {
      href: "/dashboard",
      title: "Overview",
      icon: <LayoutDashboard className="mr-2 h-4 w-4" />,
    },
    {
      href: "/dashboard/products",
      title: "Products",
      icon: <Package className="mr-2 h-4 w-4" />,
    },
    {
      href: "/dashboard/industries",
      title: "Industries",
      icon: <Factory className="mr-2 h-4 w-4" />,
    },
    {
      href: "/dashboard/services",
      title: "Services",
      icon: <Briefcase className="mr-2 h-4 w-4" />,
    },
    {
      href: "/dashboard/inquiries",
      title: "Inquiries",
      icon: <MessageSquare className="mr-2 h-4 w-4" />,
    },
    {
      href: "/dashboard/posts",
      title: "Blog Posts",
      icon: <FileText className="mr-2 h-4 w-4" />,
    },
    {
      href: "/dashboard/users",
      title: "Users",
      icon: <Users className="mr-2 h-4 w-4" />,
    },
    {
      href: "/dashboard/settings",
      title: "Settings",
      icon: <Settings className="mr-2 h-4 w-4" />,
    },
  ];

  const items = props.items || defaultItems;

  return (
    <nav className={cn("dashboard-nav", className)} {...props}>
      <div className="space-y-1">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex items-center py-2 px-3 text-sm font-medium rounded-md hover:bg-accent hover:text-accent-foreground",
              pathname === item.href || 
              (item.href !== "/dashboard" && pathname.startsWith(item.href))
                ? "active"
                : ""
            )}
          >
            {item.icon}
            {item.title}
          </Link>
        ))}
      </div>
    </nav>
  );
}