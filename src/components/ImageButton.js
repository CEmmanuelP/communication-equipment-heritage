import React, { useRef } from "react";
import Jsv from "./Jsv";
import Modal from "./Modal";
import { motion } from "framer-motion";

export default function ImageButton({ data }) {
  const modalRef = useRef();
  return (
    <div style={{ height: "300px", width: "360px" }}>
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
          backgroundImage: "url(" + data.src + ")",
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
        <Jsv data={data} />
      </Modal>
    </div>
  );
}
