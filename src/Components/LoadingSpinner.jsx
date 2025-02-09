import { motion } from "framer-motion";

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center align-top items-center h-20">
      <motion.div
        className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
      >
     
      </motion.div>
    </div>
  );
};

export default LoadingSpinner;
