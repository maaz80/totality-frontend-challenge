# Estate Property Application

This is a [Next.js](https://nextjs.org/) project that helps users find and book their favorite properties. Users can filter properties by location, rooms, and price, view detailed property information, and complete the booking process using online payment or cash on delivery (COD). Additionally, the application supports user authentication with login and signup functionality.

## Features

- **Property Listings**: Browse a list of properties and filter them by location, rooms, and price.
- **Favorite Properties**: Add properties to a favorites list for future reference.
- **Property Details**: View detailed information about a specific property, including amenities, price, and images.
- **Booking Functionality**: 
  - Choose check-in and check-out dates.
  - Select the number of guests and bedrooms.
  - Fill in personal details and choose payment options.
  - Pay online or opt for cash on delivery (COD).
- **Edit Booking**: After booking, you can view your reservation details and edit dates, rooms, or other information.
- **Cart**: Booked properties are added to your cart, where you can manage or review them.
- **User Authentication**: Signup and login functionality. After logging in, the user's name appears at the top of the page.

## Project Structure

```bash
app-cart-page.jsx
|-- CartItemDetails/[id]/page.jsx
|-- components/
    |-- Card.jsx
    |-- FilterBar.jsx
    |-- Footer.jsx
    |-- FrontView.jsx
    |-- Info.jsx
    |-- Navbar.jsx
    |-- Props.jsx
|-- contact/page.jsx
|-- context/CartContext.jsx
|-- data/data.js
|-- favorite/page.jsx
|-- images/ # Contains property images
|-- login/page.jsx
|-- pages/Home.jsx
|-- PropDetails/[id]/page.jsx
|-- Props/page.jsx
|-- global.css # Custom styles
|-- layout.js
|-- page.js
