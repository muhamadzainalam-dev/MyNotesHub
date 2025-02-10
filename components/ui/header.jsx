"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import Link from "next/link";
import Icon from "@mdi/react";
import { mdiIncognito } from "@mdi/js";

export function Header() {
  const { toast } = useToast();
  const pathname = usePathname();
  const [headerBg, setHeaderBg] = useState("bg-gray-100");
  const [textColor, setTextColor] = useState("text-black");

  useEffect(() => {
    if (pathname === "/pages/AboutUs") {
      setHeaderBg("bg-gray-900");
      setTextColor("text-white");
    } else {
      setHeaderBg("bg-gray-100");
      setTextColor("text-black");
    }
  }, [pathname]);

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 ${headerBg} px-4 pt-3 pb-5 border-b border-gray-100`}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="w-10 h-10 invisible rounded-lg overflow-hidden bg-amber-400 text-gray-900 flex justify-center items-center">
          <Icon path={mdiIncognito} size={1.3} />
        </div>
        <h1 className={`text-xl font-bold ${textColor}`}>MY NOTES HUB</h1>
        <Link href={"/"}>
          <div className="w-10 h-10 rounded-lg overflow-hidden bg-amber-400 text-gray-900 flex justify-center items-center">
            <Icon path={mdiIncognito} size={1.3} />
          </div>
        </Link>
      </div>
      <div className="flex gap-3 h-10">
        <div className="relative flex-1 h-full">
          <Input
            type="text"
            placeholder="Search here"
            className="pl-10 bg-gray-50 text-gray-900 border-none h-full"
            disabled
            onClick={() => {
              toast({
                description: "This option will be available soon",
              });
            }}
          />
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500"
            onClick={() => {
              toast({
                description: "This option will be available soon",
              });
            }}
          />
        </div>
      </div>
    </div>
  );
}
