import React from 'react'
import Image from 'next/image'

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const ServiceTabs = () => {
  return (
    <div className="items-center justify-center md:flex mx-6 md:mx-auto">
      <Tabs defaultValue="website" className="item-center w-full md:w-[1000px]">
        <TabsList>
          <TabsTrigger value="website">Website <br /> Development</TabsTrigger>
          <TabsTrigger value="mobile">Mobile <br /> Development</TabsTrigger>
          <TabsTrigger value="ui/uxdesign">UI/UX <br /> Design</TabsTrigger>
          <TabsTrigger value="seo">SEO</TabsTrigger>
          <TabsTrigger value="digitalmarketing">Digital <br /> Marketing</TabsTrigger>
        </TabsList>

        <TabsContent value="website" className='md:mt-4 md:flex md:flex-row md:justify-center'>
          <Card className="flex flex-col md:flex-row gap-4 bg-gray-100 border-0 shadow-md">
            <div className="basis-2/3 p-4">
              <CardHeader>
                <CardDescription className='text-lg text-gray-950'>
                  Your website is your digital storefront, a vital hub for attracting and engaging your audience. We offer a comprehensive suite of website development services to achieves your goals.
                </CardDescription>
              </CardHeader>
              <CardContent className="gap-3 text-sm grid-cols-1 grid md:grid-cols-2 place-items-start">
                <div className='text-gray-950 bg-white rounded-full border-slate border-1 py-2 px-3 hover:shadow-xl'>Custom Web (Code)</div>
                <div className='text-gray-950 bg-white rounded-full border-slate border-1 py-2 px-3 hover:shadow-xl'>Landing Page</div>
                <div className='text-gray-950 bg-white rounded-full border-slate border-1 py-2 px-3 hover:shadow-xl'>Responsive Website</div>
                <div className='text-gray-950 bg-white rounded-full border-slate border-1 py-2 px-3 hover:shadow-xl'>E-commerce Development</div>
                <div className='text-gray-950 bg-white rounded-full border-slate border-1 py-2 px-3 hover:shadow-xl'>No Code Web Builder</div>
                <div className='text-gray-950 bg-white rounded-full border-slate border-1 py-2 px-3 hover:shadow-xl'>Content Management System</div>
                <div className='text-gray-950 bg-white rounded-full border-slate border-1 py-2 px-3 hover:shadow-xl'>Company Profile</div>
                <div className='text-gray-950 bg-white rounded-full border-slate border-1 py-2 px-3 hover:shadow-xl'>Website Redesign</div>
              </CardContent>
            </div>
            <div className="basis-1/3 w-full h-auto md:mt-0">
              <Image
                className="w-auto h-full"
                src="/img/web-service.jpg"
                width={1500}
                height={1500}
                alt="image"
                style={{ objectFit: "cover" }}
              />
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="ui/uxdesign" className='mt-4 md:flex md:flex-row md:justify-center'>
          <Card className="flex flex-col md:flex-row gap-4 bg-gray-100 border-0 shadow-md">
            <div className="basis-2/3 p-4">
              <CardHeader>
                <CardDescription className='text-lg text-gray-950'>
                  We&apos;ll bridge the gap between stunning visuals and intuitive user flows, creating experiences that leave a lasting impression.
                </CardDescription>
              </CardHeader>
              <CardContent className="gap-3 text-sm grid-cols-1 grid md:grid-cols-2 place-items-start">
                <div className='text-gray-950 bg-white rounded-full border-slate border-1 py-2 px-3 hover:shadow-xl'>User Research & Strategy</div>
                <div className='text-gray-950 bg-white rounded-full border-slate border-1 py-2 px-3 hover:shadow-xl'>Information Architecture</div>
                <div className='text-gray-950 bg-white rounded-full border-slate border-1 py-2 px-3 hover:shadow-xl'>User Interface Design</div>
                <div className='text-gray-950 bg-white rounded-full border-slate border-1 py-2 px-3 hover:shadow-xl'>User Experience Design</div>
                <div className='text-gray-950 bg-white rounded-full border-slate border-1 py-2 px-3 hover:shadow-xl'>Responsive Design</div>
                <div className='text-gray-950 bg-white rounded-full border-slate border-1 py-2 px-3 hover:shadow-xl'>Prototyping</div>
                <div className='text-gray-950 bg-white rounded-full border-slate border-1 py-2 px-3 hover:shadow-xl'>Accessibility Optimization</div>
                <div className='text-gray-950 bg-white rounded-full border-slate border-1 py-2 px-3 hover:shadow-xl'>Design System</div>
              </CardContent>
            </div>
            <div className="basis-1/3 w-full h-auto md:mt-0">
              <Image
                className="h-full w-auto"
                width={1500}
                height={1500}
                src="/img/marketing-service.jpg"
                alt="image"
                style={{ objectFit: "cover" }}
              />
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="mobile" className='md:mt-4 md:flex md:flex-row md:justify-center'>
          <Card className="flex flex-col md:flex-row gap-4 bg-gray-100 border-0 shadow-md">
            <div className="basis-2/3 p-4">
              <CardHeader>
                <CardDescription className='text-lg text-gray-950'>
                  Everyone use mobile phone. Reach new audiences and engage users with a custom-built mobile app. We translate your vision into a powerful tool, transforming the way you connect with your customers.
                </CardDescription>
              </CardHeader>
              <CardContent className="gap-3 text-sm grid-cols-1 grid md:grid-cols-2 place-items-start">
                <div className='text-gray-950 bg-white rounded-full border-slate border-1 py-2 px-3 hover:shadow-xl'>Native App (Android & iOS)</div>
                <div className='text-gray-950 bg-white rounded-full border-slate border-1 py-2 px-3 hover:shadow-xl'>Cross-Platform App</div>
                <div className='text-gray-950 bg-white rounded-full border-slate border-1 py-2 px-3 hover:shadow-xl'>Web to Mobile Migration  </div>
                <div className='text-gray-950 bg-white rounded-full border-slate border-1 py-2 px-3 hover:shadow-xl'>Progressive Web Apps</div>
                <div className='text-gray-950 bg-white rounded-full border-slate border-1 py-2 px-3 hover:shadow-xl'>Real Device Testing</div>
                <div className='text-gray-950 bg-white rounded-full border-slate border-1 py-2 px-3 hover:shadow-xl'>App Store Optimization</div>
              </CardContent>
            </div>
            <div className="basis-1/3 w-full h-auto md:mt-0">
              <Image
                className="w-auto h-full"
                src="/img/mobile-service.jpg"
                width={1500}
                height={1500}
                alt="image"
                style={{ objectFit: "cover" }}
              />
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="seo" className='md:mt-4 md:flex md:flex-row md:justify-center'>
          <Card className="flex flex-col md:flex-row gap-4 bg-gray-100 border-0 shadow-md">
            <div className="basis-2/3 p-4">
              <CardHeader>
                <CardDescription className='text-lg text-gray-950'>
                  We&apos;ll fine-tune your online presence to rank higher on search engine results pages (SERPs), driving organic traffic that converts into leads and sales.
                </CardDescription>
              </CardHeader>
              <CardContent className="gap-3 text-sm grid-cols-1 grid md:grid-cols-2 place-items-start">
                <div className='text-gray-950 bg-white rounded-full border-slate border-1 py-2 px-3 hover:shadow-xl'>Keyword Research & Strategy</div>
                <div className='text-gray-950 bg-white rounded-full border-slate border-1 py-2 px-3 hover:shadow-xl'>On-Page Optimization</div>
                <div className='text-gray-950 bg-white rounded-full border-slate border-1 py-2 px-3 hover:shadow-xl'>Technical SEO Audit & Fixes</div>
                <div className='text-gray-950 bg-white rounded-full border-slate border-1 py-2 px-3 hover:shadow-xl'>Content Creation & Optimization</div>
                <div className='text-gray-950 bg-white rounded-full border-slate border-1 py-2 px-3 hover:shadow-xl'>Link Building Strategies</div>
                <div className='text-gray-950 bg-white rounded-full border-slate border-1 py-2 px-3 hover:shadow-xl'>Performance Monitoring</div>
                <div className='text-gray-950 bg-white rounded-full border-slate border-1 py-2 px-3 hover:shadow-xl'>Local SEO Optimization</div>
                <div className='text-gray-950 bg-white rounded-full border-slate border-1 py-2 px-3 hover:shadow-xl'>Competitive Analysis</div>
              </CardContent>
            </div>
            <div className="basis-1/3 w-full h-auto md:mt-0">
              <Image
                className="w-auto h-full"
                src="/img/seo-service.jpg"
                width={1500}
                height={1500}
                alt="image"
                style={{ objectFit: "cover" }}
              />
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="digitalmarketing" className='md:mt-4 md:flex md:flex-row md:justify-center'>
          <Card className="flex flex-col md:flex-row gap-4 bg-gray-100 border-0 shadow-md">
            <div className="basis-2/3 p-4">
              <CardHeader>
                <CardDescription className='text-lg text-gray-950'>
                  Digital Marketing encompasses a wide range of strategies to generate leads, and drive sales through various digital channels. We offer a comprehensive suite of digital marketing services to help your business thrive in the ever-evolving online landscape.
                </CardDescription>
              </CardHeader>
              <CardContent className="gap-3 text-sm grid-cols-1 grid md:grid-cols-2 place-items-start">
                <div className='text-gray-950 bg-white rounded-full border-slate border-1 py-2 px-3 hover:shadow-xl'>Social Media Marketing</div>
                <div className='text-gray-950 bg-white rounded-full border-slate border-1 py-2 px-3 hover:shadow-xl'>Email Marketing</div>
                <div className='text-gray-950 bg-white rounded-full border-slate border-1 py-2 px-3 hover:shadow-xl'>Content Marketing</div>
                <div className='text-gray-950 bg-white rounded-full border-slate border-1 py-2 px-3 hover:shadow-xl'>PPC and Ads Advertising</div>
                <div className='text-gray-950 bg-white rounded-full border-slate border-1 py-2 px-3 hover:shadow-xl'>Search Engine Marketing</div>
                <div className='text-gray-950 bg-white rounded-full border-slate border-1 py-2 px-3 hover:shadow-xl'>Analytics & Reporting Insights</div>
              </CardContent>
            </div>
            <div className="basis-1/3 w-full h-auto md:mt-0">
              <Image
                className="w-auto h-full"
                src="/img/marketing-service.jpg"
                width={1500}
                height={1500}
                alt="image"
                style={{ objectFit: "cover" }}
              />
            </div>
          </Card>
        </TabsContent>

      </Tabs>
    </div>

  )
}

export default ServiceTabs