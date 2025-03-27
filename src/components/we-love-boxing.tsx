import BoxingV from "../assets/boxing-victory.png";

const BoxingPromo = () => {
  return (
    <div className="bg-[#EBE8DE] min-h-screen flex items-center justify-center p-8">
      <div className="max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Image Section */}
        <div className="relative">
          <img
            src={BoxingV}
            alt="Boxing Victory"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Text Section */}
        <div className="text-white">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            We love boxing.
          </h2>
          <p className="text-lg leading-relaxed mb-4 text-justify">
            We’re on a mission to make boxing a part of your everyday life! We
            believe in breaking down the stigma surrounding boxing, and our
            program is thoughtfully designed with the female body in mind. With
            every punch, you’ll not only boost your confidence but also learn
            valuable new skills in a fun and empowering atmosphere. Our workouts
            are tailored to your fitness level, ensuring you enjoy every moment
            while improving your cardiovascular health, balance, and strength.
          </p>
          <p className="text-lg text-justify">
            Together, we’ll create a supportive and encouraging environment
            where you can thrive!
          </p>
        </div>
      </div>
    </div>
  );
};

export default BoxingPromo;
