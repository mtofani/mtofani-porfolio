import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Github, Link, Zap, Timer, CircleDollarSign, BookHeart,Code, Server, SearchCode, Boxes } from "lucide-react"
import PROJECTS from '../contents/projects.json'
import Tags from "./Tags"

const iconMap = {
  "Multitenancy observability": <Server className="h-5 w-5" />,
  "Dev": <Code className="h-5 w-5" />,
  "Opensource": <Code className="h-5 w-5" />,
  "Local": <Server className="h-5 w-5" />, 
   "variables": <Zap className="h-5 w-5" />,
  "Investigación y desarrollo de plataformas innovadoras": <SearchCode className="h-5 w-5" />,
  "costo": <CircleDollarSign className="h-5 w-5" />,
  "Datos seguros": <BookHeart className="h-5 w-5" />,  
  "seg": <Timer className="h-5 w-5" />,
  "Eventos" : <Zap className="h-5 w-5" />,
  "Cluster" : <Boxes className="h-5 w-5" />,
  
  
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
  link?: string,
  github?: string
  media: {
    type: "image" | "video"
    src: string
  }
  tags?: Tag[]
}




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
          <Card key={index} className="flex flex-grow flex-col justify-between overflow-hidden  bg-purple-700/10 p-1 ">
            <CardHeader>
              <CardTitle className="text-2xl">{project.title}</CardTitle>
            </CardHeader>
            <CardContent className="px-10">
              <div className="space-y-12">
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
                  <p className="text-sm mt-2 mb-8 leading-relaxed">{project.description}</p>
                  <Card id="keypoints" className="mt-5 grid md:grid-cols-4 items-center justify-around bg-purple-700/15 p-2">
                        
                  { project.keyPoints?.map((keypoint,index) => (
                      <CardContent className="flex flex-col items-center justify-center text-center text-xs gap-1 p-2">
                   
                      {getIconForKeyPoint(keypoint)}
                       {keypoint}
                      
                       </CardContent>


                  )
                )

                  }
                  
                   </Card>
                   </div>
                  <div className="flex flex-col border-t-yellow-500 ">
                      <div className="items-center">Tecnologías utilizadas
                      <Tags tags={project?.tags} />
                      </div>
                  </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-center">
              {project.github && (
                <Button variant="outline" asChild>
                  <a href={project.github ?? '#'} target="_blank" rel="noopener noreferrer">
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
