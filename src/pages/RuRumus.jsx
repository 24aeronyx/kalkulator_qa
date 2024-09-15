import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Rurumus() {

    return (
        <div className="relative">
            <Link
                to="/ru"
                className="absolute top-4 left-1 bg-white border-2 border-black rounded-full p-2 shadow-md duration-300 lg:top-10 lg:left-4 hover:bg-gray-200"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-black"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                    />
                </svg>
            </Link>
            <img className="rounded-xl lg:ml-16" src="https://i.imgur.com/NWtGNnB.png"/>
        </div>
    );
}
