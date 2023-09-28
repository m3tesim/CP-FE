import "./index.css";
import SideNAV from "./components/SideNav";
import Tabs from "./components/Tabs";
function App() {
  return (
    <>
      <div className="flex w-full">
        <SideNAV />
        <div className="w-full">
          <Tabs />
        </div>
      </div>
    </>
  );
}

export default App;
