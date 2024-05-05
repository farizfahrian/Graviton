"use client";
import { Separator } from "@/components/ui/separator"

import Image from "next/image";
import Link from "next/link";

const Footer = () => {

    return (
        <section>
            <div className="z-50 flex flex-col gap-6 py-8 bg-white border-t-2 px-7 md:px-20">
                <div className="flex flex-col gap-2">
                    <div className="flex justify-center">
                        <Link href="/">
                            <Image
                                priority
                                src="/img/logo.png"
                                alt="Logo"
                                width={100}
                                height={100}
                                className="md:w-36 md:h-full"
                            />
                        </Link>
                    </div>
                    <p className="text-sm text-center text-gray-500">
                        Copyright 2023 GRAVITON SOFTWORKS. All rights reserved
                    </p>
                </div>
                <div className="flex flex-col-reverse justify-between md:flex-row">
                    <div className="flex items-center mt-3 text-sm md:mt-0">
                        <Link href="mailto:gravitonsoftworks@gmail.com" className="text-gray-500 no-underline">
                            Gravitonsoftworks@gmail.com
                        </Link>
                    </div>

                    <div className="flex flex-col justify-center gap-2 mt-3 text-sm md:mt-0 md:flex-row md:gap-2">
                        <Link href="/" className="text-gray-500 no-underline">Instagram</Link>
                        <Separator orientation="vertical" />
                        <Link href="/" className="text-gray-500 no-underline">Twitter (X)</Link>
                        <Separator orientation="vertical" />
                        <Link href="/" className="text-gray-500 no-underline">Linkedin</Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;