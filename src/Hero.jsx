// import React from 'react'

export default function Hero() {
  return (
    <>
        <div className="xxl:w-full xxl:h-[100vh] pt-2 ssm:h-[50rem]">
            <div className="xxl:flex xxl:justify-between items-center xxl:flex-row xxl:h-[10%] px-14 text-white border-b-[0.1px] border-purple-500 ssm:hidden">
                <div className=" text-4xl w-fit-content ">
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
            <div className="xxl:w-full h-[100%] xxl:flex xxl:flex-row xxl:justify-center xxl:items-center ssm:flex-col">
                <div className="xxl:h-full xxl:w-1/2 xxl:flex xxl:justify-center xxl:items-center xxl:flex-wrap ssm:w-full  ssm:justify-start ssm:items-start ssm:px-5">
                    <div className=" space-y-7 ssm:h-[fit-content]">
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
