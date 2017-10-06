import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const NotFound = () => {
    return (
        <div className="not-found">
            <img src="../../images/grumpyCat.svg" alt="grumpy cat says you goofed" className="kitty" />
            <h1> Nope, you shat the bed.</h1>
        </div>
    );
};

export default NotFound;
