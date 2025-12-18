import Header from "../components/Header";
import { Link } from "react-router-dom";
import SearchBar from "../components/SearchBar";


function Home() {
  return (
    <>
      <div className="">
        <Header />
        <SearchBar />
        {/* <Link to="/destination/abuja" className="text-blue-600 underline">
          View Abuja Details
        </Link> */}
      </div>
    </>
  );
}

export default Home;
