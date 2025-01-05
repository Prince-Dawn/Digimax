// import React from 'react'

import { Layers, MessageCircle, Newspaper } from "lucide-react";

export default function Works() {
  return (
    <>
        <div className=" xxl:w-full xxl:flex-row  xxl:h-[80vh] xxl:flex xxl:flex-wrap xxl:items-center xxl:justify-center ssm:w-full ssm:flex-col ssm:h-[85rem] ssm:space-y-5 ssm:border">
            <div className=" xxl:w-full text-center text-4xl text-white ssm:w-full">
                <span className=" text-xl text-[rgb(255,140,193)] ">HOW IT WORKS</span><br />
                Unlocking Astonishing Results with Just 3 <br /> Simple Steps
            </div>

            <div className=" xxl:w-full xxl:flex xxl:justify-center xxl:flex-row xxl:items-center xxl:space-x-5y ssm:flex-col ssm:space-y-5 ssm:w-full"> 
                <section className="xxl:w-1/5 xxl:h-[25rem] xxl:border-r-2 border-[rgba(255,140,194,0.06)] xxl:flex xxl:justify-center xxl:items-center xxl:flex-wrap xxl:py-5 ssm:w-full ssm:h-[fit-content] ssm:flex ssm:flex-wrap ssm:justify-center">
                    <div className=" w-[7rem] h-[7rem] rounded-full border flex justify-center items-center bg-[rgb(255,117,191)]">
                    <MessageCircle color="white" size={55} />
                    </div>
                    <p className=" text-white text-2xl font-bold w-full text-center">
                        Free Consultations
                    </p>
                    <p className="text-center text-white w-full">
                        Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Distinctio, ab!
                    </p>
                    <input type="button" value="GET STARTED" className=" bg-gradient-to-r from-[rgb(175,122,254)] to-[rgb(255,140,193)] w-[150px] h-[40px] rounded-3xl" />
                </section>

                <section className="xxl:w-1/5 xxl:h-[25rem] xxl:border-r-2 border-[rgba(255,140,194,0.06)] xxl:flex xxl:justify-center xxl:items-center xxl:flex-wrap py-5 ssm:w-full ssm:h-[fit-content] ssm:flex ssm:flex-wrap ssm:justify-center">
                    <div className=" w-[7rem] h-[7rem] rounded-full border flex justify-center items-center bg-[rgb(255,117,191)] ssm:justify-center">
                        <Newspaper color="white" size={55} />
                    </div>
                    <p className=" text-white text-2xl font-bold w-full text-center">
                        Discover the Product
                    </p>
                    <p className="text-center text-white w-full">
                        Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Distinctio, ab!
                    </p>
                    <input type="button" value="GET STARTED" className=" bg-gradient-to-r from-[rgb(175,122,254)] to-[rgb(255,140,193)] w-[150px] h-[40px] rounded-3xl" />
                </section>

                <section className="xxl:w-1/5 xxl:h-[25rem] xxl:border-r-2 border-[rgba(255,140,194,0.06)] xxl:flex xxl:justify-center xxl:items-center xxl:flex-wrap py-5 ssm:w-full ssm:h-[fit-content] ssm:flex ssm:flex-wrap ssm:justify-center">
                    <div className=" w-[7rem] h-[7rem] rounded-full border flex justify-center items-center bg-[rgb(255,117,191)] ssm:justify-center">
                    <Layers color="white" size={55} />
                    </div>
                    <p className=" text-white text-2xl font-bold w-full text-center">
                        Wire Frame & Production
                    </p>
                    <p className="text-center text-white w-full">
                        Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Distinctio, ab!
                    </p>
                    <input type="button" value="GET STARTED" className=" bg-gradient-to-r from-[rgb(175,122,254)] to-[rgb(255,140,193)] w-[150px] h-[40px] rounded-3xl" />
                </section>

                <section className="xxl:w-1/5 xxl:h-[25rem] xxl:flex xxl:justify-center xxl:items-center xxl:flex-wrap py-5 ssm:w-full ssm:h-[fit-content] ssm:flex ssm:flex-wrap ssm:justify-center">
                    <div className=" w-[7rem] h-[7rem] rounded-full border flex justify-center items-center bg-[rgb(255,117,191)] ssm:justify-center">
                        <Newspaper color="white" size={55} />
                    </div>
                    <p className=" text-white text-2xl font-bold w-full text-center">
                        Prototype Application
                    </p>
                    <p className="text-center text-white w-full">
                        Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Distinctio, ab!
                    </p>
                    <input type="button" value="GET STARTED" className=" bg-gradient-to-r from-[rgb(175,122,254)] to-[rgb(255,140,193)] w-[150px] h-[40px] rounded-3xl" />
                </section>
            </div>
        </div>
    </>
  )
}
