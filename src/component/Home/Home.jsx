import React from 'react'
import "./Home.css"
import { MultiItemCarousel } from './MultiItemCarousel'

const Home = () => {
  return (
    <div className=''>
        <section className='banner -z-50 relative flex flex-col justify-center items-center'>
            <div className='w-[50vw] z-10 text-center'>
                <p className='text-2xl lg:text-6x1 font-bold z-10 py-5'>Rashi Food</p>
                <p className='z-10 text-gray-300 text-xl lg:text-4xl'>Taste the convenience:Food, Fast and delivered.</p>
            </div>
            <div className='cover absolute top-0 left-0 right-0'>


            </div>

            <div className='fadout'>
                
            </div>
            </section>

            <section className='p-10 lg:py-10 lg:px-20'>
              <p className='text2xl font-semibold text-gray-400 py-3 p-10'>Topmeels</p>
              <MultiItemCarousel/>
            </section>

        <section className='px-5 lg:px-20'>
          
          <h1 className='text2xl fontsemibold text-gray-400 py-3' >order from your handpicked favourites
            </h1>
            <div>
              
            </div>
        </section>


    </div>
  )
}
 export default Home