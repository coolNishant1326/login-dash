import React, { useContext } from 'react';
import Context from '../context/AuthContext';
import {Route,Redirect } from 'react-router-dom';
const Profile=()=>{
    const logger = useContext(Context);
    return(
        <div>
            <Route>
            <h1>Profile</h1>
            {
                logger.loggedIn?"this is your profile": 
                <Redirect to="/" />
            }
            </Route>
        </div>
    );
};
export default Profile;