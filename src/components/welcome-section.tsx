const WelcomePage = () => {
  return (
    <div className="relative w-full text-white px-4 sm:px-6 lg:px-8">
      <section className="flex items-center justify-center min-h-[40vh]">
        <div className="relative max-w-6xl text-[#1E1E1E] text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold mb-6 sm:mb-8 md:mb-10">
            Welcome to Punch Boxing Academy!
          </h1>
          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 md:mb-10">
            Empowering women in the heart of Hong Kong through boxing! Our
            supportive and inclusive community welcomes all levels and prides
            itself on being especially beginner-friendly. With a focus on
            technique, fitness, and personal growth, our expert team will guide
            you on your journey to confidence and resilience. Join us to
            experience the power of boxing, connect with inspiring women, and
            smash your goals—one punch at a time!
          </p>
        </div>
      </section>
    </div>
  );
};

export default WelcomePage;
