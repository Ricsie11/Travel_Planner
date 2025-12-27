function Header() {
  return (
    <>
      <section className="relative bg-gradient-to-br w-full from-blue-50 to-white py-20 px-4">
        <div className="h-30 bg-cover bg-center flex items-center justify-center">
          <h1 className="text-black text-3xl sm:text-4xl md:text-5xl font-bold drop-shadow-lg">
            Plan Your Next Adventure with Ease
          </h1>
        </div>

        <div>
          <h2 className="font-medium flex justify-center p-5 text-xl dark:text-gray-500">
            Atlas helps you organize destinations, build itineraries, and travel
            with confidence — all in one place.😉
          </h2>
        </div>

        <div class="flex justify-center items-center">
          <button class="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg text-white flex items-center">
            Start planning →
          </button>
        </div>
      </section>
    </>
  );
}

export default Header;
