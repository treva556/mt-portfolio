
// src/components/Roadmap.js
import React from 'react';

const milestones = [
  { id: 1, title: 'Step 1', description: 'Description of step 1' },
  { id: 2, title: 'Step 2', description: 'Description of step 2' },
  { id: 3, title: 'Step 3', description: 'Description of step 3' },
];

const Roadmap = () => {
  return (
    <div className="container mx-auto p-8">
      <div className="relative">
        {/* Roadmap Timeline */}
        <div className="absolute h-full border-l-2 border-gray-300 left-1/2 transform -translate-x-1/2"></div>

        {/* Milestones */}
        <div className="flex items-center justify-between">
          {milestones.map(milestone => (
            <div key={milestone.id} className="relative text-center">
              <div className="w-8 h-8 bg-blue-500 text-white rounded-full mx-auto flex items-center justify-center">
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