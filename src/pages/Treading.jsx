import React, { useEffect, useRef, useState } from "react";

export default function Trending() {
    const sliderRef = useRef(null);
    const [movies, setMovies] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [playVideo, setPlayVideo] = useState(false);

    useEffect(() => {
        fetch("http://localhost:8080/api/movie")
            .then(res => res.json())
            .then(data => setMovies(data))
            .catch(err => console.log(err));
    }, []);

    // ✅ Scroll 4 cards at once
    const scrollLeft = () => {
        sliderRef.current.scrollBy({ left: -800, behavior: "smooth" });
    };

    const scrollRight = () => {
        sliderRef.current.scrollBy({ left: 800, behavior: "smooth" });
    };

    return (
        <div className="relative py-10 bg-black">

            {/* TITLE */}
            <div className="flex justify-center">
                <div className="w-[900px]">
                    <h2 className="text-white text-2xl font-bold mb-5 mt-10">
                        Trending Now
                    </h2>
                </div>
            </div>

            {/* ✅ CENTER WRAPPER */}
            <div className="flex justify-center">

                <div className="relative w-[900px]">

                    {/* LEFT BUTTON */}
                    <button
                        onClick={scrollLeft}
                        className="absolute -left-8 top-1/2 -translate-y-1/2 z-10 bg-black/60 text-white px-3 py-2 rounded-full"
                    >
                        ◀
                    </button>

                    {/* ✅ SLIDER (FIXED) */}
                    <div
                        ref={sliderRef}
                        className="flex gap-6 overflow-hidden"
                    >
                        {movies.map((movie, index) => (
                            <div
                                key={movie.id}
                                onClick={() => {
                                    setSelectedMovie(movie);
                                    setPlayVideo(false);
                                }}
                                className="w-[200px] h-[300px] flex-shrink-0 rounded-lg overflow-hidden relative group cursor-pointer"
                            >
                                {/* IMAGE */}
                                <img
                                    src={movie.image}
                                    alt={movie.title}
                                    className="w-full h-full object-cover"
                                />

                                {/* OVERLAY */}
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition"></div>

                                {/* LOGO */}
                                {movie.logo && (
                                    <div className="absolute inset-0 flex items-end mb-2 justify-center px-3">
                                        <img
                                            src={movie.logo}
                                            alt="logo"
                                            className="max-h-[70px] w-auto object-contain"
                                        />
                                    </div>
                                )}

                                {/* NUMBER */}
                                <h1
                                    className="absolute bottom-2 left-2 text-6xl font-bold text-black"
                                    style={{ WebkitTextStroke: "2px white" }}
                                >
                                    {index + 1}
                                </h1>
                            </div>
                        ))}
                    </div>

                    {/* RIGHT BUTTON */}
                    <button
                        onClick={scrollRight}
                        className="absolute -right-8 top-1/2 -translate-y-1/2 z-10 bg-black/60 text-white px-3 py-2 rounded-full"
                    >
                        ▶
                    </button>

                </div>
            </div>

            {/* 🔥 MODAL (UNCHANGED) */}
            {selectedMovie && (
                <div className="fixed inset-0 bg-black flex justify-center items-center z-50">

                    <div className="bg-black w-[90%] md:w-[55%] max-h-[95vh] overflow-y-auto rounded-lg relative">

                        {/* CLOSE */}
                        <button
                            onClick={() => {
                                setSelectedMovie(null);
                                setPlayVideo(false);
                            }}
                            className="absolute top-3 right-3 text-white text-2xl z-20"
                        >
                            ✕
                        </button>

                        {/* BANNER */}
                        <div className="w-full h-[300px] md:h-[400px] relative bg-black overflow-hidden">

                            {!playVideo && (
                                <img
                                    src={selectedMovie.image}
                                    alt="banner"
                                    className="w-full h-full object-contain bg-black"
                                />
                            )}

                            {playVideo && (
                                <div className="w-full h-full">
                                    <iframe
                                        className="w-full h-full"
                                        src={`${selectedMovie.videoUrl}?autoplay=1&mute=1`}
                                        title="movie"
                                        allowFullScreen
                                    ></iframe>

                                    <div className="absolute bottom-5 left-5">
                                        <button
                                            onClick={() => setPlayVideo(false)}
                                            className="bg-red-600 text-white px-5 py-2 rounded cursor-pointer "
                                        >
                                            Close Video
                                        </button>
                                    </div>
                                </div>
                            )}

                            {!playVideo && (
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>
                            )}

                            {!playVideo && (
                                <div className="absolute bottom-5 left-5 text-white w-[90%]">

                                    {selectedMovie.logo && (
                                        <img
                                            src={selectedMovie.logo}
                                            alt="logo"
                                            className="w-[150px] md:w-[200px] mb-3"
                                        />
                                    )}

                                    <div className="flex flex-wrap gap-2 text-sm mb-3">
                                        {selectedMovie.tags?.map((tag, i) => (
                                            <span key={i} className="bg-gray-700 px-2 py-1 rounded">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <button
                                        onClick={() => setPlayVideo(true)}
                                        className="bg-white text-black px-6 py-2 rounded font-semibold"
                                    >
                                        ▶ Play
                                    </button>
                                </div>
                            )}
                        </div>

                        {!playVideo && (
                            <div className="p-5 text-white">
                                <p className="text-gray-300">
                                    {selectedMovie.description}
                                </p>

                                <button className="bg-red-500 text-black px-6 py-2 rounded mt-5">
                                    Get Started
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}