import React from 'react'
import Style from './Sidebar.module.css'
export const Sidebar = () => {
    return (
        <div className={Style.Sidebar}>
                <div>
                    <div className={Style.CompanyLogo}>
                        <img className={Style.Logo} src="/assets/Sidebar/LOGO.svg" alt="" />
                        <img className={Style.CaretDoubleLeft} src="/assets/Sidebar/CaretDoubleLeft.svg" alt="" />
                    </div>
                    <div className={Style.NavButtons}>
                        <img className={Style.SquaresFour} src="/assets/Sidebar/SquaresFour.svg" alt="" />
                        <img className={Style.ChatCircleDots} src="/assets/Sidebar/ChatCircleDots.svg" alt="" />
                        <img className={Style.ShareNetwork} src="/assets/Sidebar/ShareNetwork.svg" alt="" />
                        <img className={Style.Users} src="/assets/Sidebar/Users.svg" alt="" />
                        <img className={Style.Coins} src="/assets/Sidebar/Coins.svg" alt="" />
                    </div>
                </div>
                <div className={Style.ContactButton}>
                    <img className={Style.cta} src="/assets/Sidebar/cta.svg" alt="" />
                </div>
        </div>
    )
}

