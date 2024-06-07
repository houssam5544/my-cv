import React from 'react';

const Languages: React.FC = () => {
  return (
    <section id="languages" className="py-24 border-b rounded-lg border-gray-700 bg-gray-800 text-white p-6 shadow-2xl text-center mx-48 mt-10">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-4">Language Skills</h2>
        <ul className="text-left">
          <li className="mb-2">Arabe: Langue Native</li>
          <li className="mb-2">Français: Niveau Excellent, usage scientifique et littéraire</li>
          <li className="mb-2">Anglais: Niveau Excellent , usage scientifique et littéraire</li>
        </ul>
      </div>
    </section>
  );
};

export default Languages;
