import React, { useEffect, useState } from "react";

import { getAllUsers } from "./../back_firebase/firebase";
import { User } from "./user.js"


function Grid() {


  const [data, setData] = useState(null); // State to store fetched data
  const [loading, setLoading] = useState(true); // State to handle loading state
  const [error, setError] = useState(null); // State to handle errors

  useEffect(() => {
    // Fetch data when the component mounts
    async function fetchData() {
      try {
        // const result = await getData("fgh"); // Fetch data
        const result = await getAllUsers();
        setData(result); // Update state with the fetched data
        setLoading(false); // Set loading to false when data is fetched
      } catch (err) {
        setError(err); // Handle any errors
        setLoading(false); // Set loading to false even if there is an error
      }
    }

    fetchData(); // Call the async function
  }, []); // Empty dependency array means this effect runs once after the initial render

  if (loading) {
    return <div>Loading...</div>; // Display a loading message while fetching data
  }

  if (error) {
    return <div>Error: {error.message}</div>; // Display an error message if there’s an error
  }


    return (
      

    <div className="users_grid">
   {data.map((user) => (
      <User 
        key={user.id} // Assuming each user has a unique id property
        name={user.full_name} 
        location={user.location} 
        car={user.car} 
        price={user.price} 
        score={user.score} 
        isActive={user.isActive} 
      />
    ))}
    </div>
        

  );
}

export default Grid;
