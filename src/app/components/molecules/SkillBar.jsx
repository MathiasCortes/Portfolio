import React, { useState, useEffect, useRef } from 'react';
import Icon from '../atoms/SvgIcon';

const SkillBar = ({ 
  name, 
  level, 
  icon,
  category = "technical",
  delay = 0 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedLevel, setAnimatedLevel] = useState(0);
  const skillRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setTimeout(() => {
            setAnimatedLevel(level);
          }, delay);
        }
      },
      { threshold: 0.1 }
    );

    if (skillRef.current) {
      observer.observe(skillRef.current);
    }

    return () => observer.disconnect();
  }, [level, delay]);

  const getCategoryColor = () => {
    switch (category) {
      case 'frontend':
        return 'from-cyan-400 to-gray-600';
      case 'backend':
        return 'from-cyan-500 to-gray-700';
      case 'database':
        return 'from-cyan-300 to-gray-800';
      case 'tools':
        return 'from-cyan-600 to-black';
      default:
        return 'from-cyan-400 to-gray-600';
    }
  };

  return (
    <div ref={skillRef} className="skill-item space-y-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          {icon && (
            <div className="p-2 glass-morphism rounded-lg">
              <Icon name={icon} size={20} />
            </div>
          )}
          <span className="text-white font-medium">{name}</span>
        </div>
        <span className="text-cyan-400 font-semibold">{level}%</span>
      </div>
      
      <div className="skill-bar">
        <div 
          className={`skill-progress bg-gradient-to-r ${getCategoryColor()}`}
          style={{ 
            width: isVisible ? `${animatedLevel}%` : '0%',
            transitionDelay: `${delay}ms`
          }}
        />
      </div>
    </div>
  );
};

export default SkillBar;
