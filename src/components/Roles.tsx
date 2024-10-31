'use client'

import { useState, useRef, useEffect } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { Button } from "@/components/ui/button"
import RolesItem from './RolesItem'
import roles from '../contents/roles.json'

export default function Component() {
  const [visibleRoles, setVisibleRoles] = useState(3)
  const [isExpanded, setIsExpanded] = useState(false)
  const [hasInteracted, setHasInteracted] = useState(false)

  const containerRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  const toggleRoles = () => {
    setHasInteracted(true)
    if (isExpanded) {
      setVisibleRoles(3)
      setIsExpanded(false)
    } else {
      setVisibleRoles(roles.length)
      setIsExpanded(true)
    }
  }

  useEffect(() => {
    if (hasInteracted) {      
      const yOffset = -200; // Ajusta este valor para controlar cuánto espacio dejar por encima del botón
      const y = buttonRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({top: y, behavior: 'smooth'});
    }
  }, [isExpanded])

  return (
    <div className="relative flex flex-col text-white">
      <div className="absolute -left-2 top-0 bottom-0 w-0.5 bg-purple-700/30" />
      
      {roles.length > 0 ? (
        <>
          {roles.slice(0, visibleRoles).map((role, index) => (
            <RolesItem key={index} role={role} />
          ))}
          
          {roles.length > 3 && (
            <Button
              ref={buttonRef}
              variant="ghost"
              className="text-purple-400 flex hover:bg-purple-900/20 mt-2 rounded-lg items-center gap-2"
              onClick={toggleRoles}
            >
              {isExpanded ? (
                <>
                  <span className='text-lg'>Ver menos</span><ChevronUp className="h-4 w-4" />
                </>
              ) : (
                <>
                  <span className='text-lg'>Conocer más de mi experiencia...</span> <ChevronDown className="h-4 w-4" />
                </>
              )}
            </Button>
          )}
        </>
      ) : (
        <p>No roles available</p>
      )}
    </div>
  )
}