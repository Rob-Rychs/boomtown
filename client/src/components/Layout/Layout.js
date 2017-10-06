import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

import Items from '../../containers/Items/Items';
import Header from '../../containers/Header';


const Layout = ({ children }) => (
    <div className="appContentWrapper">
        <div className="appHeader">
            {/* Might want to put your header bar here... */}
            <Header />
        </div>
        <div className="appContent">
            {children}
            <Items />
        </div>
        {/* And a footer here, but not on the login route... */}
    </div>
);

Layout.defaultProps = {
    children: null
};

Layout.propTypes = {
    children: PropTypes.node
};

export default Layout;
