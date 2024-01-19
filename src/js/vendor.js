import 'babel-polyfill';
import svg4everybody from 'svg4everybody';
import Swiper from 'swiper';
import { gsap, TweenMax, TimelineLite, TweenLite, Linear, Power1, Power2 } from "gsap/all";

window.Swiper = Swiper;
window.gsap = gsap;
window.TweenMax = TweenMax;
window.TimelineLite = TimelineLite;
window.TweenLite = TweenLite;
window.Linear = Linear;
window.Power1 = Power1;
window.Power2 = Power2;

svg4everybody();
// import 'ninelines-ua-parser';
