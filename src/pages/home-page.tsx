import { useNavigate } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      <Header
        showGetStarted={true}
        onGetStartedClick={() => navigate("/character-page")}
      />

      <div className="justify-center flex flex-col items-center bg-[#F5F5F5] h-[524px]">
        <h1 className="text-6xl font-black text-[#1E1E1E] mb-4">
          Rick And Morty
        </h1>
        <p className="text-4xl font-[300] text-[#757575] mb-6">
          Character Explorer
        </p>

        <button
          onClick={() => navigate("/character-page")}
          className="bg-[#2C2C2C] text-white px-4 cursor-pointer py-2 rounded-md text-sm font-semibold hover:bg-gray-800 transition-colors"
        >
          Get Started
        </button>
      </div>

      <Footer />
    </div>
  );
};

export default HomePage;
