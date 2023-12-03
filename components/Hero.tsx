import Image from 'next/image'
import Button from './Button'

const Hero = () => {
  return (
    <section id='hero' className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
      <div className="hero-map  bg-hero" />

      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        <h1 className="bold-52 lg:bold-88 text-green-50">BMset</h1>
        <p className="regular-20 mt-6 text-gray-20 xl:max-w-[520px]">
        Plateforme d’éducation en ligne personnalisée pour étudiants médecine Batna, examens basés sur questions à choix multiples avec explication des réponses.        </p>
        <br />
        <p>
            <span className="regular-20  text-black ml-1">Disponible sur PC, tablette et smartphone.</span>
          </p>
       

        <div className="my-11 flex flex-wrap gap-5">
          <div className="flex items-center gap-2">
            {Array(5).fill(1).map((_, index) => (
              <Image 
                src="/star.svg"
                key={index}
                alt="star"
                width={24}
                height={24}
              />
            ))}
          </div>

          <p className="bold-16 lg:bold-20 text-black">
            20k
            <span className="regular-16 lg:regular-20 ml-1">Excellent Reviews</span>
          </p>
        </div>

        <div className="flex flex-col w-full gap-3 sm:flex-row">
          <Button 
            type="button" 
            title="ESSAYEZ LA DEMO" 
            icon="/play.svg"
            variant="btn_green" 
          />
          <Button 
            type="button" 
            title="ACHETER MAINTENANT" 
            variant="btn_white_text" 
          />
        </div>
      </div>

     
    </section>
  )
}

export default Hero