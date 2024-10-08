'use client'
import Image from 'next/image'
import Chat from '@/components/chat';
import { useEffect, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export default function Home() {

  const container = useRef(null)

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  useGSAP(
    () => {
      // gsap code here...
      gsap.fromTo('.logo-animate', { y: -100, opacity: 0 }, { y: 0, opacity: 1, duration: 2, ease: 'back.inOut' }); // <-- automatically reverted
      gsap.fromTo('.header-animate', { opacity: 0 }, { opacity: 1, duration: 3, ease: 'back.inOut' })
    },
    { scope: container }
  );

  return (
    <div className="" ref={container}>
      <main className="flex flex-col gap-8  items-center sm:items-start md:px-16 px-8 w-full">
        <div className=" md:text-4xl text-2xl font-bold h-44 flex items-center w-full logo-animate">
          StartupScore
        </div>
        <div className="grid max-md:grid-rows-3 gap-5 md:gap-0 w-full md:grid-cols-6 header-animate">
          <h1 className="font-inter md:text-8xl text-5xl w-full flex flex-col row-span-1 md:col-span-4 gap-2 ">
            From Vision <br />
            to Validation with
            <span className=" bg-primary text-white md:h-36 h-20 flex items-center font-bold md:w-fit w-full">
              StartupScore
            </span>
          </h1>
          <div className=' relative w-full row-span-2 md:col-span-2'>
            <Image src='/images/banner.png' fill alt='banner' className='object-contain' />
          </div>
        </div>

        {/* new  section */}

        <div className='w-full md:mt-48 mt-14'>
          <h2 className='font-bold md:text-5xl text-3xl text-center'>Forecast Your Future with <br />
            StartupScore</h2>
          <p className='text-center font-semibold md:text-2xl text-xl mt-10'>The StartupScore predicts a startup&apos;s success rate <br />
            by using AI to assess its alignment with the target audience and location factors.<br />
            It provides insights into market demand, competition, demographic fit, and potential challenges.</p>
        </div>

        {/* new  section */}

        <div className='w-full md:my-48 my-24 '>
          <h2 className='font-bold md:text-5xl text-3xl text-center mb-8'>How it works?</h2>
          <div className='grid md:grid-cols-3 w-full max-md:grid-rows-3'>
            <div className='flex gap-3 max-md:grid max-md:grid-cols-2 max-md:items-center'>
              <div className='text-8xl md:text-9xl font-inter'>
                01
              </div>
              <div className='flex-flex-col'>Write your<br /><span className='font-bold'>business idea</span></div>
            </div>
            <div className='flex gap-3 max-md:grid max-md:grid-cols-2 max-md:items-center'>
              <div className='text-8xl md:text-9xl font-inter'>
                02
              </div>
              <div className='flex-flex-col'>Describe your<br /><span className='font-bold'>target audience, <br />
                location</span></div>
            </div>
            <div className='flex gap-3 max-md:grid max-md:grid-cols-2 max-md:items-center'>
              <div className='text-8xl  md:text-9xl font-inter'>
                03
              </div>
              <div className='flex-flex-col'>Let <span className='font-bold'>AI</span> get<br />
                the work done.</div>
            </div>
          </div>
        </div>
        {/* Chat */}
        <div className="flex-grow overflow-hidden w-full">
          <Chat />
        </div>
      </main>




      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center text-white mb-20">
        © Team Gazaakh 2024
      </footer>
    </div>
  );
}
