import React from 'react';

const Header: React.FC = () => {
  return (
    <header className=" text-purple-600 bg-black bg-opacity-75 py-8 fixed top-0 w-full z-10 transition-all duration-300">
      <div className="mx-40">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-serif font-bold"><a href="" className="hover:text-orange-400">Mon Formulaire</a></h1>
          <nav>
            <ul className="flex space-x-4 items-center font-bold ">
              <li><a href="#about" className="hover:text-orange-400">About</a></li>
              <li><a href="#experience" className="hover:text-orange-400">Experience</a></li>
              <li><a href="#education" className="hover:text-orange-400">Education</a></li>
              <li><a href="#skills" className="hover:text-orange-400">Skills</a></li>
              <li><a href="#languages" className="hover:text-orange-400">Languages</a></li>
              <li><a href="#contact" className="hover:text-orange-400">Contact</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
