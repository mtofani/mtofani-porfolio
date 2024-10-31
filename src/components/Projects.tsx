"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github,Code, CircleDollarSign,BookHeart,CircleEllipsis, Link, Zap, Timer, ChevronDown, ChevronUp, Server, SearchCode, Boxes, AudioLines } from "lucide-react"
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
import KeyPoints from "./Keypoints";
import WorkingArea from "./WorkingArea";

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
  "Eventos": <Zap className="h-5 w-5 text-yellow-700" />,
  "Cluster": <Boxes className="h-5 w-5 text-yellow-500" />,
  "Voz": <AudioLines className="h-5 w-5 text-yellow-500" />,
}

const getIconForKeyPoint = (keyPoint: string) => {
  for (const keyword in iconMap) {
    if (keyPoint.toLowerCase().includes(keyword.toLowerCase())) {
      return iconMap[keyword as keyof typeof iconMap];
    }
  }
  return null;
};

export default function Portfolio() {
  const [visibleProjects, setVisibleProjects] = useState(2)
  const [isExpanded, setIsExpanded] = useState(false)
  const [isWorkingArea, setWorkingArea] = useState(true)
  const buttonRefP = useRef<HTMLButtonElement>(null)
  const [hasInteracted, setHasInteracted] = useState(false)

  useEffect(() => {
    if (hasInteracted) {      
      const yOffset = -1000; // Ajusta este valor para controlar cuánto espacio dejar por encima del botón
      const y = buttonRefP.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({top: y, behavior: 'auto'});
    }
  }, [isExpanded])

  const toggleProjects = () => {
    setHasInteracted(true)
    setIsExpanded(!isExpanded)
    setVisibleProjects(isExpanded ? 2 : PROJECTS.length)
  }

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto space-y-10">
        <h2 className="text-4xl font-extrabold text-center relative">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-purple-500">
            Proyectos
          </span>
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-purple-300 to-purple-500 rounded-full" />
        </h2>
        <div className="flex flex-col justify-center items-center transition-transform duration-500 hover:scale-105">
          {isWorkingArea && (
            <WorkingArea title="Ponte el casco!" sub=" Estamos en construcción. 🚧"></WorkingArea>
          )}
        </div>
        <div className="grid lg:grid-cols-2 gap-10">
          {PROJECTS.slice(0, visibleProjects).map((project, index) => (
            <Card key={index} className="group relative flex flex-col bg-purple-950/30 border border-purple-700/30 rounded-xl overflow-hidden transition-all duration-300 hover:border-purple-500/50 hover:shadow-[0_0_15px_rgba(168,85,247,0.15)]">
              <CardHeader className="space-y-4">
                <CardTitle className="text-2xl font-bold bg-gradient-to-r from-white to-purple-100 bg-clip-text text-transparent">
                  {project.title}
                </CardTitle>
                {project.project_tags && (
                  <div className="flex flex-wrap gap-2">
                    {project.project_tags.map((tag, idx) => (
                      <span key={idx} className="px-3 py-1 text-xs font-medium rounded-full bg-purple-500/20 text-purple-200 border border-purple-500/30">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </CardHeader>

              <CardContent className="flex-grow space-y-4">
                <Carousel className="w-full">
                  <CarouselContent>
                    {project.media.map((item, mediaIndex) => (
                      <CarouselItem key={mediaIndex}>
                        <Dialog>
                          <DialogTrigger asChild>
                            {item.type === "image" ? (
                              <div className="relative aspect-video cursor-zoom-in rounded-lg overflow-hidden">
                                <img
                                  src={item.src}
                                  alt={`${project.title} - Image ${mediaIndex + 1}`}
                                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                              </div>
                            ) : (
                              <video
                                src={item.src}
                                controls
                                className="w-full aspect-video rounded-lg"
                              />
                            )}
                          </DialogTrigger>
                          <DialogContent className="max-w-4xl">
                            {item.type === "image" ? (
                              <img
                                src={item.src}
                                alt={`${project.title} - Image ${mediaIndex + 1}`}
                                className="w-full h-full object-contain rounded-lg"
                              />
                            ) : (
                              <video
                                src={item.src}
                                controls
                                className="w-full aspect-video rounded-lg"
                              />
                            )}
                          </DialogContent>
                        </Dialog>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  {project.media.length > 1 && (
                    <>
                      <CarouselPrevious className="left-2 bg-purple-500/80 hover:bg-purple-600 border-none" />
                      <CarouselNext className="right-2 bg-purple-500/80 hover:bg-purple-600 border-none" />
                    </>
                  )}
                </Carousel>

                {project.subtitle && (
                  <h3 className="text-lg font-semibold text-yellow-400/90">{project.subtitle}</h3>
                )}
                
                <p className="text-slate-300 leading-relaxed">
                  {project.description.slice(0, 200)}...
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="link" className="text-yellow-400 text-md hover:underline ml-2 p-2">
                        Ver más<CircleEllipsis className="h-4 w-4 ml-2" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="bg-slate-900 max-w-4xl h-auto py-10">
                    <h3 className="prose-xl text-yellow-500 ">{project.subtitle}</h3>
                      <p className="prose-lg">{project.description}</p>
                      
                    </DialogContent>
                  </Dialog>
                  {project.keyPoints && (
                        <KeyPoints 
                          points={project.keyPoints}
                          getIcon={getIconForKeyPoint}
                        />
                      )}
                </p>

                {project.tags && (
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium text-purple-200">Tecnologías utilizadas</h4>
                    <Tags tags={project.tags} />
                  </div>
                )}
              </CardContent>

              <CardFooter className="flex justify-center h-10">
                {project.github && (
                  <Button
                    variant="outline"
                    className="bg-transparent border-purple-500 text-purple-200 hover:bg-purple-500/20"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                )}
                {project.link && (
                  <Button
                    className="bg-purple-900 text-white text-md hover:bg-purple-600 transition-colors"
                    asChild
                  >
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <Link className="w-4 h-4 mr-2" />
                      Link
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="flex justify-center pt-8">
          {PROJECTS.length > 2 && (
            <Button
              variant="ghost"
              className="text-purple-400 hover:bg-purple-900/20 flex w-min  rounded-lg items-center gap-2"
              onClick={toggleProjects}
              ref={buttonRefP}
            >
              {isExpanded ? (
                <>
                  <span className='text-lg'>Ver menos</span><ChevronUp className="h-4 w-4" />
                </>
              ) : (
                <>
                  <span className='text-lg'>Ver más proyectos</span><ChevronDown className="h-4 w-4" />
                </>
              )}
            </Button>
          )}
        </div>
      </div>
    </section>
  )
}
