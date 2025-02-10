export function ContactCard() {
  return (
    <div className="flex items-center justify-center my-4">
      <div className="relative flex flex-col items-center w-full bg-white rounded-xl shadow-lg p-4 border border-gray-300">
        {/* Text Section */}
        <p className="text-md text-[#0D163A] font-medium text-center leading-snug">
          Contact us 🤗 if you can't <br /> find your required file 👉🏻
        </p>

        {/* Contact Button */}
        <a
          href="/pages/ContactUs"
          className="mt-3 w-full bg-black text-white  font-semibold py-2 text-center rounded-md shadow transition hover:bg-[#0D163A]"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
}
