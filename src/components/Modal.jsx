import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
export default function Modal({ onClose, open, error }) {
  const dialog = useRef(null);

  useEffect(() => {
    if (open) {
      dialog.current.showModal();
    } else {
      dialog.current.close();
    }
  }, [open]);
  return (
    <motion.dialog
    className="success-modal"
    initial={{ opacity: 0, x: 200, scale: 1.1 ,rotate:-10}}
    animate={{ opacity: 1, x: 0, scale: 1, rotate:0}}
    exit={{ opacity: 0, x: -200, scale: 1.1, rotate: 10, filter: "blur(4px)" }}
    transition={{ type: "spring", stiffness: 100 }}
    ref={dialog}
    onClose={onClose}
    >
      <div className={`${error !== "success" ? "error-box" : "success-box"}`}>
        {error === "success" && <p>Message sent 📩</p>}
      </div>
    </motion.dialog>
  );
}
