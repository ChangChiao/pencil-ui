import StatusBar from "@/components/StatusBar";
import Header from "@/components/Header";
import BottomNav from "@/components/BottomNav";
import {
  SlidersHorizontal,
  Search,
  Calendar,
  ArrowDownLeft,
  ShoppingBag,
  ArrowUpRight,
  Coffee,
  TrainFront,
} from "lucide-react";

const categories = [
  { label: "全部", active: true },
  { label: "餐飲", active: false },
  { label: "購物", active: false },
  { label: "轉帳", active: false },
  { label: "發票", active: false },
];

interface Transaction {
  icon: typeof ArrowDownLeft;
  iconColor: string;
  iconBg: string;
  name: string;
  badge?: boolean;
  category: string;
  amount: string;
  amountColor: string;
}

const todayTx: Transaction[] = [
  {
    icon: ArrowDownLeft,
    iconColor: "var(--fin-green)",
    iconBg: "#1E3A2F",
    name: "王小明 轉入",
    category: "轉帳 · 14:30",
    amount: "+NT$ 5,000",
    amountColor: "var(--fin-green)",
  },
  {
    icon: ShoppingBag,
    iconColor: "var(--fin-red)",
    iconBg: "#3A1E1E",
    name: "7-ELEVEN",
    badge: true,
    category: "餐飲 · 12:15",
    amount: "-NT$ 89",
    amountColor: "var(--fin-red)",
  },
  {
    icon: ArrowUpRight,
    iconColor: "var(--fin-blue-light)",
    iconBg: "#1E2A3A",
    name: "林美玲 轉出",
    category: "轉帳 · 09:20",
    amount: "-NT$ 2,300",
    amountColor: "var(--fin-blue-light)",
  },
];

const yesterdayTx: Transaction[] = [
  {
    icon: Coffee,
    iconColor: "var(--fin-orange)",
    iconBg: "#3A2E1E",
    name: "星巴克",
    badge: true,
    category: "餐飲 · 18:45",
    amount: "-NT$ 185",
    amountColor: "var(--fin-red)",
  },
  {
    icon: TrainFront,
    iconColor: "#C084FC",
    iconBg: "#2A1E3A",
    name: "台北捷運",
    badge: true,
    category: "交通 · 08:30",
    amount: "-NT$ 35",
    amountColor: "var(--fin-red)",
  },
];

function TransactionItem({ tx }: { tx: Transaction }) {
  return (
    <div className="flex items-center gap-3 w-full rounded-[14px] bg-[var(--fin-surface)] p-3 border border-[var(--fin-glass-border)]">
      <div
        className="w-9 h-9 rounded-[10px] flex items-center justify-center shrink-0"
        style={{ backgroundColor: tx.iconBg }}
      >
        <tx.icon
          className="w-[18px] h-[18px]"
          style={{ color: tx.iconColor }}
        />
      </div>
      <div className="flex flex-col gap-0.5 flex-1">
        <div className="flex items-center gap-1.5">
          <span className="text-[var(--fin-text-primary)] text-[13px] font-medium font-primary">
            {tx.name}
          </span>
          {tx.badge && (
            <span className="text-[var(--fin-blue)] text-[8px] font-semibold font-primary bg-[#2E7CF620] rounded-[4px] py-0.5 px-1.5">
              發票
            </span>
          )}
        </div>
        <span className="text-[var(--fin-text-muted)] text-[10px] font-primary">
          {tx.category}
        </span>
      </div>
      <span
        className="text-[13px] font-semibold font-primary"
        style={{ color: tx.amountColor }}
      >
        {tx.amount}
      </span>
    </div>
  );
}

export default function HistoryPage() {
  return (
    <div className="flex flex-col h-full w-full max-w-[393px] mx-auto bg-[var(--fin-bg)] overflow-hidden rounded-[40px]">
      <StatusBar />
      <Header title="交易紀錄" rightIcon={SlidersHorizontal} />

      {/* Summary Row */}
      <div className="flex gap-2.5 w-full px-5">
        <div className="flex flex-col gap-1 flex-1 rounded-[14px] bg-[#22C55E12] p-3.5 border border-[#22C55E30]">
          <span className="text-[var(--fin-green)] text-[11px] font-medium font-primary">
            本月收入
          </span>
          <span className="text-[var(--fin-green)] text-[16px] font-semibold font-primary">
            +NT$ 32,500
          </span>
        </div>
        <div className="flex flex-col gap-1 flex-1 rounded-[14px] bg-[#EF444412] p-3.5 border border-[#EF444430]">
          <span className="text-[var(--fin-red)] text-[11px] font-medium font-primary">
            本月支出
          </span>
          <span className="text-[var(--fin-red)] text-[16px] font-semibold font-primary">
            -NT$ 18,230
          </span>
        </div>
      </div>

      {/* Search Bar */}
      <div className="w-full py-3 px-5">
        <div className="flex items-center gap-2 w-full rounded-[12px] bg-[var(--fin-surface)] py-2.5 px-3.5 border border-[var(--fin-glass-border)]">
          <Search className="w-[18px] h-[18px] text-[var(--fin-text-muted)]" />
          <span className="text-[var(--fin-text-muted)] text-[13px] font-primary flex-1">
            搜尋交易紀錄...
          </span>
          <div className="flex items-center gap-1 rounded-[8px] bg-[var(--fin-elevated)] py-1 px-2">
            <Calendar className="w-3.5 h-3.5 text-[var(--fin-blue)]" />
            <span className="text-[var(--fin-blue)] text-[11px] font-medium font-primary">
              1月
            </span>
          </div>
        </div>
      </div>

      {/* Category Row */}
      <div className="flex gap-2 w-full py-1 px-5">
        {categories.map((cat) => (
          <div
            key={cat.label}
            className={`flex items-center rounded-[20px] py-1.5 px-3.5 ${
              cat.active
                ? "bg-[var(--fin-blue)]"
                : "bg-[var(--fin-surface)] border border-[var(--fin-glass-border)]"
            }`}
          >
            <span
              className={`text-[11px] font-primary ${
                cat.active
                  ? "text-white font-semibold"
                  : "text-[var(--fin-text-secondary)] font-medium"
              }`}
            >
              {cat.label}
            </span>
          </div>
        ))}
      </div>

      {/* Transaction List */}
      <div className="flex flex-col gap-3.5 flex-1 w-full py-1 px-5 overflow-auto">
        {/* Today */}
        <span className="text-[var(--fin-text-muted)] text-[11px] font-medium font-primary">
          今天 · 1月31日
        </span>
        {todayTx.map((tx, i) => (
          <TransactionItem key={i} tx={tx} />
        ))}

        {/* Yesterday */}
        <span className="text-[var(--fin-text-muted)] text-[11px] font-medium font-primary">
          昨天 · 1月30日
        </span>
        {yesterdayTx.map((tx, i) => (
          <TransactionItem key={`y${i}`} tx={tx} />
        ))}
      </div>

      <BottomNav activeIndex={4} />
    </div>
  );
}
