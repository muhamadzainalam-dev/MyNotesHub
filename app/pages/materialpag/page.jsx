"use client";
import React from "react";

export default function Page() {
  const handleClick = () => {
    const link = document.createElement("a");
    link.href = "https://drive.google.com/file/d/1O65BQERkWF7YFUpz5CDFsqE_0OEimay5/view?usp=sharing";
    link.download = "Chapter_1_Mathematics.pdf";
    document.body.appendChild(link);
    link.click();
    window.open(link.href, "_blank");
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-gray-100 pt-32 px-4 pb-6">
      <img
        src="/placeholder.svg"
        alt="Subject Image"
        className="w-full h-auto rounded-lg mb-6 cursor-pointer shadow-lg"
        onClick={handleClick}
      />
      <div className="max-w-4xl  bg-[#34a0a2] rounded-lg shadow-lg p-4">
        <h1 className="text-2xl font-bold text-center text-white mb-4">
          Mathematics - Chapter 1
        </h1>
        <p className="text-lg text-center text-gray-600 leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero maxime
          corporis cupiditate eos consectetur soluta sunt explicabo temporibus
          rerum vel? Consequuntur nam neque ipsam quam suscipit inventore nihil
          repellendus minima.
        </p>
      </div>
    </div>
  );
}
