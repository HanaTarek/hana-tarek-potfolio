import { useEffect, useRef } from "react";
import './ReviewCard.css';

export default function ReviewCard({ text, name, role }) {

     const reviewCardRef = useRef(null);

      useEffect(() => {
        let frame;
        let start = null;
        const el = reviewCardRef.current;
        if (!el) return;
    
        const animate = (ts) => {
          if (!start) start = ts;
          const t = (ts - start) / 1000;
          el.style.transform = `translateY(${Math.sin(t * 0.9) * 10}px)`;
          frame = requestAnimationFrame(animate);
        };
    
        frame = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(frame);
      }, []);

  return (
    <div className="review-card" ref={reviewCardRef}>
      <div className="review-card__quote">"</div>
      <p className="review-card__text">{text}</p>
      <div className="review-card__author">
        <div className="review-card__avatar">{name[0]}</div>
        <div>
          <div className="review-card__name">{name} , {role}</div>
        </div>
        {/* <div className="review-card__stars">★★★★★</div> */}
      </div>
    </div>
  );
}