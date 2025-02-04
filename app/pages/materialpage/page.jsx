import React from "react";

export default function Category() {
  const categorydata = [
    {
      name: "Mathematics",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Computer",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Physics",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Chemistry",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Biology",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "English",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Urdu",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Islamiat",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Past Papers",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Important Notifications",
      image: "/placeholder.svg?height=200&width=200",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 pt-32 px-4 pb-6">
      <div className="grid grid-cols-2 gap-4">
        {categorydata.map((item) => (
          <div className="bg-white rounded-xl overflow-hidden" key={item.name}>
            <a href="/pages/materialpag">
              <div className="aspect-square">
                <img
                  src={"/placeholder.svg"}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-3">
                <h3 className="font-medium mb-1">{item.name}</h3>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
