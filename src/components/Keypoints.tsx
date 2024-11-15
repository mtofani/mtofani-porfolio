

import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface KeyPointsProps {
  points: string[]
  getIcon: (point: string) => React.ReactNode
}

export default function KeyPoints({ points, getIcon }: KeyPointsProps) {
  return (
    
 
      <Card
            
            className={cn(
              "grid md:grid-cols-2 p-1",
              "bg-purple-950/70",
              "transition-all duration-300",
              "hover:bg-purple-900/30 hover:border-purple-500/40",
              "hover:shadow-[0_0_15px_rgba(168,85,247,0.1)]",
              "mt-8",
              "items-start"
            
            )}
          >
        {points.map((point, index) => (
     
            <div key={index} className="flex flex-col items-center text-center justify-around p-2 px-10">
                {getIcon(point)}    
              <span className="md:text-sm text-md mt-1 ">
                {point}
              </span>
            <div 
              className="" 
              aria-hidden="true"
            />
         </div>
        ))}
         </Card>
   
   
  )
}