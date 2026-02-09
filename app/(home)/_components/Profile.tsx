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
import Section from "@/components/layouts/Section";
import Container from "@/components/layouts/Container";

const BentoGrid = () => {
  return (
    <Section>
      <Container>
        <div className="text-center">
          <h2 className="font-semibold">
            Passionate developer crafting performant, user-friendly web
            experiences with modern Typescript UI/UX and scalable architecture.
          </h2>
        </div>

        <div className="grid auto-rows-[150px] gap-4 rounded-[2.5rem] bg-slate-50 p-4 text-base shadow-[0_30px_60px_rgba(15,23,42,0.10)] md:auto-rows-[190px] md:p-6 lg:grid-cols-4 dark:bg-slate-900/30">
          {/* 99% badge */}
          <div className="flex items-center justify-center rounded-3xl border border-slate-200 bg-white p-4 font-sans lg:col-span-1 dark:border-slate-700 dark:bg-slate-800/50">
            <div className="flex items-center justify-center">
              <svg viewBox="0 0 180 180" className="size-10">
                <mask
                  height="180"
                  id="nextjs_icon_dark__:r8:mask0_408_134"
                  maskUnits="userSpaceOnUse"
                  width="180"
                  x="0"
                  y="0"
                  style={{ maskType: "alpha" }}
                >
                  <circle cx="90" cy="90" fill="black" r="90" />
                </mask>
                <g mask="url(#nextjs_icon_dark__:r8:mask0_408_134)">
                  <circle
                    cx="90"
                    cy="90"
                    data-circle="true"
                    fill="black"
                    r="90"
                  />
                  <path
                    d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z"
                    fill="url(#nextjs_icon_dark__:r8:paint0_linear_408_134)"
                  />
                  <rect
                    fill="url(#nextjs_icon_dark__:r8:paint1_linear_408_134)"
                    height="72"
                    width="12"
                    x="115"
                    y="54"
                  />
                </g>
                <defs>
                  <linearGradient
                    gradientUnits="userSpaceOnUse"
                    id="nextjs_icon_dark__:r8:paint0_linear_408_134"
                    x1="109"
                    x2="144.5"
                    y1="116.5"
                    y2="160.5"
                  >
                    <stop stopColor="white" />
                    <stop offset="1" stopColor="white" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient
                    gradientUnits="userSpaceOnUse"
                    id="nextjs_icon_dark__:r8:paint1_linear_408_134"
                    x1="121"
                    x2="120.799"
                    y1="54"
                    y2="106.875"
                  >
                    <stop stopColor="white" />
                    <stop offset="1" stopColor="white" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>

          {/* Emoji card */}
          <div className="flex items-center justify-center rounded-3xl border border-slate-200 bg-white text-4xl lg:col-span-1 dark:border-slate-700 dark:bg-slate-800/50">
            <p className="text-4xl">🚀</p>
          </div>

          {/* Music card */}
          <div className="relative flex overflow-hidden rounded-3xl border border-slate-200 bg-white pb-12 lg:col-span-2 lg:row-span-2 dark:border-slate-700 dark:bg-slate-800/50">
            <iframe
              allow="autoplay *; encrypted-media *;"
              className="h-full w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
              src="https://embed.music.apple.com/vn/playlist/coding/pl.30c9e2cf347442a2973a055ff877c0e2"
              title="Coding playlist"
            />
            <div
              className="absolute right-0 bottom-0 left-0 flex items-end justify-center rounded-b-3xl bg-linear-to-t from-white via-white/80 to-transparent p-4 dark:from-slate-800/95 dark:via-slate-800/80"
              aria-label="Music keeps me in flow while coding"
            >
              <p className="text-muted-foreground font-sans text-sm">
                Music keeps me in flow while coding.
              </p>
            </div>
          </div>

          {/* About */}
          <div className="flex flex-col justify-center rounded-3xl border border-slate-200 bg-white p-4 lg:col-span-1 lg:row-span-2 dark:border-slate-700 dark:bg-slate-800/50">
            <p className="text-foreground text-base">
              As a young and passionate developer, I am eager to learn and
              explore new knowledge and technologies to continuously expand my
              skill set. Challenge me, and I&apos;ll turn it into an opportunity
              to grow and deliver more.
            </p>
          </div>

          {/* Frontend Developer badge */}
          <div className="flex items-center justify-center rounded-3xl border border-slate-200 bg-white text-center font-sans lg:col-span-1 dark:border-slate-700 dark:bg-slate-800/50">
            <p className="text-foreground text-left text-xl font-semibold md:text-2xl">
              Frontend <br />
              Developer
            </p>
          </div>

          {/* Tech stack */}
          <div className="flex flex-col gap-4 rounded-3xl border border-slate-200 bg-white p-4 lg:col-span-2 dark:border-slate-700 dark:bg-slate-800/50">
            <p className="text-foreground flex items-end gap-2 font-sans text-xl font-semibold md:text-2xl">
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
                <IconBrandNextjs stroke={1.5} className="h-6 w-6" />,
                <IconBrandReact stroke={1.5} className="h-6 w-6" />,
                <IconBrandWordpress stroke={1.5} className="h-6 w-6" />,
                <IconBrandBootstrap stroke={1.5} className="h-6 w-6" />,
              ].map((tech, index) => (
                <SplideSlide
                  key={index}
                  className={`flex aspect-square w-full items-center justify-center rounded-lg border p-6 ${index % 2 === 0 ? "bg-muted/50" : "border-dashed border-slate-200 dark:border-slate-600"}`}
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
      </Container>
    </Section>
  );
};

export default BentoGrid;
