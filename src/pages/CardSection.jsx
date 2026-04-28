// CardsSection.jsx
import { useEffect, useState } from "react";
import Card from "../components/Card";

export default function CardsSection() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/movie/card")
      .then((res) => res.json())
      .then((data) => setCards(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="bg-black py-16">

      <div className="flex justify-center">
        <div className="max-w-[1200px] w-full px-6">

          {/* Heading */}
          <h1 className="text-white text-3xl font-bold mb-12">
            More reasons to join
          </h1>

          {/* GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {cards.map((card) => (
              <Card key={card.id} {...card} />
            ))}
          </div>

        </div>
      </div>

    </div>
  );
}