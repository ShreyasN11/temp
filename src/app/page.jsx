'use client';
import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion';
import Preloader from '@/comps/Preloader';
import Landing from '@/comps/Landing';
import Contact from '@/comps/Contact';
import Act from '@/comps/Act';
import { Testimonial } from '@/comps/Testimonial';

export default function Home() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect( () => {
    (
      async () => {
          const LocomotiveScroll = (await import('locomotive-scroll')).default
          const locomotiveScroll = new LocomotiveScroll();

          setTimeout( () => {
            setIsLoading(false);
            document.body.style.cursor = 'default'
            window.scrollTo(0,0);
          }, 3000)
      }
    )()
  }, [])

  return (
    <main>
      <AnimatePresence mode='wait'>
        {isLoading && <Preloader />}
      </AnimatePresence>
      {/* <FluidCursor />   */}
      <Landing />
      <Act />
      {/* <Description /> */}
      <div className=' z-50'>
      <Testimonial />
      {/* <Projects /> */}
      </div>
      {/* <SlidingImages /> */}
      <Contact />    
    </main>
  )
}
