import React, { useEffect, useRef, useState } from "react";

interface CarouselProps {
  images: string[];
  path?: string;
}

export const Carousel: React.FC<CarouselProps> = ({ images, path = "" }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef<HTMLUListElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const options = {
    root: carouselRef.current,
    rootMargin: "0px",
    threshold: 0.5,
  };

  const detectScroll = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const nextSlide = parseInt(
          entry.target.getAttribute("data-index") || "0",
          10
        );
        setCurrentSlide(nextSlide);
      }
    });
  };

  useEffect(() => {
    if (carouselRef.current) {
      const observer = new IntersectionObserver(detectScroll, options);
      const children = carouselRef.current.children;
      for (let i = 0; i < children.length; i++) {
        observer.observe(children[i]);
      }
      return () => observer.disconnect();
    }
  }, [carouselRef.current]);

  const changeSlide = (direction: "left" | "right") => {
    let nextSlide = direction === "left" ? currentSlide - 1 : currentSlide + 1;
    if (nextSlide < 0) nextSlide = images.length - 1;
    else if (nextSlide >= images.length) nextSlide = 0;
    const containerWidth = containerRef.current?.clientWidth || 0;
    carouselRef.current?.scroll(nextSlide * containerWidth, 0);
  };

  return (
    <div
      className="relative flex justify-center items-center w-full bg-black overflow-hidden"
      ref={containerRef}
    >
      <ul
        className="carousel-viewport flex gap-0 h-fit scroll-smooth snap-x snap-mandatory overflow-x-scroll overflow-y-hidden transition-all duration-200"
        ref={carouselRef}
      >
        {images.map((image, index) => (
          <li
            className="flex-shrink-0 flex-grow-0 snap-start snap-always gap-0 w-full"
            key={image}
            data-index={index}
          >
            <img
              className="w-full h-full"
              src={`/projects/${path}/${image}`}
              alt=""
              loading="lazy"
            />
          </li>
        ))}
      </ul>
      {currentSlide !== 0 && (
        <button
          className="absolute hidden sm:flex justify-center items-center h-[26px] w-[26px] border-0 rounded-full text-light-texto-secondary bg-[#fffb] left-2 pr-[2px] hover:bg-[#fffe] transition-colors"
          onClick={() => changeSlide("left")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2.5"
            stroke="currentColor"
            height="16"
            width="16"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </button>
      )}
      {currentSlide !== images.length - 1 && (
        <button
          className="absolute hidden sm:flex justify-center items-center h-[26px] w-[26px] border-0 rounded-full text-light-texto-secondary bg-[#fffb] right-2 hover:bg-[#fffe] transition-colors"
          onClick={() => changeSlide("right")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2.5"
            stroke="currentColor"
            height="16"
            width="16"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      )}
      <span className="absolute right-2 bottom-2 py-1 px-2 bg-[#fffb] rounded-md text-light-texto-secondary text-[0.75rem] font-bold">
        {currentSlide + 1} / {images.length}
      </span>
    </div>
  );
};
