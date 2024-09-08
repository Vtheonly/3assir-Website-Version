import React from "react";


export function Contact() {

    return (

        <div>



            <div class="profile">
                <div class="pfp_circle"></div>
                <h1 class="profile_name" id="resname">John Doe</h1>
            </div>
            <div class="details">
                <div class="detail phone_number" id="resphone">Phone Number: (123) 456-7890</div>
                <div class="detail " id="resdescription" >Description: Example description goes here.</div>
                <div class="detail where" >Location</div>
            </div>


        </div>
    );
}

export default Contact;
