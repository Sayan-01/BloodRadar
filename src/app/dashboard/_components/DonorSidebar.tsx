// components/sidebar.tsx
"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, History, Award, AlertTriangle } from "lucide-react";
import { Logo } from "@/svg-components/Logo";

const sidebarItems = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: <LayoutDashboard size={20} />,
  },
  {
    title: "Donor History",
    href: "/dashboard/donor-history",
    icon: <History size={20} />,
  },
  {
    title: "Hall of Donors",
    href: "/dashboard/hall-of-donors",
    icon: <Award size={20} />,
  },
  {
    title: "SOS Response",
    href: "/dashboard/sos-response",
    icon: <AlertTriangle size={20} />,
  },
];

export function DonorSidebar() {
  const pathname = usePathname();

  return (
    <div className="flex flex-col h-full bg-slate-900 text-white w-64 p-4">
      <div className="py-4 border-b border-slate-700">
        <h1 className="text-3xl font-bold  flex items-center gap-4">
          {" "}
          <Logo /> BloodRadar
        </h1>
      </div>

      <nav className="mt-6 flex-1">
        <ul className="space-y-2">
          {sidebarItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${isActive ? "bg-slate-800 text-white" : "text-slate-400 hover:text-white hover:bg-slate-800"}`}
                >
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="border-t border-slate-700 pt-4 mt-6">
        <div className="px-4 py-2 text-sm text-slate-400">
          <p>Logged in as</p>
          <p className="font-medium text-white">Admin User</p>
        </div>
      </div>
    </div>
  );
}
