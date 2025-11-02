import { faStar } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function UserCenterCustomerReview() {
    return (
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
    )
}

export default UserCenterCustomerReview
