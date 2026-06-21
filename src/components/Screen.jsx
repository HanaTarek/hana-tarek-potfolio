import { useEffect, useRef } from "react";
import './Screen.css';
import ReviewCard from "./ReviewCard";
export default function Screen(){

    const videoRef = useRef(null);
    const laptopRef = useRef(null);

    useEffect(() => {
    if (videoRef.current) {
        videoRef.current.playbackRate = 0.1;
    }
    }, []);


//   useEffect(() => {
//     let frame;
//     let start = null;
//     const el = laptopRef.current;
//     if (!el) return;

//     const animate = (ts) => {
//       if (!start) start = ts;
//       const t = (ts - start) / 1000;
//       el.style.transform = `translateY(${Math.sin(t * 0.9) * 10}px)`;
//       frame = requestAnimationFrame(animate);
//     };

//     frame = requestAnimationFrame(animate);
//     return () => cancelAnimationFrame(frame);
//   }, []);

    return(
        <>
      <div className="hero__right">
        {/* Label row above laptop */}
        <div>
        <div className="hero__mockup-label">
        <span className="hero__mockup-label-text">✦ Featured Project</span>
        <a
        href="https://listentothierminds.netlify.app"
        target="_blank"
        rel="noreferrer"
        className="hero__mockup-live-btn"
        >
        View Live ↗
        </a>
        </div>
        <div className="hero__laptop" ref={laptopRef}>
          <div className="hero__laptop-screen">
            {/* Browser chrome */}
            <div className="hero__browser-bar">
              <span className="hero__browser-dot hero__browser-dot--red" />
              <span className="hero__browser-dot hero__browser-dot--yellow" />
              <span className="hero__browser-dot hero__browser-dot--green" />
              <span className="hero__browser-url">listentothierminds.netlify.app</span>
            </div>

            {/* Simulated page inside screen */}
            {/* <video
            ref={videoRef}
            className="hero__screen-video"
            src="/demo2.mp4"
            autoPlay
            loop
            muted
            playsInline
            /> */}
            <img
            src="/web.png"
            alt="one of my freelance projects"
            className="hero__screen-img"
            />
          </div>

          {/* Keyboard base */}
          <div className="hero__laptop-base">
            <div className="hero__laptop-notch" />
          </div>
        </div>
        </div>
        <div className="hero__review-wrapper">
        <ReviewCard
            text="Incredibly smooth. Not a single flaw — I really appreciate the hard work."
            name="Farida"
            role="Freelance Client"
        />
        </div>
      </div>
        </>
    );
}