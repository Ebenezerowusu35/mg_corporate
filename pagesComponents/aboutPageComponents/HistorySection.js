import { useEffect, useRef } from "react";
import { Fade } from "react-reveal";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { gsap } from "gsap";

const HistorySection = () => {
  const sectionRef = useRef();
  const triggerRef = useRef();
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-320vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: document.querySelector(".section-cover"),
          start: "top top",
          end: "2000 top",
          scrub: 1,
          pin: true,
        },
      }
    );
    return () => {
      pin.kill();
    };
  }, []);
  return (
    <div className="body-width scroll-section-outer">
      <div>
        <Fade bottom cascade>
          <h4 className="sta">Our History</h4>
        </Fade>
      </div>
      <div ref={triggerRef} className="section-cover">
        <div ref={sectionRef} className="scroll-section-inner">
          {[1, 2, 3, 4, 5, 6, 7]?.map((ele, i) => {
            return (
              <div className="d-block">
                <div className="scroll-section" key={i}>
                  <img src="/assets/img/image1.png" alt="" className="img1" />
                </div>
                <div>
                  <h4>Year</h4>
                  <h3>Description</h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default HistorySection;
