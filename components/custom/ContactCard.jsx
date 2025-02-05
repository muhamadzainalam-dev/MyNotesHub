import { MdWhatsapp } from "react-icons/md";

export function ContactCard() {
  return (
    <div className="flex items-center justify-center my-6">
      <div className="relative flex items-center justify-between w-full max-w-lg bg-white rounded-xl shadow-xl p-5 md:p-8 border border-gray-200">
        {/* Text Section */}
        <p className="text-lg md:text-2xl text-gray-800 font-sans leading-snug">
          Contact us 🤗 if you can't <br /> find your required file 👉🏻
        </p>

        {/* WhatsApp Icon */}
        <a
          href="https://wa.me/923163834219" // Replace with your number
          target="_blank"
          rel="noopener noreferrer"
          className="h-[10vh] w-[10vh] md:h-[12vh] md:w-[12vh] bg-green-500 text-white rounded-full shadow-md flex items-center justify-center transition-transform transform hover:scale-110"
        >
          <MdWhatsapp className="text-4xl md:text-6xl" />
        </a>
      </div>
    </div>
  );
}
