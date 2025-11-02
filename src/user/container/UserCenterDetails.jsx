import React, { useState } from "react"
import {
    faMapMarkerAlt,
    faPhoneAlt,
    faEnvelope,
    faClock,
    faStar,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function UserCenterDetails() {
    const [showBooking, setShowBooking] = useState(false)
    const [selectedService, setSelectedService] = useState(null)

    const services = [
        {
            name: "Exterior Wash",
            price: "$15",
            duration: "30 min",
            features: ["Hand wash", "Wheel cleaning", "Tire shine", "Exterior dry"],
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
    ]

    return (
        <div className="flex flex-col lg:flex-row bg-gray-50 min-h-screen relative md:p-10">
            {/* ===== LEFT SCROLLABLE SECTION ===== */}
            <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-8">
               
                <div className="flex flex-col lg:flex-row gap-4 bg-white rounded-xl md:p-5">
                    
                    <div className="lg:w-2/3 w-full">
                        <img
                            src="/images/homeimage.png"
                            alt="Main Center"
                            className="w-full h-96 object-cover rounded-xl shadow"
                        />
                    </div>

                    <div className="lg:w-1/3 w-full grid grid-cols-2 gap-3">
                        <img
                            src="/images/homeimage.png"
                            alt="Gallery 1"
                            className="w-full h-44 object-cover rounded-xl shadow"
                        />
                        <img
                            src="/images/homeimage.png"
                            alt="Gallery 2"
                            className="w-full h-44 object-cover rounded-xl shadow"
                        />
                        <img
                            src="/images/homeimage.png"
                            alt="Gallery 3"
                            className="col-span-2 w-full h-44 object-cover rounded-xl shadow"
                        />
                    </div>
                </div>

                <div className="bg-white rounded-xl p-5">
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

                <div className="bg-white rounded-xl p-5">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">
                        Services & Pricing
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
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
                                    <h4 className="font-semibold text-gray-800">{service.name}</h4>
                                    <span className="text-blue-600 font-bold">{service.price}</span>
                                </div>
                                <p className="text-sm text-gray-500 mb-2">{service.duration}</p>
                                <ul className="text-sm text-gray-700 space-y-1">
                                    {service.features.map((f, idx) => (
                                        <li key={idx}>✔️ {f}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-white rounded-xl p-5">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">
                        Customer Reviews
                    </h3>

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

            {/* ===== RIGHT FIXED BOOKING SECTION (DESKTOP ONLY) ===== */}
            <div className="hidden lg:flex w-80 bg-white rounded-xl border-l mt-8 border-gray-200 p-6 flex-col justify-between sticky mr-10 top-0 h-screen">
                <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">
                        Book Your Service
                    </h3>

                    <div className="bg-blue-50 p-3 rounded-lg mb-3">
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
                                        className="border rounded-md py-1 text-xs hover:bg-blue-600 hover:text-white transition"
                                    >
                                        {time}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-6">
                    <button className="w-full bg-blue-600 text-white py-2 rounded-md font-medium">
                        Book Now
                    </button>
                    <p className="text-xs text-gray-500 text-center mt-3">
                        Free cancellation up to 2 hours before appointment
                    </p>
                </div>
            </div>

            {/* ===== FLOATING BOOK BUTTON (MOBILE/TABLET) ===== */}
            <button
                onClick={() => setShowBooking(true)}
                className="lg:hidden fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg z-50"
            >
                Book Your Service
            </button>

            {/* ===== BOOKING MODAL (MOBILE/TABLET) ===== */}
            {showBooking && (
                <div className="fixed inset-0 bg-opacity-30 flex items-end justify-center z-50" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                    <div className="bg-white w-full sm:w-96 p-6 rounded-t-2xl shadow-lg relative animate-slideUp">
                        <button
                            onClick={() => setShowBooking(false)}
                            className="absolute top-3 right-3 text-gray-500 text-lg"
                        >
                            ✖
                        </button>
                        <h3 className="text-lg font-semibold text-gray-800 mb-4">
                            Book Your Service
                        </h3>

                        {/* 🔹 Service Dropdown */}
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-600 mb-1">
                                Select Service
                            </label>
                            <select
                                className="w-full border rounded-lg p-2 text-sm focus:outline-none focus:ring focus:ring-blue-300"
                                value={selectedService?.name || ""}
                                onChange={(e) =>
                                    setSelectedService(
                                        services.find((s) => s.name === e.target.value) || null
                                    )
                                }
                            >
                                <option value="">-- Choose a Service --</option>
                                {services.map((service, i) => (
                                    <option key={i} value={service.name}>
                                        {service.name}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {selectedService && (
                            <div className="bg-blue-50 p-3 rounded-lg mb-3 transition-all">
                                <p className="font-medium text-gray-800">{selectedService.name}</p>
                                <p className="text-blue-600 font-bold text-lg">
                                    {selectedService.price}
                                </p>
                                <p className="text-gray-500 text-sm mb-2">
                                    Duration: {selectedService.duration}
                                </p>
                                <ul className="text-sm text-gray-700 space-y-1">
                                    {selectedService.features.map((f, i) => (
                                        <li key={i}>✔️ {f}</li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        <div className="space-y-3">
                            <div>
                                <label className="block text-sm font-medium text-gray-600 mb-1">
                                    Select Date
                                </label>
                                <input
                                    type="date"
                                    className="w-full border rounded-lg p-2 text-sm focus:outline-none focus:ring focus:ring-blue-300"
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
                                            className="border rounded-md py-1 text-xs hover:bg-blue-600 hover:text-white transition"
                                        >
                                            {time}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="mt-6">
                            <button className="w-full bg-blue-600 text-white py-2 rounded-md font-medium">
                                Book Now
                            </button>
                            <p className="text-xs text-gray-500 text-center mt-3">
                                Free cancellation up to 2 hours before appointment
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default UserCenterDetails
