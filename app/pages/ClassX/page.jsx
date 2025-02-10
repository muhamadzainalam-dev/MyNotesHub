import React from "react";

export default function page() {
  const categorydata = [
    {
      name: "Mathematics Notes",
      image: "/math.jpg",
      link: "https://drive.google.com/drive/folders/1piQtxnI006Xq87aKnufurmNfz3kcn8TV?usp=drive_link",
    },
    {
      name: "Physics Notes",
      image: "/physics.jpg",
      link: "https://drive.google.com/drive/folders/1u6tENei386Wzu-CA19iBlfSJ6NZdKPk1?usp=drive_link",
    },
    {
      name: "Chemistry Notes",
      image: "/chemistry.jpg",
      link: "https://drive.google.com/drive/folders/1HF0iGXvtY8N_1znSPcw1cXeEaoO_DodL?usp=drive_link",
    },
    {
      name: "Biology Notes",
      image: "/biology.png",
      link: "https://drive.google.com/drive/folders/1fvjwKmCfKN6M5vBjhkifB1mXrplvFbE5?usp=drive_link",
    },
    {
      name: "Computer Notes",
      image: "/computer.png",
      link: "https://drive.google.com/drive/folders/1KNUDNOyFzgdRZACB7uzo6JWQjI5XwqpS?usp=drive_link",
    },

    {
      name: "English Notes",
      image: "/english.jpg",
      link: "https://drive.google.com/drive/folders/1iRguOSc7UhMwn5QuOZPSYCcZVi6TRdyI?usp=drive_link",
    },
    {
      name: "Sindhi Notes",
      image: "/sindhi.jpg",
      link: "https://drive.google.com/drive/folders/1k7eNNKQry1JGILrOZHfVI2b56zGfiOnV?usp=drive_link",
    },
    {
      name: "Pakistan Studies Notes",
      image: "/PST.png",
      link: "https://drive.google.com/drive/folders/1UyFM0LJgjjZarL5Gh0RO2KKFrUqg9_g_?usp=drive_link",
    },

    {
      name: "CLASS 10 X BOOKS PDFS",
      image: "/books.webp",
      link: "https://drive.google.com/drive/folders/1sG-RLOYNRdABoZod8L9yKI8cTYOzahM9?usp=drive_link",
    },
    {
      name: "Model Paper",
      image: "/scheme.webp",
      link: "https://drive.google.com/drive/folders/1FrQguJZZCJ6oXUosZjt3G6yOExgkeIpF?usp=drive_link",
    },
    {
      name: "MCQ'S Of All Subjects",
      image: "/mcqs.webp",
      link: "https://drive.google.com/drive/folders/1yxqjjxyR8OfpGHzIC0_R6CdANmpKqTt0?usp=drive_link",
    },
    {
      name: "Paper Presentation",
      image: "/presentation.webp",
      link: "https://drive.google.com/drive/folders/1FK9Xf6yrpQz5712sq-3r2SVpicb2_2Le?usp=drive_link",
    },
    {
      name: "All Coaching Paper",
      image: "/coaching.webp",
      link: "https://drive.google.com/drive/folders/19LD0WZH711lj6OI884vhQkZ4j72dG4VE?usp=drive_link",
    },
    {
      name: "Guess Paper For All Subject",
      image: "/guess.webp",
      link: "https://drive.google.com/drive/folders/1DoWJXnfgBf-L3iI8w7gEh8fYuFua8Lhr?usp=drive_link",
    },
    {
      name: "10 Year Papers",
      image: "/10years.webp",
      link: "https://drive.google.com/drive/folders/1qp1EvFhS2p9V5IYQt-5l05qG-RAFPxJ1?usp=drive_link",
    },
    {
      name: "Reduced Syllabus",
      image: "/syllabus.webp",
      link: "https://drive.google.com/drive/folders/1nX-8TIwce2KHH6ZrQcGOmUxmQJqcU3Cs?usp=drive_link",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 px-4 pb-6">
      <h1 className="text-sm text-justify mb-5 border p-2 rounded-xl">
        ALL MATERIAL FOR{" "}
        <span className="font-bold text-amber-400">CLASS X</span> (All Subject
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
