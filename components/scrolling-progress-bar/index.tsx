
import CounterAnimation from "../counter-animation";
import ScrollInViewComponent from "../scroll-in-view";
import styles from "./scrolling-progress-bar.module.scss";




export default function ScrollingProgressBar(
  { progressPercent, counter }: Readonly<{ progressPercent: string, counter?: string }>
) {

  return (

    <div className="flex flex-col items-center mt-2.5 mb-5" >
      <div className="w-full flex items-center space-x-1 rtl:space-x-reverse">
        <div className="w-full  flex justify-between mb-1 text-[#070E57]">
          <span className="text-base font-medium dark:text-white">Progress</span>
          {counter ? <CounterAnimation counter={counter} postfix="%" /> : ''}
        </div>
      </div>
      <div className="w-full flex items-center space-x-1 rtl:space-x-reverse">

        <div className={`w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 ${styles.meter}`}>
          <ScrollInViewComponent classNameInView={styles.isInView} classNameNotInView={""}>
            <span className={`bg-[#070E57]  h-2.5 rounded-full ${styles.progress}`} style={{ maxWidth: progressPercent || '0%' }}>
            </span>
          </ScrollInViewComponent>
        </div>

      </div>
    </div>

  );
}