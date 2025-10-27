import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faSearchLocation,
    faStar,
    faClock,
    faMapMarkerAlt,
    faPhone
} from '@fortawesome/free-solid-svg-icons';

function Centers() {
    return (
        <div className="w-full">
            {/* 🔹 Hero / Search Section */}
            <section className="bg-blue-600 text-white py-12 px-4 text-center">
                <h1 className="text-3xl font-bold mb-3">Find Car Wash Centers</h1>
                <p className="text-gray-200 mb-6 max-w-2xl mx-auto">
                    Discover professional car wash centers in your area. Quality service, convenient locations, and trusted by thousands of customers.
                </p>

                <div className="bg-white p-4 rounded-lg shadow-lg flex flex-col sm:flex-row justify-center gap-4 max-w-2xl mx-auto">
                    <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 w-full sm:w-auto">
                        <FontAwesomeIcon icon={faSearchLocation} className="text-gray-500 mr-2" />
                        <input
                            type="text"
                            placeholder="Enter your location"
                            className="outline-none text-gray-700 w-full"
                        />
                    </div>

                    {/* 🕒 Date Input */}
                    <input
                        type="date"
                        className="border border-gray-300 rounded-md px-3 py-2 text-gray-700 w-full sm:w-auto"
                    />

                    {/* ⏰ Time Input */}
                    <input
                        type="time"
                        className="border border-gray-300 rounded-md px-3 py-2 text-gray-700 w-full sm:w-auto"
                    />

                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-2 rounded-md">
                        Search
                    </button>
                </div>
            </section>

            {/* 🔹 Featured Centers Section */}
            <section className="py-10 px-6">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-semibold">Featured Centers</h2>
                    <a href="#" className="text-blue-600 hover:underline font-medium">View All →</a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Card 1 */}
                    <div className="bg-white rounded-xl shadow-md overflow-hidden">
                        <img
                            src="https://images.unsplash.com/photo-1607860108855-058e8b731f2d"
                            alt="Car Wash"
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <h3 className="font-semibold text-lg">Premium Auto Spa</h3>
                            <div className="flex items-center text-yellow-500 mt-1 mb-2">
                                <FontAwesomeIcon icon={faStar} className="mr-1" /> 4.8 <span className="text-gray-500 ml-2">(156 reviews)</span>
                            </div>
                            <div className="flex flex-wrap gap-2 mb-3">
                                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Exterior Wash</span>
                                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Interior Cleaning</span>
                                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Full Detailing</span>
                            </div>
                            <p className="text-green-600 font-medium mb-2">Next: Today 2:00 PM</p>
                            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md w-full">
                                Book Now
                            </button>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white rounded-xl shadow-md overflow-hidden">
                        <img
                            src="https://images.unsplash.com/photo-1597004893901-3b9e9d248f4e"
                            alt="Car Wash"
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <h3 className="font-semibold text-lg">Elite Car Care</h3>
                            <div className="flex items-center text-yellow-500 mt-1 mb-2">
                                <FontAwesomeIcon icon={faStar} className="mr-1" /> 4.9 <span className="text-gray-500 ml-2">(203 reviews)</span>
                            </div>
                            <div className="flex flex-wrap gap-2 mb-3">
                                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Full Detailing</span>
                                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Premium Wash</span>
                                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Paint Protection</span>
                            </div>
                            <p className="text-green-600 font-medium mb-2">Next: Tomorrow 10:00 AM</p>
                            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md w-full">
                                Book Now
                            </button>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white rounded-xl shadow-md overflow-hidden">
                        <img
                            src="https://images.unsplash.com/photo-1634569118744-47a5efcdb1c7"
                            alt="Car Wash"
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <h3 className="font-semibold text-lg">AutoGlow Professional</h3>
                            <div className="flex items-center text-yellow-500 mt-1 mb-2">
                                <FontAwesomeIcon icon={faStar} className="mr-1" /> 4.7 <span className="text-gray-500 ml-2">(178 reviews)</span>
                            </div>
                            <div className="flex flex-wrap gap-2 mb-3">
                                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Ceramic Coating</span>
                                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Paint Correction</span>
                            </div>
                            <p className="text-green-600 font-medium mb-2">Next: Today 5:00 PM</p>
                            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md w-full">
                                Book Now
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* 🔹 All Centers Section */}
            <section className="pb-16 px-6">
                <h2 className="text-2xl font-semibold mb-6">All Centers</h2>

                <div className="space-y-6">
                    {/* Center 1 */}
                    <div className="bg-white rounded-xl shadow-md p-5 flex flex-col md:flex-row gap-6 items-center md:items-start">
                        <img
                            src="https://images.unsplash.com/photo-1607860108855-058e8b731f2d"
                            alt="Car Wash"
                            className="w-full md:w-60 h-40 object-cover rounded-lg"
                        />
                        <div className="flex-1">
                            <h3 className="font-semibold text-lg">Premium Auto Spa <span className="text-blue-600 text-sm ml-2 font-medium">Featured</span></h3>
                            <div className="flex items-center text-yellow-500 mt-1 mb-2">
                                <FontAwesomeIcon icon={faStar} className="mr-1" /> 4.8 <span className="text-gray-500 ml-2">(156 reviews)</span> <span className="text-gray-400 ml-2">0.8 miles</span>
                            </div>
                            <div className="text-gray-600 space-y-1 text-sm">
                                <p><FontAwesomeIcon icon={faMapMarkerAlt} className="inline mr-2" /> 123 Main Street, Downtown</p>
                                <p><FontAwesomeIcon icon={faPhone} className="inline mr-2" /> (555) 123-4567</p>
                                <p><FontAwesomeIcon icon={faClock} className="inline mr-2" /> 8:00 AM - 8:00 PM</p>
                            </div>
                            <div className="flex flex-wrap gap-2 mt-3">
                                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Exterior Wash</span>
                                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Interior Cleaning</span>
                                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Full Detailing</span>
                            </div>
                            <p className="text-green-600 font-medium mt-2">Next available: Today 2:00 PM</p>
                        </div>
                        <div className="text-right md:w-32">
                            <p className="text-blue-600 font-semibold">$15–75</p>
                            <p className="text-gray-500 text-sm mb-3">per service</p>
                            <button className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-3 py-1 rounded-md w-full mb-2">
                                View Details
                            </button>
                            <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-md w-full">
                                Book Now
                            </button>
                        </div>
                    </div>

                    {/* Center 2 */}
                    <div className="bg-white rounded-xl shadow-md p-5 flex flex-col md:flex-row gap-6 items-center md:items-start">
                        <img
                            src="https://images.unsplash.com/photo-1607860256312-37f1a7c979a4"
                            alt="Car Wash"
                            className="w-full md:w-60 h-40 object-cover rounded-lg"
                        />
                        <div className="flex-1">
                            <h3 className="font-semibold text-lg">Quick Clean Express</h3>
                            <div className="flex items-center text-yellow-500 mt-1 mb-2">
                                <FontAwesomeIcon icon={faStar} className="mr-1" /> 4.6 <span className="text-gray-500 ml-2">(89 reviews)</span> <span className="text-gray-400 ml-2">1.2 miles</span>
                            </div>
                            <div className="text-gray-600 space-y-1 text-sm">
                                <p><FontAwesomeIcon icon={faMapMarkerAlt} className="inline mr-2" /> 456 Oak Avenue, Midtown</p>
                                <p><FontAwesomeIcon icon={faPhone} className="inline mr-2" /> (555) 234-5678</p>
                                <p><FontAwesomeIcon icon={faClock} className="inline mr-2" /> 7:00 AM - 9:00 PM</p>
                            </div>
                            <div className="flex flex-wrap gap-2 mt-3">
                                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Express Wash</span>
                                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Exterior Wash</span>
                                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Interior Cleaning</span>
                            </div>
                            <p className="text-green-600 font-medium mt-2">Next available: Today 3:30 PM</p>
                        </div>
                        <div className="text-right md:w-32">
                            <p className="text-blue-600 font-semibold">$10–45</p>
                            <p className="text-gray-500 text-sm mb-3">per service</p>
                            <button className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-3 py-1 rounded-md w-full mb-2">
                                View Details
                            </button>
                            <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-md w-full">
                                Book Now
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Centers;
