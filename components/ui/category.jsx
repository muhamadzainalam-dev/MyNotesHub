"use client";
import { useEffect } from "react";
import React from "react";

export function Category() {
  useEffect(() => {
    // Notice banner ad script
    const noticeBannerScript = document.createElement("script");
    noticeBannerScript.src =
      "//pl25799476.effectiveratecpm.com/af31e052137ab40ed4972cbb5759126b/invoke.js";
    noticeBannerScript.async = true;
    document.body.appendChild(noticeBannerScript);
  }, []);
  const categorydata = [
    {
      name: "Mathematics Notes",
      image: "/math.jpg",
      link: "https://drive.google.com/drive/folders/1cHgcIJ8oXUfInBk0QfvVa4kAEIHTRcEj?usp=drive_link",
    },
    {
      name: "Computer Notes",
      image: "/computer.png",
      link: "https://drive.google.com/drive/folders/1Gkn5XqXkzn8aRTTVgfthmxdBfs8WvvQU?usp=drive_link",
    },
    {
      name: "Physics Notes",
      image: "/physics.jpg",
      link: "https://drive.google.com/drive/folders/1UNX8vHuVe8IOaW1nqQYQjkGAH96xRLwL?usp=drive_link",
    },
    {
      name: "Chemistry Notes",
      image: "/chemistry.jpg",
      link: "https://drive.google.com/drive/folders/1d94ldGx8wLzPPOOlvXMc82Qea95N9Wa1?usp=drive_link",
    },
  ];

  const ads = new Array(4).fill("ad");

  const moreCategoryData = [
    {
      name: "Biology Notes",
      image: "/biology.png",
      link: "https://drive.google.com/drive/folders/1bhngwHlWNUbNtpM7zi_oeHxFa8OJPgPG?usp=drive_link",
    },
    {
      name: "English Notes",
      image: "/english.jpg",
      link: "https://drive.google.com/drive/folders/1EsOcFVbG4sXubv45tVBn308JsjyxyQti?usp=drive_link",
    },
    {
      name: "Urdu Notes",
      image: "/urdu.svg",
      link: "https://drive.google.com/drive/folders/17er0C7l2bpdfTdlpo0gmwPE_LJD0TkGe?usp=drive_link",
    },
    {
      name: "Islamiat Notes",
      image: "/islamiat.jpg",
      link: "https://drive.google.com/drive/folders/1WGEa64To-LcOFXJrWNzTPCggwxzh7cAO?usp=drive_link",
    },
  ];

  return (
    <div>
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
      <div className="w-full flex justify-center my-5">
        <div id="container-af31e052137ab40ed4972cbb5759126b"></div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {moreCategoryData.map((item) => (
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
