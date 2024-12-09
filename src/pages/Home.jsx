import "../styles/App.css";
import Navbar from "../components/organisms/Navbar";
import VerifyCredentials from "../components/molecules/VerifyCredentials";
const Home = () => {
  return (
    <div>
      <Navbar />
      <VerifyCredentials />
      <main></main>
    </div>
  );
};

export default Home;
