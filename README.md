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
```
# Tech Stack
- **Frontend**: HTML, CSS, Tailwind CSS, JavaScript, React.js, Next.js
- **Backend**: Data stored using ChatGPT-generated database (stored locally in data.js file).
- **State Management**: React Context API for managing cart and favorite properties.
- **UI/Styling:** Tailwind CSS for styling components and layouts.

# 4. Environment Setup

- If you have any environment variables (e.g., for payment gateways), configure them in a .env.local file.

# Usage

- **Home Page:** Browse and filter properties by clicking on the Filter Bar.
- **Favorite:** Add a property to your favorites by clicking the "Add to Favorite" button on any property card.
- **Property Details:** Click on a property to view its detailed page.

# Booking Process:

- Click "Book Now" on the property details page.
- Fill in booking dates, guests, and personal information.
- Select payment method and proceed to book the property.
- Cart: After booking, view your booked property in the cart and edit any details if necessary.
- Authentication: Create an account on the signup page, and log in to access your personalized experience (such as viewing your name on the top bar).

# Learn More

- To learn more about Next.js, check out the following resources:

- Next.js Documentation - learn about Next.js features and API.
- Learn Next.js - interactive Next.js tutorial.
- You can also check out the Next.js GitHub repository to contribute or find out more.

# Deployment

- The easiest way to deploy your Next.js app is using Vercel, which provides seamless integration with the Next.js framework.

For more details, check out the Next.js deployment documentation.

# Additional Notes
- **Cart Management:** Cart context is used to manage items and booking details across different pages.
Popup Booking Form: The booking process utilizes popups for a step-by-step flow, ensuring a seamless user experience.
Responsive Design: The application is built to be fully responsive, ensuring optimal usability across devices.


# Getting Started
To run the project locally, follow these steps:

# 1. Clone the Repository

- git clone <totality-frontend-challenge>

# 2. Install Dependencies

- npm install
**or**
- yarn install
**or**
- pnpm install

# 3. Run the Development Server

- npm run dev
**or**
- yarn dev
**or**
- pnpm dev
**or**
- bun dev

*Open http://localhost:3000 with your browser to see the application.*
