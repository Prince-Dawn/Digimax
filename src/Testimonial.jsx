// import React from 'react'

export default function Testimonial() {
  return (
    <>
        <div className=" w-full h-[100vh] flex flex-wrap justify-center items-center">
            <div className="space-y-20">

                <div className=" w-full text-5xl font-bold text-white text-center">
                    <span className=" font-normal text-xl text-[rgb(255,140,193)]">TESTIMONIAL</span> <br />
                    Client Feedback & Reviews
                </div>

                <div className=" w-full flex justify-center items-center space-x-5">

                    <section className=" rounded-xl w-[25rem] h-[20rem] bg-[rgb(41,36,58)] flex justify-center items-center flex-wrap py-5">
                        <section className=" border w-[5rem] h-[5rem] rounded-full">
                            <img src="/sarah thompson.jpg" alt="" className=" w-full h-full rounded-full" />
                        </section>
                        <p className=" text-center text-white px-5">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga esse, eius accusantium cum quod vel. Sunt, eos. Omnis repellendus nam placeat dicta. Voluptas, vero!
                        </p>
                        <p className=" w-full text-center text-white">
                            Sarah Thompson <br />
                            <span className="text-[rgb(255,140,193)]">Thompson & CO</span>
                        </p>
                    </section>
                    
                    <section className=" rounded-xl w-[25rem] h-[20rem] bg-[rgb(41,36,58)] flex justify-center items-center flex-wrap py-5">
                        <section className=" border w-[5rem] h-[5rem] rounded-full"></section>
                        <p className=" text-center text-white px-5">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga esse, eius accusantium cum quod vel. Sunt, eos. Omnis repellendus nam placeat dicta. Voluptas, vero!
                        </p>
                        <p className=" w-full text-center text-white">
                            Michael Chem <br />
                            <span className="text-[rgb(255,140,193)]">SERGEANT ELECRONICS</span>
                        </p>
                    </section>

                    <section className=" rounded-xl w-[25rem] h-[20rem] bg-[rgb(41,36,58)] flex justify-center items-center flex-wrap py-5">
                        <section className=" border w-[5rem] h-[5rem] rounded-full"></section>
                        <p className=" text-center text-white px-5">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga esse, eius accusantium cum quod vel. Sunt, eos. Omnis repellendus nam placeat dicta. Voluptas, vero!
                        </p>
                        <p className=" w-full text-center text-white">
                            Ryan Miller <br />
                            <span className="text-[rgb(255,140,193)]">SERGEANT ELECRONICS</span>
                        </p>
                    </section>

                </div>
            </div>
        </div>
    </>
  )
}
