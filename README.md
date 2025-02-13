
## Online Tutor Booking Platform

## Links

**frontend Links**

- [Live Link1](https://gorgeous-shortbread-b2c9fe.netlify.app/)

- [frontend github link](https://github.com/kawsar334/client_Language-Exchange_Online-Tutor-Booking)

**Backend Links**
- [backend github link](https://github.com/kawsar334/server-Language-Exchange---Online-Tutor-Booking-Platform)
- [api Link on vercel](https://languageexchange-one.vercel.app/) +/endpoind 

### Description
- 
This is the **Fullstack** repository for the Online Tutor Booking Platform, a web application that connects users with tutors across various languages and subjects. The frontend is built using **React.js** **Nodejs,mongodb**  and styled with **Tailwind CSS** to provide a modern, responsive, and user-friendly interface.

## **Features**
- 🔑 **Authentication System**:
  - Email/Password-Based Login
  - Google Sign-In
- 🌟 **Dynamic Pages**:
  - Home, Find Tutors, Tutor Details, My Tutorials, and My Booked Tutors
- 🌓 **Dark/Light Mode Toggle** for a personalized user experience
- 📱 Fully responsive design for mobile, tablet, and desktop
- 🔍 **Search Functionality** on the Find Tutors page
- 🎨 Intuitive UI with proper alignment and color contrast
- 🖼️ **Image Carousel/Banner** on the home page

## **Key Pages**
1. **Home Page**:
   - Dynamic statistics (tutors, reviews, languages, users)
   - Language categories with clickable cards
   - Additional sections for added value

2. **Find Tutors Page**:
   - Display all tutors and filter them by category or language
   - Search bar for easy navigation

3. **Tutor Details Page** (Private Route):
   - Show detailed tutor information
   - Option to book a tutor

4. **My Tutorials Page** (Private Route):
   - Display all tutorials added by the user
   - Update and delete functionality

5. **My Booked Tutors Page** (Private Route):
   - Show booked tutors with details and review functionality

---

## **Frontend  Technologies Used**
- **React.js** for the user interface
- **Tailwind CSS** for styling
- **Firebase Authentication** for secure login and registration
- **Axios** for API requests
- **React Router DOM** for navigation
- **JWT Authentication** for securing private routes


## **Features**
- 🔒 **Authentication System**:
  - JWT-based authentication for secure access
- 📦 **API Endpoints**:
  - CRUD operations for users, tutors, and bookings
- 🔍 **Search Functionality** for filtering tutors by language
- 📊 **Data Management**:
  - Booked tutors, reviews, and tutorials
- 🌐 Secure and production-ready server with proper error handling
- 🔄 **Pagination** for tutors on the Find Tutors page

---

 ## Backend 
## **Backend  Technologies Used**
- **Node.js** for server-side scripting
- **Express.js** for API and routing
- **MongoDB** with **Mongoose** for database management
- **JWT Authentication** for secure private routes
- **dotenv** for environment variable management
- **CORS** for handling cross-origin requests



## **API Endpoints**

### **Authentication**
- **Register a User**  
  `POST /register`  
  Registers a new user in the system.

- **Login**  
  `POST /users`  
  Authenticates a user and provides a JWT token.

- **Logout**  
  `POST /logout`  
  Logs out the user and clears the authentication token from cookies.

- **JWT Authentication**  
  `GET /jwt`  
  Verifies the JWT token from cookies to authenticate the user.

---

### **User Management**
- **Get All Users**  
  `GET /users`  
  Retrieves a list of all registered users.

- **Get User Details**  
  `GET /user/find/:id`  
  Fetches details of a specific user using their ID.

- **Update User**  
  `PATCH /users`  
  Updates a user's details in the database.

- **Delete User**  
  `DELETE /users/:id`  
  Deletes a user by their ID.

---

### **Tutorial Management**
- **Add a Tutorial**  
  `POST /addtutorial`  
  Adds a new tutorial to the system.

- **Get All Tutorials**  
  `GET /products`  
  Retrieves all available tutorials.

- **Get All Tutorials (Alternative)**  
  `GET /allproducts`  
  Retrieves all tutorials (alternative endpoint).

- **Get My Tutorials**  
  `GET /mytutorials/:email`  
  Retrieves the list of tutorials created by the logged-in user (JWT-protected).

- **Get a Single Tutorial**  
  `GET /tutorial/:tutorialId`  
  Fetches details of a single tutorial using its ID.

- **Get Tutor by Email**  
  `GET /tutor/:email`  
  Retrieves tutor details using their email address.

- **Find Tutorials by Language**  
  `GET /findLanguage/`  
  Searches for tutorials filtered by a specific language.

- **Update a Tutorial**  
  `PUT /updateTutorial/:id`  
  Updates a specific tutorial using its ID.

- **Delete a Tutorial**  
  `DELETE /tutorial/:id`  
  Deletes a tutorial using its ID.

---

### **Booking Management**
- **Add a Booking**  
  `POST /addbooked`  
  Creates a booking for a tutorial.

- **Get My Booked Tutorials**  
  `GET /mybooked/:email`  
  Retrieves a list of tutorials booked by the logged-in user.

- **Update Tutor Review**  
  `PATCH /updatedReview/:tutorId`  
  Updates a review for a specific tutor.

---

### **Reviews**
- **Create a Review**  
  `POST /reviews`  
  Adds a new review for a tutorial.

- **Get All Reviews**  
  `GET /reviews`  
  Fetches all reviews available in the system.

- **Get Review by ID**  
  `GET /reviews/:id`  
  Retrieves details of a review using its ID.

- **Update a Review**  
  `PUT /reviews/:id`  
  Updates an existing review by its ID.

- **Delete a Review**  
  `DELETE /reviews/:id`  
  Deletes a review using its ID.

---

### **Statistics**
- **Get Stats**  
  `GET /stats`  
  Retrieves overall statistics about tutorials, bookings, or users.

---

### **Root Endpoint**
- **Test API Status**  
  `GET /`  
  Confirms the API is running successfully.



