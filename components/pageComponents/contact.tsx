import React from 'react'
import Link from 'next/link'

const Calendly = () => {
    return (
        <section className="relative z-10 w-full pt-20 pb-20 mx-auto md:pt-40 border-t-7">
            <div className="md:px-10">
                <div className="py-5 shadow-lg bg-gray-950 rounded-3xl md:px-10 md:py-4">
                    <div className="relative z-10 w-full row-start-1 mx-auto">
                        <h2 className="text-2xl font-bold text-center text-white md:text-4xl">
                            Feel Free to Connect
                        </h2>
                        <p className="mx-auto mt-3 text-base font-normal text-center text-gray-300">
                            No Pressure, Free Consultation, Anytime.
                        </p>
                    </div>
                    <div className='flex flex-col md:flex-row gap-6 justify-center mt-10 md:w-[400px] w-[200px] mx-auto'>
                        <Link
                            target="_blank"
                            href="https://cal.com/graviton-softworks/free-15min"
                            className="
                            transition-colors ease-in-out duration-150
                            font-semibold text-center no-underline text-gray-950 py-[1rem] px-7 bg-slate-50 hover:bg-slate-200 active:bg-slate-300 focus:outline-none rounded-[12px] focus:ring focus:ring-slate-300 hover:text-gray-900"
                        >
                            Schedule meeting
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Calendly;