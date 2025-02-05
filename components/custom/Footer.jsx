import React from "react";
import Icon from "@mdi/react";
import { mdiIncognito } from "@mdi/js";

export default function Footer() {
  return (
    <div className="h-10 w-full bg-[#d3d3d3] text-white justify-center flex items-center gap-2">
      <div className="w-6 h-6 rounded-full overflow-hidden bg-black text-white flex justify-center items-center">
        <Icon path={mdiIncognito} size={0.7} />
      </div>
      <p className="font-bold">DEVELOP BY MUHAMMAD ZAIN</p>
    </div>
  );
}
