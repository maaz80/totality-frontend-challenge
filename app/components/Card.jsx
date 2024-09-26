'use client';
import Image from 'next/image';

const Card = ({ title, location, bedrooms, price, image, dataId, onFavoriteClick, isFavorite, onClick }) => {
  return (
    <div
      className="rounded shadow-lg bg-white p-2 md:p-4 mx-auto mt-4 w-[160px] md:w-[344px] h-[250px] md:h-[390px] flex flex-col justify-between items-start"
      data-id={dataId}
      onClick={onClick}
    >
      <Image
        src={image}
        alt="Property image"
        className="object-cover mb-4 w-[170px] md:w-[300px] h-[100px] md:h-[200px] rounded-md"
        priority={true}
      />
      <div className="font-bold text-[12px] md:text-xl mb-2">{title}</div>
      <p className="text-gray-700 text-[10px] md:text-base ">
        <strong>Location:</strong> {location}
      </p>
      <p className="text-gray-600 text-[10px] md:text-sm">{bedrooms} bedrooms</p>
      <div className="flex justify-between items-center w-[97%]">
        <p className="text-gray-900 font-bold text-lg mt-2">₹{price}</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          stroke={isFavorite ? '#FF0000' : '#5f6368'}
          fill={isFavorite ? '#FF0000' : '#5f6368'} // Change color if favorited
          onClick={(e) => onFavoriteClick(e)} //Pass e for Clicking the svg to not direct to the details page
          className="cursor-pointer"
        >
          <path d="M200-120v-640q0-33 23.5-56.5T280-840h400q33 0 56.5 23.5T760-760v640L480-240 200-120Z" />
        </svg>
      </div>
    </div>
  );
};

export default Card;
