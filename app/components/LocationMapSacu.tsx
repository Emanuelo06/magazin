import React from 'react'

const LocationMap = () => {
  return (
    <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-6">
   
      <div className="flex-1 w-full max-w-2xl aspect-video rounded-lg overflow-hidden shadow-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2792.845334947065!2d22.118466976786344!3d45.57354877107589!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x474fcbef1e66b89f%3A0x5f674625b8a3313!2sC.I.%20Speranta%20Construzione!5e0!3m2!1sen!2sro!4v1750017778346!5m2!1sen!2sro"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  )
}

export default LocationMap