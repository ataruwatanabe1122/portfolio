"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";

const POSITIONS = [
  { topClass: "top-[18vh]", leftClass: "left-[2%]",  rotateClass: "-rotate-[8deg]"  },
  { topClass: "top-[48vh]", leftClass: "left-[6%]",  rotateClass: "rotate-[6deg]"   },
  { topClass: "top-[28vh]", leftClass: "left-[20%]", rotateClass: "-rotate-[5deg]"  },
  { topClass: "top-[58vh]", leftClass: "left-[16%]", rotateClass: "rotate-[9deg]"   },
  { topClass: "top-[22vh]", leftClass: "left-[38%]", rotateClass: "-rotate-[4deg]"  },
  { topClass: "top-[52vh]", leftClass: "left-[44%]", rotateClass: "rotate-[7deg]"   },
  { topClass: "top-[32vh]", leftClass: "left-[60%]", rotateClass: "-rotate-[10deg]" },
  { topClass: "top-[62vh]", leftClass: "left-[56%]", rotateClass: "rotate-[5deg]"   },
  { topClass: "top-[24vh]", leftClass: "left-[76%]", rotateClass: "rotate-[8deg]"   },
  { topClass: "top-[54vh]", leftClass: "left-[72%]", rotateClass: "-rotate-[6deg]"  },
  { topClass: "top-[38vh]", leftClass: "left-[88%]", rotateClass: "-rotate-[11deg]" },
  { topClass: "top-[64vh]", leftClass: "left-[84%]", rotateClass: "rotate-[4deg]"   },
];

interface Paw {
  id: number;
  pos: (typeof POSITIONS)[number];
}

export default function PawTrail() {
  const [paws, setPaws] = useState<Paw[]>([]);
  const counterRef = useRef(0);
  const lastScrollRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      if (y - lastScrollRef.current < 250) return;
      lastScrollRef.current = y;

      const id = counterRef.current;
      const pos = POSITIONS[id % POSITIONS.length];
      counterRef.current++;

      setPaws((prev) => [...prev.slice(-6), { id, pos }]);

      setTimeout(() => {
        setPaws((prev) => prev.filter((p) => p.id !== id));
      }, 2800);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (paws.length === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-0" aria-hidden>
      {paws.map(({ id, pos }) => (
        <div key={id} className={`absolute w-8 md:w-10 ${pos.topClass} ${pos.leftClass}`}>
          <div className={pos.rotateClass}>
            <div className="opacity-0 animate-paw-pop">
              <Image
                src="/nikukyu.png"
                alt=""
                width={40}
                height={92}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
