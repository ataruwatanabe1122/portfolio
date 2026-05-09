import { useEffect, useRef, useState } from "react";

export function useScrollReveal(delay = 0) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const timer = setTimeout(() => setVisible(true), delay);
          observer.disconnect();
          return () => clearTimeout(timer);
        }
      },
      { threshold: 0 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  const revealClass = `transition-all duration-700 ease-out ${
    visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
  }`;

  return { ref, revealClass };
}
