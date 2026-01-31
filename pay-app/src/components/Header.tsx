import { ArrowLeft, type LucideIcon } from "lucide-react";

interface HeaderProps {
  title: string;
  rightIcon: LucideIcon;
  rightIconSize?: number;
}

export default function Header({ title, rightIcon: RightIcon, rightIconSize = 22 }: HeaderProps) {
  return (
    <div className="flex items-center justify-between w-full py-1 px-6 pb-3">
      <ArrowLeft className="w-6 h-6 text-white" />
      <span className="text-white text-[17px] font-semibold font-primary">
        {title}
      </span>
      <RightIcon
        className="text-[var(--fin-text-secondary)]"
        style={{ width: rightIconSize, height: rightIconSize }}
      />
    </div>
  );
}
