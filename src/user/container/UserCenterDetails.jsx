import React, { useEffect, useState } from "react"
import {
    faMapMarkerAlt,
    faPhoneAlt,
    faEnvelope,
    faClock,
    faStar,
    faChevronRight,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import UserCenterCustomerReview from "../components/UserCenterCustomerReview"
import { Link, useNavigate, useParams } from "react-router-dom"
import { getSelectedCenterAPI } from "../../Services/allAPI"

function UserCenterDetails() {
    const [showBooking, setShowBooking] = useState(false)
    const [selectedService, setSelectedService] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    const navigate = useNavigate()
    const { id } = useParams()

    const [centerData, setCenterData] = useState([])

    const getSelecetdCEnterDetails = async () => {
        setIsLoading(true)
        try {
            const result = await getSelectedCenterAPI(id)
            setCenterData(result.data)
        }
        catch (err) {
            console.log("Error in fetching selected center details", err)
        }
        setIsLoading(false)
    }

    useEffect(() => {
        getSelecetdCEnterDetails()
    }, [id])

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
        <>
            <div className=" bg-gray-50 text-gray-800 px-13 py-3">
                <p><Link>Home</Link><FontAwesomeIcon icon={faChevronRight} /><Link>  Centers </Link> <FontAwesomeIcon icon={faChevronRight} /><span> Center Name</span></p>
            </div>

            <div className="flex flex-col lg:flex-row bg-gray-50 min-h-screen relative">
                {/* LEFT SCROLLABLE SECTION */}
                <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-8">

                    <div className="flex flex-col lg:flex-row gap-4 bg-white rounded-xl md:p-5 shadow-sm">
                        <div className="lg:w-2/3 w-full">
                            <img
                                src={centerData?.image1 ? `/uploads/${centerData.image1}` : "/images/homeimage.png"}
                                alt={centerData?.washcentername}
                                className="w-full h-96 object-cover rounded-xl shadow"
                            />
                        </div>

                        <div className="lg:w-1/3 w-full grid grid-cols-2 gap-3">
                            <img
                                src={centerData?.image2 ? `/uploads/${centerData.image2}` : "/images/homeimage.png"}
                                alt="Gallery 1"
                                className="w-full h-44 object-cover rounded-xl shadow"
                            />
                            <img
                                src={centerData?.image3 ? `/uploads/${centerData.image3}` : "/images/homeimage.png"}
                                alt="Gallery 2"
                                className="w-full h-44 object-cover rounded-xl shadow"
                            />
                            <iframe
                                src={centerData?.map}
                                title="Google Map"
                                className="col-span-2 w-full h-44 rounded-xl shadow border-0"
                                allowFullScreen
                                loading="lazy"
                            ></iframe>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl p-5">
                        <h2 className="text-2xl font-bold text-gray-800 mb-1">
                            {centerData?.washcentername || "Car Wash Center"}
                        </h2>
                        <p className="text-yellow-500">
                            <FontAwesomeIcon icon={faStar} /> 4.8{" "}
                            <span className="text-gray-600 text-sm">(156 reviews)</span>
                        </p>

                        <div className="mt-4 space-y-2 text-gray-700">
                            <p>
                                <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
                                {centerData?.location || "Unknown Location"}
                            </p>
                            <p>
                                <FontAwesomeIcon icon={faPhoneAlt} className="mr-2" />
                                {centerData?.contactno || "No contact"}
                            </p>
                            <p>
                                <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                                {centerData?.owneremail || "No email"}
                            </p>
                            <p>
                                <FontAwesomeIcon icon={faClock} className="mr-2" />
                                Monday - Sunday: 8:00 AM - 8:00 PM
                            </p>
                        </div>

                        <div className="mt-6 text-gray-700 leading-relaxed max-h-48 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-blue-400 scrollbar-track-gray-100 rounded-lg">
                            {centerData?.about || "No description available for this center."}
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

                    <UserCenterCustomerReview />
                </div>

                {/* ===== RIGHT FIXED BOOKING SECTION (DESKTOP ONLY) ===== */}
                <div className="hidden lg:flex w-80 bg-white rounded-xl border-l mt-8 border-gray-200 p-6 flex-col justify-between sticky mr-10 top-0 h-[550px]">
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
                        <div className="mt-16">
                            <button className="w-full bg-blue-600 text-white py-2 rounded-md font-medium">
                                Book Now
                            </button>
                            {/* <p className="text-xs text-gray-500 text-center mt-3">
                            Free cancellation up to 2 hours before appointment
                        </p> */}
                        </div>
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
        </>
    )
}

export default UserCenterDetails
