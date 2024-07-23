
// src/components/Roadmap.js
import React from 'react';

const milestones = [
  { id: 1, title: ' Initial Consultation ', description: ' Discussing your project requirements and goals' },
  { id: 2, title: ' Planning and Design', description: ' Creating a detailed plan and design mockups for your project. ' },
  { id: 3, title: ' Development and Launch ', description: ' Developing your project and launch it successfully. ' },
];

const Roadmap = () => {
  return (
    <div className="container mx-auto p-8">
            <h3 className="text-2xl font-semibold mb-2 mt-6" >Process</h3>

      <div className="relative">
        {/* Roadmap Timeline */}
        {/* <div className="absolute h-full border-l-2  left-1/2 transform -translate-x-1/2"></div> */}

        {/* Milestones */}
        <div className="flex items-center justify-between">
          {milestones.map(milestone => (
            <div key={milestone.id} className="relative text-center">
              <div className="w-8 h-8 bg-black text-white rounded-full mx-auto flex items-center justify-center border-zinc-950">
                {milestone.id}
              </div>
              <div className="mt-2 text-lg font-semibold">{milestone.title}</div>
              <div className="mt-1 text-gray-600">{milestone.description}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Roadmap;





///