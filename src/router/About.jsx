import React, { useContext } from 'react';
import Context from '../context/AuthContext';

const About=()=>{
const logger = useContext(Context);

return(
<div>
    <h1>About</h1>
    <p>{logger.loggedIn?
        "You are logged in":
        "you are logged out"
        }
    </p>
</div>
);
};
export default About;