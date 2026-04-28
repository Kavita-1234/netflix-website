// Card.jsx
import { FaTv } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import { IoMdRocket } from "react-icons/io";
import { FaChild } from "react-icons/fa";

export default function Card({ title, description, icon }) {

  const renderIcon = () => {
    switch (icon) {
      case "tv":
        return <FaTv />;
      case "download":
        return <MdDownload />;
      case "watch":
        return <IoMdRocket />;
      case "kids":
        return <FaChild />;
      default:
        return null;
    }
  };

  return (
    <div
      className="
        h-[280px] w-full
        p-6 rounded-2xl
        flex flex-col justify-between
        text-white
        bg-gradient-to-b from-[#1f1c3a] to-[#2a0f1f]
        hover:scale-105 transition duration-300
      "
    >

      {/* TEXT */}
      <div className="space-y-4">
        <h2 className="text-lg font-bold">
          {title}
        </h2>

        <p className="text-gray-300 text-sm leading-relaxed">
          {description}
        </p>
      </div>

      {/* ICON */}
      <div className="flex justify-end text-3xl text-pink-500">
        {renderIcon()}
      </div>

    </div>
  );
}