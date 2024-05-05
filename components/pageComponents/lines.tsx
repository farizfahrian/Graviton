import React from 'react'
import { HiOutlineTrophy } from "react-icons/hi2";

const Lines = () => {
  return (
    <section className="grid grid-row-3">
        <div className="grid grid-cols-3 me-20 place-items-center">
          <div className="w-1 h-7 border ms-60 bg-gravitonblue"></div>
          <div className="w-1 h-7 border bg-gravitonblue"></div>
          <div className="w-1 h-7 border me-60 bg-gravitonblue "></div>
        </div>
        <div className="grid grid-cols-2 max-w-8xl gap-x-1 ms-20 max-h-1 ">
          <div className="w-full h-1 col-start-1 col-end-5 bg-gravitonblue border"> </div>
          <HiOutlineTrophy className='w-10 h-10 col-start-6 me-20 -mt-5 '/>
        </div>
        <div className="grid grid-cols-3  ms-20 place-items-center">
          <div className="w-1 h-7 border ms-60 bg-gravitonblue"></div>
          <div className="w-1 h-7 border bg-gravitonblue"></div>
          <div className="w-1 h-7 border me-60 bg-gravitonblue"></div>
        </div>
      </section>
  )
}

export default Lines