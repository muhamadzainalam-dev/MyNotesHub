export function PromoBanner() {
  return (
    <div className="relative h-[18vh] md:h-[50vh] bg-white rounded-xl overflow-hidden mb-6 flex items-center justify-center flex-col">
      <img
        src="/Banner.jpg"
        alt="Banner"
        className="absolute inset-0 w-full h-full object-cover blur-[1px]"
      />
      <div className="relative text-white text-2xl md:text-4xl drop-shadow-lg -mb-2">
        DEVELOPER
      </div>
      <div className="relative text-white text-3xl md:text-5xl drop-shadow-lg cherry-bomb-one-regular">
        MUHAMMAD ZAIN
      </div>
    </div>
  );
}
