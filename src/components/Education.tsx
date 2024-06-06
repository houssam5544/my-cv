// src/components/Education.tsx

import React from 'react';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 text-center">
      <div className='border-b rounded-lg border-gray-700 bg-gray-800 text-black p-6 shadow-2xl text-center mx-48'>
        
        <h2 className="text-4xl font-heading font-bold mb-6">Education</h2>
        
        <div className='flex'>
          <div className="flex-2 bg-purple-600 p-4 text-white text-center px-6">
            <p className='mt-20'>2021 - 2022</p>
            <p className='font-bold text-lg'>NORMINDUS-CASABLANCA</p>
          </div>
          <div className="flex-1 bg-white pt-8 px-4 text-black text-justify">
            <p className='text-lg font-bold mb-5'>Dimensionnement des instalations élèctrique</p>
            <p className='mb-10'>Lors de mon stage chez Normandus Casablanca, j'ai travaillé sur 
            le dimensionnement des installations électriques. Mon rôle consistait principalement 
            à utiliser des logiciels comme Autocad, Caneco et Dialux pour concevoir et calculer 
            ces installations. J'ai participé à la création de plans électriques, à la modélisation 
            de circuits, et à l'évaluation de l'éclairage et de la distribution électrique. Cette 
            expérience m'a permis de développer mes compétences techniques dans le domaine du génie 
            électrique et de me familiariser avec les pratiques professionnelles de l'industrie.</p>
          </div>
        </div>

        <div className='flex mt-7'>
          <div className="flex-2 bg-purple-600 p-4 text-white text-center px-10">
            <p className='mt-16'>2022 - 2023</p>
            <p className='font-bold text-lg'>FOUR SEASONS-RABAT</p>
          </div>
          <div className="flex-1 bg-white pt-8 px-4 text-black text-justify">
            <p className='text-lg font-bold mb-5'>Unity Developer / Sound Designer</p>
            <p className='mb-10'>Chez Four Saison en tant que Sound Designer, j'ai travaillé sur la 
              création d'éléments audio pour divers projets. Mon rôle consistait à concevoir des ambiances
              sonores, des effets sonores et des musiques pour enrichir différentes expériences audiovisuelles.
              Ce stage m'a permis de développer mes compétences en conception sonore dans un environnement 
              professionnel dynamique.</p>
          </div>
        </div>

        <div className='flex mt-7'>
        <div className="flex-2 bg-purple-600 p-4 text-white text-center px-10">
          <p className='mt-16'>2022 - 2023</p>
          <p className='font-bold text-lg'>FOUR SEASONS-RABAT</p>
        </div>
        <div className="flex-1 bg-white pt-8 px-4 text-black text-justify">
          <p className='text-lg font-bold mb-5'>Unity Developer / Sound Designer</p>
          <p className='mb-10'>Chez Four Saison en tant que Sound Designer, j'ai travaillé sur la 
            création d'éléments audio pour divers projets. Mon rôle consistait à concevoir des ambiances
            sonores, des effets sonores et des musiques pour enrichir différentes expériences audiovisuelles.
            Ce stage m'a permis de développer mes compétences en conception sonore dans un environnement 
            professionnel dynamique.</p>
        </div>

          
        </div>
        
      </div>
    </section>
  );
};

export default Education;

