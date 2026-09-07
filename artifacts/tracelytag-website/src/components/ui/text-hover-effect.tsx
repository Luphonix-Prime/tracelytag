"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextHoverEffect = ({
  text,
  duration,
  automatic = true,
  className,
}: {
  text: string;
  duration?: number;
  automatic?: boolean;
  className?: string;
}) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [hovered, setHovered] = useState(true);
  const [isCursorNear, setIsCursorNear] = useState(false);
  const [maskPosition, setMaskPosition] = useState({ cx: "50%", cy: "50%" });

  // Automatic continuous sweeping animation when user cursor is not active
  useEffect(() => {
    let animFrame: number;
    const startTime = Date.now();

    const loopSweep = () => {
      if (!isCursorNear && automatic) {
        const elapsed = (Date.now() - startTime) / 1000;
        // Continuous smooth sine wave oscillation from 15% to 85%
        const cxValue = 50 + 38 * Math.sin(elapsed * 1.4);
        const cyValue = 50 + 12 * Math.cos(elapsed * 1.1);
        setMaskPosition({
          cx: `${cxValue.toFixed(2)}%`,
          cy: `${cyValue.toFixed(2)}%`,
        });
      }
      animFrame = requestAnimationFrame(loopSweep);
    };

    animFrame = requestAnimationFrame(loopSweep);
    return () => cancelAnimationFrame(animFrame);
  }, [isCursorNear, automatic]);

  // Cursor tracking when mouse is active near the footer
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (svgRef.current) {
        const svgRect = svgRef.current.getBoundingClientRect();
        if (
          e.clientX >= svgRect.left - 80 &&
          e.clientX <= svgRect.right + 80 &&
          e.clientY >= svgRect.top - 80 &&
          e.clientY <= svgRect.bottom + 80
        ) {
          setIsCursorNear(true);
          setHovered(true);
          const cxPercentage = ((e.clientX - svgRect.left) / svgRect.width) * 100;
          const cyPercentage = ((e.clientY - svgRect.top) / svgRect.height) * 100;
          setMaskPosition({
            cx: `${cxPercentage.toFixed(2)}%`,
            cy: `${cyPercentage.toFixed(2)}%`,
          });
        } else {
          setIsCursorNear(false);
        }
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <svg
      ref={svgRef}
      width="100%"
      height="100%"
      viewBox="0 0 540 100"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("select-none uppercase w-full h-full", className)}
    >
      <defs>
        <linearGradient
          id="textGradient"
          gradientUnits="userSpaceOnUse"
          cx="50%"
          cy="50%"
          r="25%"
        >
          <stop offset="0%" stopColor="#064aa0" />
          <stop offset="25%" stopColor="#0284c7" />
          <stop offset="50%" stopColor="#2563eb" />
          <stop offset="75%" stopColor="#38bdf8" />
          <stop offset="100%" stopColor="#1d4ed8" />
        </linearGradient>

        <motion.radialGradient
          id="revealMask"
          gradientUnits="userSpaceOnUse"
          r="28%"
          initial={{ cx: "50%", cy: "50%" }}
          animate={maskPosition}
          transition={{ duration: duration ?? 0.1, ease: "easeOut" }}
        >
          <stop offset="0%" stopColor="white" />
          <stop offset="100%" stopColor="black" />
        </motion.radialGradient>
        <mask id="textMask">
          <rect
            x="0"
            y="0"
            width="100%"
            height="100%"
            fill="url(#revealMask)"
          />
        </mask>
      </defs>

      {/* Base stroke text */}
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        strokeWidth="0.4"
        className="fill-transparent stroke-slate-300 font-[helvetica] text-6xl font-extrabold tracking-normal opacity-40"
      >
        {text}
      </text>

      {/* Animated stroke line */}
      <motion.text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        strokeWidth="0.45"
        className="fill-transparent stroke-[#064aa0]/40 font-[helvetica] text-6xl font-extrabold tracking-normal"
        initial={{ strokeDashoffset: 1000, strokeDasharray: 1000 }}
        animate={{
          strokeDashoffset: [1000, 0],
          strokeDasharray: 1000,
        }}
        transition={{
          duration: 4,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        {text}
      </motion.text>

      {/* Masked gradient fill text */}
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        stroke="url(#textGradient)"
        strokeWidth="0.5"
        mask="url(#textMask)"
        className="fill-transparent font-[helvetica] text-6xl font-extrabold tracking-normal"
      >
        {text}
      </text>
    </svg>
  );
};

export const FooterBackgroundGradient = () => {
  return (
    <div
      className="absolute inset-0 z-0 pointer-events-none"
      style={{
        background:
          "radial-gradient(125% 125% at 50% 0%, #ffffff 25%, #f0f7ff 65%, #dbeafe 100%)",
      }}
    />
  );
};
