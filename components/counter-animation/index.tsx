"use client"

import './counter-animation.scss';
import ScrollInViewComponent from '../scroll-in-view';
import CounterUp from 'react-countup'
import { useState } from 'react';


export default function CounterAnimation(
  { amount, prefix, postfix, counter}: Readonly<{  amount: string, prefix?: string, postfix?: string, counter?: string, }>
) {

  return (
    <>
      <ScrollInViewComponent classNameInView="isInView" classNameNotInView={""}>
        <span className='font-semibold'>
          {prefix} <CounterUp duration={10} className="counter" end={Number.parseFloat(amount)} /> {postfix}
        </span>
        
      </ScrollInViewComponent>
    </>
  );
}