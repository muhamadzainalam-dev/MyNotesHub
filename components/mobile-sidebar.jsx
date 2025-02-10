"use client";

import * as React from "react";
import {
  X,
  Home,
  Info,
  Mail,
  CircleHelp,
  SquareArrowOutUpRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { BsLayoutSidebarInset } from "react-icons/bs";
import Link from "next/link";

const sidebarItems = [
  { icon: Home, label: "Home", href: "/" },
  { icon: CircleHelp, label: "How To Use It", href: "/pages/howto" },
  { icon: Info, label: "About Us", href: "/pages/AboutUs" },
  { icon: Mail, label: "Contact", href: "/pages/ContactUs" },
];

export function MobileSidebar() {
  const [open, setOpen] = React.useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <div className="fixed top-3 left-4 z-50 h-10 w-10 flex items-center justify-center">
          <BsLayoutSidebarInset className="w-10 h-10" />
        </div>
      </SheetTrigger>
      <SheetContent side="left" className="w-[250px] p-0">
        <SheetTitle className="sr-only">Sidebar Menu</SheetTitle>
        <div className="flex flex-col space-y-2 h-full bg-background">
          <div className="flex items-center justify-between px-[15px] h-14 px-4 border-b">
            <h2 className="text-lg font-semibold">Menu</h2>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setOpen(false)}
              className="mr-2"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          <nav className="flex-1 overflow-y-auto">
            <ul className="p-2 space-y-5">
              {sidebarItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="flex items-center px-[10px]"
                    onClick={() => setOpen(false)}
                  >
                    <item.icon className="mr-2 h-4 w-4" />
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <Link href="https://chat.whatsapp.com/JXmYFWvzyUwBmZUF4X45NH">
              <Button className="ml-[15px] mt-[20px] w-[82%]">
                Join Our Group <SquareArrowOutUpRight />
              </Button>
            </Link>
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  );
}
