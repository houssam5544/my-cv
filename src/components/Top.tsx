import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGoogle, faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons';

const Top: React.FC = () => {
  return (
    <section className="relative bg-cover rounded-lg bg-center bg-no-repeat bg-black text-white text-center py-16 bg-hero">
      <div className="opacity-10 bg-hero"></div>
      <div className="container mx-auto  p-8 rounded-lg">
        <img src="bg2.jpg" alt="Profile" className="w-32 h-32 rounded-full mx-auto mb-4" />
        <h2 className="text-4xl mb-4 text-orange-400 font-bold">ROUGA Houssam</h2>
        <p className="text-xl mb-8">ELEVE INGENIEUR OFFICIER DE RESERVE</p>
        <div className='flex flex-wrap items-center justify-center space-x-8 '>
          <a href="#contact" className="bg-purple-700 py-2 px-4 hover:bg-text-orange-400 ">Contact Me</a>
          <a className="bg-purple-700 py-2 px-4 hover:bg-text-orange-400 " >Download CV</a>
        </div>
        <ul className="flex flex-wrap justify-center space-x-8 text-light pt-5">
          <li className="flex flex-col items-center text-lg">
            <a href="https://www.linkedin.com" target="_blank" className="text-text-orange-400 mb-2 hover:text-purple-600" ><FontAwesomeIcon icon={faLinkedin} size="2x"/></a>
          </li>
          <li className="flex flex-col items-center text-lg">
            <a href="https://mail.google.com/" target="_blank" className="text-text-orange-400 mb-2 hover:text-purple-600" ><FontAwesomeIcon icon={faGoogle} size="2x"/></a>
          </li>
          <li className="flex flex-col items-center text-lg">
            <a href="https://github.com/" target="_blank" className="text-text-orange-400 mb-2 hover:text-purple-600" ><FontAwesomeIcon icon={faGithub} size="2x"/></a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Top;
