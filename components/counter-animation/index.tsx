"use client"

import './counter-animation.scss';
import ScrollInViewComponent from '../scroll-in-view';


export default function CounterAnimation(
  { amount, prefix, postfix, counter}: Readonly<{  amount: string, prefix?: string, postfix?: string, counter?: string, }>
) {
  return (
    <>
      {prefix}
      <ScrollInViewComponent classNameInView="isInView" classNameNotInView={""}>
          <span className={`counter-up tabular-nums ${counter} before:content-[counter(num)]`}>
          <span className="sr-only"></span>{postfix}
        </span>
      </ScrollInViewComponent>
    </>
  );
}