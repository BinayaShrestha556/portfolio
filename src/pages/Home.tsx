import { useContext } from "react"
import { HoverContext } from "../context/everything"

import AnimationComponents from "../components/AnimationComponents"


export default function Home() {
  const{setCursorSize}=useContext(HoverContext)

  return (
    
    <div className="w-[90%] flex items-center justify-center flex-col m-auto font-lato h-screen ">
      
       <AnimationComponents component={ <div className=" text-center tracking-[6.4px] text-xl ">  <p 
        >BINAYA SHRESTHA</p></div>} width="100%"/>
        <div onMouseEnter={()=>setCursorSize(100)} onMouseLeave={()=>setCursorSize(20)} className="mt-5 text-[35px] md:text-[40px] xl:text-[65px] lg:text-[55px] xxl:text-[72px] md:w-[85%] lg:w-[75%] xl:w-[65%] xxl:w-[60%]  w-full text-center leading-[97%] tracking-tight font-bold"> <span>HI!&nbsp;</span> IM&nbsp; <span className="mt-5 text-[35px] md:text-[40px] xl:text-[65px] lg:text-[55px] xxl:text-[72px]  text-[rgb(255,81,0)]">BINAYA </span>, &nbsp; AN&nbsp; EXPERIENCED&nbsp; AND&nbsp; SKILLFULL&nbsp; <br/> <span className="text-[rgb(255,81,0)]">FULL&nbsp; STACK&nbsp;</span> DEVELOPER&nbsp; AND&nbsp; DESIGNER&nbsp;</div>
     
    </div>
    
  )
}
