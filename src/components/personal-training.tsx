import Navbar from "./navbar";
import Footer from "./footer";

export default function PersonalTraining() {
  return (
    <div className="relative w-full h-screen text-white">
      <Navbar />
      <section className="bg-white text-black py-12 px-8 text-center">
        <div className="max-w-7xl mx-auto p-6">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <div className="w-16 h-16 bg-[#EBE8DE]"></div>
            <div className="w-5 h-16 bg-[#EBE8DE]"></div>
            <h2 className="text-3xl md:text-4xl font-bold">
              Personal Training
            </h2>
          </div>
          {/* <h2 className="text-3xl md:text-3xl font-bold mb-5 mt-5 text-left">
            Transform Your Workplace with Corporate Boxing Classes at Punch!
          </h2>
          <p className="text-gray-600 mb-6 text-lg md:text-base text-left">
            Revitalize your organization with our Corporate Boxing Classes at
            Punch! Tailored for companies aiming to enhance their employee
            wellness and benefit programs, our group classes offer a unique and
            effective way to improve both physical fitness and mental health.
          </p> */}
          <h2 className="text-3xl md:text-3xl font-bold mt-8 ">
            What You Can Expect
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-8 mt-10 md:gap-4 md:w-[80%] mx-auto">
          {/* Card 1 */}
          <div className="relative w-64 h-64 bg-[#EBE8DE] bg-opacity-50 text-white flex flex-col justify-center items-center shadow-lg">
            <h2 className="font-bold text-lg relative">
              Customized Training Plans
            </h2>
            <p className="text-sm relative text-center px-4 mt-2">
              Each session is tailored to your fitness level and objectives,
              ensuring you receive the right balance of technique, strength, and
              conditioning.
            </p>
          </div>

          {/* Card 2 */}
          <div className="relative w-64 h-64 bg-[#EBE8DE] bg-opacity-50 text-white flex flex-col justify-center items-center shadow-lg">
            <h2 className="font-bold text-lg relative">
              Accountability and Motivation
            </h2>
            <p className="text-sm relative text-center px-4 mt-2">
              Enjoy the benefits of personalized attention that keeps you on
              track and motivated throughout your fitness journey.
            </p>
          </div>
          {/* Card 3 */}
          <div className="relative w-64 h-64 bg-[#EBE8DE] bg-opacity-50 text-white flex flex-col justify-center items-center shadow-lg">
            <h2 className="font-bold text-lg relative">Empowerment</h2>
            <p className="text-sm relative text-center px-4 mt-2">
              Discover your inner strength and build confidence as you learn to
              box, all within a supportive and empowering environmen
            </p>
          </div>

          {/* Card 4 */}
          <div className="relative w-64 h-64 bg-[#EBE8DE] bg-opacity-50 text-white flex flex-col justify-center items-center shadow-lg">
            <h2 className="font-bold text-lg relative">Holistic Approach</h2>
            <p className="text-sm relative text-center px-4 mt-2">
              Our training goes beyond just physical fitness; we focus on
              improving your mental resilience and stress management through the
              art of boxing.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
