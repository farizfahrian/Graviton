'use client'
import { ProblemsSnippet } from "@/components/snippets/problems-card-snippet";
import Services from "./services";

const Problems = () => {
    return (
        <section className="relative w-full pt-24 pb-10 overflow-hidden antialiased bg-white border-t-2 md:items-center md:justify-center">
            <div className="relative z-10 w-full p-4 px-2 pt-10 mx-auto md:pt-20">
                <h2 className="px-6 text-2xl font-bold text-center bg-opacity-50 text-gray-950 md:text-4xl">
                    Feeling Unseen in the Digital World?
                </h2>
                <p className="max-w-xl px-4 mx-auto mb-8 mt-2 text-base font-normal text-center text-gray-700 md:mt-3 md:text-lg">
                    To thrive, businesses need to adapt. In the digital age businesses face several problems, including:
                </p>
            </div>
            <ProblemsSnippet />
        </section>);
}

export default Problems;