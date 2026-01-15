import { browser } from '$app/environment';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { Draggable } from 'gsap/Draggable';

if (browser) {
	gsap.registerPlugin(ScrollTrigger, ScrollSmoother, Draggable);
}

export { gsap, ScrollTrigger, ScrollSmoother, Draggable };
