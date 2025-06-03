"use client";

import { cn } from "@/lib/utils";
import React, {
  createContext,
  useState,
  useContext,
  useRef,
  useEffect,
} from "react";

const MouseEnterContext = createContext<{
  mouseEnter: boolean;
  setMouseEnter: React.Dispatch<React.SetStateAction<boolean>>;
}>({
  mouseEnter: false,
  setMouseEnter: () => {},
});

export const CardContainer = ({
  children,
  className,
  containerClassName,
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mouseEnter, setMouseEnter] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;

    const { left, top, width, height } =
      containerRef.current.getBoundingClientRect();
    const x = (e.clientX - left) / width;
    const y = (e.clientY - top) / height;
    setPosition({ x, y });
  };

  return (
    <MouseEnterContext.Provider value={{ mouseEnter, setMouseEnter }}>
      <div
        className={cn("relative group/card", containerClassName)}
        ref={containerRef}
        onMouseEnter={() => setMouseEnter(true)}
        onMouseLeave={() => setMouseEnter(false)}
        onMouseMove={handleMouseMove}
      >
        <div
          className={cn(
            "h-full w-full rounded-3xl transition duration-200 group-hover/card:shadow-2xl",
            className
          )}
          style={{
            transform: mouseEnter
              ? `perspective(1000px) rotateX(${(position.y - 0.5) * 20}deg) rotateY(${(position.x - 0.5) * 20}deg)`
              : "perspective(1000px) rotateX(0deg) rotateY(0deg)",
            transition: "all 0.3s ease",
          }}
        >
          {children}
        </div>
      </div>
    </MouseEnterContext.Provider>
  );
};

export const CardBody = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <div className={cn("", className)}>{children}</div>;
};

export const CardItem = ({
  children,
  className,
  translateX = 0,
  translateY = 0,
  translateZ = 0,
  rotateX = 0,
  rotateY = 0,
  rotateZ = 0,
  ...rest
}: {
  children: React.ReactNode;
  className?: string;
  translateX?: number | string;
  translateY?: number | string;
  translateZ?: number | string;
  rotateX?: number | string;
  rotateY?: number | string;
  rotateZ?: number | string;
}) => {
  const { mouseEnter } = useContext(MouseEnterContext);
  const style = {
    transform: mouseEnter
      ? `translate3d(${translateX}px, ${translateY}px, ${translateZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`
      : "translate3d(0, 0, 0) rotateX(0) rotateY(0) rotateZ(0)",
    transition: "all 0.3s ease",
  };

  return (
    <div className={cn("", className)} style={style} {...rest}>
      {children}
    </div>
  );
}; 