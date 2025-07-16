import React from "react";
import Image from "next/image";

const projects = [
  {
    title: "My SIP  :-)",
    image: "/images/mysiponline.png",
    description:
      "It offers a wide range of funds from top asset management companies (AMCs).",
  },
  {
    title: "Gradding  :-)",
    image: "/images/gradding.png",
    description:
      "We at Gradding believe in merging the college-student gap and accelerating career development.",
  },
  {
    title: "Wooden Streat  :-)",
    image: "/images/woodenstreat.png",
    description:
      "We at Gradding believe in merging the college-student gap and accelerating career development.",
  },
];

export default function ProjectSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-center text-2xl sm:text-[34px] font-semibold mb-3.5">
        <span className="text-[#0070f3]">Featured Projects</span>: From Idea to
        Execution
      </h2>
      <p className="text-center text-base text-gray-600 mb-16 max-w-2xl mx-auto">
        <b>Goal:</b> Present a visually engaging selection of top UI/UX projects
        that highlight problem-solving, creativity, and user experience impact.
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col items-center text-center"
          >
            <div className="w-full h-48 relative">
              <Image
                src={project.image}
                alt={project.title}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
              <p className="text-sm text-gray-600">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
