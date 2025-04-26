"use client";
import React from "react";
import "./style.css";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, ScrollControls } from "@react-three/drei";
import MacContainer from "./MacContainer";

function Navbar() {
  const navItems = [
    "Home",
    "About",
    "Contact",
    "Blog",
    "Shop",
    "Careers",
    "Press",
    "Sitemap",
    "Feedback",
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center h-16">
          <div className="flex space-x-4 overflow-x-auto scrollbar-hide">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-gray-900 hover:text-gray-600 text-sm font-medium px-3 py-2 rounded-md transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

const page = () => {
  return (
    <div className="w-full h-screen">
      <Navbar />
      <div className="absolute top-32 left-1/2 -translate-x-1/2 text-center font-['Helvetica_Now_Display'] ">
        <h1 className="text-4xl font-bold tracking-tighter text-white">
          Apple MacBook Pro
        </h1>
        <p className="text-lg text-gray-300 mt-4">
          Experience the power of the MacBook Pro with M1 chip, designed for
          professionals and creatives. With its stunning Retina display, fast
          performance, and long battery life, the MacBook Pro is the ultimate
          tool for productivity and creativity.
        </p>
      </div>

      <Canvas camera={{ fov: 26, position: [0, -5, 120] }}>
        <OrbitControls /> {/* 3D ko moveable bnana */}
        <Environment
          files={[
            "https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/4k/brown_photostudio_02_4k.exr",
          ]}
        />
        <ScrollControls pages={1}>
          <MacContainer />
        </ScrollControls>
      </Canvas>
    </div>
  );
};

export default page;
