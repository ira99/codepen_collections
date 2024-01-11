import 'babel-polyfill';
import svg4everybody from 'svg4everybody';
import Swiper from 'swiper';
import { gsap, TweenMax, TimelineLite, TweenLite, Linear } from "gsap/all";

window.Swiper = Swiper;
window.gsap = gsap;
window.TweenMax = TweenMax;
window.TimelineLite = TimelineLite;
window.TweenLite = TweenLite;
window.Linear = Linear;

svg4everybody();
// import 'ninelines-ua-parser';
