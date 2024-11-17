import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Server, Network, Code, Users, Award, ChevronRight, Star, SearchCode, Component, Workflow } from "lucide-react"

// Nota: LinkInline es un componente de Astro, así que lo simularemos para este ejemplo
const LinkInline = ({ children, href }) => (
  <a href={href} className="inline-flex items-center text-yellow-400 hover:underline mt-2">
    {children}
  </a>
)

const iconMap = {
  "Multitenancy observability": <Server className="h-5 w-5" />,
  "Network Automation": <Network className="h-5 w-5" />,
  "Investigación y desarrollo de plataformas innovadoras": <SearchCode className="h-5 w-5" />,
  "Diseño de sistemas": <Component className="h-5 w-5" />,
  "Arquitectura de monitoreo": <Component className="h-5 w-5" />,
  "Mentoring": <Users className="h-5 w-5" />,
  "Automatización de integraciones": <Workflow className="h-5 w-5" />,
  "Mejora de mesa de ayuda para LATAM": <Users className="h-5 w-5" />,
  
}

export default function RolesItem({ role }) {
  if (!role) {
    return null; // or return a placeholder component
  }

  return (
    <motion.div
      initial={{ opacity: 1, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="grid sm:grid-cols-1 md:grid-cols-[1fr_2fr] items-start"
      >
      <div className="relative pl-10">
        <span className="absolute -left-3 top-2 w-3 h-3 bg-yellow-400 rounded-full"></span>
        <h3 className="text-xl font-bold text-yellow-400">{role.title}</h3>
        <h4 className="font-semibold text-lg text-gray-300">{role.company}</h4>
        <time className="text-sm text-gray-400">{role.period}</time>
      </div>
      <Card className="mb-10 p-2 border-0 bg-transparent text-gray-100 overflow-hidden">
        <CardContent id="card-content" className="p-2">
          <p className="mb-4 prose-sm text-white">{role.description}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <h4 className="text-sm font-semibold text-yellow-400 flex items-center gap-2 mb-2">
                <Star className="h-4 w-4" />
                Responsabilidades clave
              </h4>
              <ul className="space-y-2">
                {role.keyPoints.map((point, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    {iconMap[point] || <Code className="h-4 w-4" />}
                    <span className="prose-sm text-white">
                    {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-green-400 flex items-center gap-2 mb-2">
                <Award className="h-4 w-4" />
                Logros destacados
              </h4>
              <ul className="space-y-2">
                {role.achievements.map((achievement, i) => (
                  <li key={i} className="text-sm">
                    <span className="prose-md text-semibold flex items-center gap-1">
                      <ChevronRight className="h-3 w-3 text-yellow-400" />
                      {achievement.title}
                    </span>
                    <p className="prose-sm mt-1 text-gray-300 ml-4">{achievement.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {role.milestones && (
            <p className="py-2 text-sm text-yellow-400 leading-loose">{role.milestones}</p>
          )}

          <div className="flex flex-wrap flex-wrap gap-2 mt-5">
            {role.technologies.map((tech, i) => (
              <Badge key={i} variant="secondary" className="bg-gray-700 text-gray-300">
                {tech}
              </Badge>
            ))}
          </div>
          {role.link && (
            <LinkInline href={role.link}>
              Más información
              <ChevronRight className="ml-1 h-4 w-4" />
            </LinkInline>
          )}
        </CardContent>
      </Card>
    </motion.div>
  )
}