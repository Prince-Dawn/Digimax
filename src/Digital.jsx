// import React from 'react'

export default function Digital() {
    const style = {
        background: `linear-gradient(to right, transparent, rgba(0,0,0,0.8)), url('/bg.jpg')`,
        backgroundSize: 'cover',
       
    }
  return (
    <>
        <div className=" w-full h-[70vh] bg-cover bg-top mt-24 relative" style={style}>
            <div className="w-[45rem] border border-[rgb(42,38,55)] text-white h-[20rem] py-7 px-6 space-y-6 rounded-xl bg-gradient-to-t from-[rgb(20,8,32)] to-[rgba(40,32,55,0.8)] absolute -bottom-[5rem] left-[10rem]">
                <span className=" text-4xl font-bold ">
                    Pioneering Digital Excellence: <br />
                    Discover th Digimax <br />
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
