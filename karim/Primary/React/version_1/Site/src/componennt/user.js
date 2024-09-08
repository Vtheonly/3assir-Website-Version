import React from "react";
import "../componennt/styles/user.css";


export function User(props) {

  // for is active or not
  const backgroundColor = () => {
    if (props.isActive === 'Free') {
      return 'green';
    } else if (props.isActive === 'Busy') {
      return 'yellow';
    } else if (props.isActive === 'Out of Service') {
      return 'red';
    } else {
      return 'transparent';
    }
  };





  return (
    <div className="user_item">
      <div className="lefts">
        <div className="pfp_circle">
          <span className="isActive" style={{ backgroundColor: backgroundColor() }}></span>
        </div>
        <div className="info">
          {/* visisble */}
          <b className="name" id="name">{props.name}</b>
          <p className="location">{props.location}</p>
          <p>{props.car}</p>
          {/* for result parsing */}
          <p className="hide" id="longittude">{props.longitude}</p>
          <p className="hide" id="latitude">{props.latitude}</p>
          <p className="hide" id="phone" >{props.phone}</p>
          <p className="hide" id="description" >{props.description}</p>
        </div>
      </div>

      <div className="rights">
        <b className="priceS">{props.price || 0} DA / KM</b>
        <div className="cnt-btn" >
          Contact
        </div>
      </div>
    </div>
  );
}

export default User;
