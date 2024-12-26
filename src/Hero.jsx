// import React from 'react'

export default function Hero() {
  return (
    <>
        <div className="w-full h-[100vh] bg-purple-700i">
            <div className="flex justify-between items-center h-[10%] px-14 text-white border-b-[0.1px] border-purple-500">
                <div className=" text-4xl">
                    Digimax
                </div>
                <div className=" flex space-x-4 items-center ">
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
            <div className="w-full h-[90%] flex justify-center items-center">
                <div className="h-full w-1/2 flex justify-center items-center flex-wrap">
                    <div className=" space-y-7">
                        <span className="text-[rgb(255,140,193)] text-2xl">WEBSITE DEVELOPMENT</span>
                        <div className=" ">
                            <span className=" text-white text-5xl font-bold">Delivering IT solutions that <br /> enable you to work smarter.</span>
                        </div>
                        <div className=" text-wrap text-white">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores quasi  molestiae eveniet<br /> exercitationem sunt  ratione a quos assumenda distinctio possimus sint, quam nesciunt<br /> maxime at reprehenderit nobis similique odio hic.
                        </div>
                        <input type="button" value="GET STARTED" className=" bg-gradient-to-r from-[rgb(175,122,254)] to-[rgb(255,140,193)] w-[150px] h-[40px] rounded-3xl" />
                    </div>
                </div>
                <div className="h-full w-1/2 flex justify-center items-center">
                    <img src="/laptop.png" alt="" className="" />
                </div>
            </div>
        </div> 
    </>
  )
}
