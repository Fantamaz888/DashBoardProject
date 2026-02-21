import React from 'react'
import styles from './Section.module.css'

const Section = ({ title, children, action }) => {
    return (
        <div className={styles.Container}>
            <div className={styles.Header}>
                <h2 className={styles.Title}>{title}</h2>

                {action && (
                    <div className={styles.Actions}>
                        {action}
                    </div>
                )}
            </div>

            <div className={styles.Content}>
                {children}
            </div>
        </div>
    )
}

export default Section