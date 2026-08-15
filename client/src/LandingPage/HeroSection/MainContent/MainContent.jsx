import React from "react";
import { Mail } from "lucide-react";

const MainContent = () => {
  return (
    <div className="flex  flex-col max-w-md w-full   h-112 justify-between">
      <h1 className="font-semibold text-6xl wrap-break-word">
        Unleashing the art of Visual Storytelling
      </h1>
      <p className="font-semibold wrap-break-word">
        I am a passionate web designer dedicated to bringing your visions to
        life. With a keen eye for aesthetics and a deep understanding of user
        experience, I strive to create captivating websites that leave a lasting
        impression.
      </p>
      <div className="flex items-center justify-center  w-[55%]   ">
        <button className="flex gap-1  rounded-3xl py-3 border-2  items-center px-8  ">
          <Mail color="orange  " />
          <h3 className="text-2xs font-semibold text-center">
            Let's collaborate!{" "}
          </h3>
        </button>
      </div>
    </div>
  );
};

export default MainContent;
