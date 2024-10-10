'use client'

import { useState, useRef, useEffect } from 'react'
import { Database, Cloud, Server, Brain, Code, Globe } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import 'devicon/devicon.min.css' // 
import skills from '../contents/skills.json';

const getIcon = (iconName) => {
  switch (iconName) {
    case 'Server':
      return <Server className="w-6 h-6 "/>
    ;
    case 'Database':
      return <Database className="w-6 h-6 " />
      ;
    case 'Cloud':
      return <Cloud className="w-6 h-6 text-white" />
    case 'Brain':
      return <Brain className="w-6 h-6" />;
    case 'Code':
      return <Code className="w-6 h-6 " />
    case 'Globe':
      return <Globe className="w-6 h-6" />
    default:
      return null;
  }
};
export default function SkillTree() {
  
  const [activeSkill, setActiveSkill] = useState(null);
  const modalRef = useRef(null);

  

  const handleSkillClick = (index) => {
    setActiveSkill(activeSkill === index ? null : index);

    if (activeSkill !== index) {
      setTimeout(() => {
        const element = document.getElementById('techdetailed');
        if (element) {
          const elementPosition = element.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({ top: elementPosition, behavior: 'smooth' });
        }
      }, 100);
    }
  };

  const handleClose = () => {
    setActiveSkill(null);
    setTimeout(() => {
      const element = document.getElementById('techdetailed');
      if (element) {
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({ top: elementPosition, behavior: 'smooth' });
      }
    }, 100);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setActiveSkill(null);
      }
    };

    if (activeSkill !== null) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [activeSkill]);

  return (
    <section className="py-20">
      <div id="skills" className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-white">Skills</h2>
        <h3 className="text-3xl pt-5 font-bold text-center text-transparent mb-8 bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
          Clickea en ellas para saber más
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-20 mb-8 py-10">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleSkillClick(index)}
            >
              <motion.div className={`w-16 h-16 rounded-full flex items-center justify-center cursor-pointer hover:border-yellow-400 border border-2 ${skill.color}`}>
                {getIcon(skill.icon)}
              </motion.div>
              <h3 className="text-md font-semibold text-white mt-2 text-center">{skill.title}</h3>
            </motion.div>
          ))}
        </div>
        <AnimatePresence>
          {activeSkill !== null && (
            <motion.div
              ref={modalRef}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="w-full bg-purple-900/30 mx-auto rounded-lg p-6 mt-8 shadow-xl"
            >
              <div className="w-full items-center mb-4">
                
               
                <div id="techdetailed">
                  <div className="flex">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${skills[activeSkill].color} mr-4 border-2 border-yellow-500`}>
                      {getIcon(skills[activeSkill].icon)}
                    </div>
                    <button
                      onClick={handleClose}
                      className="-mt-1 text-gray-400 hover:text-gray-200 text-sm focus:outline-none border-1 border-gray-400 rounded-lg hover:bg-gray-700 w-10 h-10"
                    >
                      ✖️
                    </button>
                  </div>
                  <h3 className="text-xl font-bold text-white mt-2">{skills[activeSkill].title}</h3>
                  <p className="text-gray-300 mt-1">{skills[activeSkill].description}</p>
                </div>
              </div>
              <div className="mt-6">
                <h4 className="text-lg font-semibold text-white mb-3">Tecnologías clave:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {skills[activeSkill].technologies.map((tech, index) => (
                    <div key={index} className="bg-gray-700/30 rounded-lg p-4">
                      <div className="flex justify-between items-center mb-2">
                        <div className="flex items-center">
                          {tech.component ? <tech.component className="text-2xl text-white mr-2" /> : <i className={`${tech.iconClass} text-2xl text-white mr-2`} />}
                          <span className="font-medium text-white">{tech.name}</span>
                        </div>
                      </div>
                      <p className="text-gray-300 text-sm hover:text-yellow-400">{tech.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
