'use client';
import React, { useState } from 'react';
import styles from './ChanelSelect.module.css';

const ChanelSelect = ({ channels }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [tempChannel, setTempChannel] = useState('Все каналы');
  const [appliedChannel, setAppliedChannel] = useState('Все каналы');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const allChannels = ['Все каналы', ...(channels || [])];

  const handleSelectChannel = (channel) => {
    setTempChannel(channel);
    setIsDropdownOpen(false);
  };

  const handleApply = () => {
    setAppliedChannel(tempChannel);
    setIsOpen(false);
    setIsDropdownOpen(false);
  };

  const handleReset = () => {
    setTempChannel('Все каналы');
    setAppliedChannel('Все каналы');
    setIsOpen(false);
    setIsDropdownOpen(false);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
    setIsDropdownOpen(false);
  };

  const isChanged = tempChannel !== appliedChannel;

  return (
    <div className={styles.wrapper}>
      {/* Кнопка для десктопа */}
      <div
        className={styles.mainButton}
        onClick={() => setIsOpen(!isOpen)}
      >
        {appliedChannel}
        <span className={styles.arrow}>⌄</span>
      </div>

      {/* Кнопка cta.svg для мобильных */}
      <button
        className={styles.mobileButton}
        onClick={() => setIsOpen(true)}
        aria-label="Открыть фильтры"
      >
        <img src="/assets/cta.svg" alt="Фильтры" className={styles.ctaIcon} />
      </button>

      {/* Оверлей для мобильных */}
      {isOpen && (
        <div
          className={styles.overlay}
          onClick={handleCloseModal}
        />
      )}

      {isOpen && (
        <div className={styles.dropdown} onClick={(e) => e.stopPropagation()}>
          <div className={styles.header}>
            <span>Фильтры</span>
            <button
              className={styles.close}
              onClick={handleCloseModal}
              aria-label="Закрыть"
            >
              ✕
            </button>
          </div>

          <div className={styles.dropdownContainer}>
            <div
              className={styles.dropdownButton}
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <span>{tempChannel}</span>
              <span className={`${styles.dropdownArrow} ${isDropdownOpen ? styles.dropdownArrowOpen : ''}`}>⌄</span>
            </div>

            {isDropdownOpen && (
              <div className={styles.dropdownList}>
                {allChannels.map((channel) => (
                  <div
                    key={channel}
                    className={`${styles.dropdownOption} ${tempChannel === channel ? styles.dropdownOptionSelected : ''}`}
                    onClick={() => handleSelectChannel(channel)}
                  >
                    {channel}
                    {tempChannel === channel && (
                      <span className={styles.check}>✔</span>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className={styles.footer}>
            <button
              className={isChanged ? styles.btnApply : styles.btnDisabled}
              onClick={handleApply}
              disabled={!isChanged}
            >
              Применить фильтры
            </button>

            <button
              className={styles.btnReset}
              onClick={handleReset}
            >
              Сбросить
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChanelSelect;
