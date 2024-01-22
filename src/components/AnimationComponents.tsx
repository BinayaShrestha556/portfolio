
import {motion,useInView} from 'framer-motion'
import { useEffect, useRef, useState } from 'react';
export default function AnimationComponents( {component,width}:{component: JSX.Element;width: string} ) {
    const ref=useRef(null)
    const isInView=useInView(ref,{once:true})
    const [animateOnView,setAnimateOnView]=useState("hidden")
    useEffect(()=>{if(isInView)setAnimateOnView("show"); else setAnimateOnView("hidden")},[isInView])
  return (
    <div ref={ref} className={`relative z-0 overflow-hidden ${width}`}
    >
       <motion.div
       variants={{
        hidden:{opacity:0, y:75},
        show:{opacity:1, y:0}

       }}
        initial="hidden"
        animate={animateOnView}
        transition={{duration:0.5,delay:0.2}}
       
       >{component}</motion.div>
       <motion.div className='absolute bg-[rgb(255,81,0)] top-0 w-full h-full left-0  z-50' variants={{hidden:{left:0},show:{left:"100%"}}} initial="hidden" animate={animateOnView}  transition={{duration:0.5, delay:0.2}}></motion.div>
      
    </div>
  )
}
