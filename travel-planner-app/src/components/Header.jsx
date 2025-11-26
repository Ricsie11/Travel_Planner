import header from "../assets/header.jpg";

function Header() {
  return (
    <>
      <div
        className="h-screen bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${header})` }}
      >
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold drop-shadow-lg hover:text-black">
          Explore Your Next Adventure
        </h1>
      </div>
    </>
  );
}

export default Header;
