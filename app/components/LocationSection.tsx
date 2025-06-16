import React from 'react'
import LocationMap from './LocationMapSacu'
import "@/app/fonts/roboto-serif.css";
import LocationMapStiuca from './LocationMapStiuca';

const LocationSection = () => {
  return (
   
    
    <main className="container mx-auto px-4 py-8 bg-black text-white flex flex-col " id='contact'>
      <h1 className='text-white text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-center md:mb-6 drop-shadow-lg leading-tight  my-10 mb-4 font-roboto-serif'>Contactați-ne</h1>
      <div className="w-full flex flex-col justify-center gap-6 mb-8 items-stretch sm:flex-row sm:gap-4 md:gap-8">
        {/* Email Block */}
        <div className="flex flex-col items-center rounded-lg p-4 w-full max-w-full sm:max-w-xs flex-1 bg-black shadow-md min-w-0">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 mb-2 text-white">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-.876 1.797l-7.5 5.625a2.25 2.25 0 01-2.748 0l-7.5-5.625A2.25 2.25 0 012.25 6.993V6.75" />
          </svg>
          <p className="text-sm text-gray-400 mb-1">Email</p>
          <a href="vdani.291283@gmail.com" className="text-lg font-semibold text-white hover:text-blue-400 transition break-all text-center">vdani.291283@gmail.com</a>
        </div>
        {/* Telefon Block */}
        <div className="flex flex-col items-center rounded-lg p-4 w-full max-w-full sm:max-w-xs flex-1 bg-black shadow-md min-w-0">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 mb-2 text-white">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15 .621 0 1.125-.504 1.125-1.125v-2.625a1.125 1.125 0 00-1.012-1.123l-3.375-.375a1.125 1.125 0 00-1.01.324l-1.5 1.5a12.036 12.036 0 01-5.25-5.25l1.5-1.5a1.125 1.125 0 00.324-1.01l-.375-3.375A1.125 1.125 0 006.75 2.25H4.125C3.504 2.25 3 2.754 3 3.375z" />
          </svg>
          <p className="text-sm text-gray-400 mb-1">Telefon</p>
          <a href="tel:+40712345678" className="text-lg font-semibold text-white hover:text-green-400 transition text-center">Sacu: +40730371649</a>
          <a href="tel:+40712345678" className="text-lg font-semibold text-white hover:text-green-400 transition text-center">Stiuca: +40732876904</a>
        </div>
        {/* Address Block */}
        <div className="flex flex-col items-center rounded-lg p-4 w-full max-w-full sm:max-w-xs flex-1 bg-black shadow-md min-w-0">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 mb-2 text-white">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 2.25c-4.556 0-8.25 3.694-8.25 8.25 0 5.25 8.25 11.25 8.25 11.25s8.25-6 8.25-11.25c0-4.556-3.694-8.25-8.25-8.25zm0 10.5a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z" />
          </svg>
          <p className="text-sm text-gray-400 mb-1">Adresă</p>
          <span className="text-lg font-semibold text-white text-center">1: Sacu nr203, Caras-severin</span>
          <span className="text-lg font-semibold text-white text-center">2: Stiuca strada narciselor 1, Timis   </span>
        </div>
      </div>
      <div>
        <div className="mb-8 px-2">
            <h2 className="text-white text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-center md:mb-6 drop-shadow-lg leading-tight my-10 mb-4 font-roboto-serif">Locații</h2>
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-4 text-center">Sacu</h2>
          <LocationMap />
        </div>
        <div className="mb-8">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-4 text-center">Stiuca</h2>
          <LocationMapStiuca />
          
        </div>
      </div>
       

      

    </main>
    
    
  )
}

export default LocationSection