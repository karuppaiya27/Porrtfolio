const Project = () => {
  return (
    <div id="project" className="bg-[#ffffff] min-h-screen flex items-center">
      <div className="max-w-[90%] md:max-w-[75%] mx-auto font-inter space-y-10 py-10">
        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-bold text-center text-[#fe5617]">
          My Projects
        </h1>

        {/* Railway Reservation System */}
        <div className="flex flex-col md:flex-col gap-10">
          <div className="w-full flex flex-col items-center bg-[#F2EFE5] p-6 rounded-2xl shadow-lg">
            <h1 className="text-[#fe5617] font-extrabold text-[32px] mb-4">
              Railway Reservation System
            </h1>
            <p className="text-lg text-gray-700 mb-4">
              A full-stack application developed using HTML, CSS, Java, ORM (Hibernate), and MySQL. It allows passengers to log in, book/cancel tickets, check train details and seat availability. Admins can manage train schedules and routes.
            </p>
            <a
          href="https://github.com/karuppaiya27/railway-reservation-system" // Replace with your GitHub repo link
          className="text-center text-blue-600 font-bold text-lg hover:underline"
          target="_blank"
        >
          View Source Code on GitHub
        </a>
          </div>

          {/* Travel and Tourism Management System */}
          <div className="w-full flex flex-col bg-[#F2EFE5] p-6 rounded-2xl shadow-lg">
            <h1 className="text-center text-[#fe5617] font-extrabold text-[32px] mb-4">
              Travel and Tourism Management System
            </h1>
            <p className="text-lg text-gray-700 mb-4">
              A Java-based desktop application for managing tourist activities. Users can book hotels, select tour packages, and explore site info. Developed with Java Swing, JDBC, and MySQL for streamlined booking experiences.
            </p>
            <a
              href="https://github.com/karuppaiya27/TravelAndTourismSystem"
              className="text-center text-blue-600 font-bold text-lg hover:underline"
              target="_blank"
            >
              View Source Code on GitHub
            </a>
          </div>
        </div>

        {/* Online Canteen System */}
        <div className="flex flex-col md:flex-col gap-10 mt-10">
          <div className="w-full flex flex-col items-center bg-[#F2EFE5] p-6 rounded-2xl shadow-lg">
            <h1 className="text-[#fe5617] font-extrabold text-[32px] mb-4">
              Online Canteen System
            </h1>
            <p className="text-lg text-gray-700 mb-4">
              A campus-based online food ordering system integrating online payments and COD. Features include automated order processing, a user rating system, and a responsive UI. Built with Java, JSP, and MySQL.
            </p>
            <a
              href="/OnlineCanteenSystem.pptx"
              className="text-center text-blue-600 font-bold text-lg hover:underline"
            >
              Download PPT
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
