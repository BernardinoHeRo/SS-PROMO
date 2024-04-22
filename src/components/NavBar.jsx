import React from "react";
import logo from "./../assets/unsij/logo/unsij.png";

// Este es un ejemplo de cómo podría ser tu JSON de datos
const navLinks = [
  { text: "Inicio", url: "#" },
  { text: "Nosotros", url: "#" },
  { text: "Oferta Educativa", url: "#" },
  { text: "Becas", url: "#" },
  { text: "Vida universitaria", url: "#" },
];

export const NavBar = () => {
  return (
    <nav
      className="bg-white text-green-950 font-medium flex flex-row items-center justify-around border-b-[1px] border-white min-h-[10vh] 
    sticky top-0 z-50"
    >
      <div>
        <a href="#" className="flex flex-row items-center justify-center gap-4">
          <img src={logo} className="cover w-20"></img>
          <span>Universidad de la Sierra Juárez</span>
        </a>
      </div>
      <ul className="flex flex-row items-center justify-betwen gap-8">
        {navLinks.map((link, index) => (
          <li key={index}>
            <a href={link.url}>{link.text}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
