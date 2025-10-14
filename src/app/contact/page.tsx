import BlurFade from "@/components/magicui/blur-fade";
import { cn } from "@/lib/utils";
import { Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const BLUR_FADE_DELAY = 0.04;

const Page = () => {
  return (
    <main className="min-h-[100dvh] space-y-10 md:pt-0 pt-10">
      <div className="mx-auto w-full max-w-3xl space-y-2 flex flex-col">
        <Link
          className="border flex items-center"
          href={"https://github.com/faiirusss"}
        >
          <div className="bg-foreground/5 m-4 p-1.5">
            <Github size={22} className="" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-foreground/60">@faiirusss</span>
            <span>Github</span>
          </div>
        </Link>
        <Link
          className="border flex items-center"
          href={"https://www.linkedin.com/in/fairussalimi/"}
        >
          <div className="bg-foreground/5 m-4 p-1.5">
            <Linkedin size={22} className="" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-foreground/60">@fairussalimi</span>
            <span>Linkedin</span>
          </div>
        </Link>
        <section className="border flex items-center">
          <div className="bg-foreground/5 m-4 p-1.5">
            <Mail size={22} className="" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-foreground/60">
              fairussalimi863@gmail.com
            </span>
            <span>Email</span>
          </div>
        </section>
      </div>
    </main>
    // <div className="min-h-[100dvh]">
    //   <BlurFade delay={BLUR_FADE_DELAY * 3}>
    //     <h2 className="text-xl font-bold">Social Media</h2>
    //   </BlurFade>

    //   <div className="flex gap-4 flex-wrap justify-between items-center">
    //     <figure
    //       className={cn(
    //         "relative h-full w-56 cursor-pointer overflow-hidden rounded-xl border p-4",
    //         "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
    //         "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
    //       )}
    //     >
    //       <div className="flex flex-row items-center gap-2">
    //         <Image
    //           className="rounded-full"
    //           width="32"
    //           height="32"
    //           alt=""
    //           src="/bridgestone.jpg"
    //         />
    //         <div className="flex flex-col">
    //           <figcaption className="text-sm font-medium dark:text-white">
    //             @Fairus
    //           </figcaption>
    //           <p className="text-xs font-medium dark:text-white/40">
    //             Instagram
    //           </p>
    //         </div>
    //       </div>
    //     </figure>
    //     <figure
    //       className={cn(
    //         "relative h-full w-56 cursor-pointer overflow-hidden rounded-xl border p-4",
    //         "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
    //         "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
    //       )}
    //     >
    //       <div className="flex flex-row items-center gap-2">
    //         <Image
    //           className="rounded-full"
    //           width="32"
    //           height="32"
    //           alt=""
    //           src="/bridgestone.jpg"
    //         />
    //         <div className="flex flex-col">
    //           <figcaption className="text-sm font-medium dark:text-white">
    //             @Fairus
    //           </figcaption>
    //           <p className="text-xs font-medium dark:text-white/40">
    //             Instagram
    //           </p>
    //         </div>
    //       </div>
    //     </figure>
    //     <figure
    //       className={cn(
    //         "relative h-full w-56 cursor-pointer overflow-hidden rounded-xl border p-4",
    //         "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
    //         "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
    //       )}
    //     >
    //       <div className="flex flex-row items-center gap-2">
    //         <Image
    //           className="rounded-full"
    //           width="32"
    //           height="32"
    //           alt=""
    //           src="/bridgestone.jpg"
    //         />
    //         <div className="flex flex-col">
    //           <figcaption className="text-sm font-medium dark:text-white">
    //             @Fairus
    //           </figcaption>
    //           <p className="text-xs font-medium dark:text-white/40">
    //             Instagram
    //           </p>
    //         </div>
    //       </div>
    //     </figure>
    //   </div>
    // </div>
  );
};

export default Page;
