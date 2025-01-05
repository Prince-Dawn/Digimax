// import React from 'react'
import { Camera, MonitorUp, Shield, Target } from 'lucide-react';

export default function Descriptions() {
  return (
    <>
        <div className="xxl:flex xxl:flex-row xxl:justify-start xxl:items-center xxl:h-[70vh] w-full ssm:block ssm:h-[100rem] ssm:space-y-5 ssm:border">
            <div className=" xxl:w-[60%] xxl:h-full xxl:flex xxl:justify-center items-center ssm:w-full ssm:px-5">
                <div className=" text-purple-200 space-y-7">
                    <span className="text-4xl">Descriptions</span>
                    <div className="">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et aperiam nemo reprehenderit distinctio esse <br /> provident molestiae sint quaerat temporibus autem odit, nam tempora voluptate eveniet id animi.<br /> Ducimus quas architecto distinctio cum atque, ad quae. Cum dolorum, beatae autem velit doloribus reiciendis,<br /> voluptas maxime alias soluta saepe dolores eos atque, temporibus quidem assumenda dignissimos.<br /> Dicta natus magni debitis hic autem.
                    </div>

                    <div className="">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et aperiam nemo reprehenderit distinctio esse <br /> provident molestiae sint quaerat temporibus autem odit, nam tempora voluptate eveniet id animi.<br /> Ducimus quas architecto distinctio cum atque, ad quae. Cum dolorum, beatae autem velit doloribus reiciendis,<br /> voluptas maxime alias soluta saepe dolores eos atque, temporibus quidem assumenda dignissimos.<br /> Dicta natus magni debitis hic autem.
                    </div>

                    <div className="xxl:flex xxl:flex-row xxl:space-x-40 xxl:space-y-0 ssm:space-x-0 ssm:flex-col ssm:space-y-3">
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
            <div className=" xxl:w-[30%] xxl:h-full flex justify-center items-center ssm:w-full ">
                <div className=" space-y-4 ssm:flex ssm:justify-center ssm:flex-wrap ssm:w-full">
                    <div className=" xxl:w-[25rem] h-[25rem] rounded-xl text-white flex justify-center items-center bg-gradient-to-b from-[rgb(38,28,52)] ssm:w-[90%]">
                        <div className=" space-y-5">
                            <span className="text-4xl font-bold text-[rgb(255,140,193)]">Feature</span>
                            <p className='flex items-center gap-1'><Camera color="rgb(255,140,193)" size={36} /> UI/UX User Friendly</p>
                            <p className='flex items-center gap-1'><Target color="rgb(255,140,193)" size={36} />Focus on Target</p>
                            <p className='flex items-center gap-1'><Shield color="rgb(255,140,193)" size={36} />Secure App</p>
                            <p className='flex items-center gap-1'><MonitorUp color="rgb(255,140,193)" size={36} />User Experience </p>
                            <p className='flex items-center gap-1'><Camera color="rgb(255,140,193)" size={36} />Awesome Graphics Design</p>
                        </div>
                    </div>
                    <input type="button" value="GET STARTED" className=" bg-gradient-to-r from-[rgb(175,122,254)] to-[rgb(255,140,193)] xxl:w-[25rem] h-[50px] rounded-3xl ssm:w-[90%]" />
                </div>
            </div>
        </div>
    </>
  )
}
