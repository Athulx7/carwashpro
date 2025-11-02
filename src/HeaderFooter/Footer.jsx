import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'

function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-8">
            <div className="container mx-auto px-6">

                <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-6">

                    <div className="text-center md:text-left max-w-md">
                        <h2 className="text-2xl font-semibold mb-2">CarWash Pro</h2>
                        <p className="text-gray-300 text-sm">
                            Your trusted partner for car wash services. Quality, convenience, and customer satisfaction guaranteed.
                        </p>
                    </div>

                    <div className="flex justify-center md:justify-end gap-6">
                        <a href="#" className="hover:text-gray-400 transition">
                            <FontAwesomeIcon icon={faInstagram} size="lg" />
                        </a>
                        <a href="#" className="hover:text-gray-400 transition">
                            <FontAwesomeIcon icon={faFacebookF} size="lg" />
                        </a>
                        <a href="#" className="hover:text-gray-400 transition">
                            <FontAwesomeIcon icon={faTwitter} size="lg" />
                        </a>
                    </div>
                </div>

                <div className="border-t border-gray-700 my-6"></div>

                <p className="text-center text-gray-400 text-sm">
                    © 2025 CarWash Pro. All rights reserved.
                </p>
            </div>
        </footer>
    )
}

export default Footer
