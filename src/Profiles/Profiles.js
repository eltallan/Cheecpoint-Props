import React, { Children } from 'react';
//import image  from './image.png' 

const Profile = (props) => {

    return (
        
        <div>
            <p>{props.fullName}</p>
            <p>{props.bio}</p>
            <p>{props.profession}</p>
            <img src={props.img} /> 
            
            
        </div> 

    )
}
export default Profile;