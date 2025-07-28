import React,{useState} from 'react';
import  {assets} from '../../assets/assets';

function Sidebar(){

    const[extended, setExtended] = useState(false);

    return(
        <>
         <div className={`min-h-screen inline-flex p-2 flex-col justify-between fixed bg-slate-100 transition-all duration-500 ease-in-out ${extended ? 'w-[170px]' : 'w-[60px]'}`}  onMouseEnter={()=>setExtended(true)} onMouseLeave={()=>setExtended(false)}  >
            <div className="top">
                <img className='w-5 rounded-[20%]  mt-3 ml-3.5 cursor-pointer  hover:bg-[hsl(218,28%,82%)]'  src={assets.menu_icon} alt="" onClick={()=> setExtended(e=>!e)}/>
                <div className=" h-[40px] mt-[50px] ml-[10px] gap-2 flex items-center justify-center rounded-full bg-[hsl(210,16%,90%)] hover:bg-[hsl(210,16%,84%)] cursor-pointer"  >
                    <img className="w-[20px] block cursor-pointer   " src={assets.plus_icon} alt="" />
                    {extended ? <p className="  rounded-4xl">New Chat</p> : null}
                </div>
                {extended ?
                <div className="flex flex-col ml-[10px]" >
                    <p  className="mt-[30px] mb-[20px] " >Recent</p>
                    <div  className="flex items-start  whitespace-nowrap overflow-hidden  gap-1 p-[10px] pr-4 rounded-4xl  text-gray-900 cursor-pointer " >
                        <img className="w-[20px] block ml-[10px] cursor-pointer" src={assets.message_icon} alt="" />
                        <p className="font-[Outfit] rounded-[50px] p-1 text-sm   hover:bg-gray-300">what is react...</p>
                    </div>
                </div>
                :null}
            </div>

            <div className="bottom" >
                <div  className="flex items-start gap-1 p-[10px] pr-4 rounded-4xl text-gray-900 cursor-pointer hover:bg-sky-600   " >
                    <img className="w-[20px] block ml-[10px] cursor-pointer " src={assets.question_icon} alt="" />
                    {extended? <p className=" font-[Outfit] transition-all duration-500 ease-in-out ">Help</p>:null}
                </div>
                <div  className="flex items-start gap-1 p-[10px] pr-4 rounded-4xl text-gray-900 cursor-pointer hover:bg-sky-600  " >
                    <img className="w-[20px] block ml-[10px] cursor-pointer " src={assets.history_icon} alt="" />
                    {extended? <p className="font-[Outfit] transition-all duration-500 ease-in-out ">History</p> :null}
                </div>
                <div  className="flex items-start gap-1 p-[10px] pr-4 rounded-4xl text-gray-900 cursor-pointer hover:bg-sky-600  " >
                    <img className="w-[20px] block ml-[10px] cursor-pointer  " src={assets.setting_icon} alt="" />
                    {extended? <p className="font-[Outfit] transition-all duration-500 ease-in-out ">Settings</p> :null}
                </div>
            </div>
         </div>
        </>
    );
}

export default Sidebar; 