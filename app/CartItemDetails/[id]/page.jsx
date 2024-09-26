'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { Audio } from 'react-loader-spinner';

const CartItemDetails = () => {
    const { id } = useParams();
    const [item, setItem] = useState(null);
    const [details, setDetails] = useState({});
    const [isEditing, setIsEditing] = useState(false);
    const [totalRent, setTotalRent] = useState(0);
    const [totalDaysOfBooking, setTotalDaysOfBooking] = useState(0);

    // To get Cart Property We fetch data from localStorage
    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem('cart'));
        const cartItem = storedCart.find(item => item.id === parseInt(id));
        if (cartItem) {
            setItem(cartItem);
        }
    }, [id]);

    // Getting Booked Property 
    useEffect(() => {
        const storedDetails = JSON.parse(localStorage.getItem(`bookingDetails${id}`));
        if (storedDetails) {
            setDetails(storedDetails);
        }
    }, [id]);

    // Calculating total rent when check-in and check-out dates change
    useEffect(() => {
        const { checkInDate, checkOutDate } = details;
        if (checkInDate && checkOutDate) {
            const checkIn = new Date(checkInDate);
            const checkOut = new Date(checkOutDate);
            const Rooms = details.rooms;
            const differenceInTime = checkOut - checkIn;
            const differenceInDays = differenceInTime / (1000 * 3600 * 24); // Convert milliseconds to days
            const rentPerDay = item?.price || 0; // Get the price from the item
            setTotalRent(differenceInDays * rentPerDay * Rooms);
        }
    }, [details.checkInDate, details.checkOutDate, details.rooms, item]);

    // Calculate total days when check-in and check-out dates change
    useEffect(() => {
        const { checkInDate, checkOutDate } = details;
        if (checkInDate && checkOutDate) {
            const checkIn = new Date(checkInDate);
            const checkOut = new Date(checkOutDate);
            const differenceInTime = checkOut - checkIn;
            const differenceInDays = differenceInTime / (1000 * 3600 * 24); // Convert milliseconds to days
            setTotalDaysOfBooking(differenceInDays);
        }
    }, [details.checkInDate, details.checkOutDate, item]);

    // Edit Information Button Toggle 
    const handleEditToggle = () => {
        setIsEditing(!isEditing);
    };

    // On edit input change 
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setDetails((prevDetails) => ({
            ...prevDetails,
            [name]: value
        }));
    };

    // Save Button 
    const handleSave = () => {
        localStorage.setItem(`bookingDetails${id}`, JSON.stringify(details));
        setIsEditing(false);
    };

    // Loading 
    if (!item) {
        return <div className="text-center mt-10 text-lg">
            <Audio
                height="80"
                width="80"
                radius="9"
                color="green"
                ariaLabel="loading"
                wrapperStyle
                wrapperClass
            />
        </div>;
    }

    return (
        <div className='w-[100%] poppins-regular'>
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-8 mt-10">
                    <div className="md:flex">
                        <div className="md:w-1/2">
                            <Image
                                src={item.image}
                                alt={item.title}
                                width={600}
                                height={400}
                                className="w-full object-cover h-64 md:h-full"
                                priority={true}

                            />
                        </div>
                        <div className="md:w-1/2 p-6 border border-gray-300 rounded-r-lg">
                            <h1 className="text-2xl font-bold text-gray-800 mb-4">{item.title}</h1>
                            <p className="text-gray-600 mb-2"><strong>Location:</strong> {item.location}</p>
                            <p className="text-gray-600 mb-2"><strong>Descriptions:</strong> {item.description}</p>
                            <p className="text-gray-600 mb-2"><strong>Bedrooms:</strong> {item.bedrooms}</p>
                            <p className="text-gray-600 mb-2"><strong>Bathrooms:</strong> {item.bathrooms}</p>
                            <p className="text-gray-600 mb-2"><strong>Amenities:</strong> {Array.isArray(item.amenities) ? item.amenities.join(', ') : 'Not available'}</p>
                            <p className="text-gray-600 mb-2"><strong>Booking Days:</strong> {totalDaysOfBooking}</p>
                            <p className="text-gray-600 mb-2"><strong>Rent of Property:</strong> ₹{item.price}</p>
                            <p className="text-emerald-600 text-base md:text-lg font-semibold">Total Rent For {details.rooms} Rooms for {totalDaysOfBooking} Days: <div className='text-xl font-bold'> ₹{totalRent} {details.paymentMethod === 'COD' ? '(Unpaid)' : '(Paid)'}</div></p>
                        </div>
                    </div>
                </div>

                <div className="bg-white shadow-lg  p-6 border border-gray-300 rounded-lg">
                    <div className="flex justify-between items-center">
                        <h2 className="text-xl font-semibold text-gray-800 mb-4">Booking Details</h2>
                        <button
                            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                            onClick={handleEditToggle}
                        >
                            {isEditing ? 'Cancel' : 'Edit'}
                        </button>
                    </div>

                    {/* Checking each data that if isEdit is on then all the data change to input  */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <p className="text-gray-600"><strong>Name: </strong>
                                {isEditing ? (
                                    <input
                                        type="text"
                                        name="name"
                                        value={details.name || ''}
                                        onChange={handleInputChange}
                                        className="border p-1 rounded w-full"
                                        required
                                    />
                                ) : details.name}
                            </p>

                            <p className="text-gray-600"><strong>Check-In Date: </strong>
                                {isEditing ? (
                                    <input
                                        type="date"
                                        name="checkInDate"
                                        value={details.checkInDate || ''}
                                        onChange={handleInputChange}
                                        className="border p-1 rounded w-full"
                                        required
                                    />
                                ) : details.checkInDate}
                            </p>

                            <p className="text-gray-600"><strong>Check-Out Date: </strong>
                                {isEditing ? (
                                    <input
                                        type="date"
                                        name="checkOutDate"
                                        value={details.checkOutDate || ''}
                                        onChange={handleInputChange}
                                        className="border p-1 rounded w-full"
                                        required
                                    />
                                ) : details.checkOutDate}
                            </p>

                            <p className="text-gray-600"><strong>Rooms: </strong>
                                {isEditing ? (
                                    <input
                                        type="number"
                                        name="rooms"
                                        value={details.rooms || ''}
                                        onChange={handleInputChange}
                                        className="border p-1 rounded w-full"
                                        required
                                    />
                                ) : details.rooms}
                            </p>

                            <p className="text-gray-600"><strong>Persons: </strong>
                                {isEditing ? (
                                    <input
                                        type="number"
                                        name="persons"
                                        value={details.persons || ''}
                                        onChange={handleInputChange}
                                        className="border p-1 rounded w-full"
                                        required
                                    />
                                ) : details.persons}
                            </p>
                        </div>

                        <div>
                            <p className="text-gray-600"><strong>Email: </strong>
                                {isEditing ? (
                                    <input
                                        type="email"
                                        name="email"
                                        value={details.email || ''}
                                        onChange={handleInputChange}
                                        className="border p-1 rounded w-full"
                                        required
                                    />
                                ) : details.email}
                            </p>

                            <p className="text-gray-600"><strong>Phone Number: </strong>
                                {isEditing ? (
                                    <input
                                        type="text"
                                        name="phoneNumber"
                                        value={details.phoneNumber || ''}
                                        onChange={handleInputChange}
                                        className="border p-1 rounded w-full"
                                        required
                                    />
                                ) : details.phoneNumber}
                            </p>

                            <p className="text-gray-600"><strong>Address: </strong>
                                {isEditing ? (
                                    <input
                                        type="text"
                                        name="address"
                                        value={details.address || ''}
                                        onChange={handleInputChange}
                                        className="border p-1 rounded w-full"
                                        required
                                    />
                                ) : details.address}
                            </p>

                            <p className="text-gray-600"><strong>Pincode: </strong>
                                {isEditing ? (
                                    <input
                                        type="text"
                                        name="pincode"
                                        value={details.pincode || ''}
                                        onChange={handleInputChange}
                                        className="border p-1 rounded w-full"
                                        required
                                    />
                                ) : details.pincode}
                            </p>

                            <p className="text-gray-600"><strong>Payment Method: </strong> {details.paymentMethod}</p>
                            {details.paymentMethod === 'UPI' && isEditing && (
                                <input
                                    type="text"
                                    name="paymentDetails.upiId"
                                    value={details.paymentDetails?.upiId || ''}
                                    onChange={handleInputChange}
                                    className="border p-1 rounded w-full"
                                    placeholder="UPI ID"
                                    required
                                />
                            )}
                            {details.paymentMethod === 'PayPal' && isEditing && (
                                <input
                                    type="email"
                                    name="paymentDetails.paypalEmail"
                                    value={details.paymentDetails?.paypalEmail || ''}
                                    onChange={handleInputChange}
                                    className="border p-1 rounded w-full"
                                    placeholder="PayPal Email"
                                    required
                                />
                            )}
                        </div>
                    </div>

                    {isEditing && (
                        <button
                            className="bg-blue-500 text-white px-4 py-2 mt-4 rounded hover:bg-blue-600"
                            onClick={handleSave}
                        >
                            Save
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CartItemDetails;
