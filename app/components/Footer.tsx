import React from 'react'



const Footer = () => {
  return (
    <footer className="w-full bg-black text-white border-t border-gray-800 py-8 mt-12">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start">
          <span className="text-lg sm:text-xl md:text-2xl font-bold mb-2 font-roboto-serif">Speranța Construzione</span>
          <span className="text-sm text-gray-400">&copy; {new Date().getFullYear()} Toate drepturile rezervate.</span>
        </div>
        <div className="flex flex-col items-center gap-2 md:items-end">
          <a href="mailto:contact@magazin.ro" className="text-sm text-white hover:text-blue-400 transition">contact@magazin.ro</a>
          <a href="tel:+40712345678" className="text-sm text-white hover:text-green-400 transition">+40 712 345 678</a>
          <span className="text-sm text-gray-400">Str. Sacu nr203, Caras-Severin</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

