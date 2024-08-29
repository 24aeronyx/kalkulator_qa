import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
   
      <div className="w-full h-full flex flex-col justify-between">
        <h1 className="text-center text-3xl font-bold mb-8 mt-6">Kalkulator</h1>
        <ul className="flex flex-row gap-2 items-center justify-center lg:gap-4">
          <li className="flex flex-col px-1 text-black rounded-2xl duration-300 border-2 bg-white border-b-8 border-r-8 border-black hover:bg-stone-200 hover:cursor-pointer">
            <Link to="/qu" className="text-xl font-bold p-2">
              Qa (Metode Hiley)
              <img
                src="https://i.imgur.com/wldg0mE.png"
                className="w-52 h-52"
              />
            </Link>
          </li>
          <li className="flex flex-col px-1 text-black rounded-2xl duration-300 border-2 bg-white border-b-8 border-r-8 border-black hover:bg-stone-200 hover:cursor-pointer">
            <Link to="/ru" className="text-xl font-bold p-2">
              Qa (Metode WIKA)
              <img
                src="https://i.imgur.com/6smchwR.png"
                className="w-52 h-52"
              />
            </Link>
          </li>
        </ul>
      </div>
  );
}
