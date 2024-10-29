"use client"

import { useState } from "react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, Link, Zap, Timer, CircleDollarSign, BookHeart, Code, Server, SearchCode, Boxes, AudioLines } from "lucide-react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"
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
  "Voz" : <AudioLines className="h-5 w-5 text-yellow-500" />,
}

const getIconForKeyPoint = (keyPoint: string) => {
  for (const keyword in iconMap) {
    if (keyPoint.toLowerCase().includes(keyword.toLowerCase())) {
      return iconMap[keyword as keyof typeof iconMap];
    }
  }
  return null;
};

type MediaItem = {
  type: string,
  src: string
}

type Project = {
  title: string
  description: string
  hide: boolean
  subtitle?: string
  project_tags?: string[],
  keyPoints?: string[]
  link?: string
  github?: string
  media: MediaItem[]
  tags?: string[]
}

export default function Portfolio() {
  const [visibleProjects, setVisibleProjects] = useState(3)
  const [isExpanded, setIsExpanded] = useState(false)

  const toggleProjects = () => {
    if (isExpanded) {
      setVisibleProjects(2)
    } else {
      setVisibleProjects(PROJECTS.length)
    }
    setIsExpanded(!isExpanded)
  }

  return (
    <div className="space-y-5 container mx-auto">
      <h3 className="text-4xl font-extrabold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-500">
        Proyectos
      </h3>
      <div className="grid gap-4 md:grid-cols-2">
        {PROJECTS.slice(0, visibleProjects).map((project: Project, index: number) => (
          <Card key={index} className="flex flex-col justify-around overflow-hidden bg-purple-900/10 p-1 border border-purple-700/40 transition-colors duration-2000 hover:border-purple-700">
            <CardHeader className="mb-1">
              <CardTitle className="text-2xl">{project.title}</CardTitle>
              <div id="project-tags" className="flex flex-row border p-1 justify-start gap-2 ">
              {project.project_tags?.map((ptag, index) => (
                
                  <span className="p-2 border border-purple-700 rounded-lg text-[10px] bg-slate-700 hover:scale-105">{ptag}</span>
               

              ))}
               </div>
            </CardHeader>
            <CardContent className="flex flex-grow items-start px-2">
             
              <div className="space-y-5 w-full ">
              
                <Carousel className="w-full">
                  <CarouselContent>
                    {project.media.map((item, mediaIndex) => (
                      <CarouselItem key={mediaIndex}>
                        {item.type === "image" ? (
                          <Dialog>
                            <DialogTrigger asChild>
                              <img
                                src={item.src}
                              
                                alt={`${project.title} - Image ${mediaIndex + 1}`}
                                className="w-full h-full object-cover aspect-video rounded-lg cursor-zoom-in transition-transform duration-300 hover:scale-105"
                              />
                            </DialogTrigger>
                            <DialogContent className="top-1/2 overflow-y-scroll max-w-[90vw] max-h-[90vh] p-0">
                              
                              <img
                                src={item.src}
                                alt={`${project.title} - Image ${mediaIndex + 1} (Zoomed)`}
                                className="w-full h-full object-contain rounded-lg"
                              />
                            </DialogContent>
                          </Dialog>
                        ) : (
                          <video
                            src={item.src}
                            controls
                            className="w-full h-full object-cover aspect-video rounded-lg"
                          >
                            Your browser does not support the video tag.
                          </video>
                        )}
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  { project.media.length > 1 && (
                  <div>
                  <CarouselPrevious  className="bg-purple-500 absolute left-0 top-1/2"/>
                  <CarouselNext  className="bg-purple-500 absolute right-0 top-1/2" />
                  </div>
                  )
                  }
                </Carousel>
              
                <div className="px-1">
                  <h3 className="text-semibold text-yellow-500">{project.subtitle}</h3>
                  <p className="text-sm p-1 mt-2 mb-2">{project.description}</p>
                  <Card id="keypoints" className="grid md:grid-cols-4 grid-cols-2  bg-purple-700/15 mt-5 ">
                    {project.keyPoints?.map((keypoint, kIndex) => (
                      <CardContent key={kIndex} className="flex flex-col p-2  flex-grow items-center justify-around text-center text-xs">
                        {getIconForKeyPoint(keypoint)}
                        <span className="p-1 tracking-wide"id="kpoint">{keypoint}</span>
                      </CardContent>
                    ))}
                  </Card>
                </div>
                <div className="flex flex-col md:items-start items-center justify-around p-2">
                  <div className="items-center p-2">
                    Tecnologías utilizadas
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
        <Button onClick={toggleProjects} className="bg-dark-700 border border-purple-500  text-white text-center hover:bg-white hover:text-black rounded-full">
          {isExpanded ? 'Ver menos proyectos' : 'Ver más proyectos'}
        </Button>
      </div>
    </div>
  )
}