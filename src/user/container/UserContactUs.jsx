import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLocationDot,
    faPhoneVolume,
    faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

function UserContactUs() {
    return (
        <div className="min-h-screen bg-gray-50 py-10 px-5 md:px-16">

            <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-10 text-center md:text-left">

                <div className="md:w-5/12">
                    <h3 className="text-blue-600 font-bold text-2xl mb-4">
                        CONTACT INFORMATION
                    </h3>
                    <p className="text-gray-700 mb-6">
                        Get in touch with us for any inquiries, support, or feedback. We’re
                        here to assist you with your booking or partnership queries.
                    </p>

                    <div className="space-y-4">
                        <div className="flex items-center justify-center md:justify-start gap-3">
                            <FontAwesomeIcon
                                icon={faLocationDot}
                                className="text-blue-600 text-lg"
                            />
                            <h6 className="text-gray-800">
                                Location, Place, District, State, Country
                            </h6>
                        </div>
                        <hr className="w-1/2 mx-auto md:mx-0" />
                        <div className="flex items-center justify-center md:justify-start gap-3">
                            <FontAwesomeIcon
                                icon={faPhoneVolume}
                                className="text-blue-600 text-lg"
                            />
                            <h6 className="text-gray-800">+91 9999999999</h6>
                        </div>
                        <hr className="w-1/2 mx-auto md:mx-0" />
                        <div className="flex items-center justify-center md:justify-start gap-3">
                            <FontAwesomeIcon
                                icon={faEnvelope}
                                className="text-blue-600 text-lg"
                            />
                            <h6 className="text-gray-800">carwashcenters@gmail.com</h6>
                        </div>
                    </div>
                </div>

                <div className="md:w-6/12 bg-white p-6 rounded-xl shadow-lg">
                    <h3 className="text-blue-600 font-bold text-2xl mb-6">
                        Send a Message
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                        <input
                            type="text"
                            placeholder="Name"
                            className="border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
                        />
                        <input
                            type="text"
                            placeholder="Phone"
                            className="border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
                        />
                    </div>
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full border border-gray-300 p-2 rounded-md mb-4 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                    />
                    <textarea
                        placeholder="Message"
                        className="w-full border border-gray-300 p-2 rounded-md mb-4 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                        rows="5"
                    ></textarea>
                    <button className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700 transition flex items-center justify-center gap-2">
                        Submit <FontAwesomeIcon icon={faArrowRight} />
                    </button>
                </div>
            </div>

            <div className="mt-10">
                <iframe
                    className="w-full h-96 rounded-xl shadow-md border-0"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62865.55832720463!2d76.30948095113635!3d10.008813464705796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080c8e94a07a07%3A0x49921cdfae82660!2sKakkanad%2C%20Kerala!5e0!3m2!1sen!2sin!4v1726567127087!5m2!1sen!2sin"
                    loading="lazy"
                    allowFullScreen=""
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Car Wash Center Location"
                ></iframe>
            </div>
        </div>
    );
}

export default UserContactUs;
