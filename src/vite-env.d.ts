/// <reference types="vite/client" />
declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.gif";
declare module "*.svg";
declare module "gsap" {
  import gsap from "gsap/types";
  export * from "gsap/types";
  export default gsap;
}

declare module "gsap/ScrollTrigger" {
  export const ScrollTrigger: any;
}
