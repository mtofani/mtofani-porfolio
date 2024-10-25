import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Github, Link, Zap, Timer, CircleDollarSign, BookHeart,Code, Server, SearchCode, Boxes } from "lucide-react"
import PROJECTS from '../contents/projects.json'
import Tags from "./Tags"

const iconMap = {
  "Multitenancy observability": <Server className="h-5 w-5" />,
  "Dev": <Code className="h-5 w-5 text-yellow-300" />,
  "Opensource": <Code className="h-5 w-5" />,
  "Local": <Server className="h-5 w-5" />, 
   "variables": <Zap className="h-5 w-5" />,
  "Investigación y desarrollo de plataformas innovadoras": <SearchCode className="h-5 w-5" />,
  "costo": <CircleDollarSign className="h-5 w-5 text-green-500" />,
  "Datos seguros": <BookHeart className="h-5 w-5 text-yellow-500" />,  
  "seg": <Timer className="h-5 w-5" />,
  "Eventos" : <Zap className="h-5 w-5 text-yellow-700" />,
  "Cluster" : <Boxes className="h-5 w-5 text-yellow-500" />,
  
  
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
    <div className="space-y-5 container mx-auto ">
      <h3 className="text-4xl font-extrabold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-500">
        Proyectos
      </h3>
      <div className="grid gap-4 md:grid-cols-2 ">
        {PROJECTS.slice(0, visibleProjects).map((project, index) => (
          <Card key={index} className="flex flex-col items-center justify-around overflow-hidden  bg-purple-700/10 p-1 border border-purple-700/40 transition-colors duration-2000 hover:border-purple-700">
            <CardHeader className="mb-5">
              <CardTitle className="text-2xl ">{project.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-grow items-start px-8">
              <div className="space-y-5 ">
                <div className="flex flex-row aspect-video overflow-hidden rounded-lg">
                  {project.media.type === "image" ? (
                    <img
                      src={project.media.src}
                      alt={project.title}
                      className=" w-full h-full transition-transform duration-300 hover:scale-105"
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
                  <p className="text-sm p-1 leading-relaxed">{project.description}</p>
                  <Card id="keypoints" className="grid md:grid-cols-4 grid-cols-2  items-center gap-2 bg-purple-700/15 mt-10 pt-4">
                        
                  { project.keyPoints?.map((keypoint,index) => (
                      <CardContent className="flex flex-col flex-grow items-center justify-center text-center text-xs">
                   
                      {getIconForKeyPoint(keypoint)}
                      <span id="kpoint">
                       {keypoint}
                       </span>
                      
                       </CardContent>


                  )
                )

                  }
                  
                   </Card>
                   </div>
                  <div className="flex flex-col md:items-start items-center  border-t-yellow-500 ">
                      <div className="items-center p-2 mt-10">Tecnologías utilizadas
                      <Tags tags={project?.tags} />
                      </div>
                  </div>
              </div>
            </CardContent>
            <CardFooter className="flex p-1 justify-center">
              {project.github && (
                <Button variant="outline" asChild>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </a>
                </Button>
              )}
              {project.link && (
                <Button className="flex p-2 text-white border border-purple-500 bg-dark-700 hover:scale-105 hover:bg-purple-700" asChild>
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <Link className="w-4 h-4 mr-2 " />
                    Ver más
                  </a>
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
      <div className="flex justify-center ">
        <Button onClick={toggleProjects} className="bg-transparent-600 border border-dark-700 hover:bg-purple-700 text-white text-center">
        {isExpanded ? 'Ver menos proyectos' : 'Ver más proyectos'}
       </Button>
  </div>
      
      
      
    </div>
  )
}
