"use client";
import { ReactNode, useState } from "react";

interface CarouselProps {
  children: ReactNode[];
}

const Carousel: React.FC<CarouselProps> = ({ children }) => {
  const [curr, setCurr] = useState(0);

  const selectImage = (i: number) => {
    setCurr(i);
  };

  const next = () =>
    setCurr((curr) => (curr === children?.length - 1 ? 0 : curr + 1));

  return (
    <>
      <div className="overflow-hidden relative rounded-xl">
        <div
          className="flex transition-transform ease-out duration-300 cursor-pointer"
          style={{ transform: `translateX(-${curr * 100}%)` }}
          onClick={next}
        >
          {children}
        </div>
      </div>
      <div className="mt-2 px-2">
        <div className="flex items-center gap-2">
          {children.map((_, i) => (
            <button
              key={i}
              onClick={() => selectImage(i)}
              className={`h-[2px] w-full transition-all ${
                curr === i ? "bg-foreground" : "bg-foreground/30"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Carousel;
