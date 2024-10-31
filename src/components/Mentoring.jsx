import React from 'react'
import { Calendar, Coffee, MessageSquare, Users, ChevronRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function EnhancedMinimalistMentoringDonation() {
  return (
    <section id ="mentoring">
      <div className="container mx-auto px-4 mt-5">
       
      <h2 className="text-4xl font-extrabold text-center mb-5 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
          Mentoría y Apoyo
        </h2>
     
       
        
        <div className="grid grid-cols-1 md:grid-cols-2 rounded-xl p-5 gap-2">
        <div className="flex items-start">
            <img 
              src="/media/test3.png" 
              alt="Mentoring" 
              className="top-0 left-0 scale-95 md:scale-90 object-fit rounded-xl shadow-xl shadow-purple-700/20   ion-all duration-300" 
              

              />
          </div>

        <div id="finalservices" className="grid gap-2 items-center ">
          {/* Mentoring Section */}

          <Card className='border-none bg-purple-600/10 p-2 mt-5 shadow-xl shadow-purple-500/20 hover:-translate-y-1 transition-all duration-300'   style={{ boxShadow: '0 5px 9px rgba(128, 90, 213, 0.1)' }}>
        

<CardHeader >
            <CardTitle className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-purple-200" style={{
  WebkitTextStroke: '0.5px #9333ea'
}}>

  Asesoramiento Personalizado
</CardTitle>              <CardDescription className="text-white-300" >Agenda tu sesión en Calendly y resolvamos tus dudas o las de tu equipo.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-slate-200">
              <div className="flex  items-center space-x-2">
              <Calendar className="text-purple-300" />
              <span>Sesiones flexibles de 30 o 60 minutos</span>
              </div>  
              <div className="flex items-center space-x-2">
              <MessageSquare className="text-purple-300" />
              <span>Chat en vivo durante la sesión</span>
              </div>
              <div className="flex items-center space-x-2">
              <Users className="text-purple-300" />

<span>Opción de sesiones grupales</span>
              </div>
            </CardContent>
            <CardFooter>
            <a
              href="https://calendly.com/maximilianomt"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center border border-purple-500  hover:bg-purple-500 text-white font-semibold py-2 px-6 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1"
            >
              Reservar Sesión
              <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
            </CardFooter>
          </Card>


               {/* Donation Section */}
               <div className="bg-purple-600/5 h-min-screen border border-purple-500 pl-6 p-2 rounded-xl shadow-lg shadow-purple-500/10 transform transition duration-500 hover:scale-105">
               <div className="flex flex-col items-center justify-center">
                <div className='flex flex-row '>
                  <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-300" style={{
  WebkitTextStroke: '0.1px purple'}}>Apoya mi trabajo</h3>
                  <Coffee className="w-8 h-8 text-purple-200 ml-2" />
                </div>
                
                <p className="p-2 text-gray-300 text-md leading-loose" >
                  Si mi contenido te ha sido útil, considera invitarme a un café!
                </p>
                <a 
                  href='https://cafecito.app/maximilianomt'  
                  className="group inline-flex mb-2 mt-2 items-center rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1"
                  rel='noopener' 
                  target='_blank'
                >
                  <img 
                    srcSet='https://cdn.cafecito.app/imgs/buttons/button_3.png 1x, https://cdn.cafecito.app/imgs/buttons/button_3_2x.png 2x, https://cdn.cafecito.app/imgs/buttons/button_3_3.75x.png 3.75x' 
                    src='https://cdn.cafecito.app/imgs/buttons/button_3.png' 
                    alt='Invitame un café en cafecito.app' 
                  />
                </a>
              </div>
           
            </div>
          </div>
        </div>
        

      </div>

  

      
    </section>
  )
}