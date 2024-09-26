'use client'

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import MainImage from '../images/MainImg.webp';
import FilterBar from '../components/FilterBar';
import Data from '../data/data';
import Props from './Props';
import Info from './Info';
import Image9 from '../images/image9.avif'
import Image7 from '../images/image7.avif'


const FrontView = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [filters, setFilters] = useState({
    location: '',
    price: '',
    bedrooms: ''
  });

  // Setting Filtered Data 
  async function fetchProps() {
    try {
      setData(Data);
      setFilteredData(Data);
    } catch (error) {
      console.error('There was an issue in fetching the data:', error);
    }
  }

  useEffect(() => {
    fetchProps();
  }, []);

  // Applying Filter 
  const applyFilters = () => {
    let filtered = data.filter((item) => {
      const matchLocation = filters.location ? item.location === filters.location : true;
      const matchPrice = filters.price ? item.price <= parseInt(filters.price) : true;
      const matchBedrooms = filters.bedrooms ? item.bedrooms === parseInt(filters.bedrooms) : true;

      const movetosection = document.getElementById('movetosection')
      const targetsection = document.getElementById('targetsection')
      movetosection.addEventListener('click', function () {
        targetsection.scrollIntoView({ behavior: 'smooth' })
      })

      return matchLocation && matchPrice && matchBedrooms;
    });
    setFilteredData(filtered);
  };

  return (
    <div className=' w-full'>
      <Image src={MainImage} className='w-full h-[100vh]  object-cover' alt="Main Image" />
      <Info />
      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[95%] md:w-[55%]'>
        <div className='flex flex-col gap-5 mb-5'>
          <h1 className='font-bold  text-white backdrop-blur-sm bg-white/10 rounded-2xl text-2xl md:text-5xl text-center outline-1'>Find Your Dream Home.</h1>
          <p className='text-center text-white backdrop-blur-sm bg-white/10 rounded-2xl text-[10px] md:text-base'>You understand the fact that modern people strive for maximum comfort.</p>
        </div>
        {/* Filter Bar with required data  */}
        <FilterBar
          filters={filters}
          setFilters={setFilters}
          applyFilters={applyFilters}
          locations={Array.from(new Set(data.map(item => item.location)))}
        />
      </div>

      {/* Big texts  */}
      <div className='border-b'>
        <div className='w-[100%] text-2xl md:text-8xl  flex flex-col justify-center items-center gap-2gap-5 pt-8 md:pt-16 pb-5 md:pb-10 font-semibold md:font-normal'>
          <h1>Where Your Unique Vision</h1>
          <h1 className='flex gap-3 items-center'>Guides <Image src={Image9} alt='Image9' className='w-20 md:w-44 rounded-tl-2xl rounded-br-2xl h-10 md:h-20 ' /> Skilled </h1>
          <h1>Craftsmenship</h1>
        </div>
        <p className='w-[98%] md:w-[70%] text-gray-400 text-center m-auto pb-8 md:pb-16 text-[12px] md:text-base'>We believe in a journey beyond the ordinary. Our story begans with you, the visionary, the dreamer, the architect of your own desires. Together, we embark on a collaborative odessey, weaving the fabric of your aspirations into the very essence of our creation.</p>
      </div>

      <div className='w-[100%] py-8 md:py-16'>
        <div className='w-[100%] m-auto flex justify-center items-center flex-col '>
          <h1 className='w-[100%] text-center text-2xl md:text-8xl pb-2 md:pb-5 font-semibold md:font-normal'>Elevate Your Living</h1>
          <h1 className='w-[100%] text-center text-2xl md:text-8xl pb-5 md:pb-10 font-semibold md:font-normal'>Experience With MyProps</h1>
          <p className='w-[98%] md:w-[70%] text-gray-400 text-center m-auto pb-8 md:pb-20 text-[12px] md:text-base'>From unparalleled craftsmanship to personalized service, our commitment to excellence sets us apart Explore the reasons why doceming homeowners choose MyProps to fulfill their dreams</p>
        </div>
        <div className='w-[100%] flex gap-10 md:gap-0 flex-col md:flex-row justify-center items-center'>
          <div className='w-[100%] md:w-[50%]'>
            <h1 className='text-xl md:text-3xl font-medium md:font-normal ml-2 md:ml-20 w-[95%] md:w-[80%]  pb-y'>Customization Beyond Compare</h1>
            <p className='ml-2 md:ml-20 text-gray-400 text-[12px] md:text-base  py-4 border-b w-[95%] md:w-[80%]'>MyProps offers unrivaled customization options, allowing homeowners to talkor every aspect of their living space to reflect their unique vision. From anchitectural design to interior finishes, your dream home becomes a reality with Evode</p>
            <h1 className='text-xl md:text-3xl font-normal md:font-normal ml-2 md:ml-20 py-4 border-b w-[95%] md:w-[80%]'>Exceptional Craftsmanship</h1>
            <h1 className='text-xl md:text-3xl font-normal md:font-normal ml-2 md:ml-20 py-4 border-b w-[95%] md:w-[80%]'>Personalized Service and Support</h1>
            <h1 className='text-xl md:text-3xl font-normal md:font-normal ml-2 md:ml-20 py-4 border-b w-[95%] md:w-[80%]'>Personalized Service and Support</h1>
            <h1 className='text-xl md:text-3xl font-normal md:font-normal ml-2 md:ml-20 py-4 border-b w-[95%] md:w-[80%]'>Community and Sustainability Focus</h1>
          </div>
          <div className='w-[100%] md:w-[50%]'>
            <Image src={Image7} alt='Image 9' className='w-[95%] md:w-[80%]  rounded-tl-full rounded-br-full m-auto ' />
          </div>
        </div>
      </div>

   
      {/* Filtered Properties  */}
      <div id='targetsection'>
        <h1 className='text-2xl md:text-6xl font-semibold ml-2 md:ml-8 underline'>Properties</h1>
        <Props filteredData={filteredData} />
      </div>
    </div>
  );
};

export default FrontView;
