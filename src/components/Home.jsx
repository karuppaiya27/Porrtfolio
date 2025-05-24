import Typewriter from "typewriter-effect";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Home = () => {
  return (
    <div id="home" className="bg-[#FFFFFF]">
      <div className="max-w-[85%] mx-auto font-inter flex flex-col-reverse md:flex-row items-center justify-between gap-4 min-h-screen pt-4 md:pt-0">
        
        {/* Left Section */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start justify-start space-y-5 text-center md:text-left mt-0 md:mt-0">
          <h1 className="text-3xl md:text-5xl font-bold mt-2 md:mt-0">
            I’m <span className="text-[#fe5617]">Karuppaiya M</span>
          </h1>

          <h2 className="text-2xl md:text-3xl font-bold flex gap-2">
            <span className="text-[#fe5617]">I’m a</span>
            <Typewriter
              options={{
                strings: [
                  "Developer.",
                  "Designer.",
                  "Video Editor.",
                  "Freelancer.",
                ],
                autoStart: true,
                loop: true,
                delay: 50,
                deleteSpeed: 30,
              }}
            />
          </h2>

          <p className="text-lg md:text-xl text-gray-700 font-medium">
            Passionate software developer skilled in full-stack, web, mobile, and backend development. Focused on building scalable apps and solving real-world problems through code
          </p>

          {/* Contact Info */}
          <div className="flex flex-col space-y-3 md:space-y-0 md:flex-row md:gap-6 text-lg md:text-xl font-semibold">
            <div className="flex items-center gap-3">
              <FaLocationDot className="text-[#fe5617]" size={20} />
              <span>Tamil Nadu</span>
            </div>
            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-[#fe5617]" size={20} />
              <span>7639775774</span>
            </div>
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-[#fe5617]" size={20} />
              <span>karuppaiya20it021@gmail.com</span>
            </div>
          </div>

          {/* Resume Button */}
          <div className="bg-[#fe5617] px-5 py-2 rounded-2xl font-bold text-white hover:bg-[#e24d10] transition">
            <a href="/Karuppaiya-Resume.pdf" download>Download CV</a>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-0 md:mt-0">
          <img
            className="w-[85%] rounded-[50px]"
            src="/profile.jpg"
            alt="Profile"
          />
        </div>

      </div>
    </div>
  );
};

export default Home;
