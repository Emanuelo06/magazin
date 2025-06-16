"use client"
import Image1 from '@/app/images/exterior1.jpg'
import Image2 from '@/app/images/exterior2.jpg'
import Image3 from '@/app/images/exterior3.jpg'
import Image4 from '@/app/images/interior1.jpg'
import Image5 from '@/app/images/interior2.jpg'
import Image6 from '@/app/images/magazin.jpg'
import Image7 from "@/app/images/interior4.jpg"
import Image8 from "@/app/images/interior5.jpg"
import Image9 from "@/app/images/interior6.png"
import Image10 from "@/app/images/interior7.jpg"
import Image11 from "@/app/images/interior8.jpg"
import Image12 from "@/app/images/exterior4.jpg"
import Carousel from './Carousel'




const PhotoGallery = () => {
  return (
    <main className='flex flex-col items-center justify-center p-4 bg-black ' id='galerie-foto'>
        <h1 className="text-white text-2xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 md:mb-6 drop-shadow-lg leading-tight font-roboto-serif font-semibold
          mt-3 lg:mt-7">
          Magazinele Noastre
        </h1>
       {/* Magazin Sacu */}
       <div className="w-full flex flex-col items-center mb-8">
         <p className="text-base sm:text-lg md:text-2xl lg:text-3xl font-bold text-gray-200 mb-2 drop-shadow-md max-w-2xl mx-auto">Magazin Sacu</p>
         <Carousel
           images={[
             Image1.src,
             Image2.src,
             Image3.src,
             Image4.src,
             Image5.src,
             Image6.src
           ]}
           interval={5000}
         />
       </div>
       {/* Magazin Stiuca */}
       <div className="w-full flex flex-col items-center mb-8">
         <p className="text-base sm:text-lg md:text-2xl lg:text-3xl font-bold text-gray-200 mb-2 drop-shadow-md max-w-2xl mx-auto">Magazin Stiuca</p>
         <Carousel
           images={[
             Image7.src,
             Image8.src,
             Image9.src,
             Image10.src,
             Image11.src,
             Image12.src
           ]}
           interval={5000}
         />
       </div>
    </main>
  );
};

export default PhotoGallery;