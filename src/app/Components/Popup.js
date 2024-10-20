"use client";

import Image from "next/image";

import "./Popup.css";

function Popup({ letsPop, toggelModal }) {
  return (
    <>
      {letsPop && (
        <div className="modal">
          <div className="overlay"></div>
          <div className="modal-content">
            <p className="mt-25 text-lg">
              Congratulations ! You know your instructors
            </p>
            <div className="flex justify-center items-center ">
              <Image
                src="https://www.troublefreepool.com/media/ferrell-gif.3711/full"
                alt="Congrats"
                width={250}
                height={250}
              />
            </div>
            <button
              className="bg-gray-200 hover:bg-white text-black p-2 rounded-full text-base"
              onClick={toggelModal}
            >
              CLOSE
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Popup;
