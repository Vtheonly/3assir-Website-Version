import React from "react";
import "../componennt/styles/user.css";


export function User(props) {
  const backgroundColor = () => {
    if (props.isActive === 'Free') {
      return 'green';
    } else if (props.isActive === 'Busy') {
      return 'brown';
    } else if (props.isActive === 'Out of Service') {
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
          <b class="name" id="name">{props.name}</b>
          <p>{props.location}</p>

          <p class="hide" id="phone" >{props.phone}</p>
          <p class="hide" id="description" >{props.description}</p>



          <p class="hide" id="longittude">{props.longitude}</p>
          <p class="hide" id="latitude">{props.latitude}</p>
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
