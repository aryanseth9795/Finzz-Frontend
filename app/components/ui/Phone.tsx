import Image from "next/image";
import { SCREENS, type ScreenId } from "@/app/lib/content";

export function Phone({
  screen,
  priority = false,
  sizes,
  className = "",
}: {
  screen: ScreenId;
  priority?: boolean;
  sizes: string;
  className?: string;
}) {
  const { src, alt } = SCREENS[screen];
  return (
    <div
      className={`overflow-hidden rounded-[9%/4%] bg-night shadow-[0_24px_50px_rgba(30,41,59,0.25)] ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        width={716}
        height={1590}
        sizes={sizes}
        priority={priority}
        className="block h-auto w-full"
      />
    </div>
  );
}
