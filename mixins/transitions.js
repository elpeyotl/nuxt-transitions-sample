import { TimelineMax, TweenMax, Power2, Back, Elastic } from "gsap";

export default {
  transition: {
    css: false,
    mode: "out-in",
    leave(el, done) {
      console.log("leave");
      let leaveTimeline = new TimelineMax({ onComplete: done });
      leaveTimeline.set(".curtains", { x: "-100%" });
      leaveTimeline.staggerTo(
        ".st",
        1,
        { autoAlpha: 0, y: "18px", ease: Back.easeOut.config(3.7) },
        0.2
      );
      leaveTimeline.to(".curtains", 0.6, { x: "0%", ease: Power2.easeInOut });
    },
    enter(el, done) {
      // console.log("enter");
      let enterTimeline = new TimelineMax({ onComplete: done });
      enterTimeline.set(".curtains", { x: "0%" });
      enterTimeline.to(".curtains", 0.6, { x: "100%", ease: Power2.easeInOut });
      enterTimeline.staggerFromTo(
        ".st",
        1,
        { autoAlpha: 0, y: "18px" },
        { autoAlpha: 1, y: "0", ease: Back.easeOut.config(3.7) },
        0.2
      );
    }
  }
};
