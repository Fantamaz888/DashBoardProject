import React from 'react'
import Style from './Maindata.module.css'
import { CartData } from "@/view/CartData/CartData";
import upSvg from "@/view/CartData/img/up.svg";
import ChanelSelect from '../ChanelSelect/ChanelSelect';
export const Maindata = () => {
    const channels = ['Telegram', 'Viber', 'Facebook', 'Instagram'];
    return (

        <div className={Style.main_content}>
                <h2 className={Style.h2}>Главная</h2>
                <div className={Style.chat}>
                    <div className={Style.chat_header}>
                        <h2>Результативность чатов</h2>
                        <ChanelSelect channels={channels} />
                    </div>
                    <div className={Style.cards}>
                        <CartData
                    text="Всего начатых чатов"
                    value="654"
                    image="/assets/icons/up.svg"
                    color="#E3F2FD"
                     />
                       <CartData
                    text="Неотвеченные чаты"
                    value="124"
                    image="/assets/icons/down.svg"
                    color="#E3F2FD"
                     />
                       <CartData
                    text="Отвеченные чаты"
                    value="430"
                    image="/assets/icons/up.svg"
                    color="#E3F2FD"
                     />
                      <CartData
                    text="Чаты с выполненной задачей"
                    value="--"
                    image="/assets/icons/cr.svg"
                    color="#E3F2FD"
                     />
                        <CartData
                    text="Чаты с вызовом менеджера"
                    value="3"
                    image="/assets/icons/nodata.svg"
                    color="#E3F2FD"
                     />
                       <CartData
                    text="Выполнение повторных задач"
                    value="286"
                    image="/assets/icons/down.svg"
                    color="#E3F2FD"
                     />
                    </div>
                   
                </div>
        </div>
     
    );
};
