export default function AboutUs() {
  return (
    <div className="bg-gray-900 text-white min-h-screen py-10 px-6 md:px-20 pt-36">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-amber-400">About US</h1>
        <p className="text-lg text-gray-300 mt-4">
          Welcome to{" "}
          <span className="text-amber-400 font-semibold">MY NOTES HUB</span>,
          your go-to platform for accessing valuable study materials. We
          simplify learning by providing easy access to important notes and
          resources, ensuring you never miss out on essential study materials.
        </p>
      </div>

      <div className="mt-10 max-w-3xl mx-auto space-y-6">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-amber-400">
            What We Offer
          </h2>
          <p className="text-gray-300 mt-2">
            Our platform provides well-organized notes, making studying
            efficient and hassle-free. Simply browse, click, and access your
            required files instantly.
          </p>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-amber-400">
            How It Works
          </h2>
          <p className="text-gray-300 mt-2">
            1️⃣ Find your required file below.
            <br /> 2️⃣ Click to get redirected to the drive folder.
            <br /> 3️⃣ Download & Share with your classmates for collaborative
            learning.
          </p>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-amber-400">
            Why Choose Us?
          </h2>
          <p className="text-gray-300 mt-2">
            📚 Organized Resources – No more searching through messy files. 🚀
            Instant Access – Get what you need with just one click. 🤝 Community
            Driven – Help and share with classmates effortlessly.
          </p>
        </div>
      </div>

      <div className="text-center mt-12">
        <h2 className="text-3xl font-bold text-amber-400">
          Join Us & Simplify Your Studies!
        </h2>
        <p className="text-gray-300 mt-2">
          Share MY NOTES HUB with your classmates and make studying easier for
          everyone.
        </p>
      </div>
    </div>
  );
}
