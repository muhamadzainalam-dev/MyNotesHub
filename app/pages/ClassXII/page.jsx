import React from "react";

export default function page() {
  const categorydata = [
    {
      name: "Mathematics Notes",
      image: "/math.jpg",
      link: "https://drive.google.com/drive/folders/1sUj-6n4ICCbKFzv-JtWJZlr_O1oe23GI?usp=drive_link",
    },
    {
      name: "Physics Notes",
      image: "/physics.jpg",
      link: "https://drive.google.com/drive/folders/1hRrTfL1yNyKAwmgMZ0urlzNA58TH6vwv?usp=drive_link",
    },
    {
      name: "Chemistry Notes",
      image: "/chemistry.jpg",
      link: "https://drive.google.com/drive/folders/1enrEioEvLNYLKNXpZdDz7Eh1lf98FCUg?usp=drive_link",
    },
    {
      name: "Biology Notes",
      image: "/biology.png",
      link: "https://drive.google.com/drive/folders/1PAAnt3DUwHR2ygbf6dA4Xmt-VcjqcXZa?usp=drive_link",
    },
    {
      name: "Computer Notes",
      image: "/computer.png",
      link: "https://drive.google.com/drive/folders/1PCl-HvkxvdQFkWH2DDW-nbMKPBa8lc0D?usp=drive_link",
    },

    {
      name: "English Notes",
      image: "/english.jpg",
      link: "https://drive.google.com/drive/folders/1w0N1jTn4lqaY2CKbA72sdEX8GhQfqLwO?usp=drive_link",
    },
    {
      name: "Urdu Notes",
      image: "/urdu.png",
      link: "https://drive.google.com/drive/folders/1kek3mv5Z5N9-ZbTDPdrbfv0oytF-girb?usp=drive_link",
    },
    {
      name: "Pakistan Studies Notes",
      image: "/PST.png",
      link: "https://drive.google.com/drive/folders/1kd3Z0lWhDVZtBSIPXaqmDouCNXL61VsR?usp=drive_link",
    },

    {
      name: "CLASS 12 XI BOOKS PDFS",
      image: "/books.webp",
      link: "https://drive.google.com/drive/folders/1jvJFgMsE-tlpojPZzM5lwKhI8o-oNWwF?usp=drive_link",
    },
    {
      name: "Model Paper 2024",
      image: "/scheme.webp",
      link: "https://drive.google.com/drive/folders/1551yLHZER0bUnZF7QMggQNAwvpKyzSd3?usp=drive_link",
    },
    {
      name: "Paper Presentation",
      image: "/presentation.webp",
      link: "https://drive.google.com/drive/folders/1FK9Xf6yrpQz5712sq-3r2SVpicb2_2Le?usp=drive_link",
    },
    {
      name: "Guess Papers",
      image: "/guess.webp",
      link: "https://drive.google.com/drive/folders/17u0N0p1MrrhCNe0lY_VqlOybKsRNGGU5?usp=drive_link",
    },
    {
      name: "SPECIAL TARGET PAPER 100% (2024)",
      image: "/syllabus.webp",
      link: "https://drive.google.com/drive/folders/1cK7y-ykg4SufU2fUVTOiMFe45ULqVfat?usp=drive_link",
    },
    {
      name: "10 Year Papers",
      image: "/10years.webp",
      link: "https://drive.google.com/drive/folders/1BX3OMwtGruBRTJkxYv7GOI9Jq6lupeTM?usp=drive_link",
    },
    {
      name: "Reduced Syllabus",
      image: "/syllabus.webp",
      link: "https://drive.google.com/drive/folders/1z1yF1P39-3BjPnjnwtwXUk0NFe7ZEkBJ?usp=drive_link",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 px-4 pb-6">
      <h1 className="text-sm text-justify mb-5 border p-2 rounded-xl">
        ALL MATERIAL FOR
        <span className="font-bold text-amber-400">CLASS XII</span> (All Subject
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
