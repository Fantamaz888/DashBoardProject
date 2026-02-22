import React from 'react'
import Style from './Header.module.css'
export const Header = ({ onMenuClick }) => {
    return (
        <div className={Style.Header}>
            <button
                type="button"
                className={Style.MenuButton}
                onClick={onMenuClick}
                aria-label="Открыть меню"
            >
                <span className={Style.MenuLine} />
                <span className={Style.MenuLine} />
                <span className={Style.MenuLine} />
            </button>
            <div className={Style.VectorWrapper}>
                <div>
                    <img className={Style.Vector} src="/assets/Header/Vector.svg" alt="" />
                </div>
            </div>
            <div className={Style.Divider}></div>

            <div className={Style.PersonalInfo}>
                    <img className={Style.Photo} src="/assets/Header/IMG_0273.JPG" alt="" />
                    <p className={Style.Name}>Владислав Титов</p>
                    <img className={Style.CaretDown} src="/assets/Header/CaretDown.svg" alt="" />
                
            </div>

        </div>
    )
}
