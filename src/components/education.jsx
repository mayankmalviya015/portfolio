import React from "react";

const Education = () => {
const educationData = [
{
year: "2025 - 2029",
degree: "Bachelor of Technology",
branch: "Computer Science (Internet of things)",
institute: "Samrat Ashok Technological Institute ",
location: "Vidisha, Madhya Pradesh",
grade: "CGPA: 7.0 / 10",
description:
"Currently pursuing B.Tech in Computer Science & Engineering. Developing strong skills in programming, data structures, web development and software engineering.",
},
{
year: "2025",
degree: "Class 12th",
branch: "Science (PCM)",
institute: "Higher Secondary School",
location: "Gyaraspur , vidisha , Madhya Pradesh",
grade: "Percentage: 91%",
description:
"Completed higher secondary education with Physics, Chemistry and Mathematics as major subjects.",
},
{
year: "2023",
degree: "Class 10th",
branch: "IT",
institute: "Higher Secondary Educationl",
location: "Gyaraspur , vidisha , Madhya Pradesh",
grade: "Percentage: 90%",
description:
"Completed secondary education and built a strong foundation in Mathematics, Science and Computer fundamentals.",
},
];

return ( <section
   id="education"
   className="min-h-screen bg-[#0b0f19] text-white px-6 md:px-12 lg:px-20 py-28"
 > <div className="max-w-6xl mx-auto">

    {/* Heading */}
    <div className="text-center mb-20">

      <p className="text-cyan-400 text-sm font-semibold tracking-[0.3em] mb-4">
        MY ACADEMIC JOURNEY
      </p>

      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
        Education
      </h2>

      <p className="text-gray-400 max-w-2xl mx-auto mt-5 text-base md:text-lg">
        My educational background and the journey that helped me
        build my technical foundation.
      </p>

    </div>


    {/* Timeline */}
    <div className="relative">

      {/* Top Dot */}
      <div
        className="
          hidden md:block
          absolute
          left-1/2
          top-0
          -translate-x-1/2
          w-4
          h-4
          rounded-full
          bg-cyan-400
          shadow-[0_0_20px_rgba(34,211,238,0.8)]
          z-20
        "
      ></div>


      {/* Main Line */}
      <div
        className="
          absolute
          left-5
          md:left-1/2
          top-2
          bottom-2
          w-px
          bg-gradient-to-b
          from-cyan-400
          via-cyan-400/30
          to-cyan-400
          md:-translate-x-1/2
        "
      ></div>


      {/* Education Cards */}
      {educationData.map((education, index) => (
        <div
          key={index}
          className={`
            relative
            flex
            mb-16
            ${
              index % 2 === 0
                ? "md:justify-start"
                : "md:justify-end"
            }
          `}
        >

          {/* Timeline Dot */}
          <div
            className="
              absolute
              left-5
              md:left-1/2
              top-10
              -translate-x-1/2
              w-4
              h-4
              rounded-full
              bg-cyan-400
              border-4
              border-[#0b0f19]
              shadow-[0_0_18px_rgba(34,211,238,0.7)]
              z-20
            "
          ></div>


          {/* Card */}
          <div
            className={`
              relative
              ml-12
              md:ml-0
              w-[calc(100%-3rem)]
              md:w-[45%]
              p-7
              rounded-2xl
              bg-white/[0.03]
              border
              border-white/10
              backdrop-blur-sm
              hover:border-cyan-400/50
              hover:bg-white/[0.05]
              hover:-translate-y-1
              transition-all
              duration-300

              ${
                index % 2 === 0
                  ? "md:mr-auto"
                  : "md:ml-auto"
              }
            `}
          >

            {/* Arrow */}
            <div
              className={`
                hidden md:block
                absolute
                top-9
                w-4
                h-4
                bg-[#111827]
                border-white/10
                rotate-45

                ${
                  index % 2 === 0
                    ? "-right-2 border-t border-r"
                    : "-left-2 border-b border-l"
                }
              `}
            ></div>


            {/* Year + Number */}
            <div className="flex items-center justify-between mb-5">

              <span className="text-cyan-400 font-semibold text-sm">
                {education.year}
              </span>

              <span className="text-gray-600 text-2xl font-bold">
                0{index + 1}
              </span>

            </div>


            {/* Degree */}
            <h3 className="text-2xl md:text-3xl font-bold mb-2">
              {education.degree}
            </h3>


            {/* Branch */}
            <p className="text-cyan-400 font-medium mb-5">
              {education.branch}
            </p>


            {/* Institute */}
            <div className="mb-5">

              <p className="text-gray-200 font-semibold">
                {education.institute}
              </p>

              <p className="text-gray-500 text-sm mt-1">
                {education.location}
              </p>

            </div>


            {/* Description */}
            <p className="text-gray-400 leading-7 text-sm md:text-base">
              {education.description}
            </p>


            {/* Grade */}
            <div className="mt-6 pt-5 border-t border-white/10">

              <span className="text-sm font-semibold text-gray-300">
                {education.grade}
              </span>

            </div>

          </div>

        </div>
      ))}


      {/* Bottom Dot */}
      <div
        className="
          hidden md:block
          absolute
          left-1/2
          bottom-0
          -translate-x-1/2
          w-4
          h-4
          rounded-full
          bg-cyan-400
          shadow-[0_0_20px_rgba(34,211,238,0.8)]
          z-20
        "
      ></div>

    </div>

  </div>
</section>


);
};

export default Education;
