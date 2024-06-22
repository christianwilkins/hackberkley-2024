"use client";
import React from "react";
import { SparklesCore } from "./ui/sparkles";

export default function SparklesPreview() {
  return (
    <div className="h-[40rem] relative w-full bg-# flex flex-col items-center justify-center overflow-hidden rounded-md">
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      <h1 className="md:text-7xl text-3xl lg:text-6xl font-bold text-center text-white relative z-20">
        TruthToken
      </h1>
      <h2 className="md:text-5xl text-2xl lg:text-4xl font-bold text-center text-white relative z-20">
        Using AI to stop misinformation
      </h2>
    </div>
  );
}