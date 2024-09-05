import Image from 'next/image'

export default function Home() {
  return (
    <div className="">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start px-16 w-ful">
        <div className=" text-4xl font-bold  h-44 flex items-center">
          StartupScore
        </div>
        <div className="grid grid-cols-6 w-full">
          <h1 className="font-inter text-8xl flex flex-col col-span-4 gap-2">
            From Vision <br />
            to Validation with
            <span className=" bg-primary text-white h-36 flex items-center font-bold w-fit">
              StartupScore
            </span>
          </h1>
          <div className=' relative col-span-2'>
            <Image src='/images/banner.png' fill alt='banner' className='object-contain' />
          </div>
        </div>

        {/* new  section */}

        <div className='w-full mt-48'>
          <h2 className='font-bold text-5xl text-center'>Forecast Your Future with <br />
            StartupScore</h2>
          <p className='text-center font-semibold text-2xl mt-10'>The StartupScore predicts a startup's success rate <br />
            by using AI to assess its alignment with the target audience and location factors.<br />
            It provides insights into market demand, competition, demographic fit, and potential challenges.</p>
        </div>

        {/* new  section */}

        <div className='w-full mt-48 mb-48'>
          <h2 className='font-bold text-5xl text-center mb-8'>How it works?</h2>
          <div className='grid grid-cols-3 w-full'>
            <div className='flex gap-3'>
              <div className='text-8xl font-inter'>
                01
              </div>
              <div className='flex-flex-col'>Write your<br /><span className='font-bold'>business idea</span></div>
            </div>
            <div className='flex gap-3'>
              <div className='text-8xl font-inter'>
                02
              </div>
              <div className='flex-flex-col'>Describe your<br /><span className='font-bold'>target audience,
                location</span></div>
            </div>
            <div className='flex gap-3'>
              <div className='text-8xl font-inter'>
                03
              </div>
              <div className='flex-flex-col'>Let <span className='font-bold'>AI</span> get<br />
                the work done.</div>
            </div>
          </div>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">

      </footer>
    </div>
  );
}
