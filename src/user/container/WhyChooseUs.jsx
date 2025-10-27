import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faCalendarCheck, faStar } from "@fortawesome/free-solid-svg-icons";

function WhyChooseUs() {
    const features = [
        {
            icon: faLocationDot,
            iconBg: "bg-gray-200 text-blue-600",
            title: "Find Nearby Centers",
            description:
                "Locate the best car wash centers in your area with our smart search feature. Filter by location, services, and availability.",
        },
        {
            icon: faCalendarCheck,
            iconBg: "bg-gray-200 text-green-600",
            title: "Easy Booking",
            description:
                "Book your preferred time slot in just a few clicks. Real-time availability and instant confirmation for your convenience.",
        },
        {
            icon: faStar,
            iconBg: "bg-gray-200 text-purple-600",
            title: "Quality Guaranteed",
            description:
                "All our partner centers are verified and rated by customers. Read reviews and choose the best service for your vehicle.",
        },
    ];

    return (
        <div className='bg-gray-100 pt-12'>
            <div className='text-center'>
                <div className='text-2xl font-bold'>
                    Why Choose CarWash Pro?
                </div>
                <div className='text-md font-light mt-2'>
                    Experience the convenience of professional car wash services with our trusted network of certified centers
                </div>
            </div>

            <div className="py-16 px-6 md:px-12 lg:px-24">
                <div className="flex flex-col md:flex-row justify-center items-stretch gap-6">
                    {features.map((feature, index) => (
                        <div key={index} className="flex-1 bg-white rounded-xl hover:shadow-lg p-6 shadow-md flex flex-col items-start" >
                            <div className={`flex items-center justify-center w-12 h-12 rounded-full ${feature.iconBg} mb-4`} >
                                <FontAwesomeIcon icon={feature.icon} size="lg" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                            <p className="text-gray-600">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default WhyChooseUs
