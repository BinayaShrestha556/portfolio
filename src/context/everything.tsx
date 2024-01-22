import { createContext,Dispatch,SetStateAction } from "react"
interface ContextType{
    CursorSize: number;
    setCursorSize: Dispatch<SetStateAction<number>>;
    hoverPosition:any;
    sethoverPosition: any;
    hover:boolean;
    setHover:Dispatch<SetStateAction<boolean>>;
    ref1:any;
    ref2:any;
    ref3:any;
}
const Everything:ContextType={
    CursorSize:0,
    setCursorSize:()=>{},
    hoverPosition:[],
    sethoverPosition:()=>{},
    hover:false,
    setHover:()=>{},
    ref1:null,
    ref2:null,

    ref3:null

    
}
export const HoverContext=createContext(Everything)