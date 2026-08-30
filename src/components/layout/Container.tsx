import { cn } from "@/lib/utils";

type ContainerWidth = "site" | "wide" | "content" | "reading";

interface ContainerProps {
  children: React.ReactNode;
  width?: ContainerWidth;
  className?: string;
  as?: React.ElementType;
}

const widthStyles: Record<ContainerWidth, string> = {
  site:    "max-w-[1440px]",
  wide:    "max-w-[1520px]",
  content: "max-w-[1080px]",
  reading: "max-w-[840px]",
};

export function Container({
  children,
  width = "site",
  className,
  as: Tag = "div",
}: ContainerProps) {
  return (
    <Tag
      className={cn(
        "mx-auto w-full px-5 sm:px-8 lg:px-12",
        widthStyles[width],
        className
      )}
    >
      {children}
    </Tag>
  );
}
