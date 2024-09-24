
"use client";

import PreviousProjectsData from "@/public/js/data/PreviousProjectsData";
import { useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import CounterAnimation from "../counter-animation";
import {
  isMdScreen,
  isLgScreen,
  isXlScreen,
} from "../../helpers/check-screen-size";
import Swipe from "react-easy-swipe";
import Image from "next/image";

function supportedAmountComponent(supportedAmount: {
  amount: string,
  counter: string;
  prefix?: string;
  postfix?: string;
}) {
  return (
    <div className="flex flex-col items-center mt-2.5 mb-5">
      <div className="w-full flex items-center space-x-1">
        <div className="w-full font-semibold">
          <p className="text-[#070E57] uppercase">have been raised</p>
        </div>
      </div>

      <div className="w-full flex items-center space-x-1 rtl:space-x-reverse">
        <div className="w-full mb-1 min-h-[52px] flex max-h-[52px] items-center justify-center">
          <h3 className="w-full text-4xl text-center font-extrabold text-[#920100]">
            <CounterAnimation
              amount={supportedAmount.amount}
              counter={supportedAmount.counter}
              prefix={supportedAmount.prefix}
              postfix={supportedAmount.postfix}
            />
          </h3>
        </div>
      </div>
    </div>
  );
}

const PreviousProjComponent = (project: any, prjIndex: Number) => {
  return (
    <div
      className="w-full min-w-96 h-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
      key={project.title + "-" + prjIndex}
    >
      <a href="#">
        <Image
          className="p-8 rounded-t-lg w-full"
          width={100}
          height={100}
          src={project.logoImg}
          alt={project.title}
        />
      </a>
      <div className="px-5 pb-5 w-full">
        <div className="min-h-[50px] max-h-[50px]">
          <h5 className="min-h-[50px] max-h-[50px] text-center text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {project.title}
          </h5>
        </div>

        {project.supportedAmount &&
          supportedAmountComponent(project.supportedAmount)}

        <div className="flex items-center justify-between min-h-[40px]">
          {project.leftCTA ? (
            <a
              href={project.leftCTA.url}
              target="blank"
              className="text-white bg-[#070E57] hover:bg-[#000980] focus:ring-4 focus:outline-none focus:ring-[#1828c9] font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              {project.leftCTA.btnLabel}
            </a>
          ) : (
            <div></div>
          )}

          {project.rightCTA ? (
            <a
              href={project.rightCTA.url}
              target="blank"
              className="text-white bg-[#920100] hover:bg-[#750100] focus:ring-4 focus:outline-none focus:ring-[#8c1b1b] font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              {project.rightCTA.btnLabel}
            </a>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
};

const Slide = (slideProjs: Array<any>, currentSlide: number) => {
  return slideProjs.map((slide, slideIndex) => (
    <div
      key={"slide-" + slideIndex}
      className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${slideIndex === currentSlide ? "opacity-100" : "opacity-0"
        }`}
    >
      {slideIndex === currentSlide && (
        <div className="flex items-center justify-center mt-5 md:mt-0 duration-200 ease-linear">
          <div className="mt-5 grid grid-cols-1 m-3 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 md:gap-4">
            {slide.map((project: any, prjIndex: Number) =>
              PreviousProjComponent(project, prjIndex)
            )}
          </div>
        </div>
      )}
    </div>
  ))
}

export default function PreviousProjects() {
  const [currentSlide, setCurrentSlide] = useState(0);

  let projPerSlide = 1;

  if (isMdScreen()) {
    projPerSlide = 2;
  } else if (isLgScreen()) {
    projPerSlide = 2;
  } else if (isXlScreen()) {
    projPerSlide = 3;
  }

  const totalSlides = Math.ceil(PreviousProjectsData.length / projPerSlide);

  let slideProjs = [];

  for (let slideIndex = 0; slideIndex < totalSlides; slideIndex++) {
    slideProjs.push(
      PreviousProjectsData.filter(
        (_, index) =>
          slideIndex * projPerSlide <= index &&
          (slideIndex + 1) * projPerSlide > index
      )
    );
  }

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === totalSlides - 1 ? 0 : prevSlide + 1
    );
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? totalSlides - 1 : prevSlide - 1
    );
  };

  return (
    <>
      <AiOutlineLeft
        onClick={handlePrevSlide}
        className="absolute left-0 m-auto text-5xl inset-y-1/2 cursor-pointer text-gray-400 z-20"
        aria-label="Previous slide"
      />
      <Swipe
        onSwipeLeft={handleNextSlide}
        onSwipeRight={handlePrevSlide}
        className="w-full h-[700px] flex overflow-hidden relative m-auto"
      >
        {Slide(slideProjs, currentSlide) }
      </Swipe>
      <AiOutlineRight
        onClick={handleNextSlide}
        className="absolute right-0 m-auto text-5xl inset-y-1/2 cursor-pointer text-gray-400 z-20"
        aria-label="Next slide"
      />
    </>
  )
}