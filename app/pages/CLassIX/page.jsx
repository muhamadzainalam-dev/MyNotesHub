import React from "react";

export default function page() {
  const categorydata = [
    {
      name: "Mathematics Notes",
      image: "/math.jpg",
      link: "https://drive.google.com/drive/folders/1yXG8UUzHTpERjMQ3uZOmIN8uHPlFvC7L?usp=drive_link",
    },
    {
      name: "Physics Notes",
      image: "/physics.jpg",
      link: "https://drive.google.com/drive/folders/1LKoLvLF6fv0q7KP_Sz03N0a2MX1vO5BV?usp=drive_link",
    },
    {
      name: "Chemistry Notes",
      image: "/chemistry.jpg",
      link: "https://drive.google.com/drive/folders/1M_Bzh2gEGt1WsyK7OB3Dwuhat0MLgumt?usp=drive_link",
    },
    {
      name: "Biology Notes",
      image: "/biology.png",
      link: "https://drive.google.com/drive/folders/1WY4nbhH7t-RBQuWz9jXuDamRZH-8seBe?usp=drive_link",
    },
    {
      name: "Computer Notes",
      image: "/computer.png",
      link: "https://drive.google.com/drive/folders/1WLSbjMAB_wbxbDs7KZdYYeuPF6rSatY7?usp=drive_link",
    },

    {
      name: "English Notes",
      image: "/english.jpg",
      link: "https://drive.google.com/drive/folders/1QD5awu_Y27yoRxYK29wTqyJL9opR9p5Z?usp=drive_link",
    },
    {
      name: "Urdu Notes",
      image: "/urdu.png",
      link: "https://drive.google.com/drive/folders/1cA6PkNmqKvEFRgAyl9v5_0wGub9epLx9?usp=drive_link",
    },
    {
      name: "Islamiat Notes",
      image: "/islamiat.jpg",
      link: "https://drive.google.com/drive/folders/1zf6EEl9I70XNHWmCA7jqH0gb4m0MhFzg?usp=drive_link",
    },

    {
      name: "CLASS 9 IX BOOKS PDFS",
      image: "/books.webp",
      link: "https://drive.google.com/drive/folders/1Ci8aSD_tzY1Q2aPlmf68qWdFJd0guFHX?usp=drive_link",
    },
    {
      name: "Model Paper",
      image: "/scheme.webp",
      link: "https://drive.google.com/drive/folders/1jZVbkZ3LtQhFWjqIQMFWXBFpqEC74-zr?usp=drive_link",
    },
    {
      name: "MCQ'S Of All Subjects",
      image: "/mcqs.webp",
      link: "https://drive.google.com/drive/folders/1ACnJ2eLORcWYCpMLrN4SX8zaPWHPeVdj?usp=drive_link",
    },
    {
      name: "Paper Presentation",
      image: "/presentation.webp",
      link: "https://drive.google.com/drive/folders/1FK9Xf6yrpQz5712sq-3r2SVpicb2_2Le?usp=drive_link",
    },
    {
      name: "All Coaching Paper",
      image: "/coaching.webp",
      link: "https://drive.google.com/drive/folders/1_jwS7kKvnuxWl_aPJiSBNuBCI5oi8XkM?usp=drive_link",
    },
    {
      name: "Guess Paper For All Subject",
      image: "/guess.webp",
      link: "https://drive.google.com/drive/folders/1k1yjPkZB02CMGBpWJgAi44jxp3fSAVTC?usp=drive_link",
    },
    {
      name: "10 Year Papers",
      image: "/10years.webp",
      link: "https://drive.google.com/drive/folders/1nMr32d9Ly98aJxG4YUwU69IA7up4G9Ps?usp=drive_link",
    },
    {
      name: "Reduced Syllabus",
      image: "/syllabus.webp",
      link: "https://drive.google.com/drive/folders/1Nr0YTwsLY34YbCSErJJO7Rfy1wEmQLeM?usp=drive_link",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 px-4 pb-6">
      <h1 className="text-sm text-justify mb-5 border p-2 rounded-xl">
        ALL MATERIAL FOR{" "}
        <span className="font-bold text-amber-400">CLASS IX</span> (All Subject
        Notes, All Books, Scheme and Model Paper, All MCQ's, Paper Presentation,
        All Coaching Papers, Guess Papers, 10 Year Papers, Reduced Syllabus)
      </h1>

      <h1 className="text-sm text-justify mb-5 border p-2 rounded-xl">
        <div className="font-bold text-amber-400">How to Use MYNOTESHUB?</div>
        <p>
          Browse the list below to find your required file. Click on it to be
          redirected to the drive folder, where you can access and download it.
          Don’t forget to share it with your classmates!
        </p>
      </h1>

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
