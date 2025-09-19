/// <reference types="vite/client" />
declare module "gsap" {
  import gsap from "gsap/types";
  export * from "gsap/types";
  export default gsap;
}

declare module "gsap/ScrollTrigger" {
  export const ScrollTrigger: any;
}
