import assets from "../../assets";
import { useState } from "react";
import NavigationList from "../NavigationList";

const html = document.getElementById("html");

export default function Navigation() {
  const [openMenu, setOpenMenu] = useState(false);

  function htmlOverflow() {
    /* Modify class of the html tag depending of the openMenu State*/
    openMenu == true
      ? html.style.removeProperty("overflow")
      : html.style.setProperty("overflow", "hidden");
  }

  const handleBugerBottonClick = (event) => {
    event.preventDefault();
    setOpenMenu(!openMenu);
    htmlOverflow();
  };
  return (
    <>
      <nav
        className={`fixed z-50 mx-auto flex w-full justify-between bg-gray-50/50 px-4 py-1 ${
          openMenu == true ? " " : "backdrop-blur-sm"
        }`}
      >
        {/* Desktop menu */}
        <div className={"mx-auto flex w-full max-w-6xl justify-between"}>
          <img
            src={assets.logo}
            alt="logo"
            className="w-12 object-contain rounded-full"
          />
          <div className="my-auto w-1/2 max-md:hidden">
            <div className="container flex items-center justify-between gap-5">
              <NavigationList />
            </div>
          </div>
          <button
            name="burgerMenu"
            className={openMenu == false ? "md:hidden" : "hidden"}
            onClick={() => handleBugerBottonClick(event)}
          >
            <svg name="burgerMenu" viewBox="0 0 20 20" className="w-8 h-8 ">
              <path
                className="fill-gray-500 hover:fill-gray-600"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          <a className="button max-md:hidden my-auto" id="#haz-tu-placa">
            <p className="button-text">¡Haz tu placa ya!</p>
          </a>
        </div>
        {/* view of menu opened */}
        <div
          className={
            openMenu == true
              ? " fixed inset-0 z-50 h-screen md:hidden"
              : "hidden"
          }
        >
          <div className="fixed inset-0 h-screen w-screen bg-cyan-50/50 backdrop-blur-sm"></div>
          <div className="fixed top-4 right-4 w-11/12 max-w-xs overflow-auto rounded-3xl bg-white p-6 shadow-lg ">
            <button
              onClick={() => handleBugerBottonClick(event)}
              className="absolute top-5 right-5 flex h-8 w-8 items-center justify-center"
            >
              <svg name="close" viewBox="0 0 512 512" className="">
                <path
                  className=" fill-gray-500 hover:fill-gray-600"
                  d="M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24   0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0  0034-34z"
                ></path>
              </svg>
            </button>
            <div>
              <NavigationList />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
