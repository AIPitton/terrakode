import React from 'react'
import { FaFacebook } from 'react-icons/fa'
export default function Hello() {
  return (
    <div className="w-screen h-screen flex  mt-20 justify-center  ">
      <div className="z-50">
        <div className="bg-cardBg rounded-lg p-8 shadow-lg max-w-md mx-auto mb-4">
          <p className="text-2xl text-black font-pacifico">
            Dezvoltare Aplicatii Android, iOS si web ieftine in Bucuresti si
            orasul tau, oricare ar fi acela.
          </p>
        </div>
        <div className="bg-cardBg rounded-lg p-8 shadow-lg max-w-md mx-auto mb-4">
          <p className="text-2xl text-black font-pacifico">
            Pentru aplicatie mobila pretul incepe de la 300 de euro, iar pentru
            aplicatie web pretul incepe de la 100 de euro.
          </p>
        </div>
        <div className="bg-cardBg rounded-lg p-8 shadow-lg max-w-md mx-auto mb-4">
          <p className="text-2xl text-black font-pacifico">
            Magazinele de aplicatii au nevoie periodic de update-uri. Pretul
            unui abonament care asigura ca aceste update-uri sa fie realizate,
            este de 4 euro pe luna.
          </p>
        </div>
        <div className="bg-cardBg rounded-lg p-8 shadow-lg max-w-md mx-auto mb-4">
          <p className="text-2xl text-black font-pacifico">
            Pentru modificari ulterioare ale aplicatiilor pretul este de 13 euro
            pe ora.
          </p>
        </div>
        <div className="bg-cardBg rounded-lg p-8 shadow-lg max-w-md mx-auto mb-4">
          <p className="text-2xl text-black font-pacifico">
            Primii 3 clienti au un discount de %50 la aplicatie mobila, web și
            abonament.
          </p>
        </div>
        <div className="max-w-md mx-auto mb-4">
          <div className="bg-cardBg rounded-lg p-8 shadow-lg flex items-center">
            <p className="text-2xl text-black font-pacifico">Contact:</p>
            <a
              href="https://www.facebook.com/TerraKode"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2"
            >
              <FaFacebook className="text-3xl text-blue-500" />{' '}
              {/* Adjust size and color as needed */}
            </a>
          </div>
        </div>
        <footer className=" text-white text-center py-4">
          &copy; 2024 TerraKode
        </footer>
      </div>
    </div>
  )
}
