// import React from 'react'

import { Facebook, Linkedin, Volleyball, Youtube } from "lucide-react";

export default function Foot() {
  return (
    <>
        <div className=" w-full h-[30vh] border border-[rgba(20,10,34,1)] xxl:flex justify-center items-center ssm:hidden">
            <div className=" w-[40rem] h-full flex justify-center items-center text-white">
                <div className=" space-y-5">
                    <span className="text-3xl font-semibold">Digimax</span> 
                    <p className="text-[rgb(78,70,94)]">
                        Lorem ipsum dolor sit amet consectetur  adipisicing<br /> elit. Expedita illum fugiat debitis  distinctio<br /> ipsa minus quod officiis itaque est?
                    </p>
                    <section className=" flex gap-2">
                        <div className=" w-[2rem] h-[2rem] bg-white rounded-full border flex justify-center items-center">
                            <Facebook fill="white" color="black"/>
                        </div>

                        <div className=" w-[2rem] h-[2rem] bg-white rounded-full border flex justify-center items-center">
                            <Volleyball  bg-white color="black"/>
                        </div>

                        <div className=" w-[2rem] h-[2rem] bg-white rounded-full border flex justify-center items-center">

                        </div>

                        <div className=" w-[2rem] h-[2rem] bg-white rounded-full border flex justify-center items-center">
                            <Linkedin fill="white" color="black"/>
                        </div>

                        <div className=" w-[2rem] h-[2rem] bg-white rounded-full border flex justify-center items-center">
                            <Youtube fill="white" color="black"/>
                        </div>
                    </section>
                </div>
            </div>

            <div className=" w-[20rem] h-full flex justify-center items-center">
                <section className=" space-y-4">
                    <span className="text-3xl font-semibold text-white">Services</span>
                    <ul className=" space-y-2 text-[rgb(78,70,94)]">
                        <li className="">Website Development</li>
                        <li className="">App Configuration</li>
                        <li className="">Digital Marketing</li>
                        <li className="">Graphics Design</li>
                        <li className="">Brand Visibility</li>
                        <li className="">Search Engine Optimization</li>
                    </ul>
                </section>
            </div>

            <div className=" w-[20rem] h-full flex justify-center items-center">
            <section className=" space-y-4">
                    <span className="text-3xl font-semibold text-white">Support</span>
                    <ul className=" text-[rgb(78,70,94)] space-y-2">
                        <li className="">Help Center</li>
                        <li className="">FAQ</li>
                        <li className="">Digital Marketing</li>
                        <li className="">Tech Support</li>
                        <li className="">Sales Support</li>
                        <li className="">Contact Us</li>
                    </ul>
                </section>
            </div>

            <div className=" w-[20rem] h-full flex justify-center items-center">
            <section className=" space-y-4">
                    <span className="text-3xl font-semibold text-white">Company</span>
                    <ul className=" text-[rgb(78,70,94)] space-y-2">
                        <li className="">About Us</li>
                        <li className="">Our Team</li>
                        <li className="">Careers</li>
                        <li className="">Graphics Design</li>
                        <li className="">Brand Visibility</li>
                        <li className="">Search Engine Optimization</li>
                    </ul>
                </section>
            </div>
        </div>
        <div className=" w-full h-[70px] text-white xxl:flex justify-between items-center px-20 ssm:block ssm:text-xs ssm:w-full">
            <section className=" flex justify-center items-center text-[rgb(78,70,94)] ssm:w-full">
                Copyright &copy; Digimax. All rights reserved. Developed by PrinceDawn
            </section>
            <section className=" flex justify-center items-center gap-5 text-[rgb(78,70,94)]">
                <p>Terms of Use</p>
                <p>Privacy Policy</p>
                <p>Cookie Policy</p>
            </section>
        </div>
    </>
  )
}
