import CountdownCircles from "./CountdownCircles";
import Lugares from "./Lugares";
import GoogleCalendarButton from "./GoogleCalendarButton";
import Asistencia from "../components/Asistencia";
import Footer from "./Footer";
import TextoFinal from "./TextoFinal";
import GalleryVintage from "./GalleryVintage";

const Invitacion = () => {

  const targetDate = new Date("2025-10-24T11:30:00-03:00");

  return (
    <div className="w-full font-vintageText relative overflow-hidden bg-[#FAF3E0]">
      <div className="fixed inset-0 -z-10 bg-cover bg-center"></div>
      <div className="fixed top-4 right-4 z-50">
      </div>
      <div className="flex flex-col justify-center items-center h-screen w-full text-center bg-[url('https://res.cloudinary.com/dfschbyq2/image/upload/v1740755815/Disen%CC%83o_Elegante_gem3ut_xq0rzs.webp')] bg-cover bg-no-repeat bg-center md:bg-fixed border-b-2 border-[#D4AF37] relative">
      <h1 className="text-5xl md:text-8xl  text-gold z-10 italic">
          Diego & Leticia
        </h1>
        <p className="mt-8 text-2xl text-lime-900">24 . 10 . 2025</p>
      </div>

      <div className="relative z-10">
          <section
            id="contador"
            className="bg-[#A3B18A] text-white py-10 border-b-2 border-[#D4AF37]"
          >
            <CountdownCircles
              targetDate={targetDate}
              containerClasses="my-8 font-thin"
              backgroundColor="#e5e7eb" 
              progressColor="#D4AF37" 
              textColor="#ffffff" 
              valueClassName="text-3xl font-bold"
              labelClassName="text-base font-light"
            />
          </section>
        <section id="lugares" className="py-10 border-b-2 border-[#D4AF37]">
          <Lugares/>
          
        </section>
          <section className="relative my-10 pb-10 border-b-2 border-[#D4AF37]">
            <GalleryVintage
              images={[
                {
                  index: 1,
                  img: "https://res.cloudinary.com/dfschbyq2/image/upload/v1756503382/a802573d-dd83-4491-b270-136bc54ee441_fwtkjh.jpg",
                },
                {
                  index: 2,
                  img: "https://res.cloudinary.com/dfschbyq2/image/upload/v1756503382/de2e89dc-dfc2-4b2f-849d-4fda8d2cb42c_xnsse0.jpg",
                },
                {
                  index: 3,
                  img: "https://res.cloudinary.com/dfschbyq2/image/upload/v1756503381/a5ffa704-6de2-46d7-a40f-3628a3f42ba5_ctympj.jpg",
                },
              ]}
            />
          </section>
          <section className="bg-[#A3B18A] py-10 text-white text-center">
            <GoogleCalendarButton 
            titleCalendar="Casamiento de Diego y Leticia"
            salon="Carlos Calvo 3325"
            fechaComienzo="20250407T130000"
            fechaFin="20250407T180000"
            />
          </section>
          <section className="">
            <Asistencia
              linkAsistencia="https://docs.google.com/forms/d/e/1FAIpQLScQbKQ5-tLZoT1P0W7FoZ49dg9mI9t_UjHTqYO3M2mdxRrkbw/viewform?usp=header"
              clase="py-10 bg-[#FAF3E0]"
              claseButton="border-[#a8ad9a] text-white bg-[#a8ad9a] hover:bg-transparent hover:text-green-900 text-xl border-2 border-[#a8ad9a] cursor-pointer"
            />
          </section>
        <TextoFinal textClass="text-xl italic" textoFinal="¡Gracias por venir!"/>
        <Footer />
      </div>
    </div>
  );
};

export default Invitacion;
