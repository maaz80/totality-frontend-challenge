'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Card from './Card';

const Props = ({ filteredData = [] }) => {
  const [favorites, setFavorites] = useState([]);
  const router = useRouter();
  const [fav, setFav] = useState(false)
  const [Removefav, setRemoveFav] = useState(false)

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(savedFavorites);
  }, []);

  // Add/remove favorite by toggling
  const toggleFavorite = (id, e) => {
    e.stopPropagation(); 
    const isFavorited = favorites.includes(id);
    let updatedFavorites;

    // If in favorite then remove the favorite 
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
    // Setting favorite list 
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites)); 
  };

  // Handle card click to go to details page
  const handleCardClick = (id) => {
    router.push(`/PropDetails/${id}`);
  };

  return (
    <div className=" flex flex-wrap p-4 justify-between" >
      {/* Fav message  */}
      {fav && <div className='fixed w-[80%] md:w-64 h-10 md:h-16 flex justify-center items-center text-white  text-base md:text-xl p-6 rounded-lg z-50 left-1/2 top-72 md:top-1/3 -translate-x-1/2 bg-green-600'>Favorite Added🎇</div>}
      {Removefav && <div className='fixed w-[80%] md:w-64 h-10 md:h-16 flex justify-center items-center text-white  text-base md:text-xl p-6 rounded-lg z-50 left-1/2 top-72 md:top-1/3 -translate-x-1/2 bg-green-600'>Favorite Removed🎇</div>}

      {filteredData.length > 0 ? (
        filteredData.map((item) => (
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
        ''
      )}
    </div>
  );
};

export default Props;
