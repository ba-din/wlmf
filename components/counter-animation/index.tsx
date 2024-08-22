"use client"

import './counter-animation.scss';
import ScrollInViewComponent from '../scroll-in-view';


export default function CounterAnimation(
  { counter, prefix, postfix }: Readonly<{ counter: string, prefix?: string, postfix?: string }>
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