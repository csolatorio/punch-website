export default function CorporateWellness() {
  return (
    <section className="bg-white text-black py-12 px-8 text-center">
      <div className="max-w-7xl mx-auto p-6">
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <div className="w-16 h-16 bg-[#EBE8DE]"></div>
          <div className="w-5 h-16 bg-[#EBE8DE]"></div>
          <h2 className="text-3xl md:text-4xl font-bold">
            Corporate Staff Wellness Program
          </h2>
        </div>
        <p className="text-gray-600 mb-6 text-lg md:text-base">
          Investing in our people means investing in our future. Our wellness
          programs build stronger teams, foster deeper connections, and push
          limits for personal and professional growth.
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-center gap-8 mt-10">
        {/* Card 1 */}
        <div className="relative w-64 h-64 bg-black bg-opacity-50 text-white flex flex-col justify-center items-center shadow-lg">
          <img
            src="/images/team-building.jpg"
            alt="Team Building"
            className="absolute inset-0 w-full h-full object-cover opacity-60"
          />
          <h2 className="font-bold text-lg relative">Team Building</h2>
          <p className="text-sm relative text-center px-4 mt-2">
            Strengthen connections among colleagues with collaborative training
            sessions that nurture teamwork and communication.
          </p>
        </div>

        {/* Card 2 */}
        <div className="relative w-64 h-64 bg-black bg-opacity-50 text-white flex flex-col justify-center items-center shadow-lg">
          <img
            src="/images/memorable-bonding.jpg"
            alt="Memorable Bonding"
            className="absolute inset-0 w-full h-full object-cover opacity-60"
          />
          <h2 className="font-bold text-lg relative">Memorable Bonding</h2>
          <p className="text-sm relative text-center px-4 mt-2">
            Create lasting memories as team members motivate and challenge one
            another, deepening workplace relationships.
          </p>
        </div>

        {/* Card 3 */}
        <div className="relative w-64 h-64 bg-black bg-opacity-50 text-white flex flex-col justify-center items-center shadow-lg">
          <img
            src="/images/pushing-limits.jpg"
            alt="Pushing Limits"
            className="absolute inset-0 w-full h-full object-cover opacity-60"
          />
          <h2 className="font-bold text-lg relative">Pushing Limits</h2>
          <p className="text-sm relative text-center px-4 mt-2">
            Encouraging personal and professional growth outside comfort zones.
          </p>
        </div>
      </div>
    </section>
  );
}
