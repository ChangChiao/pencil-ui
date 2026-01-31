import StatusBar from "@/components/StatusBar";
import Header from "@/components/Header";
import BottomNav from "@/components/BottomNav";
import { Settings, Landmark, ChevronRight, Plus } from "lucide-react";

const banks = [
  {
    name: "中國信託",
    num: "(822) •••• 4521",
    iconColor: "var(--fin-blue-light)",
    iconBg: "#1A3A6E",
  },
  {
    name: "玉山銀行",
    num: "(808) •••• 7832",
    iconColor: "var(--fin-green)",
    iconBg: "#1E3A2F",
  },
];

const legends = [
  { color: "var(--fin-blue)", label: "銀行存款  50%" },
  { color: "var(--fin-green)", label: "信用額度  33%" },
  { color: "var(--fin-orange)", label: "電子錢包  17%" },
];

export default function WalletPage() {
  return (
    <div className="flex flex-col h-full w-full max-w-[393px] mx-auto bg-[var(--fin-bg)] overflow-hidden rounded-[40px]">
      <StatusBar />
      <Header title="錢包管理" rightIcon={Settings} />

      {/* Credit Card */}
      <div className="w-full px-5">
        <div
          className="w-full h-[180px] rounded-[20px] p-6 flex flex-col justify-between border border-[#ffffff20]"
          style={{
            background: "linear-gradient(135deg, #1A3A6E 0%, #0D1F3D 100%)",
            boxShadow: "0 12px 30px #2E7CF630",
          }}
        >
          <div className="flex items-center justify-between w-full">
            <span className="text-white text-[14px] font-semibold font-primary">
              中國信託 Visa
            </span>
            <div
              className="w-9 h-[26px] rounded-[6px]"
              style={{
                background:
                  "linear-gradient(135deg, #FFD700 0%, #DAA520 100%)",
              }}
            />
          </div>
          <span className="text-[#FFFFFFCC] text-[16px] font-medium font-primary tracking-[2px]">
            4521  ••••  ••••  7890
          </span>
          <div className="flex items-center justify-between w-full">
            <span className="text-[var(--fin-text-secondary)] text-[11px] font-medium font-primary">
              CHEN MING-HAN
            </span>
            <span className="text-[var(--fin-text-secondary)] text-[11px] font-medium font-primary">
              12/27
            </span>
          </div>
        </div>
      </div>

      {/* Pie Chart Section */}
      <div className="flex flex-col gap-3 w-full py-3 px-5">
        <span className="text-[var(--fin-text-primary)] text-[15px] font-semibold font-primary">
          資產分佈
        </span>
        <div className="flex items-center gap-4 w-full">
          {/* Pie Chart */}
          <div className="relative w-[110px] h-[110px] shrink-0">
            <svg
              viewBox="0 0 110 110"
              className="w-full h-full"
              style={{ transform: "rotate(-90deg)" }}
            >
              {/* Blue ring (full circle as base) */}
              <circle
                cx="55"
                cy="55"
                r="48"
                fill="none"
                stroke="var(--fin-blue)"
                strokeWidth="14"
              />
              {/* Green arc - 120deg = 33% */}
              <circle
                cx="55"
                cy="55"
                r="48"
                fill="none"
                stroke="var(--fin-green)"
                strokeWidth="14"
                strokeDasharray={`${(120 / 360) * 2 * Math.PI * 48} ${2 * Math.PI * 48}`}
              />
              {/* Orange arc - 60deg = 17% starting at 120deg */}
              <circle
                cx="55"
                cy="55"
                r="48"
                fill="none"
                stroke="var(--fin-orange)"
                strokeWidth="14"
                strokeDasharray={`${(60 / 360) * 2 * Math.PI * 48} ${2 * Math.PI * 48}`}
                strokeDashoffset={`${-(120 / 360) * 2 * Math.PI * 48}`}
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[70px] h-[70px] rounded-full bg-[var(--fin-bg)] flex items-center justify-center">
                <span className="text-white text-[14px] font-semibold font-primary">
                  100%
                </span>
              </div>
            </div>
          </div>

          {/* Legend */}
          <div className="flex flex-col gap-2.5 flex-1">
            {legends.map((l) => (
              <div key={l.label} className="flex items-center gap-2">
                <div
                  className="w-2.5 h-2.5 rounded-full shrink-0"
                  style={{ backgroundColor: l.color }}
                />
                <span className="text-[var(--fin-text-secondary)] text-[12px] font-primary">
                  {l.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bank Accounts */}
      <div className="flex flex-col gap-2.5 w-full py-1 px-5">
        <span className="text-[var(--fin-text-primary)] text-[15px] font-semibold font-primary">
          綁定帳戶
        </span>
        {banks.map((bank) => (
          <div
            key={bank.num}
            className="flex items-center gap-3 w-full rounded-[14px] bg-[var(--fin-surface)] p-3.5 border border-[var(--fin-glass-border)]"
          >
            <div
              className="w-9 h-9 rounded-[10px] flex items-center justify-center shrink-0"
              style={{ backgroundColor: bank.iconBg }}
            >
              <Landmark
                className="w-[18px] h-[18px]"
                style={{ color: bank.iconColor }}
              />
            </div>
            <div className="flex flex-col gap-0.5 flex-1">
              <span className="text-[var(--fin-text-primary)] text-[13px] font-medium font-primary">
                {bank.name}
              </span>
              <span className="text-[var(--fin-text-muted)] text-[11px] font-primary">
                {bank.num}
              </span>
            </div>
            <ChevronRight className="w-[18px] h-[18px] text-[var(--fin-text-muted)]" />
          </div>
        ))}
        <div className="flex items-center justify-center gap-2 w-full rounded-[14px] p-3.5 border border-[var(--fin-border)]">
          <Plus className="w-[18px] h-[18px] text-[var(--fin-blue)]" />
          <span className="text-[var(--fin-blue)] text-[13px] font-medium font-primary">
            新增銀行卡
          </span>
        </div>
      </div>

      {/* Reload Section */}
      <div className="flex flex-col gap-2.5 flex-1 w-full py-1 px-5">
        <div className="flex items-center justify-between w-full rounded-[14px] bg-[var(--fin-surface)] p-4 border border-[var(--fin-glass-border)]">
          <div className="flex flex-col gap-1">
            <span className="text-[var(--fin-text-primary)] text-[14px] font-medium font-primary">
              自動儲值
            </span>
            <span className="text-[var(--fin-text-muted)] text-[11px] font-primary">
              餘額低於 NT$500 時自動補值
            </span>
          </div>
          {/* Toggle */}
          <div className="w-[44px] h-6 rounded-[12px] bg-[var(--fin-blue)] flex items-center justify-end p-0.5">
            <div
              className="w-5 h-5 rounded-full bg-white"
              style={{ boxShadow: "0 2px 4px #00000033" }}
            />
          </div>
        </div>
        <div className="flex items-center justify-between w-full rounded-[14px] bg-[var(--fin-surface)] p-4 border border-[var(--fin-glass-border)]">
          <span className="text-[var(--fin-text-secondary)] text-[13px] font-primary">
            儲值金額
          </span>
          <div className="flex items-center gap-1">
            <span className="text-[var(--fin-text-primary)] text-[13px] font-medium font-primary">
              NT$ 1,000
            </span>
            <ChevronRight className="w-4 h-4 text-[var(--fin-text-muted)]" />
          </div>
        </div>
      </div>

      <BottomNav activeIndex={2} />
    </div>
  );
}
