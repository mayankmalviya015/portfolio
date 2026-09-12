import React from "react";

const Hero = () => {
const skills = [
{
name: "Java",
logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
},
{
name: "C",
logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
},
{
name: "React",
logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
},
{
name: "Tailwind CSS",
logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
},
{
name: "HTML",
logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
},
{
name: "JavaScript",
logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
},
{
name: "MongoDB",
logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
},
{
name: "Express.js",
logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
},
{
name: "Node.js",
logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
},
];

return ( <section
   id="home"
   className="min-h-screen bg-[#0b0f19] text-white flex flex-col justify-center overflow-hidden"
 >

```
  {/* ================= HERO CONTENT ================= */}

  <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pt-24 pb-16">

    <div className="min-h-[75vh] flex flex-col md:flex-row items-center justify-center gap-14 md:gap-20">

      {/* ================= PHOTO ================= */}

      <div className="w-full md:w-1/2 flex justify-center md:justify-end">

        <div className="relative">

          {/* Glow */}
          <div className="absolute -inset-5 bg-cyan-400/20 blur-3xl rounded-full"></div>

          {/* Image */}
          <img
            src="/photo.png"
            alt="Mayank Malviya"
            className="
              relative
              w-[250px]
              sm:w-[290px]
              md:w-[340px]
              lg:w-[390px]
              h-[380px]
              sm:h-[430px]
              md:h-[500px]
              lg:h-[570px]
              object-cover
              object-top
              rounded-2xl
              shadow-2xl
            "
          />

        </div>

      </div>


      {/* ================= CONTENT ================= */}

      <div className="w-full md:w-1/2 text-center md:text-left">

        <p className="text-cyan-400 text-lg md:text-xl mb-4 tracking-[0.3em]">
          HELLO, I'M
        </p>

        <h1
          className="
            text-5xl
            sm:text-6xl
            md:text-7xl
            lg:text-8xl
            font-bold
            tracking-tight
          "
        >
          Mayank
          <br />

          <span className="text-cyan-400">
            Malviya
          </span>
        </h1>

        <p className="mt-8 text-lg md:text-xl text-gray-400 max-w-lg leading-relaxed">
         Aspiring Software Developer passionate about Java, Full-Stack Development & Problem Solving. I love turning ideas into clean, scalable, and user-friendly digital experiences.
        </p>

      </div>

    </div>

  </div>


  {/* ================= SKILLS SECTION ================= */}

  <div className="w-full pb-8">

    {/* Heading */}

    <div className="text-center mb-5">

      <p className="text-gray-500 text-xs md:text-sm tracking-[0.35em] uppercase">
        Technologies I Work With
      </p>

    </div>


    {/* Top Line */}

    <div className="h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent"></div>


    {/* Moving Skills */}

    <div className="relative w-full overflow-hidden bg-[#0b0f19]/90 backdrop-blur-md">

      <div className="flex w-max animate-[scroll_28s_linear_infinite] hover:[animation-play-state:paused]">

        {/* First Set */}

        <div className="flex items-center shrink-0">

          {skills.map((skill, index) => (

            <div
              key={`first-${index}`}
              className="
                flex
                items-center
                gap-3
                px-7
                md:px-12
                py-5
                border-r
                border-white/5
              "
            >

              <img
                src={skill.logo}
                alt={`${skill.name} logo`}
                className="
                  w-7
                  h-7
                  md:w-8
                  md:h-8
                  object-contain
                "
              />

              <span className="text-gray-300 font-medium text-sm md:text-base whitespace-nowrap">
                {skill.name}
              </span>

            </div>

          ))}

        </div>


        {/* Second Set */}

        <div className="flex items-center shrink-0">

          {skills.map((skill, index) => (

            <div
              key={`second-${index}`}
              className="
                flex
                items-center
                gap-3
                px-7
                md:px-12
                py-5
                border-r
                border-white/5
              "
            >

              <img
                src={skill.logo}
                alt={`${skill.name} logo`}
                className="
                  w-7
                  h-7
                  md:w-8
                  md:h-8
                  object-contain
                "
              />

              <span className="text-gray-300 font-medium text-sm md:text-base whitespace-nowrap">
                {skill.name}
              </span>

            </div>

          ))}

        </div>

      </div>

    </div>


    {/* Bottom Line */}

    <div className="h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent"></div>

  </div>


  {/* ================= ANIMATION ================= */}

  <style>
    {`
      @keyframes scroll {
        from {
          transform: translateX(0);
        }

        to {
          transform: translateX(-50%);
        }
      }
    `}
  </style>

</section>


);
};

export default Hero;
