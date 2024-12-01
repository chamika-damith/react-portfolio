import { useState } from 'react';
import { TechnologyDetails } from './TechnologyDetails';

export function TechnologyCard({ 
  icon: Icon, 
  name, 
  description, 
  delay 
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative group cursor-pointer h-[200px] transition-transform duration-300 hover:scale-105"
    >
      <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg blur opacity-50 group-hover:opacity-75 transition duration-300"></div>
      <div className="relative h-full bg-black p-6 rounded-lg flex flex-col items-center space-y-4">
        <div className="p-3 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full">
          <Icon className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-xl font-semibold text-white">{name}</h3>
        <p 
          className={`text-gray-400 text-center text-sm transition-opacity duration-200 ${
            isHovered ? 'opacity-0' : 'opacity-100'
          }`}
        >
          {description}
        </p>
        <TechnologyDetails category={name} isHovered={isHovered} />
      </div>
    </div>
  );
}
