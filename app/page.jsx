import React from "react";
import { PromoBanner } from "@/components/ui/promo-banner";

export default function page() {
  const categorydata = [
    {
      name: "Class IX",
      image: "/09.png",
      link: "/pages/CLassIX",
    },
    {
      name: "Class X",
      image: "/10.png",
      link: "/pages/ClassX",
    },
    {
      name: "Class XI",
      image: "/11.png",
      link: "/pages/ClassXI",
    },
    {
      name: "Class XII",
      image: "/12.png",
      link: "/pages/ClassXII",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 pt-5 px-4 pb-6">
      <PromoBanner />
      <div className="grid grid-cols-2 gap-4">
        {categorydata.map((item) => (
          <div className="bg-white rounded-xl overflow-hidden" key={item.name}>
            <a href={item.link} target="blank">
              <div className="aspect-square rounded-xl overflow-hidden border">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-3">
                <h3 className="font-medium mb-1 text-center">{item.name}</h3>
              </div>
            </a>
          </div>
        ))}
      </div>
      
    </div>
  );
}
