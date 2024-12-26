// import React from 'react'

import { Layers, MessageCircle, Newspaper } from "lucide-react";

export default function Works() {
  return (
    <>
        <div className=" w-full h-[80vh] flex flex-wrap items-center justify-center">
            <div className=" w-full text-center text-4xl text-white">
                <span className=" text-xl text-[rgb(255,140,193)]">HOW IT WORKS</span><br />
                Unlocking Astonishing Results with Just 3 <br /> Simple Steps
            </div>

            <div className=" w-full flex justify-center items-center space-x-5y">
                <section className="w-1/5 h-[25rem] border-r-2 border-[rgba(255,140,194,0.06)] flex justify-center items-center flex-wrap py-5">
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

                <section className="w-1/5 h-[25rem] border-r-2 border-[rgba(255,140,194,0.06)] flex justify-center items-center flex-wrap py-5">
                    <div className=" w-[7rem] h-[7rem] rounded-full border flex justify-center items-center bg-[rgb(255,117,191)]">
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

                <section className="w-1/5 h-[25rem] border-r-2 border-[rgba(255,140,194,0.06)] flex justify-center items-center flex-wrap py-5">
                    <div className=" w-[7rem] h-[7rem] rounded-full border flex justify-center items-center bg-[rgb(255,117,191)]">
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

                <section className="w-1/5 h-[25rem] flex justify-center items-center flex-wrap py-5">
                    <div className=" w-[7rem] h-[7rem] rounded-full border flex justify-center items-center bg-[rgb(255,117,191)]">
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
