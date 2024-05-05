import React from 'react';
import Link from 'next/link';
import { PiCheckCircleFill, PiXCircleFill } from 'react-icons/pi';

const plans = [
  {
    index: 0,
    name: 'Essential',
    price: '$2550',
    features: [
      'Unlimited revisions',
      'Unlimited brand',
      '2 request at a time',
      'No code web builder',
      'UI UX Service',
      'SEO Service',
      'Mobile Service',
      'Digital Marketing Service',
    ],
    style:
      'flex flex-col rounded-3xl text-gray-950',
    description:
      'Perfect for startups and small businesses looking to establish their online presence.',
    button: 'cursor-pointer',
  },
  {
    index: 1,
    name: 'Growth',
    price: '$3390',
    features: [
      'Unlimited revisions',
      'Unlimited brand',
      '3 request at a time',
      'No code web builder (CMS)',
      'UI UX Service',
      'SEO Service',
      'Mobile Service',
      'Digital Marketing Service',
    ],
    style:
      'rounded-3xl text-gray-950',
    description:
      'Designed for businesses ready to expand and reach a broader audience.',
    button: 'cursor-pointer',
  },
  {
    index: 2,
    name: 'Premium',
    price: "$4070",
    features: [
      'Unlimited revisions',
      'Unlimited brand',
      '4 request at a time',
      'Custom web development',
      'UI UX Service',
      'SEO Service',
      'Mobile Service',
      'Digital Marketing Service',
    ],
    style:
      'h-full rounded-3xl flex flex-col text-gray-950',
    description:
      'Tailored for ambitious businesses aiming for maximum online impact and growth.',
    button: 'cursor-pointer',
  },
];

const Pricing = () => {
  return (
    <section className="relative w-full pt-20 pb-10 overflow-hidden antialiased bg-white border-t-2 md:items-center md:justify-center">
      <div className="relative z-10 w-full p-4 px-2 pt-10 mx-auto md:pt-20">
        <h2 className="px-6 text-2xl font-bold text-center bg-opacity-50 text-gray-950 md:text-4xl">
          Pick a plan that suits you
        </h2>
        <p className="max-w-xl px-4 mx-auto mb-8 text-base font-normal text-center text-gray-700 md:mt-3 md:text-lg">
          Our subscription model provides a transparent and cost-effective way to achieve your digital goals.
        </p>
      </div>
      <div className="grid gap-6 pb-10 md:mx-auto mx-6 grid-cols-1 lg:grid-cols-3 max-px-6 md:w-4/5 2xl:w-3/4">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className="
            hover:shadow-xl transition-all duration-300 ease-in-out
            shadow-sm flex flex-col justify-between border-1 rounded-[10px] border-[#DBDEFF] px-8 py-8">
            <div className={plan.style}>
              <div className="flex items-center text-lg font-semibold md:text-xl">
                {plan.name}
                {/* render feature tag only for enterprise tab*/}
              </div>
              <div className="flex flex-col md:flex-row">
                <div className="pt-6 text-3xl font-semibold no-underline md:text-5xl">{plan.price}
                  <span className="text-sm font-normal">/month</span>
                </div>
              </div>
              <div className={plan.button}>
                {plan.index === 0 && (
                  <Link
                    href="https://cal.com/graviton-softworks/free-15min"
                    className="flex items-center justify-center w-full py-2 mx-auto my-4 text-white no-underline bg-black rounded-lg"
                  >
                    Pick this plan
                  </Link>
                )}
                {plan.index === 1 && (
                  <Link
                    href="https://cal.com/graviton-softworks/free-15min"
                    className="flex items-center justify-center w-full py-2 mx-auto my-4 text-black no-underline bg-white border rounded-lg border-slate-200"
                  >
                    Pick this plan
                  </Link>
                )}
                {plan.index === 2 && (
                  <Link
                    href="https://cal.com/graviton-softworks/free-15min"
                    className="flex items-center justify-center w-full py-2 mx-auto my-4 text-white no-underline bg-black rounded-lg"
                  >
                    Pick this plan
                  </Link>
                )}
              </div>
              <div className="py-6">{plan.description}</div>
              <ul className="px-0">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center py-2 text-base max-px-0">
                    {(feature === 'Mobile Service' || feature === 'Digital Marketing Service') &&
                      (plan.name === 'Essential' || (plan.name === 'Growth' && feature === 'Digital Marketing Service')) ? (
                      <>
                        <PiXCircleFill className="mr-2 text-xl text-gray-300" />
                        <span className="text-gray-400">{feature}</span>
                      </>
                    ) : (
                      <>
                        <PiCheckCircleFill className="mr-2 text-xl text-gray-950" />
                        <span className="text-gray-950">{feature}</span>
                      </>
                    )
                    }
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
