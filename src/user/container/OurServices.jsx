import React from "react";

function OurServices() {
    const services = [
        {
            title: "Exterior Wash",
            price: "Starting from $15",
            image: "/images/homeimage.png",
        },
        {
            title: "Interior Cleaning",
            price: "Starting from $25",
            image: "/images/homeimage.png",
        },
        {
            title: "Full Detailing",
            price: "Starting from $75",
            image: "/images/homeimage.png",
        },
        {
            title: "Express Wash",
            price: "Starting from $10",
            image: "/images/homeimage.png",
        },
    ]

    return (
        <>
            <div className="py-14 px-5 sm:px-8 md:px-12 lg:px-20 bg-white w-full">

                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                        Our Services
                    </h2>
                    <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
                        Choose from a variety of professional car wash services tailored to
                        your vehicle's needs.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 place-items-center">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="relative w-full max-w-[300px] h-[200px] sm:h-[220px] md:h-[240px] lg:h-[250px] rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300"
                        >
                            <img
                                src={service.image}
                                alt={service.title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4">
                                <h3 className="text-white font-semibold text-lg sm:text-xl">
                                    {service.title}
                                </h3>
                                <p className="text-gray-200 text-sm sm:text-base">
                                    {service.price}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>


            </div>
            <div className="mt-5 bg-blue-600 text-center py-12 px-5 sm:px-10 text-white">
                <h2 className="text-2xl sm:text-3xl font-bold mb-3">
                    Ready to Get Your Car Sparkling Clean?
                </h2>
                <p className="text-gray-100 mb-6 text-sm sm:text-base max-w-2xl mx-auto">
                    Join thousands of satisfied customers who trust CarWash Pro for their
                    vehicle cleaning needs.
                </p>

                <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                    <button className="bg-white text-blue-600 px-6 py-2 rounded-full font-medium hover:bg-gray-100 transition w-full sm:w-auto">
                        Find Centers Near You
                    </button>
                    <button className="bg-transparent border border-white px-6 py-2 rounded-full font-medium hover:bg-white hover:text-blue-600 transition w-full sm:w-auto">
                        Learn More
                    </button>
                </div>
            </div>
        </>
    )
}

export default OurServices