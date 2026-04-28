import React from "react";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

export default function EmailSection(){
    return(

        <div className="relative z-10 flex justify-center flex-col items-center h-full text-white bg-black py-4">

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
                            className="px-32 py-3 text-lg"
                        />
                    </FloatingLabel>

                    <button className="bg-red-600 hover:bg-red-700 px-6 py-3 text-lg font-semibold rounded text-white whitespace-nowrap cursor-pointer">
                        Get Started
                    </button>
                </div>

            </div>
    );
}