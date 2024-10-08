'use client'

import { useState,useRef, useEffect } from 'react'
import { Database, Cloud, Server, Brain, Code, Globe,Activity } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import 'devicon/devicon.min.css' // Importamos la hoja de estilos de Devicon

const skills = [

  {
    icon: 'Server',
    title: 'Telco & Operating Systems',
    description: 'Especialista en la administración de sistemas operativos y redes en el sector de telecomunicaciones, con un fuerte enfoque en la mejora de la eficiencia y el rendimiento.',
    technologies: [
      { name: 'Expertise en Soluciones de Telecomunicaciones', level: 'Intermedio', description: 'Conocimientos en infraestructuras de telecomunicaciones, servicios de Internet y redes.  +13 años de exp en la implementación y gestión de soluciones y plataformas de ISP', iconClass: '' },
      { name: 'Linux', level: 'Experto', description: 'Administración avanzada de sistemas RHEL y CentOS, Bash Scripting, NGINX.', iconClass: 'devicon-linux-plain' },
      { name: 'SNMP', level: 'Avanzado', description: 'Monitoreo y gestión de redes complejas.', iconClass: 'devicon-telecom-plain' },
    ],
    color: 'bg-purple-500',
  },  
  {
    icon: 'Database',
    title: 'Database, Streaming & Cache',
    description: 'Especializado en sistemas de datos de alto rendimiento y escalables.',
    technologies: [
      { name: 'Redis', level: 'Avanzado', description: 'Optimización de caché y estructuras de datos en memoria', iconClass: 'devicon-redis-plain' },
      { name: 'Kafka', level: 'Intermedio', description: 'Diseño de arquitecturas de streaming de datos', iconClass: 'devicon-apachekafka-original' },
      { name: 'Amazon SQS', level: 'Intermedio', description: 'Implementación de colas de mensajes para aplicaciones escalables', iconClass: 'devicon-amazonwebservices-plain' },
      { name: 'Amazon SNS', level: 'Intermedio', description: 'Gestión de notificaciones y mensajes de publicación/suscripción', iconClass: 'devicon-amazonwebservices-plain'},
      { name: 'SQL', level: 'Experto', description: 'Optimización de consultas complejas en Oracle, MySQL, PostgreSQL', iconClass: 'devicon-postgresql-plain' },
      { name: 'NoSQL', level: 'Avanzado', description: 'Modelado de datos para MongoDB y DynamoDB', iconClass: 'devicon-mongodb-plain' },
      
    ],
    color: 'bg-blue-500',
  },
  {
    icon: 'Cloud',
    title: 'Cloud & Microservices',
    description: 'Arquitecto de soluciones certificado en AWS , cloud nativas y microservicios.',
    technologies: [
      { name: 'Kubernetes', level: 'Avanzado', description: 'Orquestación de contenedores y despliegue de aplicaciones manejando herramientas como Helm, en entornos tanto de nube como on-premise.', iconClass: 'devicon-kubernetes-plain' },
      { name: 'OpenShift', level: 'Avanzado', description: 'Orquestacion de pods, ciclo de vida, optimizando el despliegue y escalado de aplicaciones con alta disponibilidad.', iconClass: 'devicon-openshift-plain' }
      ,{ name: 'Docker', level: 'Experto', description: 'Creación de imágenes custom y flujos CI/CD', iconClass: 'devicon-docker-plain' },
      { name: 'VMware', level: 'Intermedio', description: 'Virtualización y gestión eficiente de recursos en entornos híbridos y multicloud.', iconClass: 'devicon-vsphere-plain' },
      ,
      { name: 'AWS', level: 'Avanzado', description: 'Diseño de arquitecturas serverless, gestión de servicios y automatización de procesos utilizando productos clave como S3, EC2, Lambda y RDS, garantizando soluciones escalables', iconClass: 'devicon-amazonwebservices-plain' },
      { name: 'GCP', level: 'Intermedio', description: ' Experiencia en implementación y optimización soluciones en la nube, instancias de máquinas virtuales y servicios de almacenamiento.', iconClass: 'devicon-googlecloud-plain' },
    ],
    color: 'bg-teal-500',  },
 
  
  {
    icon: 'Brain',
    title: 'Machine Learning & AI',
    description: 'Te ayudamos a integrar IA en tu empresa usando herramientas como: OpenAI, Bedrock y SageMaker. Implementamos modelos y bots a medida para optimizar procesos y hacer que todo funcione de manera más eficiente."',
    technologies: [
     
      { name: 'Modelos de Lenguaje', level: 'Intermedio', description: 'Personaliza tu propio GPT con documentos utilizando Hugging Face y SageMaker.', iconClass: 'devicon-huggingface-plain' },
      { name: 'Transformers', level: 'Avanzado', description: 'Ajuste y creación de modelos de Transformers para diversas aplicaciones.', iconClass: 'devicon-transformers-plain' },
      { name: 'Recuperación Avanzada', level: 'Intermedio', description: 'Optimiza la IA generativa con RAG y Fine Tuning.', iconClass: 'devicon-retrieval-plain' },
      { name: 'Prototipos Interactivos', level: 'Intermedio', description: 'Construcción de aplicaciones de IA generativa con Streamlit y Gradio.', iconClass: 'devicon-streamlit-plain' },
      { name: 'Jupyter Notebooks', level: 'Avanzado', description: 'Entorno ideal para visualización y desarrollo de modelos.', iconClass: 'devicon-jupyter-plain' },
      { name: 'Langchain', level: 'Intermedio', description: 'Integra modelos de lenguaje en flujos de trabajo efectivos.', iconClass: 'devicon-langchain-plain' },
      { name: 'TensorFlow', level: 'Avanzado', description: 'Creación de modelos de aprendizaje profundo.', iconClass: 'devicon-tensorflow-plain' },
      { name: 'PyTorch', level: 'Intermedio', description: 'Modelos flexibles y eficientes para tareas específicas.', iconClass: 'devicon-pytorch-plain' },
    ],
    color: 'bg-red-500',
  },
  {
    icon: 'Code',
    title: 'Development',
    description: 'Desarrollo de aplicaciones, web & mobile, landings y servicios backend.',
    technologies: [
      { name: 'Python', level: 'Intermedio', description: 'Construcción de APIs eficientes y flexibles usando Flask, FastAPI.', iconClass: 'devicon-python-plain' },
      { name: 'React', level: 'Experto', description: 'Desarrollo de interfaces  modernas y responsivas utilizando React, aplicando conceptos de componentes, hooks y gestión de estado', iconClass: 'devicon-react-original' },
      { name: 'React Native', level: 'Experto', description: 'Desarrollo apps móviles con Expo.', iconClass: 'devicon-react-original' },

      { name: 'Astro', level: 'Experto', description: 'Desarrollo de webs staticas, portafolios etc..', iconClass: 'devicon-astro-plain' }, 
      { name: 'Node.js', level: 'Avanzado', description: 'Desarrollo de aplicaciones backend escalables.', iconClass: 'devicon-nodejs-plain' },
      { name: 'GraphQL', level: 'Intermedio', description: 'Construcción de APIs eficientes y flexibles.', iconClass: 'devicon-graphql-plain' },
      { 
        name: 'Express.js', 
        level: 'Intermedio', 
        description: 'Desarrollo de APIs backend robustas y escalables, facilitando la creación de servidores y gestión de rutas.', 
        iconClass: 'devicon-express-original' 
      }],
    color: 'bg-green-500',
  },
  {
    icon: 'Globe',
    title: 'Automation & DevOps ',
    description: 'Implementación de prácticas de DevOps y CI/CD.',
    technologies: [
      { name: 'Pipelines', level: 'Avanzado', description: 'Automatización de flujos de trabajo de integración continua en CircleCI, Github Actions, GitLab, y AWS Codepipeline', iconClass: 'devicon-jenkins-plain' },
      { name: 'Terraform', level: 'Intermedio', description: 'Infraestructura como código y gestión de recursos', iconClass: 'devicon-terraform-plain' },
      ,{ name: 'Ansible', level: 'Avanzado', description: 'Automatización de configuraciones y despliegues', iconClass: 'devicon-ansible-plain' },

      { name: 'QA Automation', level: 'Avanzado', description: 'Testing e2e automatizado y escalable hasta cientos de casos de prueba por segundo', iconClass: 'devicon-cypressio-plain' },
    ],
    color: 'bg-indigo-500',
  },
  {
    icon: 'Activity',
    title: 'Observability',
    description: 'Diseño y Optimizacion de Arquitecturas de Monitoreo para áreas de Ingeniería y Operaciones',

  technologies: [
      { 
        name: 'Gestión de Logs', 
        level: 'Intermedio', 
        description: 'Experiencia en el análisis y manejo de registros utilizando ElasticSearch, Fluentd y LOKI, optimizando la recopilación y el análisis de datos para una rápida identificación de problemas.', 
        iconClass: '' 
      },
      { 
        name: 'Microservicios', 
        level: 'Avanzado', 
        description: 'Dominio en herramientas como Zabbix, Prometheus y Grafana, que facilitan el seguimiento y la visualización de métricas',
        iconClass: '' 
      },
      { 
        name: 'Monitoreo de Infraestructura y Redes', 
        level: 'Intermedio', 
        description: 'Conocimiento en soluciones como IBM SevOne NPM y PandoraFMS, proporcionando análisis detallado del rendimiento de la infraestructura y ayudando a optimizar la confiabilidad del servicio.', 
        iconClass: '' 
      },
     
    ],
    color: 'bg-orange-400',
  }, 
  // Más categorías...
]

const getIcon = (iconName) => {
  switch (iconName) {
    case 'Database':
      return <Database className="w-6 h-6" />
    case 'Cloud':
      return <Cloud className="w-6 h-6" />
    case 'Server':
      return <Server className="w-6 h-6" />
    case 'Brain':
      return <Brain className="w-6 h-6" />
    case 'Code':
      return <Code className="w-6 h-6" />
    case 'Globe':
      return <Globe className="w-6 h-6" />
    case 'Activity':
      return <Activity className="w-6 h-6" />
    default:
      return null
  }
}

export default function SkillTree() {
  const [activeSkill, setActiveSkill] = useState(null)
  const modalRef = useRef(null); 
  const handleSkillClick = (index) => {
    setActiveSkill(activeSkill === index ? null : index)

    if (activeSkill !== index) {
      setTimeout(() => {
        const element = document.getElementById('techdetailed');
        if (element) {
          // Obtener a posición del elemento
          const elementPosition = element.getBoundingClientRect().top + window.scrollY;
          
          window.scrollTo({
            top: elementPosition , // Ajusta el valor si necesitas un desplazamiento adicional
            behavior: 'smooth', // Desplazamiento suave
          });
        }
      }, 100); // Puedes ajustar el tiempo de espetiempo en relación a la animación
    }
  }

  const handleClose = () => {
    setActiveSkill(null);
    setTimeout(() => {
      const element = document.getElementById('techdetailed');
      if (element) {
        // Obtener a posición del elemento
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        
        window.scrollTo({
          top: elementPosition , // Ajusta el valor si necesitas un desplazamiento adicional
          behavior: 'smooth', // Desplazamiento suave
        });
      }
    }, 100); // Puedes ajustar el tiempo de espera si es necesario
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setActiveSkill(null); // Cierra el modal si haces clic fuera de él
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
      <div id ="skills" className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-white">Skills</h2>
        <h3 className="text-lg font-bold text-center text-transparent  mb-8  bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Clickea en ellas para saber mas</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-20  mb-8 py-10">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className={`w-16 h-16 rounded-full flex items-center justify-center cursor-pointer hover:border-yellow-400 border-2  ${skill.color}`}
                onClick={() => handleSkillClick(index)}
              > 
                {getIcon(skill.icon)}
              </motion.div>
              <h3 className="text-md font-semibold text-white mt-2 text-center ">{skill.title}</h3>
              
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
              className="w-full bg-purple-900/30 mx-auto  rounded-lg p-6 mt-8 shadow-xl"
            >
              <div className="w-full items-center mb-4">
                
               
                <div id="techdetailed">
                <div className="flex">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${skills[activeSkill].color} mr-4`}>
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
                    <div key={index} className="bg-gray-700/30  rounded-lg p-4 ">
                      
                      <div   className="flex justify-between items-center mb-2 ">
                        <div className="flex items-center ">
                          <i className={`${tech.iconClass} text-2xl text-white mr-2 `} /> {/* Ícono de Devicon */}
                          <span className="font-medium text-white ">{tech.name}</span>
                        </div>
                     
                      </div >
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
  )
}
