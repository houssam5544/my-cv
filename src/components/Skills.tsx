import React, { useEffect } from 'react';

const skills = [
  { name: 'HTML', level: '80%' },
  { name: 'CSS', level: '75%' },
  { name: 'JavaScript', level: '60%' },
  { name: 'Python', level: '60%' },
  { name: 'GNS3', level: '75%' },
  { name: 'Linux', level: '70%' },
];

const Skills: React.FC = () => {
  useEffect(() => {
    
    const progressBars = document.querySelectorAll('.progress-bar');
    
    
    progressBars.forEach((bar) => {
      
      const width = bar.getAttribute('data-width');
      

      if (bar instanceof HTMLElement && width) {
        setTimeout(() => {
          bar.style.width = width;
        }, 100);
      }
    });
  }, []);

  return (
    <section id="skills" className="py-24 border-b rounded-lg border-gray-700 bg-gray-800 text-white p-6 shadow-2xl text-center mx-48 mt-10">
      <div className="container mx-auto p-6 ">
        <h2 className="text-3xl font-bold mb-6 text-center">Professional Skills</h2>
        
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill) => (
            <div key={skill.name} className="flex items-center space-x-4">
              <div className="flex-1">
                
                <div className="flex justify-between mb-1">
                  <span>{skill.name}</span>
                  <span>{skill.level}</span>
                </div>
                
              

                
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-purple-600 h-2 rounded-full transition-all duration-1000 ease-in-out progress-bar"
                    style={{ width: '0%' }}
                    data-width={skill.level}
                  ></div>
                
                
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

