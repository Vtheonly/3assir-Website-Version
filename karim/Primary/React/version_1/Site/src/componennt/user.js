import React from "react";
import "../componennt/styles/user.css";


export function User(props) {
  const backgroundColor = () => {
    if (props.isActive === true) {
      return 'green';
    } else if (props.isActive === 'busy') {
      return 'brown';
    } else if (props.isActive === 'horsServsocst') {
      return 'red';
    } else {
      return 'transparent'; 
    }
  };




  

  return (
    <div class="user_item">
      <div class="lefts">
        <div class="pfp_circle">

     
        <span class="isActive" style={{ backgroundColor: backgroundColor() }}></span>
        </div>
        <div class="info">
          <b class="name">{props.name}</b>
          <p>{props.location}</p>
          <p class="hide" id="longittude">{props.longittude || 2.2}</p>
          <p class="hide" id="latitude">{props.latitude ||35.7}</p>
          <p>{props.car}</p>
        </div>
      </div>

      <div class="rights">
        <b>{props.price || 0} DA / KM</b>


        <div class="cnt-btn" >
          Contact 
        </div>



        {/* score */}
        <div>
          {/* <img src={Heart} alt="Description" /> */}
          <br />
          <span>{props.score || 12}</span>
        </div>
      </div>


    </div>
  );
}

export default User;
