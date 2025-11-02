import { faCalendarDays, faClock } from "@fortawesome/free-regular-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react"
import { searching } from "../../Services/allAPI"

function UserHomePage() {
    const [selections, setSelections] = useState({
        location: "",
        date: "",
        time: "",
        searchResult: [],
        searched: false,
    })

    const [errors, setErrors] = useState({
        location: "",
        date: "",
        time: "",
    })

    const handleChange = (field, value) => {
        setSelections({ ...selections, [field]: value })
        setErrors({ ...errors, [field]: "" })
    }

    const validateFields = () => {
        const newErrors = {};
        if (!selections.location.trim()) newErrors.location = "Location is required"
        if (!selections.date) newErrors.date = "Date is required"
        if (!selections.time) newErrors.time = "Time is required"
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0
    }

    const searchCenters = async () => {
        if (!validateFields()) return

        try {
            const res = await searching(
                selections.location,
                selections.date,
                selections.time
            )
            console.log("Search Results:", res)
            setSelections({
                ...selections,
                searchResult: res?.data || [],
                searched: true,
            })
        } catch (err) {
            console.log("Error in searching centers", err)
        }
    }

    const isDisabled =
        !selections.location.trim() || !selections.date || !selections.time

    return (
        <div
            className="relative w-full min-h-[90vh] bg-blue-600 pt-10 md:pt-20 pb-10"
            style={{
                backgroundImage: "url('/images/washingHomeImage.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >

            <div className="absolute inset-0 bg-blue-900/10"></div>

            <div className="relative z-10 px-6 md:px-12 lg:px-20 max-w-6xl mx-auto">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight text-center md:text-left">
                    Car Wash <br />
                    <span className="text-blue-400">Services Near You</span>
                </h1>

                <p className="text-base sm:text-lg md:text-xl text-gray-100 mb-8 text-center md:text-left">
                    Book car wash services at top-rated centers. Quick, convenient, and
                    quality guaranteed.
                </p>

                <div
                    className="bg-white rounded-xl p-4 flex flex-col sm:flex-row sm:flex-wrap justify-center sm:justify-start items-stretch gap-4 shadow-md mx-auto"
                    id="search-container"
                >
                    <div className="flex flex-col w-full sm:w-auto flex-1">
                        <label className="font-medium mb-2 text-left">Location</label>
                        <div className="flex items-center border rounded-md px-3 py-2 w-full">
                            <FontAwesomeIcon
                                icon={faLocationDot}
                                className="text-blue-500 mr-2"
                            />
                            <input
                                type="text"
                                placeholder="Enter city or area"
                                className="outline-none w-full"
                                value={selections.location}
                                onChange={(e) => handleChange("location", e.target.value)}
                            />
                        </div>
                        {errors.location && (
                            <p className="text-red-500 text-sm mt-1">{errors.location}</p>
                        )}
                    </div>

                    <div className="flex flex-col w-full sm:w-auto flex-1">
                        <label className="font-medium mb-2 text-left">Date</label>
                        <div className="flex items-center border rounded-md px-3 py-2 w-full">
                            <FontAwesomeIcon
                                icon={faCalendarDays}
                                className="text-blue-500 mr-2"
                            />
                            <input
                                type="date"
                                className="outline-none w-full"
                                value={selections.date}
                                onChange={(e) => handleChange("date", e.target.value)}
                            />
                        </div>
                        {errors.date && (
                            <p className="text-red-500 text-sm mt-1">{errors.date}</p>
                        )}
                    </div>

                    <div className="flex flex-col w-full sm:w-auto flex-1">
                        <label className="font-medium mb-2 text-left">Time</label>
                        <div className="flex items-center border rounded-md px-3 py-2 w-full">
                            <FontAwesomeIcon icon={faClock} className="text-blue-500 mr-2" />
                            <input
                                type="time"
                                className="outline-none w-full"
                                value={selections.time}
                                onChange={(e) => handleChange("time", e.target.value)}
                            />
                        </div>
                        {errors.time && (
                            <p className="text-red-500 text-sm mt-1">{errors.time}</p>
                        )}
                    </div>

                    <div className="flex flex-col w-full sm:w-auto flex-1 md:mt-8">
                        <button
                            onClick={searchCenters}
                            className={`px-6 py-2 rounded-md w-full sm:w-auto mt-2 sm:mt-0 font-medium transition ${isDisabled
                                    ? "bg-gray-400 cursor-not-allowed"
                                    : "bg-blue-600 hover:bg-blue-700 text-white"
                                }`}
                        >
                            Search Centers
                        </button>
                    </div>
                </div>

                {selections.searched && (
                    <div className="mt-2">
                        <div
                            className="bg-gray-50 rounded-xl border-2 border-blue-500 p-4 shadow-sm"
                            style={{
                                maxHeight: "400px",
                                overflowY: "auto",
                            }}
                        >
                            {selections.searchResult?.length > 0 ? (
                                selections.searchResult.map((item, index) => (
                                    <div
                                        key={index}
                                        className="p-3 hover:bg-blue-50 rounded-lg transition cursor-pointer"
                                    >
                                        <a
                                            href={`/selectedwash/${item._id}`}
                                            className="text-gray-900 no-underline"
                                        >
                                            <div className="flex items-center gap-2">
                                                <FontAwesomeIcon
                                                    icon={faLocationDot}
                                                    className="text-blue-600 text-lg"
                                                />
                                                <h5 className="font-semibold text-lg mb-0 uppercase">
                                                    {item?.washcentername}
                                                </h5>
                                            </div>

                                            <p className="text-gray-600 text-sm mt-2">
                                                {item?.location}
                                            </p>
                                            <hr className="mt-3 border-gray-300" />
                                        </a>
                                    </div>
                                ))
                            ) : (
                                <div className="flex flex-col items-center justify-center text-center py-10">
                                    <img
                                        src="https://charatoon.com/photo/thum/5214.png"
                                        alt="No centers available"
                                        className="w-32 sm:w-40 mb-3"
                                    />
                                    <h5 className="font-semibold text-gray-700 text-base sm:text-lg">
                                        There are no centers available
                                    </h5>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default UserHomePage;
