import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

interface DropDownMenuProps {
  onClose: () => void;
  scrollToHero: () => void;
  scrollToPricing: () => void;
  scrollToCaseStudies: () => void;
  scrollToServices: () => void; // Add scrollToServices function to props
}

const DropDownMenu: React.FC<DropDownMenuProps> = ({ onClose, scrollToHero, scrollToServices, scrollToPricing, scrollToCaseStudies }) => {
  return (
    <AnimatePresence>
      {onClose && (
        <motion.div
          className="
    w-screen
    h-screen
    bg-zinc-50
     p-6
     space-y-4
     absolute
     left-0
     right-0
     z-50
     flex 
     items-center
    "
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -10, opacity: 0 }}
          transition={{ duration: 0.2 }}

        >
          <div className="flex-col text-lg flex space-y-8 mb-32">
            <div onClick={() => { scrollToHero(); onClose(); }} className="font-bold text-gravitonblue">
              Home
            </div>
            <div onClick={() => { scrollToServices(); onClose(); }} className="font-bold text-gravitonblue">
              Services
            </div>
            <div onClick={() => { scrollToCaseStudies(); onClose(); }} className="font-bold text-gravitonblue">
              Case Studies
            </div>
            <div onClick={() => { scrollToPricing(); onClose(); }} className="font-bold text-gravitonblue">
              Pricing
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DropDownMenu;
