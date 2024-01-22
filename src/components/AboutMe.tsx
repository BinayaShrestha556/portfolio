import { useContext } from "react";
import { HoverContext } from "../context/everything";

import AnimationComponents from "./AnimationComponents";

export default function AboutMe() {
  const { setCursorSize, ref1 } = useContext(HoverContext);

  return (
    <div ref={ref1} className="">
      <div className="w-full md:w-[90%] lg:w-[80%] xl:w-[70%] xxl:w-[60%] px-3  m-auto mt-20  ">
        <div
          onMouseEnter={() => setCursorSize(80)}
          onMouseLeave={() => setCursorSize(20)}
          className="text-xl tracking-[6.4px] w-fit cursor-default"
        >
          ABOUT ME</div>
        <div
          onMouseEnter={() => setCursorSize(100)}
          onMouseLeave={() => setCursorSize(20)}
          className=" text-[35px] md:text-[40px] xl:text-[65px] lg:text-[55px] xxl:text-[64px]  mt-3 font-bold leading-[98.5%] tracking-tight   w-[96%]"
        >
          I am a <span className="text-[rgb(255,81,0)]">web designer</span> and a{" "}
          <span className="text-[rgb(255,81,0)]">developer</span>. I’m a learner
          learning about new things and still navigating around my career path.
        </div>
        <div className="mt-40">
          <p className=" text-xl tracking-[6.4px]">WORK EXPERIENCE</p>
          <div className="text-[35px] md:text-[40px] xl:text-[65px] lg:text-[55px] xxl:text-[64px] xl:tracking-tight xl:leading-[95%] mt-3 leading-[98.5%] font-bold">
            Im a <span className="text-[rgb(255,81,0)]">fresher</span> and currently have no real work experience except <span className="text-[rgb(255,81,0)]">building my own website projects</span>. I have good set of skills regarding <span className="text-[rgb(255,81,0)]">web developlent</span>. Im trying to get into <span className="text-[rgb(255,81,0)]">freelancing </span>and hope to succeed in there. Im still a student of <span className="text-[rgb(255,81,0)]"> TU</span> studing <span className="text-[rgb(255,81,0)]"> BSC. CSIT </span>in <span className="text-[rgb(255,81,0)]">Birendra Multiple Campus</span>.
          </div>
        </div>

        <p className="text-xl tracking-[6.4px] w-[65%] mt-40">TECH STACK </p>
      </div>
      <div
        onMouseEnter={() => setCursorSize(100)}
        onMouseLeave={() => setCursorSize(20)}
        className="w-[100vw] border-t flex items-center  text-white   before:absolute before:top-0 before:bottom-0 before:-left-full bg relative hover:before:left-0 hover:before:w-full before:w-0 before:transition-all   before:z-0  before:bg-[rgb(255,81,0)] px-4 py-1     hover:text-[#1A1919] transition-all ease-in-out duration-500 before:duration-500 tracking-tight  border-gray-500 border-b-[1px] justify-center overflow-hidden"
      >
        <div className="w-full md:w-[90%] lg:w-[80%] xl:w-[70%] xxl:w-[60%] ">
          {" "}
          <AnimationComponents
            component={<p className="text-[50px] md:text-[58px] lg:text-[65px] xxl:text-[72px] font-bold ">JAVASCRIPT</p>}
            width="w-fit"
          />
        </div>{" "}
      </div>
      <div
        onMouseEnter={() => setCursorSize(100)}
        onMouseLeave={() => setCursorSize(20)}
        className="w-[100vw]  flex items-center  text-white   before:absolute before:top-0 before:bottom-0 before:-left-full bg relative hover:before:left-0 hover:before:w-full before:w-0 before:transition-all   before:z-0  before:bg-[rgb(255,81,0)] px-4 py-1     hover:text-[#1A1919] transition-all ease-in-out duration-500 before:duration-500 tracking-tight  border-gray-500 border-b-[1px] justify-center overflow-hidden"
      >
        <div className="w-full md:w-[90%] lg:w-[80%] xl:w-[70%] xxl:w-[60%] ">
          <AnimationComponents
            component={<p className="text-[50px] md:text-[58px] lg:text-[65px] xxl:text-[72px] font-bold ">NODE JS</p>}
            width="w-fit"
          />
        </div>{" "}
      </div>
      <div
        onMouseEnter={() => setCursorSize(100)}
        onMouseLeave={() => setCursorSize(20)}
        className="w-[100vw]  flex items-center  text-white   before:absolute before:top-0 before:bottom-0 before:-left-full bg relative hover:before:left-0 hover:before:w-full before:w-0 before:transition-all   before:z-0  before:bg-[rgb(255,81,0)] px-4 py-1     hover:text-[#1A1919] transition-all ease-in-out duration-500 before:duration-500 tracking-tight  border-gray-500 border-b-[1px] justify-center overflow-hidden "
      >
        <div className="w-full md:w-[90%] lg:w-[80%] xl:w-[70%] xxl:w-[60%] ">
          <AnimationComponents
            component={<p className="text-[50px] md:text-[58px] lg:text-[65px] xxl:text-[72px] font-bold ">REACT</p>}
            width="w-fit"
          />
        </div>
      </div>
      <div
        onMouseEnter={() => setCursorSize(100)}
        onMouseLeave={() => setCursorSize(20)}
        className="w-[100vw]  flex items-center  text-white   before:absolute before:top-0 before:bottom-0 before:-left-full bg relative hover:before:left-0 hover:before:w-full before:w-0 before:transition-all   before:z-0  before:bg-[rgb(255,81,0)] px-4 py-1     hover:text-[#1A1919] transition-all ease-in-out duration-500 before:duration-500 tracking-tight  border-gray-500 border-b-[1px] justify-center overflow-hidden"
      >
        <div className="w-full md:w-[90%] lg:w-[80%] xl:w-[70%] xxl:w-[60%] ">
          {" "}
          <AnimationComponents
            component={<p className="text-[50px] md:text-[58px] lg:text-[65px] xxl:text-[72px] font-bold ">TAILWIND CSS</p>}
            width="w-fit"
          />
        </div>
      </div>
      <div
        onMouseEnter={() => setCursorSize(100)}
        onMouseLeave={() => setCursorSize(20)}
        className="w-[100vw]  flex items-center  text-white   before:absolute before:top-0 before:bottom-0 before:-left-full bg relative hover:before:left-0 hover:before:w-full before:w-0 before:transition-all   before:z-0  before:bg-[rgb(255,81,0)] px-4 py-1     hover:text-[#1A1919] transition-all ease-in-out duration-500 before:duration-500 tracking-tight  border-gray-500 border-b-[1px] justify-center overflow-hidden "
      >
        <div className="w-full md:w-[90%] lg:w-[80%] xl:w-[70%] xxl:w-[60%] ">
          <AnimationComponents
            component={<p className="text-[50px] md:text-[58px] lg:text-[65px] xxl:text-[72px] font-bold ">EXPRESS JS</p>}
            width="w-fit"
          />
        </div>{" "}
      </div>
      <div
        onMouseEnter={() => setCursorSize(100)}
        onMouseLeave={() => setCursorSize(20)}
        className="w-[100vw]  flex items-center  text-white   before:absolute before:top-0 before:bottom-0 before:-left-full bg relative hover:before:left-0 hover:before:w-full before:w-0 before:transition-all   before:z-0  before:bg-[rgb(255,81,0)] px-4 py-1     hover:text-[#1A1919] transition-all ease-in-out duration-500 before:duration-500 tracking-tight  border-gray-500 border-b-[1px] justify-center overflow-hidden "
      >
        <div className="w-full md:w-[90%] lg:w-[80%] xl:w-[70%] xxl:w-[60%] ">
          <AnimationComponents
            component={<p className=" text-[50px] md:text-[58px] lg:text-[65px] xxl:text-[72px] font-bold ">MONGO DB</p>}
            width="w-fit"
          />
        </div>{" "}
      </div>
    </div>
  );
}
