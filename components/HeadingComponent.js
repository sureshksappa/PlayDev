import { motion } from "framer-motion";

export default function HeadingComponent({heading}) {
  return (
    <div className=" relative z-2">
      <motion.h1
        className="text-6xl max-sm:text-5xl font-lato max-sm:pt-8 pt-20 pb-8"
        drag
        dragConstraints={{ left: -50, right: 50, top: -30, bottom: 30 }}
        whileTap={{ scale: 1.8 }}
        initial={{ x: -100, y: -100 }}
        animate={{
          x: 0,
          y: 0,
          color: ["#9BEC00", "#AF47D2", "#FFDB00", "#FF204E", "#fff"],
        }}
        transition={{ duration: 2, ease: "easeInOut" }}
      >
        {heading}
      </motion.h1>
    </div>
  );
}
