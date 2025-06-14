"use client"
import Image1 from '@/app/images/exterior1.jpg'
import Image2 from '@/app/images/exterior2.jpg'
import Image3 from '@/app/images/exterior3.jpg'
import Image4 from '@/app/images/interior1.jpg'
import Image5 from '@/app/images/interior2.jpg'
import Image6 from '@/app/images/magazin.jpg'

import Image from 'next/image'




const PhotoGallery = () => {
  return (
    <main>
        <h1>Photo Gallery</h1>
        <div>
{/* Slider */}



    <div className="md:order-1 flex-none">
      <div className="hs-carousel-pagination max-h-96 flex flex-row md:flex-col gap-2 overflow-x-auto md:overflow-x-hidden md:overflow-y-auto">
        <div className="hs-carousel-pagination-item shrink-0 border border-gray-200 rounded-md overflow-hidden cursor-pointer size-20 md:size-32 hs-carousel-active:border-blue-400 dark:border-neutral-700">
          <div className="flex justify-center items-center text-center size-full bg-gray-100 p-2 dark:bg-neutral-900">
            <span className="text-xs text-gray-800 transition duration-700 dark:text-white">First slide</span>
          </div>
        </div>
        <div className="hs-carousel-pagination-item shrink-0 border border-gray-200 rounded-md overflow-hidden cursor-pointer size-20 md:size-32 hs-carousel-active:border-blue-400 dark:border-neutral-700">
          <div className="flex justify-center items-center text-center size-full bg-gray-200 p-2 dark:bg-neutral-800">
            <span className="text-xs text-gray-800 transition duration-700 dark:text-white">Second slide</span>
          </div>
        </div>
        <div className="hs-carousel-pagination-item shrink-0 border border-gray-200 rounded-md overflow-hidden cursor-pointer size-20 md:size-32 hs-carousel-active:border-blue-400 dark:border-neutral-700">
          <div className="flex justify-center items-center text-center size-full bg-gray-300 p-2 dark:bg-neutral-700">
            <span className="text-xs text-gray-800 transition duration-700 dark:text-white">Third slide</span>
          </div>
        </div>
        <div className="hs-carousel-pagination-item shrink-0 border border-gray-200 rounded-md overflow-hidden cursor-pointer size-20 md:size-32 hs-carousel-active:border-blue-400 dark:border-neutral-700">
          <div className="flex justify-center items-center text-center size-full bg-gray-100 p-2 dark:bg-neutral-900">
            <span className="text-xs text-gray-800 transition duration-700 dark:text-white">Fourth slide</span>
          </div>
        </div>
        <div className="hs-carousel-pagination-item shrink-0 border border-gray-200 rounded-md overflow-hidden cursor-pointer size-20 md:size-32 hs-carousel-active:border-blue-400 dark:border-neutral-700">
          <div className="flex justify-center items-center text-center size-full bg-gray-200 p-2 dark:bg-neutral-800">
            <span className="text-xs text-gray-800 transition duration-700 dark:text-white">Fifth slide</span>
          </div>
        </div>
        <div className="hs-carousel-pagination-item shrink-0 border border-gray-200 rounded-md overflow-hidden cursor-pointer size-20 md:size-32 hs-carousel-active:border-blue-400 dark:border-neutral-700">
          <div className="flex justify-center items-center text-center size-full bg-gray-300 p-2 dark:bg-neutral-700">
            <span className="text-xs text-gray-800 transition duration-700 dark:text-white">Sixth slide</span>
          </div>
        </div>
      </div>
    </div>
  </div>

</main>
  );
};

export default PhotoGallery;