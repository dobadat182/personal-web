declare module "@splidejs/react-splide" {
  import type { ComponentType } from "react";

  export interface SplideProps {
    options?: Record<string, unknown>;
    extensions?: Record<string, unknown>;
    className?: string;
    tag?: keyof JSX.IntrinsicElements;
    hasTrack?: boolean;
    children?: React.ReactNode;
  }

  export interface SplideSlideProps {
    className?: string;
    children?: React.ReactNode;
  }

  export const Splide: ComponentType<SplideProps>;
  export const SplideSlide: ComponentType<SplideSlideProps>;
  export const SplideTrack: ComponentType<{ children?: React.ReactNode }>;
}
