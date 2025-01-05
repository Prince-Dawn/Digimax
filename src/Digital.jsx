// import React from 'react'

export default function Digital() {
    const style = {
        background: `linear-gradient(to right, transparent, rgba(0,0,0,0.8)), url('/bg.jpg')`,
        backgroundSize: 'cover',
       
    }
  return (
    <>
        <div className="  xxl:w-full xxl:h-[70vh] xxl:bg-cover xxl:bg-top xxl:mt-24 xxl:relative " style={style} >
            <div className="xxl:w-[45rem] xxl:border xxl:border-[rgb(42,38,55)] text-white xxl:h-[20rem] py-7 px-6 space-y-6 rounded-xl bg-gradient-to-t from-[rgb(20,8,32)] to-[rgba(40,32,55,0.8)] xxl:absolute xxl:-bottom-[5rem] xxl:left-[10rem] ssm:static ssm:w-full ssm:h-fit ssm:bg-none">
                <span className=" xxl:text-4xl font-bold ssm:text-2xl">
                    Pioneering Digital Excellence: <br />
                    Discover the Digimax <br className="xxl:static ssm:hidden" />
                    Advantage.
                </span>

                <p className="">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius distinctio cum deleniti impedit voluptates explicabo libero quia et. Quisquam, quod.
                </p>

                <input type="button" value="GET STARTED" className=" bg-gradient-to-r from-[rgb(175,122,254)] to-[rgba(255,140,193)] w-[150px] h-[40px] rounded-3xl" />
            </div>
        </div>
    </>
  )
}
