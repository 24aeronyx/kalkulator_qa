import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Qurumus() {

    return (
        <div className="relative">
            <Link
                to="/qu"
                className="absolute top-14 left-1 bg-white border-2 border-black rounded-full p-2 shadow-md duration-300 lg:top-10 lg:left-4 hover:bg-gray-200"
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
            <img className="rounded-t-xl" src="https://i.imgur.com/rTejwRi.png"/>
            <img className="rounded-b-xl"src="https://i.imgur.com/XkVqdWb.png"/>
        </div>
    );
}
