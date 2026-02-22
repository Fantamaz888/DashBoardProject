import React from 'react'
import Style from './Sidebar.module.css'

export const Sidebar = ({ isOpen = false, onClose }) => {
    return (
        <>
        {onClose && (
            <div
                className={`${Style.Overlay} ${isOpen ? Style.OverlayVisible : ''}`}
                onClick={onClose}
                aria-hidden="true"
            />
        )}
        <div className={`${Style.Sidebar} ${isOpen ? Style.SidebarOpen : ''}`}>
                <div>
                    <div className={Style.CompanyLogo}>
                        <img className={Style.Logo} src="/assets/Sidebar/LOGO.svg" alt="" />
                        <img className={Style.CaretDoubleLeft} src="/assets/Sidebar/CaretDoubleLeft.svg" alt="" />
                    </div>
                    <div className={Style.NavButtons}>
                        <div className={Style.NavItem}>
                            <img className={Style.SquaresFour} src="/assets/Sidebar/SquaresFour.svg" alt="" />
                        </div>
                        <div className={Style.NavItem}>
                            <img className={Style.ChatCircleDots} src="/assets/Sidebar/ChatCircleDots.svg" alt="" />
                        </div>
                        <div className={Style.NavItem}>
                            <img className={Style.ShareNetwork} src="/assets/Sidebar/ShareNetwork.svg" alt="" />
                        </div>
                        <div className={Style.NavItem}>
                            <img className={Style.Users} src="/assets/Sidebar/Users.svg" alt="" />
                        </div>
                        <div className={Style.NavItem}>
                            <img className={Style.Coins} src="/assets/Sidebar/Coins.svg" alt="" />
                        </div>
                    </div>
                </div>
                <div className={Style.ContactButton}>
                    <img className={Style.cta} src="/assets/Sidebar/cta.svg" alt="" />
                </div>
        </div>
        </>
    )
}

