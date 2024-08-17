import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffects'
import { FaLocationArrow } from 'react-icons/fa6'
import MagicButton from './ui/MagicButton'
import WordRotate from './ui/WordRotate'

const Hero = () => {
  return (
    <div className='pb-20 pt-36'>
        <div>
            <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill='white' />
            <Spotlight className='top-10 left-full h-[80vh] w-[50vw]' fill='purple' />
            <Spotlight className='top-28 left-80 h-[80vh] w-[50vw]' fill='blue' />
        </div>
        <div className='h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.05] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0'>
          {/* Radial gradient for the container to give a faded look */}
          <div className='absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]'></div>
        </div>

        <div className='flex justify-center relative my-10 z-10'>
          <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
            <WordRotate
              className="uppercase tracking-widest text-sm md:text-lg lg:text-2xl text-center text-blue-100 max-w-80 mb-3"
              words={["नमस्ते", "Hello", "Hola", "Salut", "Ciao", "Olá", "Hallo", "Привет", "你好", "こんにちは", "안녕하세요", "Merhaba", "হ্যালো"]}
            />
            <TextGenerateEffect className='text-center text-[40px] md:text-5xl lg:text-6xl' words='Turning complex ideas into robust solutions' />
            <p className='text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl'>
              Hi, I&apos;m Ranjith Acharya, Software Engineer based in India.
            </p>
            <a href="#about">
              <MagicButton 
                  title="Show my Work" 
                  icon={<FaLocationArrow />}
                  position='right'
              />
            </a>
          </div>
        </div>
    </div>
  )
}

export default Hero