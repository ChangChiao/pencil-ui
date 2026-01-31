import { Signal, Wifi, BatteryFull } from "lucide-react";

export default function StatusBar() {
  return (
    <div className="flex items-center justify-between w-full pt-[14px] px-6 h-[54px]">
      <span className="text-white text-[15px] font-semibold font-primary">
        9:41
      </span>
      <div className="flex items-center gap-1.5">
        <Signal className="w-4 h-4 text-white" />
        <Wifi className="w-4 h-4 text-white" />
        <BatteryFull className="w-[22px] h-4 text-white" />
      </div>
    </div>
  );
}
