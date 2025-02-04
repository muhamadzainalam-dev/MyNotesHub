"use client";
import { Search, SlidersHorizontal } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { BsIncognito } from "react-icons/bs";
import Link from "next/link";

export function Header() {
  const { toast } = useToast();
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-gray-100 px-4 py-3">
      <div className="flex items-center justify-between mb-4">
        <Link href={"/"}>
          <div className="w-10 h-10 rounded-full overflow-hidden p-1 bg-black text-white">
            <BsIncognito className="h-full w-full" />
          </div>
        </Link>
        <h1 className="text-xl font-semibold">Ingoude Ramen</h1>
        <div className="w-10 h-10 rounded-full overflow-hidden">
          <img
            src={`/placeholder.svg?height=40&width=40`}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="flex gap-3 h-10">
        <div className="relative flex-1 h-full">
          <Input
            type="text"
            placeholder="Search here"
            className="pl-10 bg-gray-50 border-none h-full"
            disabled
            onClick={() => {
              toast({
                description: "This option will be available soon. Stay tuned!",
              });
            }}
          />
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
            onClick={() => {
              toast({
                description: "This option will be available soon. Stay tuned!",
              });
            }}
          />
        </div>
        <button
          className="p-3 bg-gray-50 rounded-lg h-full"
          onClick={() => {
            toast({
              description: "This option will be available soon. Stay tuned!",
            });
          }}
        >
          <SlidersHorizontal className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
