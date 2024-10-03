// src/components/ExperienceCarousel.jsx
import React from 'react';
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { CloudIcon, BrainCircuitIcon, RocketIcon } from 'lucide-react'

const iconComponents = {
  CloudIcon,
  BrainCircuitIcon,
  RocketIcon
}

const ExperienceCarousel = ({ experiences }) => {
  return (
    <Carousel className="w-full">
      <CarouselContent>
        {experiences.map((exp, index) => {
          const IconComponent = iconComponents[exp.icon];
          return (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card className="bg-gray-800 text-white hover:bg-gray-700 transition-all duration-300 transform hover:scale-105">
                  <CardContent className="flex flex-col items-start p-6">
                    <div className="mb-4">
                      <IconComponent className={`w-12 h-12 ${exp.color}`} />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{exp.titulo}</h3>
                    <p className="text-gray-300">{exp.descripcion}</p>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 bg-white text-gray-800" />
      <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 bg-white text-gray-800" />
    </Carousel>
  );
};

export default ExperienceCarousel;