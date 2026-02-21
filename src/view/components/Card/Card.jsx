import React from 'react'
import styles from './Card.module.css'

const Card = ({ title, value, icon, subValue }) => {
    return (
        <div className={styles.Cardinfo}>
            <div className={styles.TopRow}>
                <div className={styles.valueContainer}>
                    <span className={styles.value}>{value}</span>
                    <span className={styles.subValue}>{subValue}</span>
                </div>
                <div className={styles.Icon}>
                    <div className={styles.IconImage}>{icon}</div>
                </div>
            </div>
            <p className={styles.Label}>{title}</p>
        </div>
    )
}

export default Card