import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './css/Header.module.css';

import headerLogo from "../../images/icons/header-logo.svg";
import headerSearch from "../../images/icons/header-search.svg";
import headerCart from "../../images/icons/header-cart.svg";
import headerLogin from "../../images/icons/header-login.svg";


const Header: React.FC = (props) => {
    const arrHeaderName: Array<string> = ['Home', 'Shop', 'Plant Care', 'Blogs'];

    const headerNavGenerator = (item: Array<string>) => {
        return item.map(i => (<li className={s.header__item}>
            <NavLink to={''} className={s.header__item_link}>
                {i}
            </NavLink>
        </li>))
    };

    return (
        <div className={s.header}>
            <NavLink to={''} className={s.header__logo}>
                <img src={headerLogo} alt="Header logo" className={s.header__logoimg}/>
            </NavLink>
            <nav className={s.header__nav}>
                <ul className={s.header__list}>
                    {headerNavGenerator(arrHeaderName)}
                </ul>
            </nav>
            <div className={s.header__actions}>
                <NavLink to={''} className={`${s.header__actions_icon} ${s.header__search}`}>
                    <img src={headerSearch} alt=""/>
                </NavLink>
                <NavLink to={''} className={`${s.header__actions_icon} ${s.header__cart} `}>
                    <img src={headerCart} alt=""/>
                </NavLink>
                <NavLink to={''} className={`${s.header__actions_icon} ${s.header__login}`}>
                    <img src={headerLogin} className={s.header__login_img} alt=""/>
                    Login
                </NavLink>
            </div>
        </div>
    )
};

export default Header