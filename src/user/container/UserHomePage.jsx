import { faCalendarDays, faClock } from "@fortawesome/free-regular-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function UserHomePage() {
    return (
        <div
            className="relative w-full max-h-screen bg-blue-600 pt-10 md:pt-20 pb-30"
            style={{
                backgroundImage: "url('/images/washingHomeImage.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            <div className="relative z-10 px-6 md:px-12 lg:px-20 max-w-6xl mx-auto">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight text-center md:text-left">
                    Car Wash <br />
                    <span className="text-blue-400">Services Near You</span>
                </h1>

                <p className="text-base sm:text-lg md:text-xl text-gray-100 mb-8 text-center md:text-left">
                    Book car wash services at top-rated centers. Quick, convenient, and quality guaranteed.
                </p>

                <div className="bg-white rounded-xl p-4 flex flex-col sm:flex-row sm:flex-wrap justify-center sm:justify-start items-stretch gap-4 ">

                    <div className="flex flex-col w-full sm:w-auto flex-1">
                        <label className="font-medium mb-2 text-left">Location</label>
                        <div className="flex items-center border rounded-md px-3 py-2 w-full">
                            <FontAwesomeIcon icon={faLocationDot} className="text-blue-500 mr-2" />
                            <input
                                type="text"
                                placeholder="Enter city or area"
                                className="outline-none w-full"
                            />
                        </div>
                    </div>


                    <div className="flex flex-col w-full sm:w-auto flex-1">
                        <label className="font-medium mb-2 text-left">Date</label>
                        <div className="flex items-center border rounded-md px-3 py-2 w-full">
                            <FontAwesomeIcon icon={faCalendarDays} className="text-blue-500 mr-2" />
                            <input type="date" className="outline-none w-full" />
                        </div>
                    </div>

                    <div className="flex flex-col w-full sm:w-auto flex-1">
                        <label className="font-medium mb-2 text-left">Time</label>
                        <div className="flex items-center border rounded-md px-3 py-2 w-full">
                            <FontAwesomeIcon icon={faClock} className="text-blue-500 mr-2" />
                            <input type="time" className="outline-none w-full" />
                        </div>
                    </div>
                    <div className="flex flex-col w-full sm:w-auto flex-1 md:mt-8">
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md w-full sm:w-auto mt-2 sm:mt-0">
                            Search Centers
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default UserHomePage;
