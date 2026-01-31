import StatusBar from "@/components/StatusBar";
import BottomNav from "@/components/BottomNav";
import {
  Bell,
  Eye,
  TrendingUp,
  ScanLine,
  QrCode,
  Send,
  Grid2x2,
  ArrowDownLeft,
  ShoppingBag,
  ArrowUpRight,
} from "lucide-react";

const contacts = [
  { name: "王小明", char: "王", color: "#5B9BFF", bg: "#1E3A5F" },
  { name: "林美玲", char: "林", color: "#22C55E", bg: "#1E3A2F" },
  { name: "張大偉", char: "張", color: "#C084FC", bg: "#3A1E3F" },
  { name: "李雅芳", char: "李", color: "var(--fin-orange)", bg: "#3A2E1E" },
];

const quickActions = [
  { icon: ScanLine, label: "掃碼" },
  { icon: QrCode, label: "收款" },
  { icon: Send, label: "轉帳" },
  { icon: Grid2x2, label: "更多" },
];

const transactions = [
  {
    icon: ArrowDownLeft,
    iconColor: "var(--fin-green)",
    iconBg: "#1E3A2F",
    name: "王小明 轉入",
    time: "今天 14:30",
    amount: "+NT$ 5,000",
    amountColor: "var(--fin-green)",
  },
  {
    icon: ShoppingBag,
    iconColor: "var(--fin-red)",
    iconBg: "#3A1E1E",
    name: "7-ELEVEN 消費",
    time: "今天 12:15",
    amount: "-NT$ 89",
    amountColor: "var(--fin-red)",
  },
  {
    icon: ArrowUpRight,
    iconColor: "var(--fin-blue-light)",
    iconBg: "#1E2A3A",
    name: "林美玲 轉出",
    time: "昨天 09:20",
    amount: "-NT$ 2,300",
    amountColor: "var(--fin-blue-light)",
  },
];

export default function HomePage() {
  return (
    <div className="flex flex-col h-full w-full max-w-[393px] mx-auto bg-[var(--fin-bg)] overflow-hidden rounded-[40px]">
      <StatusBar />

      {/* Header */}
      <div className="flex items-center justify-between w-full py-2 px-6">
        <div className="flex items-center gap-2.5">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--fin-blue)] to-[var(--fin-blue-light)] flex items-center justify-center">
            <span className="text-white text-[16px] font-semibold font-primary">
              陳
            </span>
          </div>
          <div className="flex flex-col gap-0.5">
            <span className="text-[var(--fin-text-secondary)] text-[12px] font-primary">
              早安
            </span>
            <span className="text-[var(--fin-text-primary)] text-[16px] font-semibold font-primary">
              陳先生
            </span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Bell className="w-[22px] h-[22px] text-[var(--fin-text-secondary)]" />
          <div className="w-2 h-2 rounded-full bg-[var(--fin-red)]" />
        </div>
      </div>

      {/* Balance Card */}
      <div className="w-full px-5">
        <div
          className="w-full rounded-[20px] p-6 flex flex-col gap-4 border border-[var(--fin-glass-border)]"
          style={{
            background: "linear-gradient(135deg, #1A2744 0%, #0F1B2E 100%)",
            boxShadow: "0 8px 24px #2E7CF620",
          }}
        >
          <div className="flex items-center justify-between w-full">
            <span className="text-[var(--fin-text-secondary)] text-[13px] font-medium font-primary">
              總資產
            </span>
            <Eye className="w-[18px] h-[18px] text-[var(--fin-text-secondary)]" />
          </div>
          <span className="text-white text-[32px] font-bold font-primary tracking-[-1px]">
            NT$ 128,450.00
          </span>
          <div className="flex items-center gap-1.5">
            <TrendingUp className="w-3.5 h-3.5 text-[var(--fin-green)]" />
            <span className="text-[var(--fin-green)] text-[12px] font-medium font-primary">
              +NT$ 3,280 本月
            </span>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="flex justify-between w-full py-2 px-5">
        {quickActions.map((action) => (
          <div
            key={action.label}
            className="flex flex-col items-center gap-2 flex-1"
          >
            <div className="w-[52px] h-[52px] rounded-[16px] bg-[var(--fin-blue-glow)] border border-[var(--fin-glass-border)] flex items-center justify-center">
              <action.icon className="w-6 h-6 text-[var(--fin-blue-light)]" />
            </div>
            <span className="text-[var(--fin-text-secondary)] text-[11px] font-medium font-primary">
              {action.label}
            </span>
          </div>
        ))}
      </div>

      {/* Contacts */}
      <div className="flex flex-col gap-3 w-full py-3 px-5">
        <div className="flex items-center justify-between w-full">
          <span className="text-[var(--fin-text-primary)] text-[15px] font-semibold font-primary">
            常用聯絡人
          </span>
          <span className="text-[var(--fin-blue)] text-[12px] font-medium font-primary">
            查看全部
          </span>
        </div>
        <div className="flex gap-4 w-full">
          {contacts.map((c) => (
            <div
              key={c.name}
              className="flex flex-col items-center gap-1.5 w-[56px]"
            >
              <div
                className="w-[44px] h-[44px] rounded-full flex items-center justify-center"
                style={{ backgroundColor: c.bg }}
              >
                <span
                  className="text-[16px] font-semibold font-primary"
                  style={{ color: c.color }}
                >
                  {c.char}
                </span>
              </div>
              <span className="text-[var(--fin-text-secondary)] text-[10px] font-primary">
                {c.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="flex flex-col gap-3 flex-1 w-full py-1 px-5 overflow-auto">
        <div className="flex items-center justify-between w-full">
          <span className="text-[var(--fin-text-primary)] text-[15px] font-semibold font-primary">
            最近交易
          </span>
          <span className="text-[var(--fin-blue)] text-[12px] font-medium font-primary">
            查看全部
          </span>
        </div>
        <div className="flex flex-col gap-2 w-full">
          {transactions.map((tx, i) => (
            <div
              key={i}
              className="flex items-center gap-3 w-full rounded-[14px] bg-[var(--fin-surface)] p-3.5 border border-[var(--fin-glass-border)]"
            >
              <div
                className="w-10 h-10 rounded-[12px] flex items-center justify-center shrink-0"
                style={{ backgroundColor: tx.iconBg }}
              >
                <tx.icon
                  className="w-5 h-5"
                  style={{ color: tx.iconColor }}
                />
              </div>
              <div className="flex flex-col gap-0.5 flex-1">
                <span className="text-[var(--fin-text-primary)] text-[14px] font-medium font-primary">
                  {tx.name}
                </span>
                <span className="text-[var(--fin-text-muted)] text-[11px] font-primary">
                  {tx.time}
                </span>
              </div>
              <span
                className="text-[14px] font-semibold font-primary"
                style={{ color: tx.amountColor }}
              >
                {tx.amount}
              </span>
            </div>
          ))}
        </div>
      </div>

      <BottomNav activeIndex={0} />
    </div>
  );
}
