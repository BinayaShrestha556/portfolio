import { useContext } from 'react';
import { HoverContext } from "../context/everything"


export default function Footer() {
  const { ref3 }=useContext(HoverContext)
  return (
    <div ref={ref3} className='w-full bg-black pt-1 pb-8'>
        <p className="tracking-[5px] text-3xl font-bold w-[90%] lg:w-[80%] xl:w-[70%] xxl:w-[60%]  m-auto my-8"> CONTACT ME</p>
        <div className="w-[80%] lg:w-[60%] m-auto flex flex-wrap justify-between">
            <div>
                <div className="flex items-end gap-1"> <div className="overflow-hidden h-8 w-8 "> <div className="bg-[rgb(255,81,0)] h-8 w-8 rotate-45 relative top-4 left-4"></div></div><a className="lg:text-lg text-white rounded transition-all duration-300 ease-in-out before:absolute before:top-0 before:bottom-0 before:-left-full bg relative hover:before:left-0 hover:before:w-full before:w-0 before:transition-all  overflow-hidden before:z-0 z-10 before:bg-[rgb(255,81,0)] px-2 lg:px-4 py-1   border-b border-l border-[rgb(255,81,0)]"> <p className="z-50 relative">INSTAGRAM</p></a></div>
                <div className="flex items-end gap-1 mt-7"> <div className="overflow-hidden h-8 w-8 "> <div className="bg-[rgb(255,81,0)] h-8 w-8 rotate-45 relative top-4 left-4"></div></div><a className="lg:text-lg text-white rounded transition-all duration-300 ease-in-out before:absolute before:top-0 before:bottom-0 before:-left-full bg relative hover:before:left-0 hover:before:w-full before:w-0 before:transition-all  overflow-hidden before:z-0 z-10 before:bg-[rgb(255,81,0)] px-2 lg:px-4 py-1   border-b border-l border-[rgb(255,81,0)] "> <p className="z-50 relative">TWITTER</p></a></div>
            <div className="flex items-end gap-1 mt-7"> <div className="overflow-hidden h-8 w-8 "> <div className="bg-[rgb(255,81,0)] h-8 w-8 rotate-45 relative top-4 left-4"></div></div><a className="lg:text-lg text-white rounded transition-all duration-300 ease-in-out before:absolute before:top-0 before:bottom-0 before:-left-full bg relative hover:before:left-0 hover:before:w-full before:w-0 before:transition-all  overflow-hidden before:z-0 z-10 before:bg-[rgb(255,81,0)] px-2 lg:px-4 py-1   border-b border-l border-[rgb(255,81,0)]"><p className="z-50 relative"> GITHUB</p></a></div>

            </div>
            <div>
            <div className="flex items-end gap-1"> <div className="overflow-hidden h-8 w-8 "> <div className="bg-[rgb(255,81,0)] h-8 w-8 rotate-45 relative top-4 left-4"></div></div><a className="lg:text-lg text-white rounded transition-all duration-300 ease-in-out before:absolute before:top-0 before:bottom-0 before:-left-full bg relative hover:before:left-0 hover:before:w-full before:w-0 before:transition-all  overflow-hidden before:z-0 z-10 before:bg-[rgb(255,81,0)] px-2 lg:px-4 py-1   border-b border-l border-[rgb(255,81,0)]"><p className="z-50 relative"> FACEBOOK</p></a></div>
            <div className="flex items-end gap-1 mt-7"> <div className="overflow-hidden h-8 w-8 "> <div className="bg-[rgb(255,81,0)] h-8 w-8 rotate-45 relative top-4 left-4"></div></div><a className="lg:text-lg text-white rounded transition-all duration-300 ease-in-out before:absolute before:top-0 before:bottom-0 before:-left-full bg relative hover:before:left-0 hover:before:w-full before:w-0 before:transition-all  overflow-hidden before:z-0 z-10 before:bg-[rgb(255,81,0)] px-2 lg:px-4 py-1   border-b border-l border-[rgb(255,81,0)]"><p className="z-50 relative"> LINKEDiN</p></a></div>
            <div className="flex items-end gap-1 mt-7"> <div className="overflow-hidden h-8 w-8 "> <div className="bg-[rgb(255,81,0)] h-8 w-8 rotate-45 relative top-4 left-4"></div></div><a className="lg:text-lg text-white rounded transition-all duration-300 ease-in-out before:absolute before:top-0 before:bottom-0 before:-left-full bg relative hover:before:left-0 hover:before:w-full before:w-0 before:transition-all  overflow-hidden before:z-0 z-10 before:bg-[rgb(255,81,0)] px-2 lg:px-4 py-1   border-b border-l border-[rgb(255,81,0)]"><p className="z-50 relative"> UPWORK</p></a></div>


            </div>
            <div className="text-[rgb(255,81,0)] text-xl mt-7">
                <span className="lg:text-xl  font-bold text-white">EMAIL:</span><br/>
                binayashrestha862@gmail.com

            </div>


        </div>
    
      
    </div>
  )
}
