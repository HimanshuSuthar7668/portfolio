"use client"; 
import { Icon } from "../icons/icon";

export default function Header() {
  const navItems = [
    {
      id: "home",
      label: "Home",
      icon: <Icon.homeIcon className="text-primaryBlack transition duration-300 group-hover:text-primaryBlue" />,
    },
    {
      id: "projects",
      label: "Work",
      icon: <Icon.workIcon className="text-primaryBlack transition duration-300 group-hover:text-primaryBlue" />,
    },
    {
      id: "skills",
      label: "Skills",
      icon: <Icon.aboutIcon className="text-primaryBlack transition duration-300 group-hover:text-primaryBlue" />,
    },
    {
      id: "contact",
      label: "Contact",
      icon: <Icon.contactIcon className="text-primaryBlack transition duration-300 group-hover:text-primaryBlue" />,
    },
  ];

  const handleScroll = (id: string) => {
    const yOffset = -64;
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 px-32 z-50 flex w-full h-16 backdrop-blur-xl shadow-[0px_2px_10px_0px_#00000008]">
      <div className="flex items-center justify-center text-primaryBlack">
        <p className="text-2xl font-bold">Himanshu Suthar</p>
      </div>

      <div className="relative ml-auto flex items-center justify-end">
        <nav className="flex space-x-6 z-10">
          {navItems.map((item, index) => (
            <button key={index} onClick={() => handleScroll(item.id)} className="flex items-center gap-2 font-semibold text-base text-primaryBlack transition duration-300 group hover:text-primaryBlue">
              {item.icon}
              <span>{item.label}</span>
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
