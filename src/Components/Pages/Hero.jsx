// import React from 'react'
import { Menu, X } from "lucide-react";




// let ham = document.getElementById('ham');
// let x = document.getElementById('x');
// let menu = document.getElementById('menu');
//     function handleClick(){
//         console.log('hello')
//         alert('hello');
//     }

//     x.addEventListener("click", function() {
//         menu.style.display='none';
//         x.style.display='none';
//         ham.style.display='block';
        
// });

// ham.addEventListener("click", function() {
//     menu.style.display='block';
//     ham.style.display='none';
//     x.style.display='block';

// console.log(menu.style.display)
// });

export default function Hero() {
  return (
    <>
        <div className="xxl:w-full xxl:h-[100vh] xxl:pt-2 ssm:h-[52rem]">
            <div className="xxl:flex xxl:justify-between items-center xxl:flex-row xxl:h-[10%] xxl:px-14 text-white border-b-[0.1px] border-purple-500 ssm:text-center ssm:h-[6%] ssm:flex ssm:items-center ssm:justify-center xxl:static ssm:fixed ssm:top-0 ssm:w-full bg-[rgb(10,0,24)]">
                <div className=" xxl:text-4xl xxl:w-[20%] ssm:text-3xl ssm:flex ssm:justify-around ssm:items-center ssm:w-full ">
                    <button type="submit" id="ham" className="xxl:hidden ssm:flex" >
                        <Menu />
                    </button>
                    Digimax
                    <button type="submit" id="x" className="xxl:hidden ssm:flex">
                        <X/>
                    </button>
                </div>
                <div className=" xxl:flex xxl:space-x-4 xxl:items-center ssm:hidden " id="menu">
                    <ul className="flex space-x-4 text-xl">
                        <li className="">Homepage</li>
                        <li className="">About us</li>
                        <li className="">Services</li>
                        <li className="">Contact us</li>
                        <li className="">Pages</li>
                    </ul>
                    <input type="button" value="GET STARTED" className=" bg-gradient-to-r from-[rgb(175,122,254)] to-[rgb(255,140,193)] w-[150px] h-[40px] rounded-3xl" />
                </div>
            </div>

            
            <div className="xxl:w-full h-[100%] xxl:flex xxl:flex-row xxl:justify-center xxl:items-center ssm:flex-col">
                <div className="xxl:h-full xxl:w-1/2 xxl:flex xxl:justify-center xxl:items-center xxl:flex-wrap ssm:w-full  ssm:justify-start ssm:items-start ssm:px-5 ssm:pt-[10%]">
                    <div className=" space-y-7 ssm:h-[fit-content] py-5">
                        <span className="text-[rgb(255,140,193)] text-base ">WEBSITE DEVELOPMENT</span>
                        <div className=" ">
                            <span className=" text-white xxl:text-5xl font-bold ssm:text-xl">Delivering IT solutions that <br /> enable you to work smarter.</span>
                        </div>
                        <div className=" text-wrap text-white">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores quasi  molestiae eveniet<br /> exercitationem sunt  ratione a quos assumenda distinctio possimus sint, quam nesciunt<br /> maxime at reprehenderit nobis similique odio hic.
                        </div>
                        <input type="button" value="GET STARTED" className=" bg-gradient-to-r from-[rgb(175,122,254)] to-[rgb(255,140,193)] w-[150px] h-[40px] rounded-3xl" />
                    </div>
                </div>
                <div className="xxl:h-full xxl:w-1/2 xxl:flex xxl:justify-center xxl:items-center ssm:w-full ">
                    <img src="/laptop.png" alt="" className="" />
                </div>
            </div>
        </div> 
    </>
  )
}
