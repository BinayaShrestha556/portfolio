import { useContext } from 'react';
import projectPic1 from '../assets/Screenshot 2024-01-20 164708.png'
import projectPic2 from '../assets/Screenshot 2024-01-17 192610.png'
import AnimationComponent2 from './AnimateCompontent2';
import { HoverContext } from '../context/everything';
export default function Projects() {
  const {setCursorSize,ref2}=useContext(HoverContext)
  return (
   <div ref={ref2} className="w-full m-auto mt-20">
    <p className="w-full md:w-[90%] lg:w-[80%] xl:w-[70%] xxl:w-[60%]  m-auto px-4 tracking-[6.4px] text-xl">PROJECTS</p>
    <div className="flex md:w-[92%] flex-col xl:flex-row lg:w-[80%]  m-auto gap-8 w-full mt-8 lg:border-b pb-10 ">
      <div className="w-[98%] xl:w-[60%] xxl:w-[68%]  self-center bg-[rgb(255,81,0)] rounded-xl p-0.5">
        <img src={projectPic2} className='rounded-xl' alt="" />
      </div>

      <div  onMouseEnter={()=>setCursorSize(0)} onMouseLeave={()=>setCursorSize(20)} className="w-[90%] self-center xl:self-auto  border-b xl:border-none   xl:w-[40%] py-4  ">
        <AnimationComponent2 height='h-full' component={<div className='flex flex-col gap-4 xl:gap-0 justify-around h-full'>
          <p className="text-2xl md:text-3xl xxl:text-4xl font-bold text-[rgb(255,81,0)] tracking-[4.5px] my-0 ">
            E-COMMERCE WEBSITE
          </p>
          <p className='test-lg md:text-xl '>
            This website is a  FULL STACK  e-commerce website made using REACT js library as a front end famework,<strong>EXPRESS </strong> js as a backend and mongo db as a database. This website utilizes the powerful popular and versatile mern stack. This website is fully functional except payments with nice UI and FULLY RESPONSIVE.   
          </p>
          <div className='w-full flex justify-around'>
          <button className=" text-red hover:before:bg-redborder-[rgb(255,81,0)]  relative overflow-hidden border border-[rgb(255,81,0)] text-[rgb(255,81,0)] shadow-xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-[rgb(255,81,0)] before:transition-all before:duration-500 hover:text-white hover:shadow-[rgb(255,81,0)] hover:before:left-0 hover:before:w-full"><span className="relative py-2 md:px-16 xl:px-3  px-6 z-10 text-sm md:text-lg">LIVE WEBSITE</span></button>
          <button className=" text-white hover:before:bg-redborder-[rgb(255,81,0)] relative  overflow-hidden border border-[rgb(255,81,0)] bg-[rgb(255,81,0)]   shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-[#1A1919] before:transition-all before:duration-500 hover:text-[rgb(255,81,0)] hover:shadow-[rgb(255,81,0)] hover:before:left-0 hover:before:w-full"><p className="relative py-2  md:px-16 xl:px-3  px-6 z-10 text-sm md:text-lg">SOURCE CODE</p></button>
            

          </div>
          
        </div>} width='w-full'/>
        
      </div>
      
    </div>
   
    <div className="mt-20 m-auto w-fit">
      <h1 className='text-3xl '>more projects to be built</h1>
    </div>


   </div>
  );
}
