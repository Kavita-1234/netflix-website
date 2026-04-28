import { useEffect, useState } from "react";
import Faqs from "../components/Faqs";

export default function FaqsSection() {
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/movie/faqs")
      .then((res) => res.json())
      .then((data) => {
        // 🔥 convert backend fields → frontend format
        const formattedData = data.map((item) => ({
          id: item.id,
          question: item.questions,
          answer: item.answers,
        }));

        setFaqs(formattedData);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="bg-black py-4">

      <div className="flex justify-center">
        <div className="max-w-[900px] w-full px-6">

          {/* Heading */}
          <h1 className="text-white text-3xl font-bold mb-3.5 text-left">
            Frequently Asked Questions
          </h1>

          {/* FAQ LIST */}
          <div className="space-y-3">
            {faqs.map((faq) => (
              <Faqs key={faq.id} {...faq} />
            ))}
          </div>

        </div>
      </div>

    </div>
  );
}