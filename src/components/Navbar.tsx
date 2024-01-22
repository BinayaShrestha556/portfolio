import logo from '../assets/my_site_logo_2-1.png';
import ig from '../assets/instagram_white.png';
import gh from '../assets/github_white.png';
import ln from '../assets/linkedin_white.png';
import up from '../assets/upwork_white.png';
import { useContext } from 'react';
import { HoverContext } from '../context/everything';

export default function Navbar({isAboutOnView,isContactsOnView,isMyWorksOnView}:{isContactsOnView:boolean,isMyWorksOnView:boolean,isAboutOnView:boolean}) {
  
  const {  setCursorSize } = useContext(HoverContext);





  


  return (
    <div>
      <div className='flex justify-between items-center w-full px-[4%] m-auto fixed z-50 bg-gradient-to-t from-[#1A1919]/10 to-[#1A1919] top-0 right-0 left-0 '>
        <img onMouseEnter={()=>{setCursorSize(55); }} onMouseLeave={()=>setCursorSize(20)} src={logo} className='w-[59px]' alt='' />
        <div  className='text-right tracking-tighter'>
          <p  onMouseEnter={()=>setCursorSize(50)} onMouseOut={()=>setCursorSize(20)} className={`${isAboutOnView?"text-xs":"text-md"} cursor-pointer hover:mb-0.5 transition-all ease-in-out duration-75`}>ABOUT ME</p>
          <p onMouseEnter={()=>setCursorSize(50)} onMouseOut={()=>setCursorSize(20)} className={`${isMyWorksOnView?"text-xs":"text-md"} hover:m-0.5 cursor-pointer transition-all ease-in-out duration-75`}>MY WORKS</p>
          <p onMouseEnter={()=>setCursorSize(50)} onMouseOut={()=>setCursorSize(20)} className={`${isContactsOnView?"text-xs":"text-md"} hover:mt-0.5 cursor-pointer transition-all ease-in-out duration-75`}>CONTACT ME</p>
        </div>
      </div>
      <div className='w-[22px] fixed top-[431px] hidden lg:block left-[60px]'>
        <a href="https://www.instagram.com/binay._.shrestha/"></a><img onMouseEnter={()=>{setCursorSize(55); }} onMouseLeave={()=>setCursorSize(20)} src={ig} alt='' />
        <a href="https://github.com/BinayaShrestha556"></a><img onMouseEnter={()=>{setCursorSize(55); }} onMouseLeave={()=>setCursorSize(20)} className='my-6' src={gh} alt='' />
        <a href="/"></a><img onMouseEnter={()=>{setCursorSize(55); }} onMouseLeave={()=>setCursorSize(20)} className='my-6' src={ln} alt='' />
        <a href="https://www.upwork.com/workwith/binayas5"></a><img onMouseEnter={()=>{setCursorSize(55); }} onMouseLeave={()=>setCursorSize(20)} src={up} alt='' />
      </div>
    </div>
  );
}
