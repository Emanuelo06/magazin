

const LocationMapStiuca = () => {
  return (
    <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-6" id='locatii'>
   
      <div className="flex-1 w-full max-w-2xl aspect-video rounded-lg overflow-hidden shadow-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d698.1411055072313!2d21.982768820387854!3d45.57919724394043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x474fc876c1fc1815%3A0xa2036ffec28ddf34!2sStrada%20Narciselor%201%2C%20%C8%98tiuca%20307400!5e0!3m2!1sen!2sro!4v1750053732367!5m2!1sen!2sro"
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

export default LocationMapStiuca