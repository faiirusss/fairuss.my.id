import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Carousel from "../components/Carousel";

const slides = ["/berbanjar.webp", "/berbanjar2.webp", "/berbanjar3.webp"];

const HomePage = () => {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <section id="hero">
        <div className="mx-auto w-full max-w-4xl">
          <div className="flex flex-col gap-4">
            <h1 className="text-5xl font-bold">Frontend Web Developer</h1>
            <p className="text-xl text-foreground/50">
              I&apos;m fairus, software engineer student from Bandung,
              Indonesia.
            </p>
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
          </div>
        </div>
      </section>

      <section id="projects" className="mt-10">
        <div className="mx-auto w-full max-w-4xl">
          <Carousel>
            {slides.map((item) => (
              <Image
                key={item}
                src={item}
                alt={item}
                width={800}
                height={600}
                className="rounded-xl"
                priority
              />
            ))}
          </Carousel>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
