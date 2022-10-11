import React, { useContext, useState } from 'react';
import Context from '../context/AuthContext';

const Home=()=>{
    // const [loggedIn,setLoggedIN] = useState(false);
    const logger=useContext(Context)
    // const toggleLogin= () =>{
    //     logger.togglelogin();
    // }
    return(
        <div>
            <h1>Home</h1>
            <p>login to access Dashboard and profile</p>
            {
                logger.loading?"loading...":

                  logger.loggedIn?

                    <button onClick={logger.logout}>logout</button>:
                    
                    <button onClick={logger.login}>login</button>
            }
        </div>
    );
};
export default Home;