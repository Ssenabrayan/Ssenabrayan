import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function ensureGsapRegistered() {
  if (!gsap.core.globals().ScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger);
  }
}

export { gsap };
