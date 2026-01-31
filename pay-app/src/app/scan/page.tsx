import StatusBar from "@/components/StatusBar";
import Header from "@/components/Header";
import BottomNav from "@/components/BottomNav";
import { Flashlight, Sun } from "lucide-react";

const cards = [
  {
    bank: "中國信託",
    num: "•••• 4521",
    active: true,
    bg: "linear-gradient(135deg, #1A3A6E 0%, #0F2244 100%)",
    borderColor: "var(--fin-blue)",
  },
  {
    bank: "玉山銀行",
    num: "•••• 7832",
    active: false,
    bg: "var(--fin-surface)",
    borderColor: "var(--fin-glass-border)",
  },
  {
    bank: "國泰世華",
    num: "•••• 1093",
    active: false,
    bg: "var(--fin-surface)",
    borderColor: "var(--fin-glass-border)",
  },
];

export default function ScanPage() {
  return (
    <div className="flex flex-col h-full w-full max-w-[393px] mx-auto bg-[var(--fin-bg)] overflow-hidden rounded-[40px]">
      <StatusBar />
      <Header title="掃描付款" rightIcon={Flashlight} rightIconSize={24} />

      {/* Scan Area */}
      <div className="flex flex-col items-center gap-4 w-full py-4 px-6">
        {/* Scanner Box */}
        <div className="relative w-[260px] h-[260px] rounded-[24px] bg-[#0D1520] border-2 border-[var(--fin-blue)]">
          {/* Scan line */}
          <div
            className="absolute w-[220px] h-0.5 left-5 top-[120px]"
            style={{
              background:
                "linear-gradient(90deg, #2E7CF600 0%, var(--fin-blue) 50%, #2E7CF600 100%)",
            }}
          />
          {/* Corners */}
          <div className="absolute -left-px -top-px w-9 h-9 rounded-tl-[12px] border-l-[3px] border-t-[3px] border-[var(--fin-blue-light)]" />
          <div className="absolute -right-px -top-px w-9 h-9 rounded-tr-[12px] border-r-[3px] border-t-[3px] border-[var(--fin-blue-light)]" />
          <div className="absolute -left-px -bottom-px w-9 h-9 rounded-bl-[12px] border-l-[3px] border-b-[3px] border-[var(--fin-blue-light)]" />
          <div className="absolute -right-px -bottom-px w-9 h-9 rounded-br-[12px] border-r-[3px] border-b-[3px] border-[var(--fin-blue-light)]" />
        </div>

        <span className="text-[var(--fin-text-secondary)] text-[13px] font-primary">
          將 QR Code 對準框內掃描
        </span>

        {/* Brightness Row */}
        <div className="flex items-center gap-2 rounded-[20px] bg-[var(--fin-elevated)] px-4 py-2 border border-[var(--fin-glass-border)]">
          <Sun className="w-4 h-4 text-[var(--fin-orange)]" />
          <span className="text-[var(--fin-text-secondary)] text-[12px] font-medium font-primary">
            自動補光已開啟
          </span>
        </div>
      </div>

      {/* Pay Section */}
      <div className="flex flex-col items-center gap-4 w-full px-6">
        {/* Divider */}
        <div className="flex items-center gap-3 w-full">
          <div className="flex-1 h-px bg-[var(--fin-border)]" />
          <span className="text-[var(--fin-text-muted)] text-[12px] font-primary">
            或出示付款碼
          </span>
          <div className="flex-1 h-px bg-[var(--fin-border)]" />
        </div>

        {/* Barcode Box */}
        <div className="flex flex-col items-center gap-3 w-full rounded-[16px] bg-[var(--fin-surface)] p-5 border border-[var(--fin-glass-border)]">
          <div className="w-[280px] h-[60px] rounded-[8px] bg-white flex items-center justify-center">
            {/* Barcode lines */}
            <div className="flex items-center gap-0.5 h-[44px]">
              {[3, 1, 4, 1, 2, 3, 1, 4, 2, 1, 3, 1, 4, 2, 1, 3].map(
                (w, i) => (
                  <div
                    key={i}
                    className="bg-black h-10"
                    style={{ width: `${w}px` }}
                  />
                )
              )}
            </div>
          </div>
          <span className="text-[var(--fin-text-secondary)] text-[12px] font-medium font-primary tracking-[1px]">
            9120 3847 5610 2839
          </span>
        </div>
      </div>

      {/* Card Switcher */}
      <div className="flex flex-col gap-3 flex-1 w-full py-2 px-6 overflow-auto">
        <span className="text-[var(--fin-text-primary)] text-[15px] font-semibold font-primary">
          付款卡片
        </span>
        <div className="flex gap-2.5 w-full">
          {cards.map((card) => (
            <div
              key={card.num}
              className="flex flex-col gap-2 flex-1 rounded-[14px] p-3.5"
              style={{
                background: card.bg,
                border: `${card.active ? "1.5px" : "1px"} solid ${card.borderColor}`,
              }}
            >
              <span
                className={`text-[11px] font-primary ${
                  card.active
                    ? "text-white font-semibold"
                    : "text-[var(--fin-text-secondary)] font-medium"
                }`}
              >
                {card.bank}
              </span>
              <span
                className={`text-[10px] font-primary ${
                  card.active
                    ? "text-[var(--fin-text-secondary)]"
                    : "text-[var(--fin-text-muted)]"
                }`}
              >
                {card.num}
              </span>
              {card.active && (
                <div className="flex justify-end flex-1">
                  <div className="w-2 h-2 rounded-full bg-[var(--fin-blue)]" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <BottomNav activeIndex={1} />
    </div>
  );
}
