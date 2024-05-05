'use client'
import { useEffect, useState } from 'react'; // import useEffect and useState if not already imported
import { CardHoverEffectDemoUp } from "@/components/snippets/card-hover-effect-snippet-up";
import { CardHoverEffectDemoDown } from "@/components/snippets/card-hover-effect-snippet-down";
import { CardHoverEffectDemoSmall } from "@/components/snippets/card-hover-effect-snippet-small";
import Lines from "./lines";

const Workflow = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 920);
        };

        handleResize(); // call handleResize initially to set the initial state
        window.addEventListener('resize', handleResize); // add event listener for window resize

        return () => {
            window.removeEventListener('resize', handleResize); // remove event listener on component unmount
        };
    }, []);

    return (
        <section className="relative w-full pb-24 overflow-hidden antialiased border-t-2 md:items-center md:justify-center pt-14">
            <div className="relative z-10 w-full p-4 px-2 pt-10 mx-auto md:pt-20">
                <h2 className="px-6 text-2xl font-bold text-center bg-opacity-50 text-gray-950 md:text-4xl">
                    Our workflow to help your business
                </h2>
                <p className="max-w-xl px-4 mx-auto mb-8 text-base font-normal text-center text-gray-700 md:mt-3 md:text-lg">
                    Our streamlined workflow ensures clear communication, efficient project management, and timely delivery.
                </p>
            </div>
            {isMobile ? <CardHoverEffectDemoSmall /> :
                <>
                    <div className={isMobile ? "" : "me-16"}> {/* Conditional margin */}
                        <CardHoverEffectDemoUp />
                    </div>
                    {!isMobile && <Lines />} {/* Render Lines component only if not mobile */}
                    <div className={isMobile ? "" : "ms-16"}> {/* Conditional margin */}
                        <CardHoverEffectDemoDown />
                    </div>
                </>
            }
        </section>
    );
}

export default Workflow;
