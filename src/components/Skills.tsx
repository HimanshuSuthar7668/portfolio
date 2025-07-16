// components/Skills.tsx
const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Node.js",
  "MongoDB",
  "Git",
];

const Skills = () => {
  return (
    <section className="py-16 px-6 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-8">Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-center">
        {skills.map((skill, idx) => (
          <div key={idx} className="bg-white py-4 px-2 rounded shadow text-gray-800 font-medium">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
