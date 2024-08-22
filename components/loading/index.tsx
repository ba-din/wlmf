import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

function LoaderSimple() {
  const [loading, setLoading] = useState(true);
  const controls = useAnimation();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (loading) {
      controls.start({
        opacity: 1,
        transition: { duration: 0.5 },
      });
    } else {
      controls.start({
        opacity: 0,
        display: "none",
        transition: { duration: 0.5 },
      });
    }
  }, [loading, controls]);

  return (
    <motion.div
      className="fixed backdrop-blur-lg bg-white h-full top-0 left-0 w-full flex justify-center items-center z-50"
      animate={controls}
    >
      <div className="p-4 rounded-md">
        <div className="flex justify-center">
          <>
            <motion.span
              className="w-4 h-4 my-12 mx-1 bg-[#920100] rounded-full"
              animate={{
                y: [0, -20, 0],
                opacity: [1, 0],
                transition: { duration: 0.7, repeat: 1 },
              }}
            />
            <motion.span
              className="w-4 h-4 my-12 mx-1 bg-[#070E57] rounded-full"
              animate={{
                y: [0, -20, 0],
                opacity: [1, 0],
                transition: { duration: 0.7, repeat: 0.8, delay: 0.1 },
              }}
            />
            <motion.span
              className="w-4 h-4 my-12 mx-1 bg-[#920100] rounded-full"
              animate={{
                y: [0, -20, 0],
                opacity: [1, 0],
                transition: { duration: 0.7, repeat: 0.6, delay: 0.2 },
              }}
            />
          </>
        </div>
      </div>
    </motion.div>
  );
}

export default LoaderSimple;
