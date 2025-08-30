import copas from '../assets/copas.svg'
import rings from '../assets/rings.svg'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Places = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000, // Duración de la animación en milisegundos
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <div className='w-full pt-10 flex flex-col items-center gap-y-16'>
      <section className='flex flex-col gap-y-20 md:gap-y-0 md:flex-row justify-center gap-x-36'>
        <div className=' flex flex-col justify-center items-center gap-y-3' data-aos= 'fade-right'>
          <img src={rings} alt="" className='size-40'/>
          <h2 className='text-center font-semibold text-2xl tracking-wider'>CIVIL</h2>
          <p className='font-extralight text-xl text-center px-5 text-gray-700'>El civil se realizará en  <strong>Carlos Calvo 3325</strong> a las <strong>11:30 hs</strong></p>
          <div className="flex justify-center items-center mt-5">
            <a
              href="https://maps.app.goo.gl/UP42riSXLSEn2KkT9"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="border-2 border-[#D4AF37] py-3 px-8 rounded-full bg-[#D4AF37] text-white font-bold hover:bg-[#FAF3E0] hover:text-[#D4AF37] transition cursor-pointer">
                CÓMO LLEGAR
              </button>
            </a>
          </div>
        </div>
        <div className=' flex flex-col justify-center items-center gap-y-3' data-aos= 'fade-left'>
          <img src={copas} alt="" className='size-40'/>
          <h2 className='text-center font-semibold text-2xl tracking-wider'>ALMUERZO</h2>
          <p className='font-extralight text-xl text-center px-5 text-gray-700'>Continuaremos con el almuerzo en <strong>Restaurante Puerto Cristal</strong> a las 13:30 hs</p>
          <div className="flex justify-center items-center mt-5">
            <a
              href="https://maps.app.goo.gl/dp6YoBa14re5vzuR7"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="border-2 border-[#D4AF37] py-3 px-8 rounded-full bg-[#D4AF37] text-white font-bold hover:bg-[#FAF3E0] hover:text-[#D4AF37] transition cursor-pointer">
                CÓMO LLEGAR
              </button>
            </a>
          </div>
        </div>
      </section>
        
    </div>
  )
}

export default Places