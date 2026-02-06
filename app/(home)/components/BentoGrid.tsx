"use client";

import { Globe } from "@/components/ui/globe";
import {
  IconBrandBootstrap,
  IconBrandWordpress,
  IconBrandNextjs,
  IconBrandReact,
  IconCornerRightDown,
} from "@tabler/icons-react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";

const BentoGrid = () => {
  return (
    <section className="mx-auto flex max-w-6xl flex-col gap-10 px-4 pb-20 pt-10 font-sans text-foreground">
      <div className="text-center">
        <h2 className="font-semibold">
          Passionate developer crafting performant, user-friendly web
          experiences with modern Typescript UI/UX and scalable architecture.
        </h2>
      </div>

      <div className="grid auto-rows-[150px] gap-4 rounded-[2.5rem] bg-slate-50 p-4 text-base shadow-[0_30px_60px_rgba(15,23,42,0.10)] md:auto-rows-[190px] md:p-6 lg:grid-cols-4 dark:bg-slate-900/30">
        {/* 99% badge */}
        <div className="flex items-center justify-center rounded-3xl border border-slate-200 bg-white p-4 font-sans lg:col-span-1 dark:border-slate-700 dark:bg-slate-800/50">
          <div className="relative flex h-16 w-full flex-col items-center justify-center md:h-full">
            <svg
              className="absolute inset-0 size-full text-zinc-200 dark:text-zinc-700"
              viewBox="0 0 254 104"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden
            >
              <path
                d="M112.891 97.7022C140.366 97.0802 171.004 94.6715 201.087 87.5116C210.43 85.2881 219.615 82.6412 228.284 78.2473C232.198 76.3179 235.905 73.9942 239.348 71.3124C241.85 69.2557 243.954 66.7571 245.555 63.9408C249.34 57.3235 248.281 50.5341 242.498 45.6109C239.033 42.7237 235.228 40.2703 231.169 38.3054C219.443 32.7209 207.141 28.4382 194.482 25.534C184.013 23.1927 173.358 21.7755 162.64 21.2989C161.376 21.3512 160.113 21.181 158.908 20.796C158.034 20.399 156.857 19.1682 156.962 18.4535C157.115 17.8927 157.381 17.3689 157.743 16.9139C158.104 16.4588 158.555 16.0821 159.067 15.8066C160.14 15.4683 161.274 15.3733 162.389 15.5286C179.805 15.3566 196.626 18.8373 212.998 24.462C220.978 27.2494 228.798 30.4747 236.423 34.1232C240.476 36.1159 244.202 38.7131 247.474 41.8258C254.342 48.2578 255.745 56.9397 251.841 65.4892C249.793 69.8582 246.736 73.6777 242.921 76.6327C236.224 82.0192 228.522 85.4602 220.502 88.2924C205.017 93.7847 188.964 96.9081 172.738 99.2109C153.442 101.949 133.993 103.478 114.506 103.79C91.1468 104.161 67.9334 102.97 45.1169 97.5831C36.0094 95.5616 27.2626 92.1655 19.1771 87.5116C13.839 84.5746 9.1557 80.5802 5.41318 75.7725C-0.54238 67.7259 -1.13794 59.1763 3.25594 50.2827C5.82447 45.3918 9.29572 41.0315 13.4863 37.4319C24.2989 27.5721 37.0438 20.9681 50.5431 15.7272C68.1451 8.8849 86.4883 5.1395 105.175 2.83669C129.045 0.0992292 153.151 0.134761 177.013 2.94256C197.672 5.23215 218.04 9.01724 237.588 16.3889C240.089 17.3418 242.498 18.5197 244.933 19.6446C246.627 20.4387 247.725 21.6695 246.997 23.615C246.455 25.1105 244.814 25.5605 242.63 24.5811C230.322 18.9961 217.233 16.1904 204.117 13.4376C188.761 10.3438 173.2 8.36665 157.558 7.52174C129.914 5.70776 102.154 8.06792 75.2124 14.5228C60.6177 17.8788 46.5758 23.2977 33.5102 30.6161C26.6595 34.3329 20.4123 39.0673 14.9818 44.658C12.9433 46.8071 11.1336 49.1622 9.58207 51.6855C4.87056 59.5336 5.61172 67.2494 11.9246 73.7608C15.2064 77.0494 18.8775 79.925 22.8564 82.3236C31.6176 87.7101 41.3848 90.5291 51.3902 92.5804C70.6068 96.5773 90.0219 97.7419 112.891 97.7022Z"
                fill="currentColor"
              />
            </svg>
            <span className="text-3xl font-bold text-foreground">99%</span>
          </div>
        </div>

        {/* Emoji card */}
        <div className="flex items-center justify-center rounded-3xl border border-slate-200 bg-white text-4xl lg:col-span-1 dark:border-slate-700 dark:bg-slate-800/50" />

        {/* Music card */}
        <div className="relative flex overflow-hidden rounded-3xl border border-slate-200 bg-white pb-12 lg:col-span-2 lg:row-span-2 dark:border-slate-700 dark:bg-slate-800/50">
          <iframe
            allow="autoplay *; encrypted-media *;"
            className="h-full w-full"
            sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
            src="https://embed.music.apple.com/vn/playlist/coding/pl.30c9e2cf347442a2973a055ff877c0e2"
            title="Coding playlist"
          />
          <div
            className="absolute bottom-0 left-0 right-0 flex items-end justify-center rounded-b-3xl bg-linear-to-t from-white via-white/80 to-transparent p-4 dark:from-slate-800/95 dark:via-slate-800/80"
            aria-label="Music keeps me in flow while coding"
          >
            <p className="font-sans text-sm text-muted-foreground">
              Music keeps me in flow while coding.
            </p>
          </div>
        </div>

        {/* About */}
        <div className="flex flex-col justify-center rounded-3xl border border-slate-200 bg-white p-4 lg:col-span-1 lg:row-span-2 dark:border-slate-700 dark:bg-slate-800/50">
          <p className="font-sans text-base leading-relaxed text-foreground">
            As a young and passionate developer, I am eager to learn and explore
            new knowledge and technologies to continuously expand my skill set.
            Challenge me, and I&apos;ll turn it into an opportunity to grow and
            deliver more.
          </p>
        </div>

        {/* Frontend Developer badge */}
        <div className="flex items-center justify-center rounded-3xl border border-slate-200 bg-white text-center font-sans lg:col-span-1 dark:border-slate-700 dark:bg-slate-800/50">
          <p className="text-left text-xl font-semibold text-foreground md:text-2xl">
            Frontend <br />
            Developer
          </p>
        </div>

        {/* Tech stack */}
        <div className="flex flex-col gap-4 rounded-3xl border border-slate-200 bg-white p-4 lg:col-span-2 dark:border-slate-700 dark:bg-slate-800/50">
          <p className="flex items-end gap-2 font-sans text-xl font-semibold text-foreground md:text-2xl">
            Building modern web experiences with
            <IconCornerRightDown className="size-6 shrink-0" aria-hidden />
          </p>

          <Splide
            options={{
              type: "loop",
              drag: "free",
              gap: "16px",
              arrows: false,
              pagination: false,
              perPage: 4,
              autoScroll: {
                speed: 0.2,
                autoStart: true,
              },
            }}
            extensions={{ AutoScroll }}
          >
            {[
              <IconBrandNextjs stroke={1.5} className="w-6 h-6" />,
              <IconBrandReact stroke={1.5} className="w-6 h-6" />,
              <IconBrandWordpress stroke={1.5} className="w-6 h-6" />,
              <IconBrandBootstrap stroke={1.5} className="w-6 h-6" />,
            ].map((tech, index) => (
              <SplideSlide
                key={index}
                className={`aspect-square flex w-full items-center justify-center rounded-lg border p-6 ${index % 2 === 0 ? "bg-muted/50" : "border-dashed border-slate-200 dark:border-slate-600"}`}
              >
                {tech}
              </SplideSlide>
            ))}
          </Splide>
        </div>

        {/* Globe card */}
        <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-100/80 bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))] lg:col-span-1 dark:border-slate-700 dark:bg-slate-800/50">
          <Globe />
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;
