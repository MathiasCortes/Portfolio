import React from 'react';
import Icon from '../atoms/SvgIcon';

const ProjectCard = ({ 
  title, 
  description, 
  image, 
  technologies, 
  liveUrl, 
  githubUrl,
  status,
  className = "" 
}) => {
  return (
    <div className={`project-card group ${className}`}>
      {/* Project Image */}
      <div className="relative overflow-hidden rounded-lg mb-4">
        <img 
          src={image || '/api/placeholder/400/250'} 
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Action Buttons */}
        <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-black bg-opacity-50 rounded-full hover:bg-opacity-75 transition-all"
            >
              <Icon name="Pen" size={16} />
            </a>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-black bg-opacity-50 rounded-full hover:bg-opacity-75 transition-all"
            >
              <Icon name="Exit" size={16} />
            </a>
          )}
        </div>
      </div>

      {/* Project Content */}
      <div className="space-y-3">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-bold text-white group-hover:gradient-text transition-all duration-300">
            {title}
          </h3>
          {status && (
            <span className="px-2 py-1 text-xs bg-cyan-600 bg-opacity-30 text-cyan-300 rounded-full border border-cyan-600 border-opacity-40">
              {status}
            </span>
          )}
        </div>
        
        <p className="text-gray-300 text-sm leading-relaxed">
          {description}
        </p>

        {/* Technologies */}
        {technologies && technologies.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 text-xs bg-cyan-500 bg-opacity-20 text-cyan-300 rounded-full border border-cyan-500 border-opacity-30"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
