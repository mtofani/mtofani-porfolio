'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const certifications = [
  { id: 1, name: 'AWS Solutions Architect Cloud Quest', logo: '/certifications/aws-sa.png', link: 'https://www.credly.com/badges/641dc3de-b4eb-4d8d-90b0-b0589290b44d/public_url' },
  { id: 2, name: 'AWS Machine Learning Cloud Quest', logo: '/certifications/aws-ml.png', link: 'https://www.credly.com/badges/9e20b29b-150c-4926-9811-3d9fdd113c32/public_url' },
  { id: 3, name: 'AWS Generative IA Cloud Quest', logo: '/certifications/aws-generative-ai.png', link: ' https://www.credly.com/earner/earned/badge/96d431a7-49a2-4eca-85fa-406cda2feeec' },
  { id: 4, name: 'AWS Serverless Development Cloud Quest', logo: '/certifications/aws-sdev.png', link: 'https://www.credly.com/earner/earned/badge/f332dac1-c95c-4f0e-96fc-e82e3e3f9772' },
];

export default function Component() {
  const [selectedCert, setSelectedCert] = useState(null);

  const handleClick = (cert) => {
    if (cert.link) {
      window.open(cert.link, '_blank');
    } else {
      setSelectedCert(cert);
    }
  };

  return (
    <div className="bg-dark-900/50 w-full h-min-screen text-white">
      <h2 className="text-4xl font-extrabold text-center mb-5 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-500 py-5 items-center">Certificaciones</h2>
      <div className="">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 justify-items-stretch">
          {certifications.map((cert) => (
            <motion.div
              key={cert.id}
              className="rounded-lg cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleClick(cert)}
            >
              <img src={cert.logo} alt={cert.name} className="scale-75 object-contain" />
            </motion.div>
          ))}
        </div>
        <div className="flex flex-wrap items-center justify-center text-center mb-2">
          <a href="https://www.linkedin.com/in/maximilianotofani/details/certifications/" className="mb-3 text-sm bg-dark border-2 border-purple-500 hover:bg-purple-800 transition duration-300 ease-in-out transform hover:-translate-y-1 px-4 py-2 rounded-full">Ver más certificaciones</a>
        </div>
      </div>

      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-2 z-50"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              className="bg-gray-800 p-6 rounded-lg w-full max-w-4xl h-[80vh] flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold">{selectedCert.name}</h3>
                <button
                  className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-full font-bold"
                  onClick={() => setSelectedCert(null)}
                >
                  Cerrar
                </button>
              </div>
              <div className="flex-grow flex items-center justify-center">
                <img src={selectedCert.logo} alt={selectedCert.name} className="" />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
