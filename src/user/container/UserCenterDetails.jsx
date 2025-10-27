import React from "react";
import {
    faMapMarkerAlt,
    faPhoneAlt,
    faEnvelope,
    faClock,
    faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function UserCenterDetails() {
    return (
        <div className="flex bg-gray-50 min-h-screen">
            {/* Left Scrollable Section */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
                {/* Header & Images */}
                <div className="space-y-4">
                    <img
                        src="https://via.placeholder.com/600x300"
                        alt="Car Wash"
                        className="w-full rounded-lg shadow"
                    />
                    <div className="grid grid-cols-3 gap-3">
                        <img
                            src="https://via.placeholder.com/200x150"
                            alt="Gallery"
                            className="rounded-lg shadow"
                        />
                        <img
                            src="https://via.placeholder.com/200x150"
                            alt="Gallery"
                            className="rounded-lg shadow"
                        />
                        <img
                            src="https://via.placeholder.com/200x150"
                            alt="Gallery"
                            className="rounded-lg shadow"
                        />
                    </div>
                </div>

                {/* Center Info */}
                <div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-1">
                        Premium Auto Spa
                    </h2>
                    <p className="text-yellow-500">
                        <FontAwesomeIcon icon={faStar} /> 4.8{" "}
                        <span className="text-gray-600 text-sm">(156 reviews)</span>
                    </p>

                    <div className="mt-4 space-y-2 text-gray-700">
                        <p>
                            <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
                            123 Main Street, Downtown
                        </p>
                        <p>
                            <FontAwesomeIcon icon={faPhoneAlt} className="mr-2" />
                            (555) 123-4567
                        </p>
                        <p>
                            <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                            info@premiumautospa.com
                        </p>
                        <p>
                            <FontAwesomeIcon icon={faClock} className="mr-2" />
                            Monday - Sunday: 8:00 AM - 8:00 PM
                        </p>
                    </div>

                    <div className="mt-6 text-gray-700 leading-relaxed">
                        Premium Auto Spa is your premier destination for professional car
                        care services. We provide top-quality interior and exterior cleaning
                        using eco-friendly products and state-of-the-art equipment.
                    </div>
                </div>

                {/* Services & Pricing */}
                <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4">
                        Services & Pricing
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                        {/* Service Card */}
                        {[
                            {
                                name: "Exterior Wash",
                                price: "$15",
                                duration: "30 min",
                                features: [
                                    "Hand wash",
                                    "Wheel cleaning",
                                    "Tire shine",
                                    "Exterior dry",
                                ],
                            },
                            {
                                name: "Interior Cleaning",
                                price: "$25",
                                duration: "45 min",
                                features: [
                                    "Vacuum seats & carpets",
                                    "Dashboard cleaning",
                                    "Window cleaning",
                                    "Air freshener",
                                ],
                            },
                            {
                                name: "Full Detailing",
                                price: "$75",
                                duration: "2 hours",
                                features: [
                                    "Everything in Exterior & Interior",
                                    "Wax application",
                                    "Leather conditioning",
                                    "Engine bay cleaning",
                                ],
                            },
                            {
                                name: "Express Wash",
                                price: "$10",
                                duration: "15 min",
                                features: ["Automated wash", "Basic rinse", "Quick dry"],
                            },
                        ].map((service, i) => (
                            <div
                                key={i}
                                className="border border-gray-200 p-4 rounded-lg shadow-sm bg-white hover:shadow-md transition"
                            >
                                <div className="flex justify-between items-center mb-2">
                                    <h4 className="font-semibold text-gray-800">
                                        {service.name}
                                    </h4>
                                    <span className="text-blue-600 font-bold">{service.price}</span>
                                </div>
                                <p className="text-sm text-gray-500 mb-2">
                                    {service.duration}
                                </p>
                                <ul className="text-sm text-gray-700 space-y-1">
                                    {service.features.map((f, idx) => (
                                        <li key={idx}>✔️ {f}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Customer Reviews */}
                <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4">
                        Customer Reviews
                    </h3>

                    {/* Write Review */}
                    <div className="bg-white p-4 rounded-lg shadow mb-6">
                        <p className="font-semibold mb-2">Write Your Review</p>
                        <div className="flex space-x-1 text-yellow-500 mb-3">
                            {[...Array(5)].map((_, i) => (
                                <FontAwesomeIcon icon={faStar} key={i} />
                            ))}
                        </div>
                        <textarea
                            className="w-full border rounded-lg p-2 text-sm focus:outline-none focus:ring focus:ring-blue-300"
                            rows="3"
                            placeholder="Share your experience..."
                        ></textarea>
                        <div className="flex justify-end space-x-2 mt-3">
                            <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md">
                                Cancel
                            </button>
                            <button className="px-4 py-2 bg-blue-600 text-white rounded-md">
                                Submit Review
                            </button>
                        </div>
                    </div>

                    {/* Existing Reviews */}
                    <div className="space-y-4">
                        <div className="bg-white p-4 rounded-lg shadow">
                            <p className="font-semibold">Sarah Johnson</p>
                            <p className="text-yellow-500 text-sm mb-1">
                                <FontAwesomeIcon icon={faStar} /> 5.0
                            </p>
                            <p className="text-gray-700 text-sm">
                                Excellent service! My car looks brand new. The staff was
                                professional and the facility is very clean.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Fixed Booking Section */}
            <div className="w-80 bg-white shadow-lg fixed right-0 top-0 h-full border-l border-gray-200 p-6 flex flex-col justify-between">
                <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">
                        Book Your Service
                    </h3>

                    <div className="bg-blue-50 p-3 rounded-lg mb-4">
                        <p className="font-medium text-gray-800">Interior Cleaning</p>
                        <p className="text-blue-600 font-bold text-lg">$25</p>
                        <p className="text-gray-500 text-sm">45 min</p>
                    </div>

                    <div className="space-y-3">
                        <div>
                            <label className="block text-sm font-medium text-gray-600 mb-1">
                                Select Date
                            </label>
                            <input
                                type="date"
                                className="w-full border rounded-lg p-2 text-sm"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-600 mb-1">
                                Select Time
                            </label>
                            <div className="grid grid-cols-3 gap-2">
                                {[
                                    "9:00 AM",
                                    "9:30 AM",
                                    "10:00 AM",
                                    "10:30 AM",
                                    "11:00 AM",
                                    "11:30 AM",
                                    "12:00 PM",
                                    "12:30 PM",
                                    "1:00 PM",
                                    "1:30 PM",
                                    "2:00 PM",
                                    "2:30 PM",
                                ].map((time, i) => (
                                    <button
                                        key={i}
                                        className={`border rounded-md py-1 text-xs hover:bg-blue-600 hover:text-white transition`}
                                    >
                                        {time}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <button className="w-full bg-blue-600 text-white py-2 rounded-md font-medium">
                        Book Now
                    </button>
                    <p className="text-xs text-gray-500 text-center mt-2">
                        Free cancellation up to 2 hours before appointment
                    </p>
                </div>
            </div>
        </div>
    );
}

export default UserCenterDetails;
