### 3assir Project - Updated Detailed Description

#### Website Version
![image](https://github.com/user-attachments/assets/dc92539b-c30b-40e2-a9a5-9ed34a4a1bb6)

The **3assir website** is a simplified platform inspired by Uber, designed to allow users to search for available drivers based on location, car type, and price. The website provides a clean and easy-to-use interface, leveraging modern web development technologies like **React** for the front-end, and **Firebase Firestore** for real-time data management and storage. Here's a breakdown of the main features included in the website version:

1. **Driver Search:**
   - Users can enter their current location and desired destination to find nearby drivers. The app shows available drivers along with their car details, price per kilometer, and availability.
   - The real-time integration with **Firebase Firestore** ensures that users are viewing up-to-date data, making it easy to find the best driver quickly.

2. **Driver Profiles:**
   - Clicking on a driver’s profile reveals more details such as car type, driver ratings, pricing, and contact information.
   - Users can also view a description that the driver has written about themselves, providing extra insight.
   - Each profile includes the driver’s contact information, allowing users to call them directly for quick communication.

3. **Price Estimates:**
   - When a user selects a driver, the website calculates the trip cost based on the driver’s rate and the distance between the user’s pickup and drop-off locations.

4. **User and Driver Information:**
   - The website provides information about the drivers, including their credentials and self-descriptions, which users can access to make a more informed choice.
   - Users can contact drivers directly via phone, which simplifies the interaction for booking rides.

5. **Real-Time Availability:**
   - Driver statuses (active, busy, or unavailable) are updated in real time using **Firebase Firestore**. When a driver becomes available, their information immediately appears in user searches, ensuring a responsive experience.

6. **Tech Stack:**
   - **Front-end:** React
   - **Database:** Firebase Firestore
   - **Back-end:** Node.js with REST APIs to handle requests, real-time driver updates, and user operations.

---

#### Mobile Version

The **3assir mobile app** is built specifically for Android devices using **Java** and serves as the platform for drivers to manage their availability and trip requests. It works seamlessly with the **Firebase Firestore** backend to provide real-time syncing between driver and user activities. Below are the core features of the mobile version:

1. **Driver Registration and Login:**
   - Drivers sign up and log in through the app, providing details such as their name, car model, license, and pricing rate.
   - The app uses **Firebase Authentication** to manage user credentials and keep driver information secure.

2. **Driver Active Status:**
   - Drivers can set their availability status (active or unavailable) with a simple toggle in the app.
   - When a driver sets themselves as "active," they are automatically displayed on the real-time grid for users searching for rides.

3. **Real-Time Driver Grid:**
   - Once a driver goes active, their information, including car type, pricing, and location, is displayed on a real-time grid or map view for users.
   - This allows users to quickly locate available drivers near their current location and view detailed information.

4. **Location Tracking and Map Integration:**
   - The app continuously tracks the driver's GPS location, which is updated in real time in **Firebase Firestore**.
   - This allows users to see the exact location of active drivers as they search for rides.

5. **Pricing Management:**
   - Drivers can update their pricing per kilometer or ride type from the app, ensuring flexibility in setting rates.
   - Pricing data is automatically updated in **Firestore**, reflecting on the website version instantly for users to view.

6. **Trip Requests:**
   - When a user selects a driver for a trip, the driver receives a notification on the mobile app. 
   - Drivers can accept or decline the trip request, and the app keeps track of trip details like distance and pricing.

7. **Tech Stack:**
   - **Mobile Platform:** Android (Java)
   - **Database:** Firebase Firestore for storing and syncing driver locations, statuses, and trip information.

---

### Common Features Across Both Platforms

- **Real-Time Data Syncing:** Both the website and mobile app are powered by **Firebase Firestore**, ensuring that driver availability, location, and trip requests are updated in real-time across both platforms.
- **Driver Management:** Drivers can update their availability status on the mobile app, and users can instantly see these updates when searching for drivers on the website.
- **Scalability:** The architecture is built on Firebase’s scalable infrastructure, allowing 3assir to support an increasing number of drivers and users without sacrificing performance.

### Summary

The **3assir project** provides a simple yet effective ride-hailing platform that integrates a real-time system for users to find available drivers through the **website** and for drivers to manage their availability and trips through the **mobile app**. Built using **React** for the front-end of the website and **Java** for the Android mobile app, both versions are powered by **Firebase Firestore**, providing seamless, real-time interaction between users and drivers.

This platform serves as a small-scale replica of Uber, focusing on essential features like driver search, contact, pricing, and availability tracking, while maintaining flexibility and scalability through cloud services.

