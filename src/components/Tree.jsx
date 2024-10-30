'use client'

import { useState, useRef, useEffect } from 'react'
import { Database, Cloud, Server, Brain, Code, Globe, Network, EthernetPort, Bot, Wrench, Workflow, LayoutPanelTop} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import 'devicon/devicon.min.css' // 
import skills from '../contents/skills.json';


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


  const IconHandler = ({ iconClass, component }) => {
    // Mapeo de nombres de componentes a componentes de Lucide
    const getLucideComponent = (componentName) => {
      const components = {
        Network: Network,
        EthernetPort: EthernetPort,
        Cloud: Cloud,
        Server: Server,
        Globe: Globe,
        Code: Code,
        Brain: Brain,
        Database: Database,
        Bot: Bot,
        Wrench: Wrench,
        Workflow: Workflow,
        LayoutPanelTop: LayoutPanelTop
      };
      
      return components[componentName];
    };
  
    // Si hay un componente especificado, renderizar el componente de Lucide
    if (component) {
      const LucideComponent = getLucideComponent(component);
      if (LucideComponent) {
        return <LucideComponent className="text-2xl text-white" />;
      }
    }
  
    // Si hay una clase de icono, renderizar el icono de devicon
    if (iconClass) {
      return <i className={`${iconClass} text-2xl text-white mr-2`} />;
    }
  
    // Fallback en caso de que no haya ni componente ni clase de icono
    return null;
  };

  return (
    <section className="py-10">
      <div id="skills" className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-white">Skills</h2>
        <h3 className="text-2xl pt-2 font-bold text-center text-transparent mb-8 bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 animate-pulse">
        Clickea para saber más  
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
              <motion.div className={`w-16 h-16 rounded-full border-2 border-gray-700 flex items-center justify-center cursor-pointer hover:border-yellow-400 border border-2 ${skill.color}`}>
                <IconHandler iconClass={skill.icon} component={skill.iconComponent}  />
              </motion.div>
              <h3 
               onClick={() => handleSkillClick(index)}
               className="text-xl font-semibold text-white mt-2 text-center">{skill.title}</h3>
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
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${skills[activeSkill].color} mr-4 border-2 border-yellow-500 p-2`}>
                      <IconHandler component={skills[activeSkill].iconComponent}></IconHandler>
                      
                    </div>
                    <button
                      onClick={handleClose}
                      className="-mt-1 text-gray-400 hover:text-gray-200 text-sm focus:outline-none border-1 border-gray-400 rounded-lg hover:bg-gray-700 w-10 h-10"
                    >
                      ✖️
                    </button>
                  </div>
                  <h3 className="text-2xl pt-3 font-bold text-transparent mb-2 bg-clip-text bg-gradient-to-r from-yellow-400">{skills[activeSkill].title}</h3>
                  <p className="prose text-md text-gray-300 p-1">{skills[activeSkill].description}</p>
                </div>
              </div>
              <div className="mt-6">
                <h4 className="text-md font-semibold text-white mb-3">Tecnologías clave:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {skills[activeSkill].technologies.map((tech, index) => (
                    <div key={index} className="bg-gray-700/30  rounded-lg p-3 prose">
                      <div className="flex">
                        <div className="flex items-center">
                        <IconHandler iconClass={tech.iconClass} component={tech.component} />

                          <span className="text-lg text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-white mx-1.5 ">{tech.name}</span>
                        </div>
                      </div>
                      <p className=" text-gray-300 text-sm hover:text-yellow-400">{tech.description}</p>
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
