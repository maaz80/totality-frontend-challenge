'use client';
import React, { useEffect, useState } from 'react';
import Data from '@/app/data/data';
import { useCart } from '@/app/context/CartContext';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const PropertyDetailsPage = ({ params }) => {
  const { id } = params;
  const propertyId = parseInt(id);
  const { addToCart } = useCart();
  const router = useRouter();

  const [isFirstPopupOpen, setIsFirstPopupOpen] = useState(false);
  const [isSecondPopupOpen, setIsSecondPopupOpen] = useState(false);
  const [isThirdPopupOpen, setIsThirdPopupOpen] = useState(false);
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [persons, setPersons] = useState(1);
  const [rooms, setRooms] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState('');
  const [booked, setBooked] = useState(false);
  const [userDetails, setUserDetails] = useState({
    name: '',
    email: '',
    address: '',
    pincode: '',
    phoneNumber: '',
  });


  // Payment input states
  const [creditCardDetails, setCreditCardDetails] = useState({
    number: '',
    expiryDate: '',
    cvv: ''
  });
  const [paypalEmail, setPaypalEmail] = useState('');
  const [upiId, setUpiId] = useState('');
  // Payment option state
  const [isCreditCard, setIsCreditCard] = useState(false);
  const [isPayPal, setIsPayPal] = useState(false);
  const [isUPI, setIsUPI] = useState(false);
  const [isCOD, setIsCOD] = useState(false);

  // Finding the property that you opened
  const propertyDetails = Data.find((property) => property.id === propertyId);

  if (!propertyDetails) {
    return <div className="text-center text-red-600 text-lg">Property not found</div>;
  }

  // Booking function First opening first popup
  const handleAddToCart = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    setIsFirstPopupOpen(true);
    const main = document.querySelector('.main')
    main.classList.add('addblur')
  };

  // Opening second popup 
  const handleNextFirstPopup = (e) => {
    e.preventDefault();
    setIsFirstPopupOpen(false);
    setIsSecondPopupOpen(true);
    const main = document.querySelector('.main')
    main.classList.add('addblur')
  };

  // Opening Third popup 
  const handleNextSecondPopup = (e) => {
    e.preventDefault();
    setIsSecondPopupOpen(false);
    setIsThirdPopupOpen(true);
    const main = document.querySelector('.main')
    main.classList.add('addblur')
    // Save first and second popup details to localStorage
    const allDetails = {
      checkInDate,
      checkOutDate,
      persons,
      rooms,
      ...userDetails, // Spread user details (name, email, address, etc.)
    };
    localStorage.setItem(`bookingDetails${propertyId}`, JSON.stringify(allDetails));
    localStorage.setItem('propertyId', propertyId);
  };

  // Checking function for payment inputs 
  const handlePaymentOption = (e) => {
    const method = e.target.value;
    setPaymentMethod(method);
    setIsCreditCard(method === 'CreditCard');
    setIsPayPal(method === 'PayPal');
    setIsUPI(method === 'UPI');
    setIsCOD(method === 'COD');
  };

  // Booking final function 
  const handleSubmit = (e) => {
    e.preventDefault();
    const item = {
      title: propertyDetails.title,
      location: propertyDetails.location,
      description: propertyDetails.description,
      bathrooms: propertyDetails.bathrooms,
      bedrooms: propertyDetails.bedrooms,
      amenities: propertyDetails.amenities,
      price: propertyDetails.price,
      image: propertyDetails.imageURL,
      id: propertyId,
    };
    addToCart(item);
    setIsThirdPopupOpen(false);

    // Combine all booking details including payment details
    const bookingDetails = {
      checkInDate,
      checkOutDate,
      persons,
      rooms,
      ...userDetails,
      paymentMethod,
      paymentDetails: {
        creditCard: isCreditCard && creditCardDetails,
        paypalEmail: isPayPal && paypalEmail,
        upiId: isUPI && upiId,
      }
    };
    localStorage.setItem(`bookingDetails${propertyId}`, JSON.stringify(bookingDetails));

    setIsThirdPopupOpen(false);
    const main = document.querySelector('.main')
    main.classList.remove('addblur')

    // Setting booked true for displaying booking done message
    setTimeout(() => {
      setBooked(true)
    }, 1);

    // Redirecting after 1 sec 
    setTimeout(() => {
      router.push(`/CartItemDetails/${propertyId}`)
    }, 1500);
  };



  // Back buttons for popup 
  const handleback1 = () => {
    setIsFirstPopupOpen(false);
    const main = document.querySelector('.main')
    main.classList.remove('addblur');
  }
  const handleback2 = () => {
    setIsFirstPopupOpen(true);
    setIsSecondPopupOpen(false);
  }
  const handleback3 = () => {
    setIsFirstPopupOpen(false);
    setIsSecondPopupOpen(true);
    setIsThirdPopupOpen(false);
  }


  return (
    <div className='poppins-regular'>

      {/* First Popup */}
      {isFirstPopupOpen && (
        <div className="popup bg-white shadow-md flex shadow-gray-500 absolute p-6 rounded-lg z-50 left-1/2 top-28 md:top-1/3 -translate-x-1/2">

          <div onClick={handleback1} className='mr-4 md:mr-10 -ml-2 md:ml-0 backdrop-blur-sm bg-black/10 h-6 rounded-md'>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M360-240 120-480l240-240 56 56-144 144h568v80H272l144 144-56 56Z" /></svg>
          </div>

          <form onSubmit={handleNextFirstPopup} className="gap-5 flex flex-col md:flex-row">
            <div>
              <label htmlFor="checkInDate" className="block text-sm font-medium text-gray-700">Check-in Date:</label>
              <input
                type="date"
                id="checkInDate"
                value={checkInDate}
                onChange={(e) => setCheckInDate(e.target.value)}
                className="w-48 border border-gray-300 rounded-md p-2"
                required
              />
            </div>
            <div>
              <label htmlFor="checkOutDate" className="block text-sm font-medium text-gray-700">Check-out Date:</label>
              <input
                type="date"
                id="checkOutDate"
                value={checkOutDate}
                onChange={(e) => setCheckOutDate(e.target.value)}
                className="w-48 border border-gray-300 rounded-md p-2"
                required
              />
            </div>
            <div>
              <label htmlFor="persons" className="block text-sm font-medium text-gray-700">Number of Persons:</label>
              <input
                type="number"
                id="persons"
                value={persons}
                onChange={(e) => setPersons(e.target.value)}
                className="w-48 border border-gray-300 rounded-md p-2"
                min="1"
                required
              />
            </div>
            <div>
              <label htmlFor="rooms" className="block text-sm font-medium text-gray-700">Number of Rooms:</label>
              <input
                type="number"
                id="rooms"
                value={rooms}
                onChange={(e) => setRooms(e.target.value)}
                className="w-48 border border-gray-300 rounded-md p-2"
                min="1"
                required
              />
            </div>
            <button type="submit" className="w-48 bg-blue-600 text-white rounded-lg h-10 mt-5 hover:bg-blue-700">
              Next
            </button>
          </form>
        </div>
      )}

      {/* Second Popup */}
      {isSecondPopupOpen && (
        <div className="popup bg-white shadow-md flex shadow-gray-500 absolute p-6 rounded-lg z-50 left-1/2 top-28 md:top-1/3 -translate-x-1/2">

          <div onClick={handleback2} className='mr-4 md:mr-10 -ml-2 md:ml-0 backdrop-blur-sm bg-black/10 h-6 rounded-md'>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M360-240 120-480l240-240 56 56-144 144h568v80H272l144 144-56 56Z" /></svg>
          </div>

          <form onSubmit={handleNextSecondPopup} className="gap-5 flex flex-col md:flex-row items-center justify-between">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name:</label>
              <input
                type="text"
                id="name"
                placeholder='Maaz Shakeel...'
                value={userDetails.name}
                onChange={(e) => setUserDetails({ ...userDetails, name: e.target.value })}
                className="w-48 md:w-40 border border-gray-300 rounded-md p-2"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
              <input
                type="email"
                id="email"
                placeholder='maaz@gmail.com'
                value={userDetails.email}
                onChange={(e) => setUserDetails({ ...userDetails, email: e.target.value })}
                className="w-48 md:w-40 border border-gray-300 rounded-md p-2"
                required
              />
            </div>
            <div>
              <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address:</label>
              <input
                type="text"
                id="address"
                placeholder='Station road, Jaunpur'
                value={userDetails.address}
                onChange={(e) => setUserDetails({ ...userDetails, address: e.target.value })}
                className="w-48 md:w-40 border border-gray-300 rounded-md p-2"
                required
              />
            </div>
            <div>
              <label htmlFor="pincode" className="block text-sm font-medium text-gray-700">Pincode:</label>
              <input
                type="text"
                id="pincode"
                placeholder='222001'
                value={userDetails.pincode}
                onChange={(e) => setUserDetails({ ...userDetails, pincode: e.target.value })}
                className="w-48 md:w-40 border border-gray-300 rounded-md p-2"
                required
              />
            </div>
            <div>
              <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">Phone Number:</label>
              <input
                type="tel"
                id="phoneNumber"
                minLength={10}
                maxLength={10}
                placeholder='12345 67890'
                value={userDetails.phoneNumber}
                onChange={(e) => setUserDetails({ ...userDetails, phoneNumber: e.target.value })}
                className="w-48 md:w-40 border border-gray-300 rounded-md p-2"
                required
              />
            </div>
            <button type="submit" className="w-48 md:w-40 bg-blue-600 text-white rounded-lg mt-5 py-2 hover:bg-blue-700">
              Next
            </button>
          </form>
        </div>
      )}

      {/* Third Popup for Payment Options */}
      {isThirdPopupOpen && (
        <div className="popup bg-white shadow-md flex shadow-gray-500 w-[95%] md:w-[600px] absolute p-6 rounded-lg z-50 left-1/2 top-1/3 -translate-x-1/2">

          <div onClick={handleback3} className='mr-4 md:mr-10 -ml-2 md:ml-0 backdrop-blur-sm bg-black/10 h-6 rounded-md'>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M360-240 120-480l240-240 56 56-144 144h568v80H272l144 144-56 56Z" /></svg>
          </div>

          <div className="w-60 md:w-full mr-14">
            <h3 className="text-lg font-medium text-gray-700 mb-4">Select Payment Method:-</h3>
            <select
              value={paymentMethod}
              onChange={handlePaymentOption}
              className="w-60 md:w-full border border-gray-300 rounded-md p-2 mb-4"
            >
              <option value="">Choose Payment</option>
              <option value="CreditCard">Credit Card</option>
              <option value="PayPal">PayPal</option>
              <option value="UPI">UPI</option>
              <option value="COD">Cash on Delivery</option>
            </select>

            {isCreditCard && (
              <div className="space-y-4">
                <div>
                  <label htmlFor="ccNumber" className="block text-sm font-medium text-gray-700">Credit Card Number:</label>
                  <input
                    type="text"
                    id="ccNumber"
                    className="w-60 md:w-full border border-gray-300 rounded-md p-2"
                    placeholder="1234 5678 9012 3456"
                    value={creditCardDetails.number}
                    onChange={(e) => setCreditCardDetails({ ...creditCardDetails, number: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-700">Expiry Date:</label>
                  <input
                    type="text"
                    id="expiryDate"
                    className="w-60 md:w-full border border-gray-300 rounded-md p-2"
                    placeholder="MM/YY"
                    value={creditCardDetails.expiryDate}
                    onChange={(e) => setCreditCardDetails({ ...creditCardDetails, expiryDate: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="cvv" className="block text-sm font-medium text-gray-700">CVV:</label>
                  <input
                    type="text"
                    id="cvv"
                    className="w-60 md:w-full border border-gray-300 rounded-md p-2"
                    placeholder="123"
                    value={creditCardDetails.cvv}
                    onChange={(e) => setCreditCardDetails({ ...creditCardDetails, cvv: e.target.value })}
                    required
                  />
                </div>
              </div>
            )}

            {isPayPal && (
              <div className="space-y-4">
                <div>
                  <label htmlFor="paypalEmail" className="block text-sm font-medium text-gray-700">PayPal Email:</label>
                  <input
                    type="email"
                    id="paypalEmail"
                    className="w-60 md:w-full border border-gray-300 rounded-md p-2"
                    placeholder="your-email@example.com"
                    value={paypalEmail}
                    onChange={(e) => setPaypalEmail(e.target.value)}
                    required
                  />
                </div>
              </div>
            )}

            {isUPI && (
              <div className="space-y-4">
                <div>
                  <label htmlFor="upiId" className="block text-sm font-medium text-gray-700">UPI ID:</label>
                  <input
                    type="text"
                    id="upiId"
                    className="w-60 md:w-full border border-gray-300 rounded-md p-2"
                    placeholder="your-upi-id@bank"
                    value={upiId}
                    onChange={(e) => setUpiId(e.target.value)}
                    required
                  />
                </div>
              </div>
            )}

            {isCOD && <div className="text-gray-700">Cash on Delivery is selected.</div>}

            <button onClick={handleSubmit} className="w-60 md:w-full mt-4 bg-blue-600 text-white rounded-lg py-2 hover:bg-blue-700">
              Submit
            </button>
          </div>
        </div>
      )}


      {/* Main Div  */}
      <div className="container mx-auto p-3 md:p-16 main">
        {/* Booked Message  */}
        {booked && <div className='fixed w-[80%] md:w-64 h-10 md:h-16 flex justify-center items-center text-white  text-base md:text-xl p-6 rounded-lg z-50 left-1/2 top-72 md:top-1/3 -translate-x-1/2 bg-green-600'>Property Booked🎇</div>}

        <div className="bg-white shadow-xl rounded-lg overflow-hidden mt-16 md:mt-0">
          <div className="relative w-full h-64 md:h-96">
            <Image
              src={propertyDetails.imageURL}
              alt={propertyDetails.title}
              layout="fill "
              objectFit="cover"
              className="w-full h-full object-cover"
              priority={true}
            />
          </div>

          {/* Property Details Section */}
          <div className="p-2  md:p-10 flex flex-col">
            <h1 className="text-xl md:text-5xl font-bold mb-8">{propertyDetails.title}</h1>

            <div className="flex flex-col gap-3 md:gap-8">
              <div className="flex items-center">
                <svg className="w-8 h-8 text-gray-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 16.293l-4.293-4.293V6a2 2 0 10-4 0v6l-4.293 4.293a1 1 0 101.414 1.414l4.293-4.293h2.586l4.293 4.293a1 1 0 101.414-1.414zM12 6a1 1 0 112 0v6h-2V6z"></path>
                </svg>
                <span className="text-[12px] md:text-lg text-gray-800"><strong>Description:</strong> {propertyDetails.description}</span>
              </div>

              <div className="flex items-center">
                <svg className="w-6 h-6 text-gray-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 16.293l-4.293-4.293V6a2 2 0 10-4 0v6l-4.293 4.293a1 1 0 101.414 1.414l4.293-4.293h2.586l4.293 4.293a1 1 0 101.414-1.414zM12 6a1 1 0 112 0v6h-2V6z"></path>
                </svg>
                <span className="text-[12px] md:text-lg text-gray-800"><strong>Location:</strong> {propertyDetails.location}</span>
              </div>

              <div className=" gap-3 md:gap-8 flex flex-col justify-between ">
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-gray-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M17.293 16.293l-4.293-4.293V6a2 2 0 10-4 0v6l-4.293 4.293a1 1 0 101.414 1.414l4.293-4.293h2.586l4.293 4.293a1 1 0 101.414-1.414zM12 6a1 1 0 112 0v6h-2V6z"></path>
                  </svg>
                  <span className="text-[12px] md:text-lg text-gray-800"><strong>Amenities:</strong> {propertyDetails.amenities.join(', ')}</span>
                </div>

                <div className="flex items-center">
                  <svg className="w-6 h-6 text-gray-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 12a3 3 0 100-6 3 3 0 000 6zM10 14a7 7 0 100-14 7 7 0 000 14z"></path>
                  </svg>
                  <span className="text-[12px] md:text-lg text-gray-800"><strong>Bedrooms:</strong> {propertyDetails.bedrooms}</span>
                </div>

                <div className="flex items-center">
                  <svg className="w-6 h-6 text-gray-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 12a3 3 0 100-6 3 3 0 000 6zM10 14a7 7 0 100-14 7 7 0 000 14z"></path>
                  </svg>
                  <span className="text-[12px] md:text-lg text-gray-800"><strong>Bathrooms:</strong> {propertyDetails.bathrooms}</span>
                </div>

                <div className="flex items-center">
                  <svg className="w-6 h-6 text-gray-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 3h14a1 1 0 011 1v12a1 1 0 01-1 1H3a1 1 0 01-1-1V4a1 1 0 011-1zm13 2H4v2h12V5zm0 4H4v2h12V9zm0 4H4v2h12v-2z"></path>
                  </svg>
                  <span className="text-[12px] md:text-lg text-gray-800"><strong>Price:</strong> ₹{propertyDetails.price}</span>
                </div>
              </div>

              <button
                onClick={handleAddToCart}
                className="bg-blue-600 text-white rounded-lg w-40 h-10 hover:bg-blue-700"
              >
                Book Now
              </button>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetailsPage;
