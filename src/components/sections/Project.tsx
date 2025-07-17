import React from "react";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "My SIP",
    image: "/images/mysiponline.png",
    href: "https://www.mysiponline.com/",
    description: "Simplifying mutual fund investments with curated SIP plans for every financial goal.",
  },  
  {
    title: "Gradding",
    image: "/images/gradding.png",
    href: "https://www.gradding.com/",
    description: "AI-powered platform simplifying international education journeys — from counseling to course admission.",
  },
  {
    title: "Wooden Streat",
    image: "/images/woodenstreat.png",
    href: "https://www.woodenstreet.com/",
    description: "WoodenStreet brings handcrafted, modern furniture and home décor right to your doorstep.",
  },
];

export default function Project() {
  return (
    <section id="projects" className="max-w-7xl mx-auto mb-7 px-4 py-16">
      <h2 className="text-center text-2xl sm:text-[34px] font-semibold mb-3.5">
        <span className="text-[#0070f3]">Featured Projects</span>: From Idea to Execution
      </h2>
      <p className="text-center text-base text-gray-600 mb-16 mx-auto">
        <b>Goal:</b> Present a visually engaging selection of top UI/UX projects that highlight problem-solving, creativity, and user experience impact.
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <Link key={index} href={project.href} className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col items-center text-center">
            <div className="w-full h-48 relative">
              <Image src={project.image} alt={project.title} layout="fill" objectFit="cover" />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
              <p className="text-sm text-gray-600">{project.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
