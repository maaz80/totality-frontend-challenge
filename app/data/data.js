import PropImg from '../images/PropImg.webp'
import image1 from '../images/image1.avif'
import image2 from '../images/image2.avif'
import image3 from '../images/image3.avif'
import image4 from '../images/image4.avif'
import image5 from '../images/image5.avif'
import image6 from '../images/image6.avif'
import image7 from '../images/image7.avif'
import image8 from '../images/image8.avif'
import image9 from '../images/image9.avif'
import image10 from '../images/image10.avif'
import image11 from '../images/image11.avif'
import image12 from '../images/image12.avif'
import image13 from '../images/image13.avif'
import image14 from '../images/image14.avif'
import image15 from '../images/image15.avif'
import image16 from '../images/image16.avif'
import image17 from '../images/image17.avif'
import image18 from '../images/image18.avif'
import image19 from '../images/image19.avif'
import image20 from '../images/image20.avif'

const Data = [
    {
        "id": 1,
        "title": "Modern Apartment in City Center",
        "description": "A beautiful apartment located in the heart of the city with a stunning view.",
        "location": "New York, USA",
        "price": 12000,
        "bedrooms": 2,
        "bathrooms": 1,
        "amenities": ["WiFi", "Air Conditioning", "Pool", "Gym"],
        "imageURL": image1
    },
    {
        "id": 2,
        "title": "Luxury Condo in Midtown",
        "description": "A luxury condo offering the best city life with top amenities.",
        "location": "New York, USA",
        "price": 25000,
        "bedrooms": 3,
        "bathrooms": 2,
        "amenities": ["WiFi", "Gym", "Garage", "Concierge"],
        "imageURL": image2
    },
    {
        "id": 3,
        "title": "Cozy Cottage in Countryside",
        "description": "Escape the city with this charming cottage nestled in the countryside.",
        "location": "Oxford, UK",
        "price": 9000,
        "bedrooms": 3,
        "bathrooms": 2,
        "amenities": ["Fireplace", "Garden", "Pet Friendly"],
        "imageURL": image3
    },
    {
        "id": 4,
        "title": "Luxury Apartment in Oxford City Center",
        "description": "A high-end apartment located in the heart of Oxford.",
        "location": "Oxford, UK",
        "price": 15000,
        "bedrooms": 2,
        "bathrooms": 1,
        "amenities": ["WiFi", "Air Conditioning", "Pool"],
        "imageURL": image4
    },
    {
        "id": 5,
        "title": "Beachfront Studio Apartment",
        "description": "A cozy beachfront studio with direct beach access.",
        "location": "Barcelona, Spain",
        "price": 7000,
        "bedrooms": 1,
        "bathrooms": 1,
        "amenities": ["WiFi", "Beach Access", "Air Conditioning"],
        "imageURL": image5
    },
    {
        "id": 6,
        "title": "Modern Apartment near Sagrada Familia",
        "description": "Stylish apartment with views of the famous Sagrada Familia.",
        "location": "Barcelona, Spain",
        "price": 13000,
        "bedrooms": 2,
        "bathrooms": 2,
        "amenities": ["WiFi", "Air Conditioning", "Gym"],
        "imageURL": image6
    },
    {
        "id": 7,
        "title": "Penthouse with Rooftop Terrace",
        "description": "A high-end penthouse with a private rooftop terrace overlooking the city skyline.",
        "location": "Sydney, Australia",
        "price": 28000,
        "bedrooms": 3,
        "bathrooms": 2,
        "amenities": ["WiFi", "Air Conditioning", "Rooftop Terrace", "Gym"],
        "imageURL": image7
    },
    {
        "id": 8,
        "title": "Modern Townhouse in Bondi Beach",
        "description": "A luxurious townhouse steps away from Bondi Beach.",
        "location": "Sydney, Australia",
        "price": 32000,
        "bedrooms": 4,
        "bathrooms": 3,
        "amenities": ["WiFi", "Pool", "Garage", "Beach Access"],
        "imageURL": image8
    },
    {
        "id": 9,
        "title": "Luxury Villa with Ocean View",
        "description": "A spacious villa offering unparalleled ocean views and luxury living.",
        "location": "Malibu, USA",
        "price": 35000,
        "bedrooms": 4,
        "bathrooms": 3,
        "amenities": ["WiFi", "Pool", "Ocean View", "Garage"],
        "imageURL": image9
    },
    {
        "id": 10,
        "title": "Beach House in Malibu",
        "description": "An elegant beach house with direct access to the ocean.",
        "location": "Malibu, USA",
        "price": 42000,
        "bedrooms": 5,
        "bathrooms": 4,
        "amenities": ["WiFi", "Ocean View", "Beach Access", "Hot Tub"],
        "imageURL": image10
    },
    {
        "id": 11,
        "title": "Stylish Loft in Downtown LA",
        "description": "A stylish loft in the heart of downtown Los Angeles.",
        "location": "Los Angeles, USA",
        "price": 20000,
        "bedrooms": 2,
        "bathrooms": 2,
        "amenities": ["WiFi", "Pool", "Gym", "Parking"],
        "imageURL": image11
    },
    {
        "id": 12,
        "title": "Chic Apartment in Beverly Hills",
        "description": "Luxurious apartment with high-end finishes in Beverly Hills.",
        "location": "Los Angeles, USA",
        "price": 35000,
        "bedrooms": 3,
        "bathrooms": 2,
        "amenities": ["WiFi", "Pool", "Concierge", "Gym"],
        "imageURL": image12
    },
    {
        "id": 13,
        "title": "Mountain Cabin with Hot Tub",
        "description": "A secluded cabin in the mountains with a private hot tub and scenic views.",
        "location": "Aspen, USA",
        "price": 14000,
        "bedrooms": 2,
        "bathrooms": 2,
        "amenities": ["WiFi", "Hot Tub", "Fireplace", "Mountain View"],
        "imageURL": image13
    },
    {
        "id": 14,
        "title": "Ski Chalet in Aspen",
        "description": "Luxury chalet perfect for a ski getaway.",
        "location": "Aspen, USA",
        "price": 50000,
        "bedrooms": 4,
        "bathrooms": 4,
        "amenities": ["WiFi", "Ski-In/Ski-Out", "Fireplace", "Hot Tub"],
        "imageURL": image14
    },
    {
        "id": 15,
        "title": "Modern Apartment with Eiffel Tower View",
        "description": "A stunning apartment with views of the Eiffel Tower.",
        "location": "Paris, France",
        "price": 25000,
        "bedrooms": 2,
        "bathrooms": 1,
        "amenities": ["WiFi", "Air Conditioning", "City View"],
        "imageURL": image15
    },
    {
        "id": 16,
        "title": "Charming Studio in Montmartre",
        "description": "A cozy studio located in the iconic Montmartre district.",
        "location": "Paris, France",
        "price": 12000,
        "bedrooms": 1,
        "bathrooms": 1,
        "amenities": ["WiFi", "Air Conditioning"],
        "imageURL": image16
    },
    {
        "id": 17,
        "title": "Elegant Apartment in Knightsbridge",
        "description": "An elegant apartment located in the exclusive Knightsbridge neighborhood.",
        "location": "London, UK",
        "price": 30000,
        "bedrooms": 3,
        "bathrooms": 2,
        "amenities": ["WiFi", "Concierge", "Gym", "Garage"],
        "imageURL": image17
    },
    {
        "id": 18,
        "title": "Cozy Flat in Notting Hill",
        "description": "A charming flat located in the heart of Notting Hill.",
        "location": "London, UK",
        "price": 18000,
        "bedrooms": 2,
        "bathrooms": 1,
        "amenities": ["WiFi", "Air Conditioning"],
        "imageURL": image18
    },
    {
        "id": 19,
        "title": "Modern Apartment with Lake View",
        "description": "A sleek apartment offering stunning views of Lake Zurich.",
        "location": "Zurich, Switzerland",
        "price": 22000,
        "bedrooms": 2,
        "bathrooms": 2,
        "amenities": ["WiFi", "Lake View", "Parking", "Gym"],
        "imageURL": image19
    },
    {
        "id": 20,
        "title": "Luxury Villa in Zurich Hills",
        "description": "An exclusive villa nestled in the hills surrounding Zurich.",
        "location": "Zurich, Switzerland",
        "price": 40000,
        "bedrooms": 5,
        "bathrooms": 4,
        "amenities": ["WiFi", "Pool", "Garage", "Garden"],
        "imageURL": image20
    },
    {
        "id": 21,
        "title": "Penthouse with Skyline View",
        "description": "Luxurious penthouse offering a stunning skyline view of the city.",
        "location": "New York, USA",
        "price": 35000,
        "bedrooms": 4,
        "bathrooms": 3,
        "amenities": ["WiFi", "Air Conditioning", "Gym", "Rooftop"],
        "imageURL": image1
    },
    {
        "id": 22,
        "title": "Charming Cottage in Historic Oxford",
        "description": "A cozy cottage located in the historic area of Oxford.",
        "location": "Oxford, UK",
        "price": 11000,
        "bedrooms": 3,
        "bathrooms": 2,
        "amenities": ["Fireplace", "Garden", "Parking"],
        "imageURL": image2
    },
    {
        "id": 23,
        "title": "Beachside Apartment in Barcelona",
        "description": "Modern apartment with a panoramic beach view.",
        "location": "Barcelona, Spain",
        "price": 18000,
        "bedrooms": 2,
        "bathrooms": 1,
        "amenities": ["WiFi", "Balcony", "Pool"],
        "imageURL": image3
    },
    {
        "id": 24,
        "title": "Suburban House with Private Pool",
        "description": "Spacious house in the suburbs with a private swimming pool.",
        "location": "Sydney, Australia",
        "price": 20000,
        "bedrooms": 4,
        "bathrooms": 3,
        "amenities": ["WiFi", "Pool", "Garage"],
        "imageURL": image4
    },
    {
        "id": 25,
        "title": "Malibu Cliffside Villa",
        "description": "Exclusive cliffside villa with ocean views and top amenities.",
        "location": "Malibu, USA",
        "price": 60000,
        "bedrooms": 5,
        "bathrooms": 4,
        "amenities": ["WiFi", "Pool", "Garage", "Garden"],
        "imageURL": image5
    },
    {
        "id": 26,
        "title": "Luxury Beachfront Condo",
        "description": "Beachfront condo with direct access to the beach and sea views.",
        "location": "Los Angeles, USA",
        "price": 30000,
        "bedrooms": 3,
        "bathrooms": 2,
        "amenities": ["WiFi", "Balcony", "Gym"],
        "imageURL": image6
    },
    {
        "id": 27,
        "title": "Aspen Ski Lodge",
        "description": "Charming ski lodge perfect for a winter getaway.",
        "location": "Aspen, USA",
        "price": 45000,
        "bedrooms": 4,
        "bathrooms": 3,
        "amenities": ["Fireplace", "Ski-in/Ski-out", "Hot Tub"],
        "imageURL": image7
    },
    {
        "id": 28,
        "title": "Chic Apartment in Central Paris",
        "description": "Beautifully decorated apartment in the heart of Paris.",
        "location": "Paris, France",
        "price": 22000,
        "bedrooms": 2,
        "bathrooms": 2,
        "amenities": ["WiFi", "Balcony", "Elevator"],
        "imageURL": image8
    },
    {
        "id": 29,
        "title": "Luxurious Flat in Kensington",
        "description": "Modern flat in the exclusive area of Kensington.",
        "location": "London, UK",
        "price": 27000,
        "bedrooms": 3,
        "bathrooms": 2,
        "amenities": ["WiFi", "Concierge", "Garage"],
        "imageURL": image9
    },
    {
        "id": 30,
        "title": "Zurich Riverside House",
        "description": "Spacious house by the riverside with private garden.",
        "location": "Zurich, Switzerland",
        "price": 42000,
        "bedrooms": 5,
        "bathrooms": 4,
        "amenities": ["WiFi", "Pool", "Garden", "Garage"],
        "imageURL": image10
    },
    {
        "id": 31,
        "title": "Elegant Apartment near the Colosseum",
        "description": "Historical apartment near the Colosseum with modern amenities.",
        "location": "Rome, Italy",
        "price": 16000,
        "bedrooms": 2,
        "bathrooms": 1,
        "amenities": ["WiFi", "Balcony", "Elevator"],
        "imageURL": image11
    },
    {
        "id": 32,
        "title": "Tokyo Urban Loft",
        "description": "Stylish loft in the heart of Tokyo's Shibuya district.",
        "location": "Tokyo, Japan",
        "price": 28000,
        "bedrooms": 2,
        "bathrooms": 2,
        "amenities": ["WiFi", "Balcony", "Gym"],
        "imageURL": image12
    },
    {
        "id": 33,
        "title": "Downtown Dubai Penthouse",
        "description": "Luxury penthouse with panoramic views of the Burj Khalifa.",
        "location": "Dubai, UAE",
        "price": 50000,
        "bedrooms": 4,
        "bathrooms": 3,
        "amenities": ["WiFi", "Gym", "Pool"],
        "imageURL": image13
    },
    {
        "id": 34,
        "title": "Luxury Condo in Marina Bay",
        "description": "High-end condo with marina views in central Singapore.",
        "location": "Singapore, Singapore",
        "price": 32000,
        "bedrooms": 3,
        "bathrooms": 2,
        "amenities": ["WiFi", "Pool", "Concierge"],
        "imageURL": image14
    },
    {
        "id": 35,
        "title": "Cape Town Mountain Villa",
        "description": "Private villa at the base of Table Mountain with incredible views.",
        "location": "Cape Town, South Africa",
        "price": 48000,
        "bedrooms": 5,
        "bathrooms": 4,
        "amenities": ["WiFi", "Pool", "Garage", "Garden"],
        "imageURL": image15
    },
    {
        "id": 36,
        "title": "Modern Apartment in Berlin Mitte",
        "description": "A newly renovated apartment in the bustling Berlin Mitte district.",
        "location": "Berlin, Germany",
        "price": 20000,
        "bedrooms": 3,
        "bathrooms": 2,
        "amenities": ["WiFi", "Balcony", "Parking"],
        "imageURL": image16
    },
    {
        "id": 37,
        "title": "Toronto Downtown Loft",
        "description": "Trendy loft in downtown Toronto with modern interiors.",
        "location": "Toronto, Canada",
        "price": 22000,
        "bedrooms": 2,
        "bathrooms": 2,
        "amenities": ["WiFi", "Gym", "Concierge"],
        "imageURL": image17
    },
    {
        "id": 38,
        "title": "Harborfront Condo in Sydney",
        "description": "Luxurious condo with breathtaking views of the Sydney harbor.",
        "location": "Sydney, Australia",
        "price": 35000,
        "bedrooms": 3,
        "bathrooms": 2,
        "amenities": ["WiFi", "Balcony", "Pool"],
        "imageURL": image18
    },
    {
        "id": 39,
        "title": "Modern Apartment in Melbourne CBD",
        "description": "Central Melbourne apartment with modern amenities and stunning views.",
        "location": "Melbourne, Australia",
        "price": 27000,
        "bedrooms": 2,
        "bathrooms": 2,
        "amenities": ["WiFi", "Gym", "Pool"],
        "imageURL": image19
    },
    {
        "id": 40,
        "title": "Luxury Waterfront House in Auckland",
        "description": "A waterfront house with stunning views and a large garden.",
        "location": "Auckland, New Zealand",
        "price": 50000,
        "bedrooms": 5,
        "bathrooms": 4,
        "amenities": ["WiFi", "Garage", "Garden", "Pool"],
        "imageURL": image20
    },
    {
        "id": 41,
        "title": "Cosy Cottage in the Dublin Suburbs",
        "description": "Charming cottage located in the peaceful suburbs of Dublin.",
        "location": "Dublin, Ireland",
        "price": 13000,
        "bedrooms": 3,
        "bathrooms": 2,
        "amenities": ["WiFi", "Garden", "Parking"],
        "imageURL": image1
    },
    {
        "id": 42,
        "title": "Country House with Vineyard",
        "description": "Spacious country house with a private vineyard in Tuscany.",
        "location": "Tuscany, Italy",
        "price": 38000,
        "bedrooms": 4,
        "bathrooms": 3,
        "amenities": ["WiFi", "Garden", "Garage", "Fireplace"],
        "imageURL": image2
    },
    {
        "id": 43,
        "title": "Mountain Cabin in Colorado",
        "description": "Secluded mountain cabin with breathtaking views of the Rockies.",
        "location": "Aspen, USA",
        "price": 42000,
        "bedrooms": 4,
        "bathrooms": 3,
        "amenities": ["Fireplace", "Hot Tub", "WiFi"],
        "imageURL": image11
    },
    {
        "id": 44,
        "title": "Penthouse Overlooking the Thames",
        "description": "High-end penthouse with stunning views of the River Thames.",
        "location": "London, UK",
        "price": 45000,
        "bedrooms": 4,
        "bathrooms": 3,
        "amenities": ["WiFi", "Balcony", "Concierge", "Gym"],
        "imageURL": image12
    },
    {
        "id": 45,
        "title": "Elegant Apartment in Florence",
        "description": "Charming apartment located near the Duomo in Florence.",
        "location": "Florence, Italy",
        "price": 20000,
        "bedrooms": 2,
        "bathrooms": 1,
        "amenities": ["WiFi", "Balcony", "Elevator"],
        "imageURL": image13
    },
    {
        "id": 46,
        "title": "Historic Home in Edinburgh",
        "description": "A beautifully restored historic home in central Edinburgh.",
        "location": "Edinburgh, UK",
        "price": 19000,
        "bedrooms": 3,
        "bathrooms": 2,
        "amenities": ["Fireplace", "WiFi", "Garden"],
        "imageURL": image14
    },
    {
        "id": 47,
        "title": "Clifftop Mansion in Santorini",
        "description": "Exclusive mansion with panoramic views of the Aegean Sea.",
        "location": "Santorini, Greece",
        "price": 55000,
        "bedrooms": 6,
        "bathrooms": 5,
        "amenities": ["WiFi", "Pool", "Balcony", "Garage"],
        "imageURL": image15
    },
    {
        "id": 48,
        "title": "Private Villa in Mykonos",
        "description": "Luxury private villa with a pool and ocean views.",
        "location": "Mykonos, Greece",
        "price": 62000,
        "bedrooms": 5,
        "bathrooms": 4,
        "amenities": ["WiFi", "Pool", "Gym", "Garage"],
        "imageURL": image16
    },
    {
        "id": 49,
        "title": "Penthouse in Downtown Vancouver",
        "description": "Spacious penthouse in the heart of Vancouver with mountain views.",
        "location": "Vancouver, Canada",
        "price": 49000,
        "bedrooms": 4,
        "bathrooms": 3,
        "amenities": ["WiFi", "Gym", "Balcony"],
        "imageURL": image17
    },
    {
        "id": 50,
        "title": "Stylish Loft in SoHo",
        "description": "Beautiful loft located in the trendy SoHo district of New York.",
        "location": "New York, USA",
        "price": 30000,
        "bedrooms": 3,
        "bathrooms": 2,
        "amenities": ["WiFi", "Gym", "Balcony"],
        "imageURL": image18
    }

]
export default Data;