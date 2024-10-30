

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
              "grid md:grid-cols-4 gap-2",
              "group relative min-w-[200px]",
              "bg-purple-950/40",
              "transition-all duration-300",
              "hover:bg-purple-900/30 hover:border-purple-500/40",
              "hover:shadow-[0_0_15px_rgba(168,85,247,0.1)]"
            )}
          >
        {points.map((point, index) => (
     
            <div className="flex flex-col items-center text-center justify-around p-2">
        
                {getIcon(point)}
              
              <span className="text-xs mt-1">
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