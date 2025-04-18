import BlurFade from "@/components/magicui/blur-fade";
import { DotPattern } from "@/components/magicui/dot-pattern";
import { TextAnimate } from "@/components/magicui/text-animate";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  ArrowRight,
  ArrowRightIcon,
  SquareArrowOutUpRight
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Carousel from "../components/Carousel";

const slides = ["/berbanjar.webp", "/berbanjar2.webp", "/berbanjar3.webp"];
const slides2 = ["/merakit1.png", "/merakit2.png"];

const BLUR_FADE_DELAY = 0.04;

const HomePage = () => {
  return (
    <main className="flex flex-col min-h-[100dvh]">
      <div className="pt-10">
        <DotPattern
          className={cn(
            "pt-24 hidden md:block [mask-image:radial-gradient(400px_circle_at_center,white,transparent)]"
          )}
        />
        <section id="hero">
          <div className="flex flex-col gap-7">
            <TextAnimate
              duration={0.5}
              animation="blurIn"
              as={"h1"}
              by="character"
              once
              className="font-black text-3xl xs:text-4xl sm:text-5xl md:text-6xl"
            >
              Software engineer
            </TextAnimate>
            <div className="max-w-2xl">
            <TextAnimate
              delay={BLUR_FADE_DELAY * 6}
              duration={0.7}
              animation="blurIn"
              by="word"
              once
              className="text-left sm:text-xl md:text-2xl text-foreground/50 break-words hyphens-none"
            >
              I&apos;m fairus, software engineer student from bandung that&apos;s passionate about code with purpose and curiosity.
            </TextAnimate>
            </div>

            <BlurFade delay={BLUR_FADE_DELAY * 16} inView>
              <Link href={"/about"}>
                <Button variant={"about"} size={"about"} className="group pr-1">
                  <Avatar className="w-7 h-7 border">
                    <AvatarImage src="profile2.webp" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <span className="px-2">About Me</span>
                  <span className="relative w-0 overflow-hidden transition-all duration-300 ease-out group-hover:w-5 group-hover:ml-0.5">
                    <span
                      className="absolute inset-y-0 left-0 w-0 h-[2px] bg-current my-auto opacity-0 
          transition-all duration-200 ease-in-out
          group-hover:w-3 group-hover:opacity-60 group-hover:delay-0
          group-hover:ease-out delay-200"
                    ></span>

                    <ArrowRightIcon
                      className="opacity-0 
            transition-all duration-200 ease-in-out
            group-hover:opacity-60 group-hover:delay-200
            delay-0"
                      size={16}
                      aria-hidden="true"
                    />
                  </span>
                </Button>
              </Link>
            </BlurFade>
          </div>
        </section>
        <section id="projects" className="mt-14 lg:mt-28 mx-6 lg:mx-9">
          <Carousel>
            {slides.map((item) => (
              <Image
                key={item}
                src={item}
                alt={item}
                width={1200}
                height={900}
                className="rounded-xl "
                priority
              />
            ))}
          </Carousel>
          <div className="md:grid grid-cols-5 gap-4 pt-8 mb-36 space-y-4">
            <div className="">
              <h1 className="font-black text-2xl">Berbanjar</h1>
            </div>
            <div className="col-span-4 col-start-3 gap-3 flex-col flex items-start">
            <Avatar className="w-9 h-9">
                <AvatarImage src="profile2.webp" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <p className="text-sm sm:text-base font-medium text-foreground/50 text-left">
                Develop an education platform for students in Indonesia using
                Laravel framework and Tailwind CSS.
              </p>
              <div className="flex gap-6">
                <Button
                  variant={"link"}
                  size={"link"}
                  className="text-[#15d98bfd]"
                >
                  Read more
                  <ArrowRight className="ml-2" size={14} />
                </Button>
                <Button
                  variant={"link"}
                  size={"link"}
                  className="text-[#15d98bfd]"
                >
                  View project
                  <SquareArrowOutUpRight className="ml-2" size={14} />
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section id="projects" className="mx-9">
          <Carousel>
            {slides2.map((item) => (
              <Image
                key={item}
                src={item}
                alt={item}
                width={1200}
                height={900}
                className="rounded-xl"
                priority
              />
            ))}
          </Carousel>
          <div className="md:grid grid-cols-5 gap-4 pt-8 mb-36 space-y-4">
            <div className="">
              <h1 className="font-black text-2xl">Merakit</h1>
            </div>
            <div className="col-span-4 col-start-3 gap-3 flex-col flex items-start">
              <Avatar className="w-9 h-9">
                <AvatarImage src="profile2.webp" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <p className="text-sm sm:text-base font-medium text-foreground/50 text-left">
                Develop cashier system using Laravel framework and Tailwind CSS.
              </p>
              <div className="flex gap-6">
                <Button
                  variant={"link"}
                  size={"link"}
                  className="text-[#15d98bfd]"
                >
                  Read more
                  <ArrowRight className="ml-2" size={14} />
                </Button>
                <Button
                  variant={"link"}
                  size={"link"}
                  className="text-[#15d98bfd]"
                >
                  View project
                  <SquareArrowOutUpRight className="ml-2" size={14} />
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default HomePage;
