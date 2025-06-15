import Image from "next/image";
import HeroImg from "@/app/images/hero.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[60vh] md:min-h-[80vh] lg:min-h-screen w-full flex items-center justify-center overflow-hidden py-12 md:py-0">
      <Image
        src={HeroImg}
        alt="Hero background"
        fill
        priority
        quality={100}
        className="object-cover object-center z-0"
        sizes="100vw"
      />
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 w-full max-w-4xl">
        <h1 className="text-white text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 drop-shadow-lg leading-tight font-roboto-serif">
          Materiale de Constructie de calitate din 2022
        </h1>
        <p className="text-base sm:text-lg md:text-2xl text-gray-200 mb-6 md:mb-8 drop-shadow-md max-w-2xl mx-auto">
          Oferim o gamă largă de produse pentru construcții, de la ciment și
          cărămizi până la unelte și echipamente. Calitate garantată și prețuri
          competitive pentru toate nevoile tale de construcții.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center w-full">
          <button className="bg-white text-black font-semibold px-6 md:px-8 py-2.5 md:py-3 rounded-lg shadow hover:bg-gray-200 transition w-48">
            Contactează-ne
          </button>
          <button className="bg-black bg-opacity-60 text-white font-semibold px-6 md:px-8 py-2.5 md:py-3 rounded-lg shadow hover:bg-black hover:bg-opacity-80 transition border border-white w-48">
            Vezi locațiile
          </button>
        </div>
      </div>
      <div
        className="absolute inset-0 bg-black/40 z-5"
        aria-hidden="true"
      ></div>
    </section>
  );
};

export default Hero;