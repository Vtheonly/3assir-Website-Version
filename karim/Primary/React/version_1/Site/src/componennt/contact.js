import React from "react";


export function Contact() {

    return (

        <div>



            <div className="profile">
                <div className="pfp_circle"></div>
                <h1 className="profile_name" id="resname">John Doe</h1>
            </div>
            <div className="details">
                <div className="detail phone_number" id="resphone"></div>
                <div className="detail " id="resdescription" ></div>
                <div className="detail where" >Location</div>
            </div>


        </div>
    );
}

export default Contact;
