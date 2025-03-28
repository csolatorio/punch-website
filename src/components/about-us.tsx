import Image1 from "../assets/stacey.png";
import Image2 from "../assets/stacey1.png";
import Image3 from "../assets/stacey2.png";
// import Image4 from "../assets/box-training.png";

const AboutUs = () => {
  return (
    <div className="max-w-5xl mx-auto p-6 grid gap-8 mt-10 mb-10 flex items-center justify-center p-8">
      {/* About Us Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
        <div className="md:col-span-2 ">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <div className="w-16 h-16 bg-[#EBE8DE]"></div>
            <div className="w-5 h-16 bg-[#EBE8DE]"></div>
            <h2 className="text-3xl md:text-4xl font-bold">Meet Stacey</h2>
          </div>
          {/* <h2 className="text-3xl md:text-4xl font-bold">Stacey Pincher</h2> */}
          <p className="mt-4 font-bold">OWNER / FOUNDER / HEAD COACH</p>
          <p className="mt-4 text-gray-700 text-justify">
            With 17 years of experience in self-defense and body combat, I’m
            excited to share my passion for coaching with you. As a proud
            veteran of the UK Armed Forces, where I also boxed competitively,
            and a bodyguard for high-profile clients worldwide, I bring a unique
            perspective and wealth of knowledge to my training.
          </p>
          <p className="mt-4 text-black-800 text-justify">
            “Having spent most of my career in male-dominated environments, I’m
            deeply passionate about breaking down barriers for women. I take
            pride in empowering women to discover their potential and showing
            what we can truly achieve together.”
          </p>
        </div>
        <div className="flex flex-col items-center gap-4">
          <img
            src={Image1}
            alt="Stacey Pincher"
            className="w-400 object-cover rounded"
          />
          <div className="grid grid-cols-2 gap-2">
            <img src={Image2} alt="" className="w-200 object-cover rounded" />
            <img src={Image3} alt="" className="w-200 object-cover rounded" />
          </div>
        </div>
      </div>

      {/* Our Mission Section */}
      {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
        <div className="flex flex-col items-center">
          <img
            src={Image4}
            alt="Boxing Training"
            className="w-full md:w-430 object-cover rounded"
          />
        </div>
        <div className="md:col-span-2">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <div className="w-16 h-16 bg-[#EBE8DE]"></div>
            <div className="w-5 h-16 bg-[#EBE8DE]"></div>
            <h2 className="text-3xl md:text-4xl font-bold">Our Mission</h2>
          </div>
          <p className="mt-4 text-gray-700">
            At Punch, our mission is to integrate boxing into everyday life,
            celebrating it as an art form of discipline, confidence, and
            empowerment for women. We are dedicated to breaking down the stigma
            surrounding boxing with a program specifically designed to focus on
            the female body, boosting confidence with every punch while
            tailoring workouts to your fitness level to enhance cardiovascular
            health, balance, and strength.
          </p>
        </div>
      </div> */}
    </div>
  );
};

export default AboutUs;
