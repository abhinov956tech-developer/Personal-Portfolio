import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo2 from "@/components/assets/Logo2.png"

const Projects: React.FC<{}> = () => {
  return (
    <section id="projects">
    <h1 className="text-white font-semibold text-center text-6xl pt-[35px]">
      PROJECTS
    </h1>
    <p className="tracking-[0.5em] text-center text-transparent font-light pb-5 bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500 text-1xl">
      EXPLORE NOW
    </p>
    <div className="container mx-auto 5xl">
      <div className="flex flex-col md:flex-row justify-center mt-7">
        <Link
          href=""
          rel="noopener noreferrer"
          target="_blank"
          className="z-[1] w-full md:w-1/2 lg:w-full p-6"
        >
          <div className="flex flex-col bg-gray-800 bg-opacity-50 rounded-xl shadow-lg p-8 mb-5">
            <div className="flex flex-row">
            
              <div className="p-4 ">
                <p className="text-white font-semibold text-xl">Ecommerce Website</p>
                <p className="text-gray-300 text-base flex">
                  Ecommerce website focused on its frontend part using Next.js. 
                  <Image src={Logo2} alt="Logo" className="h-28 w-28 ml-10"></Image>
                </p>
                
              </div>
            </div>
          </div>
          
        </Link>
      </div>
    </div>
  </section>
  
  );
};

export default Projects;
