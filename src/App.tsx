import "./index.css";
import SideNAV from "./components/SideNav";
import Tabs from "./components/Tabs";
import ApplicationForm from "./Pages/ApplicationForm";
function App() {
  return (
    <>
      <div className="flex w-full">
        <SideNAV />
        <div className="w-full">
          <Tabs />
          <ApplicationForm />
        </div>
      </div>
    </>
  );
}

export default App;
