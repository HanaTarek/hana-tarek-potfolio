import { useEffect, useRef, useState } from "react";
import "./Experience.css";

export default function Logo({ src, alt, fallback, className }) {
  const [errored, setErrored] = useState(false);
  if (!src || errored) {
    return <span className={`${className} logo-fallback`}>{fallback}</span>;
  }
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setErrored(true)}
    />
  );
}