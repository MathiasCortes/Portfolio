import React from 'react';
import Icon from '../atoms/SvgIcon';

const SkillCard = ({
  name,
  icon,
  category = "technical",
  description = "",
  technologies = []
}) => {
  const getCategoryColor = () => {
    switch (category) {
      case 'frontend':
        return 'from-cyan-400 to-gray-600';
      case 'backend':
        return 'from-cyan-500 to-gray-700';
      case 'database':
        return 'from-cyan-300 to-gray-800';
      case 'design':
        return 'from-cyan-400 to-gray-600';
      case 'tools':
        return 'from-cyan-400 to-gray-600';
      default:
        return 'from-cyan-400 to-gray-600';
    }
  };

  return (
    <div className="glass-morphism p-6 hover:scale-105 transition-transform">
      <div className="flex items-center space-x-3 mb-4">
        {icon && (
          <div className={`p-2 bg-gradient-to-r ${getCategoryColor()} rounded-lg`}>
            <Icon name={icon} size={20} />
          </div>
        )}
        <h3 className="text-xl font-bold text-white">{name}</h3>
      </div>

      {description && (
        <p className="text-gray-300 text-sm leading-relaxed mb-4">{description}</p>
      )}

      {technologies && technologies.length > 0 && (
        <div className="space-y-2">
          <h4 className="text-white font-semibold mb-2">Tecnologías relacionadas:</h4>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, idx) => (
              <span key={idx} className="px-2 py-1 text-xs bg-gray-800 text-cyan-300 rounded">
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SkillCard;
