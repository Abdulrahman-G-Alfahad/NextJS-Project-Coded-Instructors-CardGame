"use client";

//import { useState} from "react";
import Image from "next/image";

import "./Popup.css";
import React, { useState } from "react";

function Popup({ letsPop, toggelModal }) {
  //   const [letsPop, setLetsPop] = useState(false);

  //   const userWon = () => {
  //     setLetsPop(!letsPop);
  //   };

  //   const closePop = () => {
  //     setLetsPop(letsPop);
  //   };

  return (
    <>
      {letsPop && (
        <div className="modal">
          <div className="overlay"></div>
          <div className="modal-content">
            <p>Congratulations ! You know your instructors</p>
            <Image
              src="https://your-gif-url.com/gif.gif"
              width={250}
              height={250}
            />
            <button className="close-modal" onClick={toggelModal}>
              CLOSE
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Popup;
