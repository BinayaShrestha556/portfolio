import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function AnimationComponent2({
  component,
  width,
  height="h-fit"
}: {
  component: JSX.Element;
  width: string;
  height:string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref,{once:true});
  const [animateOnView, setAnimateOnView] = useState("hidden");
  const [zindex,setZindex]=useState("z-50")
  
  useEffect(() => {
    if (isInView) {setAnimateOnView("show");
    setTimeout(()=>{setZindex("z-0")},1000)}
    else setAnimateOnView("hidden");
  }, [isInView]);


  return (
    <div ref={ref} className={`relative z-0 overflow-hidden ${width} ${height}`}>
      <div className="h-full">{component}</div>
      <div className={`absolute top-0 w-full h-full  left-0  ${zindex}`}>
        <motion.div className="relative h-1/4 bg-[rgb(255,81,0)] w-full " variants={{hidden:{left:0},show:{left:"100%"}}} initial="hidden" animate={animateOnView} transition={{delay:0.6, duration:0.4}}></motion.div>
        <motion.div className="relative h-1/4 bg-[rgb(255,81,0)] w-full " variants={{hidden:{left:0},show:{left:"100%"}}} initial="hidden" animate={animateOnView} transition={{delay:0.6, duration:0.7}}></motion.div>
        <motion.div className="relative h-1/4 bg-[rgb(255,81,0)] w-full " variants={{hidden:{left:0},show:{left:"100%"}}} initial="hidden" animate={animateOnView} transition={{delay:0.6, duration:0.5}}></motion.div>
        <motion.div className="relative h-1/4 bg-[rgb(255,81,0)] w-full " variants={{hidden:{left:0},show:{left:"100%"}}} initial="hidden" animate={animateOnView} transition={{delay:0.6, duration:0.8}}></motion.div>
      </div>
    </div>
  );
}
