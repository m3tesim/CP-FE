import Home from "../assets/home.svg";
import Doc from "../assets/doc.svg";
import Burger from "../assets/burger.svg";
export default function SideNAV() {
  return (
    <nav className="z-10 w-28 h-screen sticky shadow-md text-center justify-center flex pt-12">
      <div className="flex flex-col gap-8">
        <img src={Burger} width={35} height={36} />
        <img src={Home} width={35} height={36} />
        <img src={Doc} width={35} height={36} />
      </div>
    </nav>
  );
}
