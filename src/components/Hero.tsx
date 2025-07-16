"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Icon } from "./icons/icon";

const Hero = () => {
  return (
    <section>
      <div className="max-w-7xl mx-auto w-full flex items-center justify-center rounded-[30px] bg-[#eaf3ff] px-4 gap-20 py-20">
        {/* Left Content */}
        <div className="space-y-6 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-l from-[#89B7EF] to-[#004499]">
            Designing Interfaces <br /> That Feel Effortless.
          </h1>

          <p className="text-[#333333] max-w-xl text-base md:text-xl mx-auto lg:mx-0">
            I’m a Frontend Developer passionate about building sleek,
            responsive, and user-friendly interfaces. I turn ideas into
            interactive, accessible, and performance-optimized web experiences
            using modern technologies like React, Next.js, and Tailwind CSS.
          </p>
          <div className="flex flex-wrap justify-center lg:justify-start gap-4">
            <Link
              href="#projects"
              className="bg-[#1D4ED8] text-white px-6 py-2 rounded-md font-medium hover:bg-blue-700 transition"
            >
              View My Work
            </Link>
            <Link
              href="#contact"
              className="border border-[#1D4ED8] text-[#1D4ED8] px-6 py-2 rounded-md font-medium hover:bg-[#e0ebff] transition"
            >
              Get in Touch 👋
            </Link>
          </div>
        </div>

        <div className="bg-white px-5 py-8 shadow-lg rounded-lg transform rotate-2 w-[220px] text-center">
          <Icon.attachedPin className="absolute -top-1 right-0 left-0 mx-auto z-[2]" />
          <div className="w-full h-[220px] border-2 border-primaryBlack shadow bg-gray-200 relative rounded">
            <Image
              src="/images/dev_image.png"
              alt="Himanshu Suthar"
              fill
              className="object-contain"
            />
          </div>
          <p className="mt-4 text-xl text-[#333] font-medium">
            Himanshu Suthar
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
