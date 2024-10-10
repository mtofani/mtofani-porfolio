'use client';


import { motion, MotionConfig, AnimatePresence } from 'framer-motion';
import { MousePointerClick } from 'lucide-react'

const certifications = [
  { id: 1, name: 'AWS Solutions Architect Cloud Quest', logo: '/certifications/aws-sa.png', link: 'https://www.credly.com/badges/641dc3de-b4eb-4d8d-90b0-b0589290b44d/public_url', type: "credly" },
  { id: 2, name: 'AWS Machine Learning Cloud Quest', logo: '/certifications/aws-ml.png', link: 'https://www.credly.com/badges/9e20b29b-150c-4926-9811-3d9fdd113c32/public_url', type: "credly" },
  { id: 3, name: 'AWS Generative IA Cloud Quest', logo: '/certifications/aws-generative-ai.png', link: 'https://www.credly.com/badges/96d431a7-49a2-4eca-85fa-406cda2feeec/public_url', type: "credly" },
  { id: 4, name: 'AWS Serverless Development Cloud Quest', logo: '/certifications/aws-sdev.png', link: 'https://www.credly.com/badges/f332dac1-c95c-4f0e-96fc-e82e3e3f9772/public_url', type: "credly" },
];

const CertificationCard = ({ cert }) => {
  return (
    <motion.div
      layout
      className="relative overflow-hidden rounded-lg cursor-pointer"
      whileHover="hover"
      initial="rest"
      animate="rest"
    >
      <motion.div 
        className="relative w-full pb-[100%]"
        variants={{
          rest: { scale: 0.75 },
          hover: { scale: 0.85 }
        }}
        transition={{ duration: 0.3 }}
      >
        <img 
          src={cert.logo} 
          alt={cert.name} 
          className="absolute top-0 left-0 w-full h-full object-contain"
        />
        <motion.div
          className="absolute right-10 -bottom-5 flex items-end w-2/3 justify-center bg-gradient-to-t from-black/50 to-transparent rounded-full z-10"
          variants={{
            rest: { opacity: 0 },
            hover: { opacity: 1 }
          }}
          transition={{ duration: 0.3 }}
        >

          {cert.type ? (
          <motion.div 
            className="flex flex-col text-white text-md font-semibold p-4 text-center w-full items-center "
            variants={{
              rest: { y: 20 },
              hover: { y: 0 }
            }}
          >
            
            <div className='flex'>
            <span className='text-xs '>Ver en {cert.type} </span>
            <MousePointerClick className='w-z h-5'>
            
            </MousePointerClick> 
            </div>
          
            
            
            
          </motion.div>
          ) : null
        }
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default function Component() {
  const handleClick = (cert) => {
    if (cert.link) {
      window.open(cert.link, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <MotionConfig transition={{ duration: 0.3 }}>
      <div className="bg-dark-900/50 w-full min-h-screen text-white p-8">
        <h2 className="text-4xl font-extrabold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-500">
          Certificaciones
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          <AnimatePresence>
            {certifications.map((cert) => (
              <motion.div
                key={cert.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                onClick={() => handleClick(cert)}
              >
                <CertificationCard cert={cert} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        <div className="flex justify-center">
          <motion.a
            href="https://www.linkedin.com/in/maximilianotofani/details/certifications/"
            className="text-sm bg-dark border-2 border-purple-500 px-6 py-3 rounded-full"
            whileHover={{ scale: 1.05, backgroundColor: '#44337A' }}
            whileTap={{ scale: 0.95 }}
          >
         Ver más certificaciones
          </motion.a>
        </div>
      </div>
    </MotionConfig>
  );
}