import React from "react";

const Contact = () => {
const profiles = [
{
name: "LinkedIn",
username: "Mayank Malviya",
description: "Connect with me professionally",
image: "/linkedin.png",
link: "https://www.linkedin.com/in/mayank-malviya-261841399/",
},
{
name: "GitHub",
username: "@mayank_015",
description: "Explore my projects and repositories",
image: "/github.png",
link: "https://github.com/mayankmalviya015",
},
{
name: "LeetCode",
username: "@mayank_015",
description: "Check my problem solving journey",
image: "/leetcode.png",
link: "https://leetcode.com/u/mayank_015/",
},
];

return ( <section
   id="contact"
   className="min-h-screen bg-[#0b0f19] text-white px-6 md:px-12 lg:px-20 py-28"
 > <div className="max-w-6xl mx-auto">

```
    {/* ================= HEADING ================= */}

    <div className="text-center mb-16">

      <p className="text-cyan-400 text-sm font-semibold tracking-[0.3em] mb-4">
        LET'S CONNECT
      </p>

      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
        Contact <span className="text-cyan-400">Me</span>
      </h2>

      <p className="text-gray-400 max-w-2xl mx-auto mt-5 leading-7">
        Want to know more about me, my work or my coding journey?
        Check out my profiles below.
      </p>

    </div>


    {/* ================= PROFILE CARDS ================= */}

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

      {profiles.map((profile, index) => (

        <a
          key={index}
          href={profile.link}
          target="_blank"
          rel="noopener noreferrer"
          className="
            group
            relative
            overflow-hidden
            rounded-2xl
            bg-white/[0.03]
            border
            border-white/10
            hover:border-cyan-400/50
            hover:-translate-y-2
            transition-all
            duration-300
          "
        >

          {/* ================= SCREENSHOT ================= */}

          <div className="relative w-full h-64 overflow-hidden bg-[#111827]">

            <img
              src={profile.image}
              alt={`${profile.name} profile`}
              className="
                w-full
                h-full
                object-cover
                object-top
                group-hover:scale-105
                transition-transform
                duration-500
              "
            />

            {/* Overlay */}

            <div
              className="
                absolute
                inset-0
                bg-gradient-to-t
                from-[#0b0f19]
                via-transparent
                to-transparent
                opacity-70
              "
            ></div>


            {/* Open Icon */}

            <div
              className="
                absolute
                top-4
                right-4
                w-10
                h-10
                rounded-full
                bg-black/50
                backdrop-blur-md
                border
                border-white/10
                flex
                items-center
                justify-center
                text-white
                group-hover:bg-cyan-400
                group-hover:text-[#0b0f19]
                transition-all
                duration-300
              "
            >
              ↗
            </div>

          </div>


          {/* ================= CARD CONTENT ================= */}

          <div className="p-6">

            <div className="flex items-center justify-between">

              <h3 className="text-2xl font-bold group-hover:text-cyan-400 transition">
                {profile.name}
              </h3>

              <span className="text-gray-600 font-bold text-xl">
                0{index + 1}
              </span>

            </div>

            <p className="text-cyan-400 text-sm mt-2">
              {profile.username}
            </p>

            <p className="text-gray-500 text-sm mt-3 leading-6">
              {profile.description}
            </p>

            <div className="mt-5 flex items-center gap-2 text-sm text-gray-400 group-hover:text-cyan-400 transition">
              View Profile
              <span className="group-hover:translate-x-1 transition-transform">
                →
              </span>
            </div>

          </div>

        </a>

      ))}

    </div>


    {/* ================= EMAIL ================= */}

    <div className="text-center mt-20">

      <p className="text-gray-500 text-sm">
        Have a project or opportunity in mind?
      </p>

      <a
        href="mailto:mayankmalviya2620@gmail.com"
        className="
          inline-block
          mt-3
          text-xl
          font-semibold
          text-cyan-400
          hover:text-cyan-300
          transition
        "
      >
       mayankmalviya2620@gmail.com
      </a>

    </div>

  </div>
</section>


);
};

export default Contact;
