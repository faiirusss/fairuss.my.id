import BlurFade from "@/components/magicui/blur-fade";
import { cn } from "@/lib/utils";
import Image from "next/image";

const BLUR_FADE_DELAY = 0.04;

const Page = () => {
  return (
    <div className="min-h-[100dvh]">
      <BlurFade delay={BLUR_FADE_DELAY * 3}>
        <h2 className="text-xl font-bold">Social Media</h2>
      </BlurFade>

      <div className="flex gap-4 flex-wrap justify-between items-center">
        <figure
          className={cn(
            "relative h-full w-56 cursor-pointer overflow-hidden rounded-xl border p-4",
            "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
            "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
          )}
        >
          <div className="flex flex-row items-center gap-2">
            <Image
              className="rounded-full"
              width="32"
              height="32"
              alt=""
              src="/bridgestone.jpg"
            />
            <div className="flex flex-col">
              <figcaption className="text-sm font-medium dark:text-white">
                @Fairus
              </figcaption>
              <p className="text-xs font-medium dark:text-white/40">
                Instagram
              </p>
            </div>
          </div>
        </figure>
        <figure
          className={cn(
            "relative h-full w-56 cursor-pointer overflow-hidden rounded-xl border p-4",
            "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
            "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
          )}
        >
          <div className="flex flex-row items-center gap-2">
            <Image
              className="rounded-full"
              width="32"
              height="32"
              alt=""
              src="/bridgestone.jpg"
            />
            <div className="flex flex-col">
              <figcaption className="text-sm font-medium dark:text-white">
                @Fairus
              </figcaption>
              <p className="text-xs font-medium dark:text-white/40">
                Instagram
              </p>
            </div>
          </div>
        </figure>
        <figure
          className={cn(
            "relative h-full w-56 cursor-pointer overflow-hidden rounded-xl border p-4",
            "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
            "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
          )}
        >
          <div className="flex flex-row items-center gap-2">
            <Image
              className="rounded-full"
              width="32"
              height="32"
              alt=""
              src="/bridgestone.jpg"
            />
            <div className="flex flex-col">
              <figcaption className="text-sm font-medium dark:text-white">
                @Fairus
              </figcaption>
              <p className="text-xs font-medium dark:text-white/40">
                Instagram
              </p>
            </div>
          </div>
        </figure>
      </div>
    </div>
  );
};

export default Page;
