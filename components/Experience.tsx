import React from "react";
import Image from "next/image";
import Contributor_GSSoC2024 from "@/components/assets/Contributor_GSSoC2024.png"

function Experience() {
  return (
    <section id="experience">
      <h1 className="text-white font-semibold text-center text-6xl pt-[35px]">
        EXPERIENCE
      </h1>
      <p className="tracking-[0.5em] text-center text-transparent font-light pb-5 bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500 text-1xl">
        EXPLORE NOW
      </p>
      <div className="container mx-auto 2xl">
        <div className="flex flex-col bg-gray-800 bg-opacity-50 rounded-xl shadow-lg p-6 mt-5">
          <div className="flex flex-row justify-between w-full">
            <p className="text-gray-300">
              <span className="font-semibold">GSSOC&apos;24 Contributor</span>
            </p>
            <p className="text-gray-300">May-August 2024</p>
          </div>
          <p className="text-gray-300 pt-5 text-left flex mt-4`">
            Contributed in projects, raised issues, pull requests, and<br />
            also achieved Postman API Fundamentals Student Expert.
            
            <Image src={Contributor_GSSoC2024} alt="" className="h-36 w-56 ml-10"/>  
          </p>
          <div className="flex flex-col sm:flex-row justify-start mt-3">
            <div className="bg-transparent cursor-pointer rounded-3xl text-white py-2 px-5 border border-[#2E2E2E] mr-2 mb-2">
              Html
            </div>
            <div className="bg-transparent cursor-pointer rounded-3xl text-white py-2 px-5 border border-[#2E2E2E] mr-2 mb-2">
              Tailwind CSS
            </div>
            <div className="bg-transparent cursor-pointer rounded-3xl text-white py-2 px-5 border border-[#2E2E2E] mb-2">
              Javascript
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;