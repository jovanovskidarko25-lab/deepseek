"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useSidebar } from "@/hooks/useSidebar";
import {
  LayoutDashboard,
  Brain,
  Users,
  CreditCard,
  BarChart3,
  MessageSquare,
  Settings,
  Shield,
  Menu,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/Button";

const routes = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
  },
  {
    label: "AI Module",
    icon: Brain,
    href: "/ai",
    children: [
      { label: "API Keys", href: "/ai/api-keys" },
      { label: "Prompt History", href: "/ai/prompt-history" },
      { label: "Models", href: "/ai/models" },
    ],
  },
  {
    label: "CRM",
    icon: Users,
    href: "/crm",
    children: [
      { label: "Users", href: "/crm/users" },
      { label: "Roles", href: "/crm/roles" },
      { label: "Teams", href: "/crm/teams" },
    ],
  },
  {
    label: "Finance",
    icon: CreditCard,
    href: "/finance",
    children: [
      { label: "Billing", href: "/finance/billing" },
      { label: "Transactions", href: "/finance/transactions" },
      { label: "Invoices", href: "/finance/invoices" },
    ],
  },
  {
    label: "Analytics",
    icon: BarChart3,
    href: "/analytics",
    children: [
      { label: "Traffic", href: "/analytics/traffic" },
      { label: "Sales", href: "/analytics/sales" },
      { label: "Reports", href: "/analytics/reports" },
    ],
  },
  {
    label: "Communication",
    icon: MessageSquare,
    href: "/communication",
    children: [
      { label: "Chat", href: "/communication/chat" },
      { label: "Inbox", href: "/communication/inbox" },
      { label: "Notifications", href: "/communication/notifications" },
    ],
  },
  {
    label: "Settings",
    icon: Settings,
    href: "/settings",
    children: [
      { label: "Account", href: "/settings/account" },
      { label: "Security", href: "/settings/security" },
      { label: "Integrations", href: "/settings/integrations" },
      { label: "Preferences", href: "/settings/preferences" },
    ],
  },
  {
    label: "UI Showcase",
    icon: Shield,
    href: "/ui",
  },
];

export function Sidebar() {
  const pathname = usePathname();
  const { isOpen, toggle } = useSidebar();

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={toggle}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 flex w-64 flex-col border-r bg-background transition-transform lg:static lg:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex h-14 items-center border-b px-4">
          <Link href="/dashboard" className="flex items-center gap-2 font-semibold">
            <span className="text-xl">SaaS</span>
          </Link>
          <Button
            variant="ghost"
            size="icon"
            className="ml-auto lg:hidden"
            onClick={toggle}
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        <nav className="flex-1 space-y-1 p-2">
          {routes.map((route) => {
            const isActive = pathname === route.href || pathname.startsWith(route.href + "/");
            return (
              <div key={route.href}>
                <Link
                  href={route.href}
                  className={cn(
                    "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                    isActive
                      ? "bg-primary/10 text-primary"
                      : "hover:bg-muted"
                  )}
                >
                  <route.icon className="h-4 w-4" />
                  {route.label}
                </Link>
                {route.children && isActive && (
                  <div className="ml-6 mt-1 space-y-1">
                    {route.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className={cn(
                          "block rounded-md px-3 py-2 text-sm transition-colors",
                          pathname === child.href
                            ? "bg-primary/10 text-primary"
                            : "hover:bg-muted"
                        )}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>
      </aside>
    </>
  );
}