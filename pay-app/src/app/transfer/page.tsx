import StatusBar from "@/components/StatusBar";
import Header from "@/components/Header";
import BottomNav from "@/components/BottomNav";
import {
  Clock,
  Smartphone,
  CheckCircle,
  CircleCheck,
  X,
  MessageSquare,
  Send,
  Zap,
} from "lucide-react";

const receiptRows = [
  { label: "收款人", value: "王小明", valueBold: true },
  { label: "轉帳金額", value: "NT$ 5,000", valueBold: true },
  { label: "手續費", value: "免手續費", green: true },
  { label: "備註", value: "午餐費用" },
];

export default function TransferPage() {
  return (
    <div className="flex flex-col h-full w-full max-w-[393px] mx-auto bg-[var(--fin-bg)] overflow-hidden rounded-[40px]">
      <StatusBar />
      <Header title="轉帳" rightIcon={Clock} />

      {/* Tab Row */}
      <div className="flex w-full px-5">
        <div className="flex flex-col items-center flex-1 py-2.5 border-b-2 border-[var(--fin-blue)]">
          <span className="text-[var(--fin-blue)] text-[13px] font-semibold font-primary">
            手機號碼
          </span>
        </div>
        <div className="flex flex-col items-center flex-1 py-2.5 border-b border-[var(--fin-border)]">
          <span className="text-[var(--fin-text-muted)] text-[13px] font-primary">
            銀行帳號
          </span>
        </div>
      </div>

      {/* Form Section */}
      <div className="flex flex-col gap-4 w-full py-4 px-5">
        {/* Phone Field */}
        <div className="flex flex-col gap-1.5 w-full">
          <span className="text-[var(--fin-text-secondary)] text-[12px] font-medium font-primary">
            收款人手機號碼
          </span>
          <div className="flex items-center gap-2 w-full rounded-[12px] bg-[var(--fin-surface)] py-3 px-3.5 border border-[var(--fin-glass-border)]">
            <Smartphone className="w-[18px] h-[18px] text-[var(--fin-text-muted)]" />
            <span className="text-[var(--fin-text-primary)] text-[14px] font-primary">
              0912-345-678
            </span>
            <CheckCircle className="w-[18px] h-[18px] text-[var(--fin-green)] ml-auto" />
          </div>
        </div>

        {/* Recipient Card */}
        <div className="flex items-center gap-3 w-full rounded-[14px] bg-[#1A2744] p-3.5 border border-[var(--fin-blue-glow)]">
          <div className="w-10 h-10 rounded-full bg-[#1E3A5F] flex items-center justify-center shrink-0">
            <span className="text-[#5B9BFF] text-[16px] font-semibold font-primary">
              王
            </span>
          </div>
          <div className="flex flex-col gap-0.5 flex-1">
            <span className="text-[var(--fin-text-primary)] text-[14px] font-medium font-primary">
              王小明
            </span>
            <span className="text-[var(--fin-text-muted)] text-[11px] font-primary">
              中國信託 (822)
            </span>
          </div>
          <CircleCheck className="w-5 h-5 text-[var(--fin-green)]" />
        </div>

        {/* Amount Field */}
        <div className="flex flex-col gap-1.5 w-full">
          <span className="text-[var(--fin-text-secondary)] text-[12px] font-medium font-primary">
            轉帳金額
          </span>
          <div className="flex items-center justify-between w-full rounded-[12px] bg-[var(--fin-surface)] py-3 px-3.5 border border-[var(--fin-glass-border)]">
            <span className="text-[var(--fin-text-muted)] text-[14px] font-medium font-primary">
              NT$
            </span>
            <span className="text-[var(--fin-text-primary)] text-[24px] font-semibold font-primary">
              5,000
            </span>
            <X className="w-[18px] h-[18px] text-[var(--fin-text-muted)]" />
          </div>
        </div>

        {/* Memo Field */}
        <div className="flex flex-col gap-1.5 w-full">
          <span className="text-[var(--fin-text-secondary)] text-[12px] font-medium font-primary">
            轉帳備註（選填）
          </span>
          <div className="flex items-center gap-2 w-full rounded-[12px] bg-[var(--fin-surface)] py-3 px-3.5 border border-[var(--fin-glass-border)]">
            <MessageSquare className="w-[18px] h-[18px] text-[var(--fin-text-muted)]" />
            <span className="text-[var(--fin-text-primary)] text-[14px] font-primary">
              午餐費用
            </span>
          </div>
        </div>
      </div>

      {/* Receipt Preview */}
      <div className="flex flex-col gap-3 flex-1 w-full px-5">
        <div className="flex flex-col gap-2.5 w-full rounded-[14px] bg-[var(--fin-surface)] p-4 border border-[var(--fin-glass-border)]">
          <span className="text-[var(--fin-text-primary)] text-[13px] font-semibold font-primary">
            轉帳摘要
          </span>
          <div className="w-full h-px bg-[var(--fin-border)]" />
          {receiptRows.map((row) => (
            <div
              key={row.label}
              className="flex items-center justify-between w-full"
            >
              <span className="text-[var(--fin-text-muted)] text-[12px] font-primary">
                {row.label}
              </span>
              <span
                className={`text-[12px] font-primary ${
                  row.green
                    ? "text-[var(--fin-green)] font-medium"
                    : row.valueBold
                      ? "text-[var(--fin-text-primary)] font-medium"
                      : "text-[var(--fin-text-primary)]"
                }`}
              >
                {row.value}
              </span>
            </div>
          ))}
        </div>

        {/* Instant Badge */}
        <div className="flex items-center gap-1.5 self-start rounded-[20px] bg-[#22C55E18] py-1.5 px-3">
          <Zap className="w-3.5 h-3.5 text-[var(--fin-green)]" />
          <span className="text-[var(--fin-green)] text-[11px] font-medium font-primary">
            即時轉帳 · 預計即時到帳
          </span>
        </div>
      </div>

      {/* Submit Button */}
      <div className="w-full px-5 pb-0">
        <div
          className="flex items-center justify-center gap-2 w-full h-[50px] rounded-[14px]"
          style={{
            background:
              "linear-gradient(90deg, var(--fin-blue) 0%, var(--fin-blue-light) 100%)",
            boxShadow: "0 6px 20px #2E7CF640",
          }}
        >
          <Send className="w-[18px] h-[18px] text-white" />
          <span className="text-white text-[16px] font-semibold font-primary">
            確認轉帳
          </span>
        </div>
      </div>

      <BottomNav activeIndex={3} />
    </div>
  );
}
