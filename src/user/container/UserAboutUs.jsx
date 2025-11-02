import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faStar } from "@fortawesome/free-solid-svg-icons";

function UserAboutUs() {
    const [reviews, setReviews] = useState([
        {
            name: "Sarah Johnson",
            rating: 5,
            comment:
                "This website made it super easy to find and book a car wash center near me. The design is smooth and user-friendly!",
        },
        {
            name: "Mark Wilson",
            rating: 4,
            comment:
                "Excellent platform! The admin dashboard and booking system work flawlessly. A must-have for car wash owners!",
        },
    ]);

    const [newReview, setNewReview] = useState({
        name: "",
        rating: 0,
        comment: "",
    });

    const handleAddReview = () => {
        if (!newReview.name || !newReview.comment || newReview.rating === 0) return;
        setReviews([...reviews, newReview]);
        setNewReview({ name: "", rating: 0, comment: "" });
    };

    return (
        <div className="bg-gray-50 min-h-screen py-10 px-5 md:px-16">
            {/* Hero Section */}
            <div className="text-center max-w-3xl mx-auto mb-10">
                <h1 className="text-3xl md:text-4xl font-bold text-blue-700 mb-4">
                    About Car Wash Center – Web Application
                </h1>
                <p className="text-gray-700 leading-relaxed">
                    A comprehensive platform designed for booking, managing, and tracking
                    vehicle cleaning services, ensuring efficiency, transparency, and
                    convenience for everyone involved.
                </p>
            </div>

            {/* System Overview Section */}
            <div className="bg-white rounded-xl shadow-md p-6 md:p-10 mb-10">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                    What Our Goal
                </h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                    <p>
                       Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem consequuntur ipsum totam impedit veniam fuga tempora ullam voluptatibus mollitia maxime ex pariatur, dolor eius quas vel adipisci natus laboriosam odit?
                    </p>
                    <p>
                       lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem consequuntur ipsum totam impedit veniam fuga tempora ullam voluptatibus mollitia maxime ex pariatur, dolor eius quas vel adipisci natus laboriosam odit?
                    </p>
                    <p>
                       Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit temporibus officia ex vero reprehenderit recusandae incidunt omnis. Minima officia, iure quo error consequatur odio, veritatis dignissimos voluptates fuga eos dolores?
                    </p>
                </div>
            </div>

            {/* What Clients Say Section */}
            <div className="bg-white rounded-xl shadow-md p-6 md:p-10 mb-10">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
                    What Our Clients Say
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                    {reviews.map((review, index) => (
                        <div
                            key={index}
                            className="p-5 border rounded-lg bg-gray-50 shadow-sm hover:shadow-md transition"
                        >
                            <FontAwesomeIcon
                                icon={faQuoteLeft}
                                className="text-blue-500 text-2xl mb-3"
                            />
                            <p className="text-gray-700 mb-3 italic">“{review.comment}”</p>
                            <p className="font-semibold text-gray-800">{review.name}</p>
                            <div className="text-yellow-500 text-sm mt-1">
                                {[...Array(review.rating)].map((_, i) => (
                                    <FontAwesomeIcon key={i} icon={faStar} />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Write a Review Section */}
            <div className="bg-white rounded-xl shadow-md p-6 md:p-10 max-w-2xl mx-auto">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
                    Write a Review About Our Platform
                </h2>
                <p className="text-gray-600 mb-6 text-center">
                    Share your feedback about the website — your thoughts help us improve
                    and serve you better.
                </p>

                <div className="space-y-4">
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full border p-2 rounded-md text-sm focus:outline-none focus:ring focus:ring-blue-300"
                        value={newReview.name}
                        onChange={(e) =>
                            setNewReview({ ...newReview, name: e.target.value })
                        }
                    />

                    <div className="flex space-x-1 text-yellow-500">
                        {[...Array(5)].map((_, i) => (
                            <FontAwesomeIcon
                                key={i}
                                icon={faStar}
                                className={`cursor-pointer ${i < newReview.rating ? "text-yellow-500" : "text-gray-300"
                                    }`}
                                onClick={() =>
                                    setNewReview({ ...newReview, rating: i + 1 })
                                }
                            />
                        ))}
                    </div>

                    <textarea
                        placeholder="Write your review..."
                        rows="3"
                        className="w-full border p-2 rounded-md text-sm focus:outline-none focus:ring focus:ring-blue-300"
                        value={newReview.comment}
                        onChange={(e) =>
                            setNewReview({ ...newReview, comment: e.target.value })
                        }
                    ></textarea>

                    <button
                        onClick={handleAddReview}
                        className="w-full bg-blue-600 text-white py-2 rounded-md font-medium hover:bg-blue-700 transition"
                    >
                        Submit Review
                    </button>
                </div>
            </div>
        </div>
    );
}

export default UserAboutUs;
