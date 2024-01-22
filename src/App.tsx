import { useEffect, useRef, useState } from "react";
import AboutMe from "./components/AboutMe";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Home from "./pages/Home";
import { motion,useInView,useMotionValue, useSpring } from 'framer-motion';
import { HoverContext } from "./context/everything";
import Footer from "./components/Footer";

export default function App() {
  const [CursorSize,setCursorSize]=useState(20)
  const [hoverPosition,sethoverPosition]=useState([])
  const [hover,setHover]=useState(false)

const  mousePosition={
  x:useMotionValue(0),
  y:useMotionValue(0)
}

  useEffect(()=>{
    const mouseMove=(e:any)=>{
     
       mousePosition.x.set(e.clientX-CursorSize/2)
       mousePosition.y.set(e.clientY-CursorSize/2)

     
    }
    window.addEventListener("mousemove",mouseMove)
    return()=>{
      window.removeEventListener("mousemove",mouseMove)
    }
})
const springParameter={damping:20,stiffness:300,mass:0.5}
const ref1=useRef(null)
const ref2=useRef(null)

const ref3=useRef(null)


const spring={
  
  x:useSpring(mousePosition.x,springParameter),
  y:useSpring(mousePosition.y,springParameter)

}


const isAboutOnView = useInView(ref1)
const isMyWorksOnView = useInView(ref2)

const isContactsOnView = useInView(ref3)






  return (
    <div>
    <HoverContext.Provider value={{CursorSize,setCursorSize,hoverPosition,sethoverPosition,hover,setHover,ref1,ref2,ref3}}>
    <div className="bg-[#1A1919] text-white">
      <Navbar isContactsOnView={isContactsOnView} isMyWorksOnView={isMyWorksOnView} isAboutOnView={isAboutOnView} />
      {/* <div className="h-20 w-20 bg-red-500" onMouseEnter={()=>setCursorSize(200)} onMouseOut={()=>setCursorSize(100)}></div> */}
      <Home />
      <AboutMe  />
      <Projects />
<motion.div className="h-10 w-10 pointer-events-none hidden xl:block bg-[#fff] fixed top-0 rounded-full left-0 mix-blend-difference" style={{top:spring.y, left:spring.x}} animate={{width:CursorSize,height:CursorSize}}>
  

</motion.div>
      <Footer/>
    </div>

    </HoverContext.Provider></div>
  );
}
