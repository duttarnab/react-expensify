import React from 'react';
import ReactDOM from 'react-dom';
import {NavLink} from 'react-router-dom';


const Header = () => (
    <header>
        <h1>Expensify Application</h1>
        <NavLink to='/' exact={true} activeClassName='is-active'>Home</NavLink>
        <NavLink to='/Create' activeClassName='is-active'>Add Expense</NavLink>
        <NavLink to='/edit' activeClassName='is-active'>Edit Expense</NavLink>
        <NavLink to='/help' activeClassName='is-active'>Help</NavLink>
    </header>
);

export default Header;