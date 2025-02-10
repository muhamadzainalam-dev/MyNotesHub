import React from "react";
import Icon from "@mdi/react";
import { mdiIncognito } from "@mdi/js";

export default function Footer() {
  return (
    <footer className="w-full bg-amber-400 text-gray-900 py-2 flex items-center justify-center gap-3">
      <div className="w-8 h-8 rounded-full bg-white text-gray-900 flex justify-center items-center shadow-md">
        <Icon path={mdiIncognito} size={1} />
      </div>
      <p className="text-sm md:text-base font-semibold">
        Developed by <span className="font-bold">Muhammad Zain</span>
      </p>
    </footer>
  );
}
