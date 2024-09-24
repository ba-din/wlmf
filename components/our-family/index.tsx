'use client';

import OurFamilyData from '@/public/js/data/OurFamilyData'
import Image from 'next/image'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import { useState } from 'react';

export default function OurFamily() {
  const [selectedTab, setSelectedTab] = useState(0)
  return (
    <div className="container px-2 flex flex-col items-center justify-center mt-10 mb-10 md:mt-20 md:mb-20">
      <div className='bg-[#ffffff] px-3 z-[1]'>
        <h2 className="text-3xl text-center capitalize font-bold text-[#070E57]  ">
          our family
        </h2>

        <h3 className="text-center text-[#920100]">
          The Unity is Our Strength
        </h3>
      </div>


      <div className='w-full pt-15 pb-10 px-5 border-2 rounded-lg mt-[-25px]'>
        <TabGroup className="mt-10">
          <TabList className="mb-20">
            {
              OurFamilyData.length > 0 && OurFamilyData.map(({ icon, teamName }: { icon: String, teamName: String }, index) => (
                <Tab key={teamName + '-' + index} className={`mx-2 border-2 rounded-full bg-[#f3f3f3] m-1 ${index === selectedTab ? 'border-[#070E57]' : ''}`}>
                  <button className='min-w-[150px] h-[50px] capitalize text-center' onClick={() => { setSelectedTab(index) }}>{teamName}</button>
                </Tab>
              ))
            }
          </TabList>

          <TabPanels>
            {
              OurFamilyData.length > 0 && OurFamilyData.map(({ icon, members }: { icon: String, members: Array<{ name: string, postion: string, avatar: string }>}, memberIndex) => (
                <TabPanel key={'member-' + memberIndex}>
                  <div className="w-full mt-3 grid grid-cols-3 gap-10 p-3 md:grid-cols-4 md:p-0">
                    {
                      members.map((member, index) => (
                        <div className="grid grid-cols-1 md:grid-cols-2" key={member.name + "_" + index}>
                          <div className="flex flex-col justify-center items-center md:items-end">
                            <div className="relative flex justify-center items-center">
                              <div className="absolute">
                                <div className="flex w-[60px] h-[60px] justify-center items-center relative">
                                  <div className="w-[60px] h-[60px] shadow-lg shadow-[#920100] bg-transparent rounded-full absolute "></div>
                                  <div className="w-[60px] h-[60px] shadow-lg shadow-[#920100] bg-transparent rounded-full absolute rotate-90"></div>
                                  <div className="w-[60px] h-[60px] shadow-lg shadow-[#070E57] bg-transparent rounded-full absolute rotate-180"></div>
                                </div>
                              </div>

                              <div className="bg-white flex items-center justify-center min-w-[60px] min-h-[60px] rounded-full">
                                <Image src={member.avatar} alt="" width={60} height={60} className="rounded-full" />
                              </div>
                            </div>
                          </div>

                          <div className="flex flex-col justify-center items-center ms-0 mt-5 md:items-start md:ms-5 md:mt-0">
                            <span className="text-md font-semibold capitalize">{member.name}</span>
                            <span className="text-sm capitalize">{member.postion}</span>
                          </div>
                        </div>
                      ))
                    }
                  </div>
                </TabPanel>
              ))
            }
          </TabPanels>

        </TabGroup>
      </div>


    </div >
  );
}