'use client';

import ScrollingProgressBar from "../scrolling-progress-bar";

import CounterAnimation from "../counter-animation";
import Modal from "@/components/modal";
import { useState } from "react";

import CurrentProjectsData from '@/public/js/data/CurrentProjectsData'
import BuyTicketDialog from '@/components/buy-ticket-dialog'
import Image from "next/image";

function SupportedAmountComponent(supportedAmount: { amount: string, counter: string, prefix?: string, postfix?: string }) {
    return (
        <div className="flex flex-col items-center mt-2.5 mb-5" >
            <div className="w-full flex items-center space-x-1">
                <div className="w-full font-semibold">
                    <p className="text-[#070E57] uppercase">have been raised</p>
                </div>
            </div>

            <div className="w-full flex items-center space-x-1 rtl:space-x-reverse">
                <div className="w-full mb-1 min-h-[52px] flex max-h-[52px] items-center justify-center">
                    <h3 className="w-full text-4xl text-center font-extrabold text-[#920100]">
                        <CounterAnimation amount={supportedAmount.amount} counter={supportedAmount.counter} prefix={supportedAmount.prefix} postfix={supportedAmount.postfix} />
                    </h3>
                </div>
            </div>
        </div>
    );
}

function priceComponent(price: { priceLabel?: string, amount?: string, currency?: string }) {
    return (
        <div className="flex items-center justify-start mt-2.5 mb-2.5 min-h-[28px]">
            <span className="text-xl font-bold text-gray-900 dark:text-white">{price?.priceLabel ? price.priceLabel : 'Price :'}</span>&nbsp;
            <span className="text-xl font-bold text-[#920100] dark:text-white h-[28px]">{price?.amount} {price?.currency}</span>
        </div>
    );
}

export default function CurrentProjects() {
    const [isOpen, setIsOpen] = useState(false);
    const [openBuyDialog, setOpenBuyDialog] = useState(false);
    const [selectedProject, setSelectedProject] = useState({
        title: '',
        code: '',
        logoImg: '',
        rightCTA: {
            btnLabel: 'buy ticket'
        }
    });

    const emptyProjectState = () => {
        setSelectedProject({
            title: '',
            code: '',
            logoImg: '',
            rightCTA: {
                btnLabel: 'buy ticket'
            }
        })
    }

    const handleRightCtaBtn = (
        event: any,
        project: { title: string, code: string, logoImg: string, rightCTA: { btnLabel: string, countryFrList?: Array<{}>, url?: string } }
    ) => {
        if (project.rightCTA.url) {
           
        } else {
            event.preventDefault()
            setOpenBuyDialog(true)
            setSelectedProject(project)
        }
    }

    const handleBuyTicketDialogClose = () => {
        setOpenBuyDialog(false)
        emptyProjectState()
    }

    return (
        <>
            <Modal open={isOpen}
                onCancel={() => setIsOpen(false)}
                onOk={() => setIsOpen(false)}
            />

            <div className="mt-5 grid grid-cols-1 m-3 xl:grid-cols-5 lg:grid-cols-3 md:grid-cols-3 md:gap-4">
                {
                    CurrentProjectsData.map((project) => (
                        <div className="flex flex-col items-center justify-start mt-5 md:mt-0" key={project.title}>
                            <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                <a href="#">
                                    <Image className="p-8 rounded-t-lg w-full" src={project.logoImg} alt={project.title} width={100} height={100} />
                                </a>
                                <div className="px-5 pb-5">
                                    {
                                        project.progress && <ScrollingProgressBar progressPercent={project.progress.amount} counter={project.progress.counter} />
                                    }

                                    {
                                        project.supportedAmount && <SupportedAmountComponent amount={project.supportedAmount.amount} counter={project.supportedAmount.counter} prefix={project.supportedAmount.prefix} postfix={project.supportedAmount.postfix} />
                                    }

                                    {
                                        project.price && priceComponent(project.price)
                                    }

                                    <div className="flex items-center justify-between min-h-[40px]">
                                        {
                                            project.leftCTA ? (
                                                <a href={project.leftCTA.url} target="blank" className="text-white bg-[#070E57] hover:bg-[#000980] focus:ring-4 focus:outline-none focus:ring-[#1828c9] font-medium rounded-lg text-sm px-5 py-2.5 lg:px-3 lg:py-2  text-center">
                                                    {project.leftCTA.btnLabel}
                                                </a>
                                            ) : (<div></div>)
                                        }

                                        {
                                            project.rightCTA ? (
                                                <a
                                                    href={project.rightCTA.url ? project.rightCTA.url : "#"}
                                                    target="blank"
                                                    className="text-white bg-[#920100] hover:bg-[#750100] focus:ring-4 focus:outline-none focus:ring-[#8c1b1b] font-medium rounded-lg text-sm px-5 py-2.5  lg:px-3 lg:py-2text-center"
                                                    onClick={(event) => handleRightCtaBtn(event, { title: project.title, code: project.title, logoImg: project.logoImg, rightCTA: project.rightCTA})}
                                                >
                                                    {project.rightCTA.btnLabel}
                                                </a>
                                                // <button
                                                //     className="bg-slate-900 hover:bg-slate-700 text-white text-lg w-60 h-14 py-2 px-4"
                                                //     onClick={() => setIsOpen(true)}
                                                // >
                                                //     Open Modal
                                                // </button>
                                            ) : (<div></div>)
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>

            <BuyTicketDialog isOpen={openBuyDialog} onHide={handleBuyTicketDialogClose} project={selectedProject} />
        </>

    );
}