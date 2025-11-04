import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faSearchLocation,
    faStar,
    faMapMarkerAlt,
    faPhone
} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { getMoreCenterAPI, searching } from '../../Services/allAPI'

function Centers() {
    const [filterCenter, setFilterCenter] = useState([])
    const [searchData, setSearchData] = useState({
        location: '',
        date: '',
        time: ''
    })
    const [loading, setLoading] = useState(true)
    const [searched, setSearched] = useState(false)

    const getMoreCenters = async () => {
        try {
            const result = await getMoreCenterAPI()
            if (result.status === 200 && Array.isArray(result.data)) {
                setFilterCenter(result.data)
            }
        } catch (error) {
            console.log('Error fetching centers:', error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getMoreCenters()
    }, [])

    const searchResult = async () => {
        setSearched(true)
        setLoading(true)
        try {
            const result = await searching(searchData.location, searchData.date, searchData.time)
            if (result.status === 200 && Array.isArray(result.data)) {
                setFilterCenter(result.data)
            } else {
                setFilterCenter([])
            }
        } catch (error) {
            console.error('Error during search:', error)
        } finally {
            setLoading(false)
        }
    }

    const featuredCenters = filterCenter.slice(0, 3)
    const otherCenters = filterCenter.slice(3)

    return (
        <div className='w-full'>
            {/* 🔹 Hero / Search Section */}
            <section className='bg-blue-600 text-white py-12 px-4 text-center'>
                <h1 className='text-3xl font-bold mb-3'>Find Car Wash Centers</h1>
                <p className='text-gray-200 mb-6 max-w-2xl mx-auto'>
                    Discover car wash centers in your area. Quality service, convenient
                    locations, and trusted by thousands of customers.
                </p>

                {/* 🔹 Search Bar */}
                <div className='bg-white p-4 rounded-lg shadow-lg flex flex-col sm:flex-row justify-center gap-4 max-w-2xl mx-auto'>
                    <div className='flex items-center border border-gray-300 rounded-md px-3 py-2 w-full sm:w-auto'>
                        <FontAwesomeIcon icon={faSearchLocation} className='text-gray-500 mr-2' />
                        <input
                            type='text'
                            placeholder='Enter your location'
                            value={searchData.location}
                            onChange={e => setSearchData({ ...searchData, location: e.target.value })}
                            className='outline-none text-gray-700 w-full'
                        />
                    </div>

                    <input
                        type='date'
                        value={searchData.date}
                        onChange={e => setSearchData({ ...searchData, date: e.target.value })}
                        className='border border-gray-300 rounded-md px-3 py-2 text-gray-700 w-full sm:w-auto'
                    />

                    <input
                        type='time'
                        value={searchData.time}
                        onChange={e => setSearchData({ ...searchData, time: e.target.value })}
                        className='border border-gray-300 rounded-md px-3 py-2 text-gray-700 w-full sm:w-auto'
                    />

                    <button
                        onClick={searchResult}
                        disabled={!searchData.location.trim() || !searchData.date || !searchData.time}
                        className={`${!searchData.location.trim() || !searchData.date || !searchData.time
                                ? 'bg-gray-400 cursor-not-allowed'
                                : 'bg-blue-600 hover:bg-blue-700'
                            } text-white font-medium px-5 py-2 rounded-md`}
                    >
                        {loading ? 'Searching...' : 'Search'}
                    </button>
                </div>
            </section>

            {/* 🔹 Loading State */}
            {loading ? (
                <p className='text-center text-gray-500 py-10'>Loading centers...</p>
            ) : filterCenter.length === 0 ? (
                // 🔹 Single “No Centers Available” Message
                <div className='flex flex-col items-center justify-center text-center py-12 px-6'>
                    <img
                        src='https://charatoon.com/photo/thum/5214.png'
                        alt='No centers available'
                        className='w-32 sm:w-40 mb-3'
                    />
                    <h5 className='font-semibold text-gray-700 text-base sm:text-lg'>
                        There are no centers available
                    </h5>
                </div>
            ) : (
                <>
                    {/* 🔹 Featured Centers */}
                    <section className='py-10 px-6'>
                        <h2 className='text-2xl font-semibold mb-6'>Featured Centers</h2>
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                            {featuredCenters.map(center => (
                                <div
                                    key={center._id}
                                    className='bg-white rounded-xl shadow-md overflow-hidden'
                                >
                                    <img
                                        src={center.image1 ? `/uploads/${center.image1}` : '/images/washingHomeImage.png'}
                                        alt={center.washcentername}
                                        className='w-full h-48 object-cover'
                                    />
                                    <div className='p-4'>
                                        <h3 className='font-semibold text-lg'>
                                            {center.washcentername}
                                        </h3>
                                        <div className='flex items-center text-yellow-500 mt-1 mb-2'>
                                            <FontAwesomeIcon icon={faStar} className='mr-1' /> 4.8{' '}
                                            <span className='text-gray-500 ml-2'>(156 reviews)</span>
                                        </div>
                                        <p className='text-gray-600 mb-2'>
                                            📍 {center.location || 'Unknown location'}
                                        </p>
                                        <p className='text-blue-600 font-semibold mb-2'>
                                            ₹{center.price || 'N/A'}
                                        </p>
                                        <Link
                                            to={`/centerDetails/${center._id}`}
                                            className='bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md w-full block text-center'
                                        >
                                            Book Now
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* 🔹 All Centers */}
                    {otherCenters.length > 0 && (
                        <section className='pb-16 px-6'>
                            <h2 className='text-2xl font-semibold mb-6'>All Centers</h2>
                            <div className='space-y-6'>
                                {otherCenters.map(center => (
                                    <div
                                        key={center._id}
                                        className='bg-white rounded-xl shadow-md p-5 flex flex-col md:flex-row gap-6 items-center md:items-start'
                                    >
                                        <img
                                            src={center.image1 ? `/uploads/${center.image1}` : '/images/washingHomeImage.png'}
                                            alt={center.washcentername}
                                            className='w-full md:w-60 h-40 object-cover rounded-lg'
                                        />
                                        <div className='flex-1'>
                                            <h3 className='font-semibold text-lg'>
                                                {center.washcentername}
                                            </h3>
                                            <div className='text-gray-600 space-y-1 text-sm'>
                                                <p>
                                                    <FontAwesomeIcon icon={faMapMarkerAlt} className='inline mr-2' />
                                                    {center.location}
                                                </p>
                                                <p>
                                                    <FontAwesomeIcon icon={faPhone} className='inline mr-2' />
                                                    {center.contactno}
                                                </p>
                                            </div>
                                            <p className='text-green-600 font-medium mt-2'>
                                                Price: ₹{center.price}
                                            </p>
                                        </div>
                                        <div className='text-right md:w-32'>
                                            <Link
                                                to={`/centerDetails/${center._id}`}
                                                className='bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-md w-full inline-block text-center'
                                            >
                                                Book Now
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}
                </>
            )}
        </div>
    )
}

export default Centers;
