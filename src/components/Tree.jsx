import { useState } from 'react';
import { Database, Cloud, Server, Brain, Code } from 'lucide-react';

// Función para obtener el ícono correcto
const getIcon = (iconName) => {
  switch (iconName) {
    case 'Database':
      return <Database className="w-6 h-6" />;
    case 'Cloud':
      return <Cloud className="w-6 h-6" />;
    case 'Server':
      return <Server className="w-6 h-6" />;
    case 'Brain':
      return <Brain className="w-6 h-6" />;
    case 'Code':
      return <Code className="w-6 h-6" />;
    default:
      return null;
  }
};

const skills = [
  {
    icon: 'Database',
    title: 'Stream, Cache, Database',
    description:
      'Redis, Kafka, SQL (Oracle, MySQL, InfluxDB, PostgreSQL), NoSQL (MongoDB, DynamoDB)',
    color: 'bg-blue-500',
  },
  {
    icon: 'Cloud',
    title: 'Cloud & Microservices',
    description:
      'Openshift/Kubernetes, Helm, ServiceMesh, Docker, VMWare, AWS, GCP',
    color: 'bg-green-500',
  },
  {
    icon: 'Server',
    title: 'Operating Systems & Network',
    description:
      'Linux, RHEL, CentOS, SNMP (MIBS, Trap & Polling, Discovery, Backups)',
    color: 'bg-purple-500',
  },
  {
    icon: 'Brain',
    title: 'AI & Machine Learning',
    description:
      'Langchain, Jupyter Notebooks, LLM (HuggingFace, SageMaker, Bedrock, Transformers), RAG, Fine Tuning',
    color: 'bg-red-500',
  },
  {
    icon: 'Code',
    title: 'Development & Automation',
    description:
      'JavaScript (React, Node.js), Python, API & Integrations, Mobile & Web apps, CI/CD',
    color: 'bg-yellow-500',
  },
];

export default function SkillTree() {
  const [activeSkill, setActiveSkill] = useState(null);

  const handleSkillClick = (index) => {
    
    setActiveSkill(activeSkill === index ? null : index); // Toggling the active skill
  };

  return (
    <section className="py-20 bg-gray-900 min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-4">
        <div className="relative">
          <div className="absolute inset-0 flex items-center justify-center ">
            <div className="w-1 h-full bg-gray-700 " /> 
          </div>
          <div className="relative z-10">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="mb-10 flex items-center"
                onClick={() => handleSkillClick(index)}  // Maneja el evento de click
              >
                <div className="flex flex-col items-center w-20 transform hover:scale-105">
                  <div
className={`w-12 h-12 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 ease-in-out ${
    activeSkill === index
      ? 'scale-125 bg-purple-600 text-white shadow-lg border-4 border-yellow-500'
      : skill.color // Mantener el color original cuando no está activo
  }`}                  >
                    {getIcon(skill.icon)}
                  </div>
                  <h3 className="text-sm font-semibold text-white mt-2 text-center">
                    {skill.title}
                  </h3>
                </div>
                
                <div
                  className={`ml-8 bg-purple-900 rounded-lg p-4 max-w-md transition-all duration-500 ease-in-out ${
                    activeSkill === index ? 'opacity-100 shadow-xl' : 'opacity-0 shadow-none '
                  }`}
                  style={{ pointerEvents: activeSkill === index ? 'auto' : 'none' }}  
                >
                  {activeSkill === index && <p className="font-roboto text-gray-100 text-sm ">{skill.description}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}