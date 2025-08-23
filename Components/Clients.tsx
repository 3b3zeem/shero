"use client";

import React, { useEffect, useState } from "react";

interface AnimatedNumberProps {
  target: number;
  label: string;
}

interface NetworkNodeProps {
  x: number;
  y: number;
  size?: string;
  delay?: number;
  connectionLines?: { toX: number; toY: number }[];
}

const AnimatedNumber: React.FC<AnimatedNumberProps> = ({ target, label }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <div className="relative group">
      {/* Corner brackets */}
      <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-cyan-400 opacity-80"></div>
      <div className="absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 border-cyan-400 opacity-80"></div>

      {/* Content */}
      <div className="px-12 py-8 text-center">
        <div className="text-sm text-gray-300 mb-2 font-light tracking-wider italic">
          {label}
        </div>
        <div className="text-5xl md:text-6xl font-bold text-cyan-400 tracking-tight">
          {count}+
        </div>
      </div>
    </div>
  );
};

const NetworkNode: React.FC<NetworkNodeProps> = ({
  x,
  y,
  size = "w-16 h-12",
  delay = 0,
  connectionLines = [],
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`absolute ${size} border-2 rounded-br-2xl rounded-tl-2xl transition-all duration-500 hover:border-cyan-300 hover:shadow-lg hover:shadow-cyan-400/20 ${
        isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"
      }`}
      style={{
        left: `${x}%`,
        top: `${y}%`,
        transform: "translate(-50%, -50%)",
      }}
    />
  );
};

const Clients = () => {
  const nodes = [
    // Top row
    {
      x: 20,
      y: 10,
      delay: 0,
      connections: [
        { toX: 35, toY: 25 },
        { toX: 50, toY: 50 },
      ],
    },
    { x: 35, y: 0, delay: 200, connections: [{ toX: 50, toY: 50 }] },
    { x: 50, y: 5, delay: 400, connections: [{ toX: 50, toY: 50 }] },
    { x: 65, y: 0, delay: 600, connections: [{ toX: 50, toY: 50 }] },
    {
      x: 80,
      y: 10,
      delay: 800,
      connections: [
        { toX: 65, toY: 25 },
        { toX: 50, toY: 50 },
      ],
    },

    // Middle row
    { x: 15, y: 45, delay: 300, connections: [{ toX: 50, toY: 50 }] },
    { x: 85, y: 45, delay: 700, connections: [{ toX: 50, toY: 50 }] },

    // Bottom row
    {
      x: 20,
      y: 75,
      delay: 900,
      connections: [
        { toX: 35, toY: 65 },
        { toX: 50, toY: 50 },
      ],
    },
    { x: 35, y: 95, delay: 500, connections: [{ toX: 50, toY: 50 }] },
    { x: 50, y: 90, delay: 1000, connections: [{ toX: 50, toY: 50 }] },
    { x: 65, y: 95, delay: 100, connections: [{ toX: 50, toY: 50 }] },
    {
      x: 80,
      y: 75,
      delay: 1100,
      connections: [
        { toX: 65, toY: 65 },
        { toX: 50, toY: 50 },
      ],
    },
  ];

  return (
    <div className="h-[180vh] flex flex-col items-center justify-between relative py-30">
      {/* Main Title */}
      <div className="relative z-20 mb-12 flex">
        <h1 className="text-6xl md:text-7xl font-bold tracking-wider text-white text-center">
          Clients
        </h1>
      </div>

      <div className="flex flex-col w-full items-center gap-10">
        {/* Network Visualization Container */}
        <div className="relative w-full max-w-6xl h-96 mb-16 z-10">
          {/* Network Nodes */}
          {nodes.map((node, index) => (
            <NetworkNode
              key={index}
              x={node.x}
              y={node.y}
              delay={node.delay}
              connectionLines={node.connections}
            />
          ))}
        </div>

        {/* Statistics Section */}
        <div className="relative z-20 w-full">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-16 max-w-4xl mx-auto">
              {/* Work Hours */}
              <div className="relative">
                <AnimatedNumber target={500} label="Work Hours" />
                <div className="hidden md:block absolute top-1/2 right-0 w-px h-20 bg-gray-700 transform -translate-y-1/2"></div>
              </div>

              {/* Happy Clients */}
              <div className="relative">
                <AnimatedNumber target={500} label="Happy Clients" />
                <div className="hidden md:block absolute top-1/2 right-0 w-px h-20 bg-gray-700 transform -translate-y-1/2"></div>
              </div>

              {/* Projects */}
              <div className="relative">
                <AnimatedNumber target={500} label="Projects" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
