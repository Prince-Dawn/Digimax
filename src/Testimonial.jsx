// import React from 'react'

export default function Testimonial() {
  return (
    <>
        <div className=" xxl:w-full xxl:h-[100vh] xxl:flex xxl:flex-wrap xxl:justify-center xxl:items-center ">
            <div className="space-y-20">

                <div className=" xxl:w-full xxl:text-5xl font-bold text-white text-center  ssm:text-2xl">
                    <span className=" font-normal text-xl text-[rgb(255,140,193)]">TESTIMONIAL</span> <br />
                    Client Feedback & Reviews
                </div>

                <div className=" w-full flex flex-wrap justify-center items-center xxl:space-x-5 ssm:space-y-5 xxl:space-y-0">

                    <section className=" rounded-xl xxl:w-[25rem] h-[20rem] bg-[rgb(41,36,58)] flex justify-center items-center flex-wrap py-5 ssm:w-[90%]">
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
                    
                    <section className=" rounded-xl xxl:w-[25rem] h-[20rem] bg-[rgb(41,36,58)] flex justify-center items-center flex-wrap py-5 ssm:w-[90%]">
                        <section className=" border w-[5rem] h-[5rem] rounded-full"></section>
                        <p className=" text-center text-white px-5">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga esse, eius accusantium cum quod vel. Sunt, eos. Omnis repellendus nam placeat dicta. Voluptas, vero!
                        </p>
                        <p className=" w-full text-center text-white">
                            Michael Chem <br />
                            <span className="text-[rgb(255,140,193)]">SERGEANT ELECRONICS</span>
                        </p>
                    </section>

                    <section className=" rounded-xl xxl:w-[25rem] h-[20rem] bg-[rgb(41,36,58)] flex justify-center items-center flex-wrap py-5 ssm:w-[90%]">
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
