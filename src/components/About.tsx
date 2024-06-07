import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className='py-24'>
      <div className="border-b rounded-lg border-gray-700 bg-gray-800 text-white p-6 shadow-2xl text-left mx-48">
        
      <div className="container mx-auto flex justify-between items-center ">
        <div className="container mr-32 ml-12 text-justify">
          <h2 className="text-4xl font-heading font-bold mb-6">About Me</h2>
          <p className="text-lg">
            Actuellement élève ingénieur officier de réserve à l’Ecole Mohammadia d’Ingénieurs, 
            je m’immerge dans le domaine des réseaux et télécommunications. Mon engagement repose 
            sur une volonté constante d’appprentissage et de résolution de défis techniques.
          </p>
          <p className="text-lg mt-5">
            Passionné par les technologies de communication, mon objectif est de contribuer activement 
            à l’évolution des infrastructures en mettant l’accent sur l’innovation pour façonner l’avenir 
            des technologies de l’information

          </p>
        </div>

        <div className="container">
          <h2 className="text-4xl font-heading font-bold mb-6">Information</h2>
          <ul className="font-bold block text-justify ">
              <li className='pt-4'>AGE: 22</li>
              <li className='pt-10'>EMAIL: houssamrouga@gmail.com</li>
              <li className='pt-10'>PHONE: +212 650 14 25 31</li>
              <li className='pt-10 pb-8'>ADDRESS: 12,Lot saada, Marrakech, Maroc</li>
          </ul>
        </div>
      </div>
      
      </div>
      
    </section>
  );
};

export default About;
