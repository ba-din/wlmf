"use client"

import { InView } from "react-intersection-observer";

export default function ScrollInViewComponent({
  children,
  classNameInView,
  classNameNotInView,
}: Readonly<{
  children: React.ReactNode
  classNameInView: string
  classNameNotInView: string
}>) {
  return (
    <InView triggerOnce threshold={1}>
      {({ inView, ref, entry }) => (
        <span
          ref={ref}
          className={inView ? classNameInView : classNameNotInView}
        >
          {children}
        </span>
      )}
    </InView>
  )
}