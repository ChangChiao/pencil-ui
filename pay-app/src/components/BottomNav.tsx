"use client";

import Link from "next/link";
import { Home, ScanLine, Wallet, Send, Receipt } from "lucide-react";

const navItems = [
  { icon: Home, label: "首頁", href: "/" },
  { icon: ScanLine, label: "掃碼", href: "/scan" },
  { icon: Wallet, label: "錢包", href: "/wallet" },
  { icon: Send, label: "轉帳", href: "/transfer" },
  { icon: Receipt, label: "紀錄", href: "/history" },
];

interface BottomNavProps {
  activeIndex: number;
}

export default function BottomNav({ activeIndex }: BottomNavProps) {
  return (
    <div className="flex items-center justify-around w-full h-[80px] pt-2 px-4 pb-6 bg-[var(--fin-nav-bg)] border-t border-[var(--fin-glass-border)]">
      {navItems.map((item, i) => {
        const isActive = i === activeIndex;
        return (
          <Link
            key={item.href}
            href={item.href}
            className="flex flex-col items-center gap-1"
          >
            <item.icon
              className={`w-[22px] h-[22px] ${
                isActive
                  ? "text-[var(--fin-blue)]"
                  : "text-[var(--fin-text-muted)]"
              }`}
            />
            <span
              className={`text-[10px] font-primary ${
                isActive
                  ? "text-[var(--fin-blue)] font-semibold"
                  : "text-[var(--fin-text-muted)] font-normal"
              }`}
            >
              {item.label}
            </span>
          </Link>
        );
      })}
    </div>
  );
}
