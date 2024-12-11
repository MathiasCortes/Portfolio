import { useState } from "react";
import Navbar from "../components/organisms/Navbar";

//import VerifyCredentials from "../components/molecules/VerifyCredentials";
import Button from "../components/atoms/Button"


const Home = () => {
  const [count, setCount] = useState(0)
const handleClick = () => {
setCount((count)=> count + 2)
}
  return (
    <div>
      <Navbar />
     {/* <VerifyCredentials /> */} 
      <main>
        <Button buttonClass="bg-black text-white transform translate-x-full" label={`Count is ${count}`} parentMethod={handleClick}/>
        
        <div className="relative">
  <span className="absolute inline-flex w-3 h-3 bg-blue-400 rounded-full opacity-75 animate-ping"></span>
  <span className="absolute inline-flex w-3 h-3 bg-blue-500 rounded-full"></span>
</div>
      </main>
    </div>
  );
};

export default Home;
