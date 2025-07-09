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
              Built a secure, full-stack railway booking system with Spring Boot and PostgreSQL.
Enabled users to view trains, book tickets, and view booking history with login access.
Created an admin panel to manage train records (add/update/delete).
Used Thymeleaf and Bootstrap to build a responsive UI with role-based access control.
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
             Developed a full-stack tourism booking web app using Spring Boot and Bootstrap.
Implemented user login, JWT-based authentication, tour package browsing, and booking history.
Created an admin dashboard to manage users, packages, and bookings efficiently.
Ensured secure API communication with a responsive and modern frontend design.
            </p>
            <a
              href="https://github.com/karuppaiya27/travel-tourism-system"
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
              Designed a canteen food ordering system with Spring Boot and PostgreSQL.
Implemented user login/register, role-based access, cart, and checkout (COD/online).
Developed an admin panel to manage food items and customer orders.
Used Thymeleaf and Bootstrap to create a mobile-friendly, fast UI experience.
            </p>
             <a
              href="https://github.com/karuppaiya27/online-canteen-system"
              className="text-center text-blue-600 font-bold text-lg hover:underline"
              target="_blank"
            >
              View Source Code on GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
