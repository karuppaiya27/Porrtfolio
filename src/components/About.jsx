import { useEffect, useRef, useState } from "react";

const skills = [
  { name: "HTML", level: 90 },
  { name: "CSS", level: 75 },
  { name: "JAVA", level: 70 },
  { name: "JAVASCRIPT", level: 70 },
  { name: "SQL", level: 90 },
];

const About = () => {
  const [animate, setAnimate] = useState(false);
  const skillRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
        }
      },
      {
        threshold: 0.4,
      }
    );

    if (skillRef.current) {
      observer.observe(skillRef.current);
    }

    return () => {
      if (skillRef.current) {
        observer.unobserve(skillRef.current);
      }
    };
  }, []);

  return (
    <div id="about" className="bg-white min-h-screen flex items-center">
      <div className="max-w-[90%] md:max-w-[75%] mx-auto font-inter space-y-10 py-10">
        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-bold text-center text-[#fe5617]">
          About Me
        </h1>

        {/* About Me Section */}
        <div className="text-lg md:text-xl text-gray-700 text-center leading-relaxed space-y-4">
          <p>
            I’m <span className="font-bold text-[#fe5617]">Karuppaiya</span>, a
            software developer with a passion for building efficient, scalable,
            and user-centric applications.
          </p>
          <p>
            I specialize in web development, backend engineering, and full-stack
            projects. I love solving problems through code.
          </p>
          <p>
            <span className="font-bold text-[#fe5617]">Proficient in:</span>{" "}
            Java, JavaScript, SQL.
          </p>
          
          <p>
            When I’m not coding, I enjoy playing chess, listening to music, or
            watching football.
          </p>
        </div>

        {/* Skills Section with Animation on Scroll */}
        <h1 className="text-4xl md:text-5xl font-bold text-center text-[#fe5617]">
        Technical Skills
        </h1>
        <div
          ref={skillRef}
          className="skill-level space-y-6 mt-8 transition-all duration-1000"
        >
          {skills.map((skill, index) => (
            <div key={index}>
              <span className="font-semibold">
                {skill.name} <span className="text-[#fe5617]">{skill.level}%</span>
              </span>
              <div className="w-full bg-gray-200 h-4 rounded overflow-hidden mt-1">
                <div
                  className="bg-blue-500 h-4 rounded transition-all duration-1000 ease-in-out"
                  style={{
                    width: animate ? `${skill.level}%` : "0%",
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
