import Footer from "../components/Footer";
import BottomCard from "../components/HomePageComponents/BottomCard";
import LeftCard from "../components/HomePageComponents/LeftCard";
import RightCard from "../components/HomePageComponents/RightCard";
import Navbar from "../components/Navbar";

function HomePage() {
  return (
    <div>
      <Navbar />
      <div className="innerBox flex flex-col mt-3 pt-10 pl-10 pr-10">
        <div className="flex flex-row justify-center gap-5 mb-4 text-2xl underline font-serif text-orange-950">
          <h1>ACCOUNTS</h1>
          <h1>DASHBOARD</h1>
        </div>
        <div className="flex flex-row gap-4 justify-center mb-3">
          <LeftCard />
          <RightCard />
        </div>
        <BottomCard />
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
