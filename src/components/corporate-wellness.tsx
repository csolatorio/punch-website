import Navbar from "./navbar";
import Footer from "./footer";
import ContactGym from "./contact-gym";
import {
  FaBrain,
  FaSmileBeam,
  FaUsers,
  FaHeart,
  FaShieldAlt,
  FaBullseye,
  FaBalanceScale,
} from "react-icons/fa";

export default function CorporateWellness() {
  return (
    <div className="relative bg-white w-full h-screen text-white">
      <Navbar />
      <section className="bg-white text-black py-12 px-8 text-center">
        <div className="max-w-7xl mx-auto p-6">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <div className="w-16 h-16 bg-[#EBE8DE]"></div>
            <div className="w-5 h-16 bg-[#EBE8DE]"></div>
            <h2 className="text-3xl md:text-4xl font-bold">Corporate Class</h2>
          </div>
          <h2 className="text-3xl md:text-3xl font-bold mb-5 mt-5 text-left">
            Transform Your Workplace with Corporate Boxing Classes at Punch!
          </h2>
          <p className="text-gray-600 mb-6 text-lg md:text-base text-left">
            Revitalize your organization with our Corporate Boxing Classes at
            Punch! Tailored for companies aiming to enhance their employee
            wellness and benefit programs, our group classes offer a unique and
            effective way to improve both physical fitness and mental health.
          </p>
          <h2 className="text-3xl md:text-3xl font-bold mb-5 mt-5 text-left">
            Key Benefits:
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-8 mt-10 md:gap-4 md:w-[80%] mx-auto">
          {/* Card 1 */}
          <div className="relative w-64 h-64 bg-[#EBE8DE] bg-opacity-50 text-white flex flex-col justify-center items-center shadow-lg">
            {/* <img
              src="/images/team-building.jpg"
              alt="Team Building"
              className="absolute inset-0 w-full h-full object-cover opacity-60"
            /> */}
            <h2 className="font-bold text-lg relative flex items-center gap-2">
              <FaBrain /> Mental Resilience
            </h2>
            <p className="text-sm relative text-center px-4 mt-2">
              Boxing builds mental toughness, equipping employees with the
              resilience to face challenges confidently.
            </p>
          </div>

          {/* Card 2 */}
          <div className="relative w-64 h-64 bg-[#EBE8DE] bg-opacity-50 text-white flex flex-col justify-center items-center shadow-lg">
            {/* <img
              src="/images/memorable-bonding.jpg"
              alt="Memorable Bonding"
              className="absolute inset-0 w-full h-full object-cover opacity-60"
            /> */}
            <h2 className="font-bold text-lg relative flex items-center gap-2">
              <FaSmileBeam /> Stress Relief
            </h2>
            <p className="text-sm relative text-center px-4 mt-2">
              Enjoy a dynamic workout that reduces stress and promotes a
              positive mindset, boosting overall workplace morale.
            </p>
          </div>

          {/* Card 3 */}
          <div className="relative w-64 h-64 bg-[#EBE8DE] bg-opacity-50 text-white flex flex-col justify-center items-center shadow-lg">
            {/* <img
              src="/images/team-building.jpg"
              alt="Team Building"
              className="absolute inset-0 w-full h-full object-cover opacity-60"
            /> */}
            <h2 className="font-bold text-lg relative flex items-center gap-2">
              <FaUsers /> Team Building
            </h2>
            <p className="text-sm relative text-center px-4 mt-2">
              Strengthen connections among colleagues with collaborative
              training sessions that nurture teamwork and communication.
            </p>
          </div>

          {/* Card 4 */}
          <div className="relative w-64 h-64 bg-[#EBE8DE] bg-opacity-50 text-white flex flex-col justify-center items-center shadow-lg">
            {/* <img
              src="/images/memorable-bonding.jpg"
              alt="Memorable Bonding"
              className="absolute inset-0 w-full h-full object-cover opacity-60"
            /> */}
            <h2 className="font-bold text-lg relative flex items-center gap-2">
              <FaHeart /> Memorable Bonding
            </h2>
            <p className="text-sm relative text-center px-4 mt-2">
              Create lasting memories as team members motivate and challenge one
              another, deepening workplace relationships.
            </p>
          </div>

          {/* Card 5 */}
          <div className="relative w-64 h-64 bg-[#EBE8DE] bg-opacity-50 text-white flex flex-col justify-center items-center shadow-lg">
            {/* <img
              src="/images/pushing-limits.jpg"
              alt="Pushing Limits"
              className="absolute inset-0 w-full h-full object-cover opacity-60"
            /> */}
            <h2 className="font-bold text-lg relative flex items-center gap-2">
              <FaShieldAlt /> Self-Defense Skills
            </h2>
            <p className="text-sm relative text-center px-4 mt-2">
              Equip your team with practical self-defense techniques, empowering
              them to feel safer and more confident both in and out of the
              workplace.
            </p>
          </div>

          {/* Card 6 */}
          <div className="relative w-64 h-64 bg-[#EBE8DE] bg-opacity-50 text-white flex flex-col justify-center items-center shadow-lg">
            {/* <img
              src="/images/pushing-limits.jpg"
              alt="Pushing Limits"
              className="absolute inset-0 w-full h-full object-cover opacity-60"
            /> */}
            <h2 className="font-bold text-lg relative flex items-center gap-2">
              <FaBullseye /> Enhanced Focus
            </h2>
            <p className="text-sm relative text-center px-4 mt-2">
              Help participants sharpen their concentration and productivity by
              channeling their energy through boxing techniques.
            </p>
          </div>

          {/* Card 7 */}
          <div className="relative w-64 h-64 bg-[#EBE8DE] bg-opacity-50 text-white flex flex-col justify-center items-center shadow-lg">
            {/* <img
              src="/images/pushing-limits.jpg"
              alt="Pushing Limits"
              className="absolute inset-0 w-full h-full object-cover opacity-60"
            /> */}
            <h2 className="font-bold text-lg relative flex items-center gap-2">
              <FaBalanceScale /> Work-Life Balance
            </h2>
            <p className="text-sm relative text-center px-4 mt-2">
              Our classes encourage employees to step away from their daily
              routines, nurturing a healthier balance in their lives.
            </p>
          </div>
        </div>
      </section>
      <ContactGym />
      <Footer />
    </div>
  );
}
