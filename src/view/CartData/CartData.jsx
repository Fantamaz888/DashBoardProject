import React from "react";
import Style from './CartData.module.css'

export const CartData = ({text , value , image , color}) => {
     return (
        <div className={Style.cards}>
            <div className={Style.header_cards}>
                <p>{value}</p>
                {image && (<img src={image} className={Style.Icon} />)}
            </div>
            <div className={Style.footer_cards}>
                <p>{text}</p>
            </div>
        </div>
    );



};