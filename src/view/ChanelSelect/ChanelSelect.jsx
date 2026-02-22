'use client';
import React, { useState } from 'react';
import styles from './ChanelSelect.module.css';

const ChanelSelect = ({ channels }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [tempChannel, setTempChannel] = useState('Все каналы');
  const [appliedChannel, setAppliedChannel] = useState('Все каналы');
  const [isStepConfirm, setIsStepConfirm] = useState(false);

  const handleSelectChannel = (channel) => {
    setTempChannel(channel);
    setIsStepConfirm(true);
  };

  const handleApply = () => {
    setAppliedChannel(tempChannel);
    setIsOpen(false);
    setIsStepConfirm(false);
  };

  const handleReset = () => {
    setTempChannel('Все каналы');
    setAppliedChannel('Все каналы');
    setIsOpen(false);
    setIsStepConfirm(false);
  };

  const isChanged = tempChannel !== appliedChannel;

  return (
    <div className={styles.wrapper}>
      <div
        className={styles.mainButton}
        onClick={() => setIsOpen(!isOpen)}
      >
        {appliedChannel}
        <span className={styles.arrow}>⌄</span>
      </div>

      {isOpen && (
        <div className={styles.dropdown}>
          <div className={styles.header}>
            <span>Фильтры</span>
            <button
              className={styles.close}
              onClick={() => setIsOpen(false)}
            >
              ✕
            </button>
          </div>

          {!isStepConfirm ? (
            <div className={styles.list}>
              {channels?.map((channel) => (
                <div
                  key={channel}
                  className={styles.option}
                  onClick={() => handleSelectChannel(channel)}
                >
                  {channel}
                  {tempChannel === channel && (
                    <span className={styles.check}>✔</span>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div
              className={styles.selectedPreview}
              onClick={() => setIsStepConfirm(false)}
            >
              {tempChannel}
            </div>
          )}

          <div className={styles.footer}>
            <button
              className={isChanged ? styles.btnApply : styles.btnDisabled}
              onClick={handleApply}
              disabled={!isChanged}
            >
              Применить фильтры
            </button>

            {(appliedChannel !== 'Все каналы' ||
              tempChannel !== 'Все каналы') && (
              <button
                className={styles.btnReset}
                onClick={handleReset}
              >
                Сбросить
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ChanelSelect;
