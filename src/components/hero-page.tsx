import heroBanner from "../assets/hero-banner.png";
import Navbar from "./navbar";

const HeroPage = () => {
  return (
    <div className="relative w-full min-h-screen text-white">
      <Navbar />
      <section
        className="relative w-full min-h-[75vh] flex items-center justify-start bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBanner})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative max-w-6xl text-white text-left p-8 ml-12 lg:ml-10 md:ml-6 sm:ml-4 sm:p-4">
          <h1
            className="text-6xl lg:text-8xl md:text-3xl sm:text-2xl font-semibold mb-8 leading-tight"
            style={{ color: "white" }}
          >
            A Boxing Workout That Hits Different
          </h1>
          <p
            className="text-xl md:text-base sm:text-sm mb-8 leading-relaxed"
            style={{ color: "white" }}
          >
            The perfect blend of boxing techniques and full-body fitness crafted
            for women. <br />
            Build strength and confidence with every punch!
          </p>
        </div>
      </section>
    </div>
  );
};

export default HeroPage;
