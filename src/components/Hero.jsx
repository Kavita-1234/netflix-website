import React from "react";
import Navbar from "./Navbar";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

export default function Hero() {
    return (
        <div className="h-screen bg-cover bg-center relative"
            style={{
                backgroundImage: "url('https://assets.nflxext.com/ffe/siteui/vlv3/5bd3572a-0d1b-4228-aaa7-5b2dc45952b2/web/IN-en-20260413-TRIFECTA-perspective_4100808f-7dc6-4c78-8677-18db2989f7bc_large.jpg')"
            }}
        >
            <div className="absolute inset-0 bg-black/60 z-0"></div>

            <Navbar />
            <div className="relative z-10 flex justify-center flex-col items-center h-full text-white">
                <h1 className="text-white text-4xl md:text-6xl font-bold text-center">
                    Unlimited movies, <br />
                    shows, and more
                </h1>
                <p className="text-white text-lg md:font-bold md:mt-5 mt-3 text-base">
                    Starts at ₹149. Cancel at any time.</p>

                <h3 className="text-white text-base md:mt-7 font-semibold mt-5 text-center text-base">
                    Ready to watch? Enter your email to create or restart your membership.
                </h3>

                {/* 🔥 Input + Button Row */}
                <div className="flex flex-col md:flex-row gap-3 mt-6 max-w-3xl">

                    <FloatingLabel
                        controlId="floatingInput"
                        className="w-full border rounded border-amber-50"
                    >
                        <Form.Control
                            type="email"
                            placeholder="Email address"
                            className="px-3 py-3 text-lg"
                        />
                    </FloatingLabel>

                    <button className="bg-red-600 hover:bg-red-700 px-6 py-3 text-lg font-semibold rounded text-white whitespace-nowrap cursor-pointer">
                        Get Started
                    </button>
                </div>

            </div>

            <div className="relative">
                {/* Curve */}
                <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
                    <svg
                        viewBox="0 0 1440 150"
                        className="w-full h-[80px]"
                        preserveAspectRatio="none"
                    >
                        <path
                            d="M0,80 C480,0 960,0 1440,80 L1440,0 L0,0 Z"
                            fill="black"
                        ></path>
                    </svg>
                </div>
            </div>

        </div>
    );
}