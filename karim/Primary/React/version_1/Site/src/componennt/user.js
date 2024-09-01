import React from "react";
import "../componennt/styles/user.css";



export function User(props) {
  return (
    <div class="user_item">
      <div class="lefts">
        <div class="pfp_circle"></div>

        <div class="info">
          <b class="name">{props.name}</b>
          <p>{props.location}</p>
          <p>{props.car}</p>
        </div>
      </div>

      <div  class="rights">
      <b>{props.price || 0} DA / KM</b>

      {/* do a tonary op for is active  */}
        <div class="cnt-btn">
          Contact <span class="active"></span>{" "}
        </div>



        {/* score */}
        <div> 
        {/* <img src={Heart} alt="Description" /> */}
<br/>
          <span>{props.score||12}</span>
        </div>
      </div>


    </div>
  );
}

export default User;
