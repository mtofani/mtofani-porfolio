import React from 'react';
import PROJECTS from '../contents/projects.json'
import { Networking, HUGGINGFACE, JS, PYTHON, LANGCHAIN } from './icons'; // Importa tus iconos
import {Braces} from "lucide-react";

const tagComponents = {
  "SNMP": {
    name: "SNMP",
    class: "bg-[#003159] text-white",
    icon: Networking
  },
  // Agrega más tags aquí
  "PYTHON": {
    name: "Python",
    class: "bg-yellow-400 text-black",
    icon: PYTHON // Puedes usar un icono de texto o un componente SVG
  },
  "HUGGINGFACE": {
    name: "Hugging Face",
    class: "bg-purple-600 text-white",
    icon: HUGGINGFACE// Ejemplo de un icono de texto
  },
  "JS": {
    name: "Javascript",
    class: "h-30 w-30",
    icon: JS// Ejemplo de un icono de texto
  },
  "LANGCHAIN": {
    name: "Langchain",
    class: "h-30 w-30",
    icon: LANGCHAIN// Ejemplo de un icono de texto
  }
};

const Tags = ({ tags }) => (
  <div className="flex gap-2 mb-4 mt-3">
    {tags.map((tagKey, tagIndex) => {
      const tagInfo = tagComponents[tagKey];

      if (!tagInfo) return null; // Manejo de errores si el tag no se encuentra

      const IconComponent = tagInfo.icon;

      return (
        <div className='flex flex-col items-center gap-1 mx-2 p-1 '>
         
          <IconComponent className=" mr-1" /> 
          <span className='text-gray'> {tagInfo.name}</span>
         
       </div>
      );
    })}
  </div>
);

export default Tags;
