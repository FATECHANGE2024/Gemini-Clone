import React from 'react';
import {assets} from '../../assets/assets';

function Component2 () {




    return(
        <>
        <div className=' Main flex flex-col w-[90vw] h-[100vh] ml-30  '>
            
                <div className="flex justify-between  items-center   pr-2 pl-2 ">
                    <div className='ml-12' >
                        <p className="font-[outfit] text-xl  w-15 ">Gemini</p>
                        <p className="font-[outfit] bg-gray-200 rounded-2xl pl-1 pr-1  text-[15px] font-bold text-gray-500  ">2.0 Flash</p>
                    </div>
                    <div className='flex  gap-10 mt-2  items-center '>
                        <div className='w-45 h-8  flex text-center cursor-pointer rounded-[5px] bg-[hsl(0,2%,62%)] hover:bg-[hsl(0,2%,52%)]'>
                            <img className='object-cover size-5' src={assets.gemini_icon}/>
                            <p className="font-[outfit] ">Try Gemini Advanced</p>
                        </div> 
                        <img className="object-cover h-14 rounded-4xl cursor-pointer " src={assets.user_icon} alt=""/>
                    </div>

                </div>
                
            
            {/* <div className="Container flex flex-col h-full  pr-70 pl-70" > */}
                <div className='m-[50px] text-[56px] flex justify-center w-[80vw] font-medium p-5' >
                    <p className='bg-gradient-to-r from-[#4b9eff] to-[#ff5546] bg-clip-text text-transparent w-[20vw] '>Hello, Raj.</p>
                </div>                                                                                                              
                {/* <div className="loader flex flex-col items-center gap-3   ">
                    <hr className='w-[50vw] rounded-sm border-none h-[20px] bg-gradient-to-r from-[#9ed7ff] via-white to-[#9ed7ff] bg-[length:1600px_100%] animate-loader' />
                    <hr className='w-[50vw] rounded-sm border-none h-[20px] bg-gradient-to-r from-[#9ed7ff] via-white to-[#9ed7ff] bg-[length:1600px_100%] animate-loader' />
                    <hr className='w-[50vw] rounded-sm border-none h-[20px] bg-gradient-to-r from-[#9ed7ff] via-white to-[#9ed7ff] bg-[length:1600px_100%] animate-loader' />
                </div> */}
                <div className='flex justify-center gap-[10px] p-[50px] ml-[20px] mr-5' >
                    <div className='card bg-[hsl(216,14%,90%)] hover:bg-[hsl(216,14%,87%)] font-[outfit] h-[200px] rounded-2xl  relative  p-2 cursor-pointer w-[15vw]  '>
                        <p className=''>Suggested beautiful places to see on an upcoming road trip</p>
                        <img className='size-10 absolute right-1 bottom-1' src={assets.compass_icon} alt="" />
                    </div>
                    <div className='card bg-[hsl(216,14%,90%)] hover:bg-[hsl(216,14%,87%)] font-[outfit] h-[200px] rounded-2xl  relative  p-2 cursor-pointer w-[15vw] '>
                        <p>Briefly summarize the concept:Urban planning</p>
                        <img className='size-10 absolute right-1 bottom-1' src={assets.bulb_icon} alt="" />
                    </div>
                    <div className='card bg-[hsl(216,14%,90%)] hover:bg-[hsl(216,14%,87%)] font-[outfit] h-[200px] rounded-2xl  relative  p-2 cursor-pointer w-[15vw] '>
                        <p>Brainstorm team bonding activities for our  work retreat</p>
                        <img className='size-10 absolute right-1 bottom-1' src={assets.message_icon} alt="" />
                    </div>
                    <div className='card bg-[hsl(216,14%,90%)] hover:bg-[hsl(216,14%,87%)] font-[outfit] h-[200px] rounded-2xl  relative  p-2 cursor-pointer w-[15vw] '>
                        <p>Improve the readability of the following code</p>
                        <img className='size-10 absolute right-1 bottom-1' src={assets.code_icon} alt="" />
                    </div>                                                        
                </div> 
            {/* </div> */}
            <div className=' ml-[20vw] w-[50vw]' >
                <div className="flex items-center justify-between  bg-[hsl(220,13%,91%)] rounded-full p-2 w-full">
                    <input type='text' className='border-none outline-none  w-[45vw]' placeholder='Enter a prompt....' />
                    <div className='flex gap-4 mr-1'>
                        <img className='size-6.5 cursor-pointer rounded-full p-1  bg-[hsl(220,13%,91%)] hover:bg-[hsl(220,13%,81%)]' src={assets.gallery_icon} alt="" />
                        <img className='size-6.5 cursor-pointer rounded-full p-1 bg-[hsl(220,13%,91%)] hover:bg-[hsl(220,13%,81%)]' src={assets.mic_icon} alt="" />
                       <img className='size-6.5 cursor-pointer rounded-full p-1 bg-[hsl(220,13%,91%)] hover:bg-[hsl(220,13%,81%)]' src={assets.send_icon} alt="" />
                    </div>     
                </div>
            </div>        
        </div>
        </>
    );
}

export default Component2;