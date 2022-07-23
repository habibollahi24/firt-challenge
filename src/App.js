import Companies from "./components/Companies";
import Features from "./components/Features";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import RegisterCTA from "./components/RegisterCTA";

function App() {
  return (
    <div className="">
      <Navbar />
      <Header />
      <Companies />
      <Features />
      <RegisterCTA />
    </div>
  );
}

export default App;
