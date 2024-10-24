import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Github, Link, Zap, Timer, CircleDollarSign, BookHeart,Code, Server, SearchCode } from "lucide-react"

const iconMap = {
  "Multitenancy observability": <Server className="h-15 w-15" />,
  "Dev": <Code className="h-15 w-15" />,
  "Opensource": <Code className="h-15 w-15" />,
  "Local": <Server className="h-15 w-15" />, 
   "variables": <Zap className="h-15 w-15" />,
  "Investigación y desarrollo de plataformas innovadoras": <SearchCode className="h-15 w-15" />,
  "costo": <CircleDollarSign className="h-15 w-15" />,
  "Datos seguros": <BookHeart className="h-15 w-15" />,  
  "seg": <Timer className="h-15 w-15" />,
  
}

const getIconForKeyPoint = (keyPoint) => {
  // Iteramos sobre las claves del iconMap
  for (const keyword in iconMap) {
    const icon = iconMap[keyword]; // Accedemos al icono usando la clave
    // Si el keyPoint incluye la palabra clave (no es un match exacto)
    if (keyPoint.toLowerCase().includes(keyword.toLowerCase())) {
      return icon;
    }
  }
  // Si no hay coincidencias, devolvemos null
  return null;
};

type Tag = {
  name: string
  class: string
  icon: React.ComponentType<{ className?: string }>
}

type Project = {
  title: string
  description: string
  hide: boolean,
  subtitle?: string,
  keyPoints?: string[],
  link?: string
  github?: string
  media: {
    type: "image" | "video"
    src: string
  }
  tags: Tag[]
}

const TAGS = {
  NEXT: {
    name: "Next.js",
    class: "bg-black text-white",
    icon: ({ className }: { className?: string }) => (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.573 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z" />
      </svg>
    ),
  },
  TAILWIND: {
    name: "Tailwind CSS",
    class: "bg-[#003159] text-white",
    icon: ({ className }: { className?: string }) => (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" />
      </svg>
    ),
  },
  
    GPON: {
    name: "GPON",
    class: "bg-[#003159] text-white",
    icon: ({ className }: { className?: string }) => (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" />
      </svg>
    ),
    
   },
   PYTHON: {
    name: "PYTHON",
    class: "bg-[#003159] text-white",
    icon: ({ className }: { className?: string }) => (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" />
      </svg>
    ),
    
   },
   HUGGINGFACE: {
    name: "HUGGING FACE",
    class: "bg-[#003159] text-white",
    icon: ({ className }: { className?: string }) => (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" />
      </svg>
    ),
    
   },
   
   
  
}

const PROJECTS: Project[] = [
  {
    title: "Management & Diseño de Arquitectura",
    
    subtitle: " 🏆 Caso de Éxito: IPLAN - PandoraFMS - Diseño de Solución, Personalización e Integraciones",
    hide: false,
    description:
      "Proyecto de reemplazo de la solución Fault & Performance en IPLAN con PandoraFMS, monitoreando +3000 equipos, desde el backbone del ISP hasta hardware específico de DataCenter. Desarrollé plugins personalizados, como notificaciones en Telegram, también integraciones para Discovery SNMP, API, SelfMonitoring, QA Automation y Webhooks, incorporados luego a la librería oficial de Artica.",
    keyPoints:['65K variables por segundo', '30-40K traps diarios y storms de 100/seg' ,'Dev & integraciones'],
    link: "https://pandorafms.com/es/casos-de-clientes/iplan/",
    media: {
      type: "image",
      src: "/PandoraFMS-Consola.jpg?height=450&width=800",
    },
    tags: [TAGS.GPON],
  },
  {
    title: "IA - RAG CHAT - Chat con tus documentos",
    subtitle: "🤖 RAG Chat - LLM OpenSource",
    hide: false,
    description:
   "RAG Chat es un prototipo funcional que garantiza la privacidad, utilizando un modelo LLM open source en Local. Permite búsquedas vectoriales rápidas con FAISS, subida de archivos y ajuste de parámetros, funcionando eficientemente en CPU. Desarrollado con Streamlit y Python para un control total de los datos",
   keyPoints:['Opensource', 'Sin costo de suscripcion/uso' ,'LLM Local', "Datos seguros y privados"],

    media: {
      type: "video",
      src: "/demo.mp4",
    },
    tags: [TAGS.PYTHON, TAGS.HUGGINGFACE],
  },
  {
    title: "IA - RAG CHAT 2 - Chat con tus documentos",
    subtitle: "🤖 RAG Chat - LLM OpenSource",
    hide: false,
    description:
   "RAG Chat es un prototipo funcional que garantiza la privacidad, utilizando un modelo LLM open source (Llama-3.2-1B-Instruct) alojado localmente con Hugging Face. Permite búsquedas vectoriales rápidas con FAISS, subida de archivos y ajuste de parámetros, funcionando eficientemente en CPU. Desarrollado con Streamlit y Python para un control total de los datos",
   keyPoints: [
      "Arquitectura de monitoreo",
      "Automatización de integraciones",
      "Optimización de eficiencia operativa"
    ],

    media: {
      type: "video",
      src: "/demo.mp4",
    },
    tags: [TAGS.PYTHON, TAGS.HUGGINGFACE],
  },
  {
    title: "IA - RAG CHAT 3 - Chat con tus documentos",
    subtitle: "🤖 RAG Chat - LLM OpenSource",
    hide: false,
    description:
   "RAG Chat es un prototipo funcional que garantiza la privacidad, utilizando un modelo LLM open source (Llama-3.2-1B-Instruct) alojado localmente con Hugging Face. Permite búsquedas vectoriales rápidas con FAISS, subida de archivos y ajuste de parámetros, funcionando eficientemente en CPU. Desarrollado con Streamlit y Python para un control total de los datos",
 
    media: {
      type: "video",
      src: "/demo.mp4",
    },
    tags: [TAGS.PYTHON, TAGS.HUGGINGFACE],
  },
]
export default function Portfolio() {
  const [visibleProjects, setVisibleProjects] = useState(2)
  const [isExpanded, setIsExpanded] = useState(false);

const toggleProjects = () => {
  if (isExpanded) {
    // Si está expandido, colapsa la lista de proyectos, mostrando solo un número limitado
    setVisibleProjects(2);
  } else {
    // Si no está expandido, muestra todos los proyectos
    setVisibleProjects(PROJECTS.length);
  }
  // Alterna el estado de isExpanded
  setIsExpanded(!isExpanded);
};

  const loadMore = () => {
    setVisibleProjects(prevVisible => Math.min(prevVisible + 2, PROJECTS.length))
  }

  return (
    <div className="space-y-5 container mx-auto px-4">
      <h3 className="text-4xl font-extrabold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-500">
        Proyectos
      </h3>
      <div className="grid gap-4 md:grid-cols-2">
        {PROJECTS.slice(0, visibleProjects).map((project, index) => (
          <Card key={index} className="overflow-hidden bg-purple-700/10 p-1 flex flex-col">
            <CardHeader>
              <CardTitle className="text-lg">{project.title}</CardTitle>
            </CardHeader>
            <CardContent className="p-4 flex-grow">
              <div className="space-y-6">
                <div className="relative aspect-video overflow-hidden rounded-lg">
                  {project.media.type === "image" ? (
                    <img
                      src={project.media.src}
                      alt={project.title}
                      className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                    />
                  ) : (
                    <video
                      src={project.media.src}
                      controls
                      className="w-full h-full object-cover"
                    >
                      Your browser does not support the video tag.
                    </video>
                  )}
                </div>
                <div>
                  <h3 className="text-semibold text-yellow-500">{project.subtitle}</h3>
                  <p className="text-sm mb-4 mt-2 leading-relaxed">{project.description}</p>
                  <div className="mt-5 mb-5" id="keypoints">
                  <Card className="h-1/3 overflow-hidden bg-purple-700/15 border border-purple-700 flex flex-row mb-3 px-3">
                        
                  { project.keyPoints?.map((keypoint,index) => (
                      <CardContent className="p-2 gap-2 flex flex-wrap items-center justify-center text-center text-xs">
                     
                      {getIconForKeyPoint(keypoint)}
                       {keypoint}
                       </CardContent>
                     
                  )
                )

                  }
                  
                   </Card>
                   </div>
                  <div className="flex flex-wrap gap-2 mb-4 mt-3">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className={tag.class}>
                        <tag.icon className="w-4 h-4 mr-1" />
                        {tag.name}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-center gap-4">
              {project.github && (
                <Button variant="outline" asChild>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </a>
                </Button>
              )}
              {project.link && (
                <Button className="text-white border border-purple-500 bg-dark-700 hover:scale-105 hover:bg-purple-700" asChild>
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <Link className="w-4 h-4 mr-2" />
                    Ver más
                  </a>
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
      <div className="flex justify-center">
        <Button onClick={toggleProjects} className="bg-transparent-600 border border-dark-700 hover:bg-purple-700 text-white text-center">
        {isExpanded ? 'Ver menos proyectos' : 'Ver más proyectos'}
       </Button>
  </div>
      
      
      
    </div>
  )
}
