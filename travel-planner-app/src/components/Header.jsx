import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <section className="relative w-full bg-gradient-to-br from-blue-50 to-white py-20">
        
        <div className="flex flex-col items-center justify-center px-4 text-center">
          <h1 className="text-black text-3xl sm:text-4xl md:text-5xl font-bold drop-shadow-lg">
            Plan Your Next Adventure with Ease
          </h1>

          <h2 className="mt-5 text-xl sm:text-2xl font-medium text-gray-700 dark:text-gray-500 max-w-2xl">
            Atlas helps you organize destinations, build itineraries, and travel
            with confidence — all in one place.😉
          </h2>

          <Link
            to="/destinations"
            className="mt-8 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
          >
            Start Planning →
          </Link>
        </div>
      </section>
    </>
  );
}

export default Header;
