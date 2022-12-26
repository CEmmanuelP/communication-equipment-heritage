import { motion, AnimatePresence } from "framer-motion";
import { forwardRef, useImperativeHandle, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

const Modal = forwardRef((props, ref) => {
  const [open, setOpen] = useState(false);

  useImperativeHandle(ref, () => {
    return {
      open: () => setOpen(true),
      close: () => setOpen(false),
    };
  });

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="modal-backdrop"
            onClick={() => setOpen(false)}
            initial={{
              opacity: 0,
            }}
            animate={{ opacity: 1, transition: { duration: 0.3 } }}
            exit={{ opacity: 0 }}
          />

          <motion.div className="modal-content-wrapper">
            <div style={{ display: "flex", justifyContent: "end" }}>
              <AiOutlineClose
                style={{
                  cursor: "pointer",
                  paddingRight: "3px",
                }}
                onClick={() => setOpen(false)}
              />
            </div>
            <motion.div
              // initial={{ scale: 0 }}
              // animate={{ scale: 1, transition: { duration: 0.3 } }}

              exit={{ opacity: 0 }}
              className="modal-content"
            >
              {props.children}
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
});

export default Modal;
