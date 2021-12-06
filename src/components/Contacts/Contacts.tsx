import React from "react"
import s from "./css/Contacts.module.css"

import logoIcon from "../../images/icons/header-logo.svg"
import locationIcon from "../../images/icons/contacts-location.svg"
import callingIcon from "../../images/icons/contacts-calling.svg"
import messagesIcon from "../../images/icons/contacts-message.svg"

const Contacts: React.FC = (props) => {

    return (
        <div className={s.contacts}>
            <div className={s.contacts__logo}>
               <img src={logoIcon} alt="Error" />
            </div>
            <div className={s.contacts__сolumns}>
                <div className={`${s.contacts__сolumns__item} ${s.contacts__сolumns__item__1}`}>
                    <div className={s.contacts__сolumns__item__icon}>
                        <img src={locationIcon} alt="Error"/>
                    </div>
                    <div className={s.contacts__сolumns__item__text}>
                        70 West Buckingham Ave.<br /> Farmingdale, NY 11735
                    </div>
                </div>
                <div className={`${s.contacts__сolumns__item} ${s.contacts__сolumns__item__2}`}>
                    <div className={s.contacts__сolumns__item__icon}>
                        <img src={messagesIcon} alt="Error"/>
                    </div>
                    <div className={s.contacts__сolumns__item__text}>
                        contact@greenshop.com
                    </div>
                </div>
                <div className={`${s.contacts__сolumns__item} ${s.contacts__сolumns__item__3}`}>
                    <div className={s.contacts__сolumns__item__icon}>
                        <img src={callingIcon} alt="Error"/>
                    </div>
                    <div className={s.contacts__сolumns__item__text}>
                        +88 01911 717 490
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Contacts