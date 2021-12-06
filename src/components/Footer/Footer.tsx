import React from "react";
import { NavLink } from "react-router-dom";

import s from "./css/Footer.module.css"

import FacebookIcon from "../../images/icons/Facebook-footer.svg"
import InstagramIcon from "../../images/icons/Instagram-footer.svg"
import LinkedinIcon from "../../images/icons/Linkedin-footer.svg"
import TwitterIcon from "../../images/icons/Twitter-footer.svg"
import UnionIcon from "../../images/icons/Union-footer.svg"

import PaymentSystemsIcon from "../../images/icons/Payment-systems.svg"

const Footer: React.FC = (props) => {

    const footerListGenerator = (title: string, list_one: string, list_two: string, list_three: string, list_four: string, list_five: string) => {
        return (
            <div className={s.footer__content__list}>
               <div className={s.footer__content__list__title} >
                   {title}
               </div>
                <ul>
                    <li>
                       <NavLink to={""}>{list_one}</NavLink>
                    </li>
                    <li>
                        <NavLink to={""}>{list_two}</NavLink>
                    </li>
                    <li>
                        <NavLink to={""}> {list_three}</NavLink>
                    </li>
                    <li>
                        <NavLink to={""}>{list_four}</NavLink>
                    </li>
                    <li>
                        <NavLink to={""}>{list_five}</NavLink>
                    </li>
                </ul>
            </div>
        )
    }


    return (
        <div className={s.footer}>
            <div className={s.footer__content}>
                <div className={s.footer__content__listText}>
                    {footerListGenerator("My Account", "My Account", "Our stores", "Contact us", "Career", "Specials" )}
                    {footerListGenerator("Help & Guide", "Help Center", "How to Buy", "Shipping & Delivery", "Product Policy", "How to Return")}
                    {footerListGenerator("Categories", "House Plants", "Potter Plants", "Seeds", "Small Plants", "Accessories")}
                </div>
                <div className={s.footer__content__listIcon}>
                    <div className={s.footer__content__listIcon__title}>
                        Social Media
                    </div>
                    <div className={s.footer__content__listIcon__container}>
                    <div className={s.footer__content__listIcon__item}>
                        <img src={FacebookIcon} alt="Error"/>
                    </div>
                    <div className={s.footer__content__listIcon__item}>
                        <img src={InstagramIcon} alt="Error"/>
                    </div>
                    <div className={s.footer__content__listIcon__item}>
                        <img src={TwitterIcon} alt="Error"/>
                    </div>
                    <div className={s.footer__content__listIcon__item}>
                        <img src={LinkedinIcon} alt="Error"/>
                    </div>
                    <div className={s.footer__content__listIcon__item}>
                        <img src={UnionIcon} alt="Error"/>
                    </div>
                    </div>
                    <div className={s.footer__content__listIcon__PaymentIcon}>
                        We accept
                        <div className={s.footer__content__listIcon__PaymentIcon__img}>
                            <img src={PaymentSystemsIcon} alt="Error"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className={s.footer__copyright}>
                © 2021 GreenShop. All Rights Reserved.
            </div>
        </div>
    )
}

export default Footer