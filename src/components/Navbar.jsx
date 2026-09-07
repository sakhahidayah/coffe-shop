import { Menu, X } from "lucide-react";
import logo from "../assets/coffee-cup.png";
import { useState } from "react";
import MenuBarMobile from "../sections/MenubarMobile";
import MenubarDesktop from "../sections/MenubarDesktop";
export default function Navbar() {
  const [navbar, setNavbar] = useState(false);
  function menuOnClick() {
    setNavbar(!navbar);
  }
  return (
    <>
      <header>
        <nav className="flex flex-row h-14 px-4 mx-auto  py-2 justify-between md:w-3xl max-w-full bg-coffee-50 items-center border-b-2 border-b-inline">
          <div className="flex flex-row gap-1 items-center">
            <img src={logo} alt="Logo-coffe" className="w-5 h-5" />
            <h1 className="text-md font-bold text-coffee-700">Brew Haven</h1>
          </div>
          <div className="md:hidden">{navbar ? <X onClick={menuOnClick} size={20} /> : <Menu onClick={menuOnClick} size={20} />}</div>

          {/* Menubar Desktop */}
          <MenubarDesktop />
        </nav>
        {/* Menubar Mobile */}
        {navbar ? <MenuBarMobile /> : null}
      </header>
    </>
  );
}
