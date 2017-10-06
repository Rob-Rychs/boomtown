import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import SelectField from 'material-ui/SelectField';
import RaisedButton from 'material-ui/RaisedButton';
import MenuItem from 'material-ui/MenuItem';

import logo from '../../images/boomtown-logo.svg';

import './styles.css';

const names = [
    'Electronics',
    'Household Items',
    'Musical Instruments',
    'Physical Media',
    'Recreational Equipment',
    'Sporting Goods',
    'Tools',
];


class Header extends Component {

    state = {
        values: [],
        filters: [...names]
    }

    handleChange = (event, index, values) => this.setState({ values });

    getMenuItems = () => {
        const { filters, values } = this.state;
        return filters.map((name) => (
            <MenuItem
                key={name}
                insetChildren
                checked={values && values.indexOf(name) > -1}
                value={name}
                primaryText={name}
            />
    ));
    }

    render() {
        const { values } = this.state;
        return (
                <AppBar
                    iconElementLeft={
                        <div className="logo">
                            <img src={logo} className="logo" alt="Boomtown Logo" />
                        </div>}
                    title={
                        <SelectField
                            hintText="Filter By Tag"
                            className="selectfield"
                            multiple
                            value={values}
                            onChange={this.handleChange}
                            style={{ margin: 'auto 0', width: 300 }}
                        >
                            {this.getMenuItems()}
                        </SelectField>
                    }
                    style={{ backgroundColor: 'white', height: '60px', width: '100vw' }}
                >
                    <div className="buttons"><RaisedButton className="profile-button" label="My Profile" primary style={{ fontColor: 'white' }} />
                        <RaisedButton label="Logout" labelColor="white" backgroundColor="rgb(38, 50, 56)" /></div>
                </AppBar>
        );
    }
}

export default Header;
