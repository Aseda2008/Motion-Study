import React from 'react';
import { Link } from 'react-router-dom';

const StudyAbroad = () => {
    return (
        <div>
           <Link to={"/country"}> <button>Explore</button></Link>
        </div>
    );
};

export default StudyAbroad;