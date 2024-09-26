'use client';
import React, { useEffect, useState } from 'react';
import Data from '../data/data'; 
import Card from '../components/Card'; 
import { useRouter } from 'next/navigation';

const Favorites = () => {
    const [favorites, setFavorites] = useState([]);
    const [favoriteItems, setFavoriteItems] = useState([]);
    const router = useRouter();

    useEffect(() => {
        // Fetch favorite Properties from localStorage
        const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
        setFavorites(savedFavorites);

        // Filter the favorite properties from the data based on saved Properties
        const favoriteProps = Data.filter(item => savedFavorites.includes(item.id));
        setFavoriteItems(favoriteProps);
    }, []);

    // Handle removing an item from favorites
    const removeFromFavorites = (id, e) => {
        e.stopPropagation(); // Prevent card click
        const updatedFavorites = favoriteItems.filter(item => item.id !== id); 
        setFavoriteItems(updatedFavorites);

        const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
        const newFavorites = savedFavorites.filter(favoriteId => favoriteId !== id);
        localStorage.setItem('favorites', JSON.stringify(newFavorites));
    };

    // Navigate to the property details page
    const handleCardClick = (id) => {
        router.push(`/PropDetails/${id}`);
    };

    return (
        <div className='poppins-regular min-h-screen'>
            <div className="flex flex-col items-center p-2 md:p-4 ">
                <h1 className="text-xl md:text-3xl font-bold text-gray-800 mb-6 mt-14  w-[100%] px-0 md:px-2 ">Your Favorites</h1>
                <div className="flex flex-wrap justify-around items-start w-[100%]">
                    {favoriteItems.length > 0 ? (
                        favoriteItems.map((item) => (
                            <div key={item.id} onClick={() => handleCardClick(item.id)}>
                                <Card
                                    dataId={item.id}
                                    image={item.imageURL}
                                    title={item.title}
                                    location={item.location}
                                    bedrooms={item.bedrooms}
                                    price={item.price}
                                    isFavorite={favorites.includes(item.id)}
                                    onFavoriteClick={(e) => removeFromFavorites(item.id, e)}
                                />
                            </div>
                        ))
                    ) : (
                        <div className='flex justify-center items-center min-h-[70vh]'>
                        <p >No favorite properties added yet.</p>

                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Favorites;
