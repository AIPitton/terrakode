import React from 'react'
import Image from 'next/image'
import { RiMoneyEuroBoxFill } from 'react-icons/ri'
import { RxUpdate } from 'react-icons/rx'
import { MdEditSquare } from 'react-icons/md'
import { FaTags } from 'react-icons/fa'
import { FaWhatsappSquare } from 'react-icons/fa'
const skills = [
  { skill: 'React Native' },
  { skill: 'JavaScript' },
  { skill: 'TypeScript' },
  { skill: 'React' },
  { skill: 'Next.js' },
  { skill: 'AWS' },
  { skill: 'Tailwind CSS' },
  { skill: 'Redux' },
]

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          Despre
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Prețuri
            </h1>

            <div className="flex items-center justify-center md:justify-start">
              <RiMoneyEuroBoxFill size="70px" className=" mr-3 " />
              <p>
                Pentru aplicație{' '}
                <span className="font-semibold text-teal-600">mobilă</span>{' '}
                prețul începe de la{' '}
                <span className="font-semibold text-teal-600">300 de euro</span>
                , iar pentru aplicație{' '}
                <span className="font-semibold text-teal-600">web</span> prețul
                începe de la{' '}
                <span className="font-semibold text-teal-600">
                  100 de euro.
                </span>
              </p>
            </div>
            <br />
            <div className="flex items-center justify-center md:justify-start">
              <RxUpdate size="80px" className=" mr-4" />
              <p>
                Magazinele de aplicații au nevoie periodic de{' '}
                <span className="font-semibold text-teal-600">update-uri.</span>{' '}
                Prețul unui{' '}
                <span className="font-semibold text-teal-600">abonament</span>{' '}
                care asigură ca aceste update-uri să fie realizate, este de{' '}
                <span className="font-semibold text-teal-600">
                  4 euro pe lună.
                </span>
              </p>
            </div>
            <br />
            <div className="flex items-center justify-center md:justify-start">
              <MdEditSquare size="45px" className=" mr-3" />
              <p>
                Pentru{' '}
                <span className="font-semibold text-teal-600">
                  modificări ulterioare
                </span>{' '}
                ale aplicațiilor, prețul este de{' '}
                <span className="font-semibold text-teal-600">
                  13 euro pe oră.
                </span>
              </p>
            </div>
            <br />
            <div className="flex items-center justify-center md:justify-start">
              <FaTags size="50px" className=" mr-4" />
              <p>
                Până la data de{' '}
                <span className="font-semibold text-teal-600">
                  20 iulie 2024
                </span>{' '}
                este valabil un{' '}
                <span className="font-semibold text-teal-600">
                  discount de %50 la aplicație mobilă și web.
                </span>
              </p>
            </div>
            <br />
            <div className="flex items-center justify-center md:justify-start">
              <FaWhatsappSquare size="35px" className=" mr-3" />
              <p>
                <span className="font-bold text-2xl text-teal-600">
                  {process.env.NEXT_PUBLIC_PHONE}
                </span>
              </p>
            </div>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">Tehnologii folosite</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
