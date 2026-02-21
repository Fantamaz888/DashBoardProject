import React from 'react'
import styles from './Maindata.module.css'
import Card from '../components/Card/Card'
import Section from '../components/Section/Section'

const Maindata = () => {
    return (
        <div className={styles.MainContent}>
            <div className={styles.HeaderMain}>
                <p>Главная</p>
            </div>

            <div className={styles.InfoBoxes}>
                <Section
                    title='Результативность чатов'
                    action={<div style={{ color: '#6E41E2' }}>Все агенты</div>}
                >
                    <Card
                        title='Остаток сообщений'
                        value='1500'
                        icon={<img src='/assets/Maindata/TrendUp.svg' />} />
                    <Card
                        title='Средний расход'
                        value='0'
                        subValue='/день'
                        icon={<img src='/assets/Maindata/TrendDown.svg' />} />
                    <Card
                        title='Прогноз до исчерпания'
                        value='--'
                        icon={<img src='/assets/Maininfo/CalendarX.svg' />} />
                    <Card
                        title='Обработано диалогов'
                        value='1245'
                        icon={<img src='/assets/Maininfo/ChatCircle.svg' />} />
                    <Card
                        title='С виполненой  задачей'
                        value='864'
                        icon={<img src='/assets/Maininfo/CheckCircle.svg' />} />
                    <Card
                        title='Эффективность чатов'
                        value='63%'
                        icon={<img src='/assets/Maininfo/Target.svg' />} />
                </Section>

            </div>


            {/* <div>
                <Cardinfo
                    title='Остаток сообщений'
                    value='1500'
                    icon={<img src='/assets/Maininfo/ChatCircleText.svg' />}
                />

            </div> */}
        </div>

    )
}

export default Maindata