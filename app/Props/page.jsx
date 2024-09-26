'use client';
import React, { useEffect, useState } from 'react';
import Data from '../data/data';
import Card from '../components/Card';
import { useRouter } from 'next/navigation';

const Props = () => {
    const [data, setData] = useState([]);
    const [favorites, setFavorites] = useState([]);
    const [fav, setFav] = useState(false)
    const [Removefav, setRemoveFav] = useState(false)
    const router = useRouter();

    useEffect(() => {
        fetchProps();
        const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
        setFavorites(savedFavorites);
    }, []);

    // Fetching all Properties 
    async function fetchProps() {
        try {
            setData(Data);
        } catch (error) {
            console.error('There was an issue in fetching the data:', error);
        }
    }

    // Add/remove favorite by toggling
    const toggleFavorite = (id, e) => {
        e.stopPropagation(); // Prevent to open parent handle
        const isFavorited = favorites.includes(id);
        let updatedFavorites;
        if (isFavorited) {
            updatedFavorites = favorites.filter(favoriteId => favoriteId !== id);
            // Setting Remove Fav true for displaying booking done message
            setTimeout(() => {
                setRemoveFav(true)
            }, 1);

            setTimeout(() => {
                setRemoveFav(false)
            }, 1500)

        } else {
            updatedFavorites = [...favorites, id];

            // Setting Add Fav true for displaying booking done message
            setTimeout(() => {
                setFav(true)
            }, 1);

            setTimeout(() => {
                setFav(false)
            }, 1500)
        }
        setFavorites(updatedFavorites);
        localStorage.setItem('favorites', JSON.stringify(updatedFavorites)); // Save in localStorage
    };

    // Handle card click to go to details page
    const handleCardClick = (id) => {
        router.push(`/PropDetails/${id}`);
    };

    return (
        <div className='poppins-regular'>
            {/* Fav message  */}
            {fav && <div className='fixed w-[80%] md:w-64 h-10 md:h-20 flex justify-center items-center text-white  text-base md:text-xl p-6 rounded-lg z-50 left-1/2 top-72 md:top-1/3 -translate-x-1/2 bg-green-600'>Favorite Added🎇</div>}
            {Removefav && <div className='fixed w-[80%] md:w-64 h-10 md:h-20 flex justify-center items-center text-white  text-base md:text-xl p-6 rounded-lg z-50 left-1/2 top-72 md:top-1/3 -translate-x-1/2 bg-green-600'>Favorite Removed🎇</div>}
            <div className="flex flex-col items-center p-4 ">
                <h1 className="text-3xl font-bold text-gray-800 mb-6 mt-14 bg-black/10 w-[100%] text-center py-2">Available Properties</h1>
                <div className="flex flex-wrap justify-between">
                    {data.length > 0 ? (
                        data.map((item) => (
                            <div
                                key={item.id}
                                onClick={() => handleCardClick(item.id)}
                            >
                                <Card
                                    dataId={item.id}
                                    image={item.imageURL}
                                    title={item.title}
                                    location={item.location}
                                    bedrooms={item.bedrooms}
                                    price={item.price}
                                    isFavorite={favorites.includes(item.id)}
                                    onFavoriteClick={(e) => toggleFavorite(item.id, e)}
                                />
                            </div>
                        ))
                    ) : (
                        <p>No properties available.</p>
                    )}
                </div>
            </div>
        </div>
    );

};

export default Props;
