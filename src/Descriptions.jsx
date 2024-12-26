// import React from 'react'
import { Camera, MonitorUp, Shield, Target } from 'lucide-react';

export default function Descriptions() {
  return (
    <>
        <div className="flex justify-start items-center h-[70vh] w-full">
            <div className=" w-[60%] h-full flex justify-center items-center">
                <div className=" text-purple-200 space-y-7">
                    <span className="text-4xl">Descriptions</span>
                    <div className="">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et aperiam nemo reprehenderit distinctio esse <br /> provident molestiae sint quaerat temporibus autem odit, nam tempora voluptate eveniet id animi.<br /> Ducimus quas architecto distinctio cum atque, ad quae. Cum dolorum, beatae autem velit doloribus reiciendis,<br /> voluptas maxime alias soluta saepe dolores eos atque, temporibus quidem assumenda dignissimos.<br /> Dicta natus magni debitis hic autem.
                    </div>

                    <div className="">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et aperiam nemo reprehenderit distinctio esse <br /> provident molestiae sint quaerat temporibus autem odit, nam tempora voluptate eveniet id animi.<br /> Ducimus quas architecto distinctio cum atque, ad quae. Cum dolorum, beatae autem velit doloribus reiciendis,<br /> voluptas maxime alias soluta saepe dolores eos atque, temporibus quidem assumenda dignissimos.<br /> Dicta natus magni debitis hic autem.
                    </div>

                    <div className="flex space-x-40">
                        <div className="space-y-3">
                            <p>&#10003; Expertise in Digital Solutions</p>
                            <p>&#10003; Innovative Design Approach</p>
                            <p>&#10003; Strategic Digital Marketing</p>
                            <p>&#10003; Data Driven Decicions</p>
                        </div>

                        <div className="space-y-3">
                            <p>&#10003; Expertise in Digital Solutions</p>
                            <p>&#10003; Tailored Digital Strategy</p>
                            <p>&#10003; Expertise in Digital Solutions</p>
                            <p>&#10003; Proper Track Record</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" w-[30%] h-full flex justify-center items-center">
                <div className=" space-y-4">
                    <div className=" w-[25rem] h-[25rem] rounded-xl text-white flex justify-center items-center bg-gradient-to-b from-[rgb(38,28,52)]">
                        <div className=" space-y-5">
                            <span className="text-4xl font-bold text-[rgb(255,140,193)]">Feature</span>
                            <p className='flex items-center gap-1'><Camera color="rgb(255,140,193)" size={36} /> UI/UX User Friendly</p>
                            <p className='flex items-center gap-1'><Target color="rgb(255,140,193)" size={36} />Focus on Target</p>
                            <p className='flex items-center gap-1'><Shield color="rgb(255,140,193)" size={36} />Secure App</p>
                            <p className='flex items-center gap-1'><MonitorUp color="rgb(255,140,193)" size={36} />User Experience </p>
                            <p className='flex items-center gap-1'><Camera color="rgb(255,140,193)" size={36} />Awesome Graphics Design</p>
                        </div>
                    </div>
                    <input type="button" value="GET STARTED" className=" bg-gradient-to-r from-[rgb(175,122,254)] to-[rgb(255,140,193)] w-[25rem] h-[50px] rounded-3xl" />
                </div>
            </div>
        </div>
    </>
  )
}
