import { useState } from "react";

export default function FaqItem({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="
        w-full
        bg-zinc-800
        rounded-lg
        overflow-hidden
        transition duration-300
      "
    >
      {/* QUESTION */}
      <div
        onClick={() => setOpen(!open)}
        className="
          flex justify-between items-center
          p-5 cursor-pointer
          hover:bg-zinc-700
        "
      >
        <h2 className="text-white text-xl font-medium">
          {question}
        </h2>

        <span className="text-white text-2xl">
          {open ? "✖" : "+"}
        </span>
      </div>

      {/* ANSWER */}
      <div
        className={`
          bg-zinc-700 text-gray-300
          transition-all duration-300 ease-in-out
          overflow-hidden
          ${open ? "max-h-40 p-5" : "max-h-0"}
        `}
      >
        <p className="text-lg leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
  );
}