import "../styles/App.css";
import Navbar from "../components/organisms/Navbar";
import VerifyCredentials from "../components/molecules/VerifyCredentials";
import Footer from "../components/Footer";
const Home = () => {
  return (
    <div>
      <Navbar />
      <VerifyCredentials />
      <main></main>
      <Footer />
    </div>
  );
};

export default Home;
