import React from 'react'
import ServiceTabs from '../snippets/services-tabs-snippets'

const Services = () => {
  return (
    <section className="z-10 w-full px-2 pt-20 pb-24 mx-auto bg-white">
      <div className="relative z-10 w-full p-4 px-2 pt-10 mx-auto md:pt-20">
        <h2 className="px-6 text-2xl font-bold text-center bg-opacity-50 text-gray-950 md:text-4xl bg-clip-text to bg-neutral-400">
          We can make a strong online presence for your business
        </h2>
        <p className="max-w-xl px-4 mx-auto text-base font-normal text-center mt-2 text-gray-700 md:mt-3 md:text-lg">
          In today&apos;s fast-paced world, a strong online presence is a necessity. Here what we do to help you.
        </p>
      </div>
      <ServiceTabs />
    </section>
  )
}

export default Services