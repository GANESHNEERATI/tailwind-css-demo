import React from "react";

function Card({ text }) {
  return (
    <div className="w-96   bg-blue-300 mt-20 border-2 border-gray-700 relative rounded-lg   transform transition duration-500 hover:-translate-y-12 cursor-pointer">
      <img
        alt="img"
        className="object-cover "
        src="https://images.unsplash.com/photo-1456327102063-fb5054efe647?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
      />

      <p className="text-base mt-6 ">{text}</p>
      <div className="absolute bottom-2">
        <button class="w-40 h-10 rounded-lg  text-white focus:outline-none  bg-blue-600 mx-24  mt-6  hover:bg-blue-800  ">
          check profile
        </button>
      </div>
    </div>
  );
}

export default Card;
