import Image from 'next/image';

type ProjectCardProps = {
  title: string;
  description: string;
  image: string;
  reverse?: boolean;
  link?: string;
};

const ProjectCard = ({ title, description, image, reverse = false, link }: ProjectCardProps) => {
  return (
    <div
      className={`flex flex-col md:flex-row ${
        reverse ? 'md:flex-row-reverse' : ''
      } bg-white rounded-xl overflow-hidden shadow-md mb-10`}
    >
      <div className="md:w-1/2 w-full">
        <Image
          src={image}
          alt={title}
          width={600}
          height={400}
          className="object-cover w-full h-full"
        />
      </div>

      <div className="md:w-1/2 w-full p-8 flex flex-col justify-center">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        {link && (
          <a
            href={link}
            target="_blank"
            className="border border-black px-4 py-2 text-sm font-medium rounded hover:bg-gray-100 w-fit"
          >
            View Project
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
