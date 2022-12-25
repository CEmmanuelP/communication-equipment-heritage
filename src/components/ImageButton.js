import React, { useRef } from "react";
import Jsv from "./Jsv";
import Modal from "./Modal";
import { motion } from "framer-motion";

const totalFrames = 18;

export default function ImageButton() {
  const modalRef = useRef();
  return (
    <div style={{ height: "400px", width: "500px" }}>
      <motion.button
        whileHover={{
          scale: 1.02,
          textShadow: "0px 0px 8px rgb(0, 0, 0)",
          boxShadow: "0px 0px 8px rgb(0, 0, 0)",
          opacity: 1,
        }}
        style={{
          width: "100%",
          height: "100%",
          backgroundImage: `url('/images/heritage/20180906-001-blauw.jpeg')`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          objectFit: "contain",
          backgroundPosition: "center",
          cursor: "pointer",
        }}
        whileTap={{
          scale: 1.02,
          textShadow: "0px 0px 8px rgb(0, 0, 0)",
          boxShadow: "0px 0px 8px rgb(0, 0, 0)",
          opacity: 1,
        }}
        onClick={() => modalRef.current.open()}
      ></motion.button>
      <Modal ref={modalRef}>
        <Jsv totalFrames={totalFrames} />
      </Modal>
    </div>
  );
}
