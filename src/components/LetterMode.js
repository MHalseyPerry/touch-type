import React, { useState } from 'react';
import { useEventListener } from '../hooks/useEventListener';
import { useKeyboardLayouts } from '../contexts/KeyboardLayoutContext';
import { useStyles } from './LetterMode.styles';
import { KeyboardLayout } from './KeyboardLayout';

function getRandKey(keyMap) {
  const keys = Object.keys(keyMap);
  const key = keys[Math.floor(Math.random() * keys.length)];
  const regEx = /[~`!@#$%^&*(){}[\];:"'<,.>?/\\|_+=-]/g;
  const isPunctuation = regEx.test(keyMap[key]);
  return parseInt(isPunctuation ? getRandKey(keyMap) : key, 10);
}

export const LetterMode = (props) => {
  const { primaryKeymap, punctuation, setPunctuation } = useKeyboardLayouts();
  const styles = useStyles();

  const [currentKey, setCurrentKey] = useState(getRandKey(primaryKeymap));
  const [futureKey, setFutureKey] = useState(getRandKey(primaryKeymap));
  const [pastKey, setPastKey] = useState(getRandKey(primaryKeymap));
  const [className, setClassName] = useState('');
  const [score, setScore] = useState(0);

  useEventListener(
    'keyup',
    (e) => {
      if (e.keyCode === currentKey) {
        setScore((prevScore) => prevScore + 10);
        setPastKey(currentKey);
        setCurrentKey(futureKey);
        setFutureKey(getRandKey(primaryKeymap));
      } else {
        setScore((PrevScore) => PrevScore - 10);
      }
      setClassName('');
    },
    [currentKey, primaryKeymap, pastKey, futureKey],
  );

  useEventListener('keydown', (e) => {
    if (e.keyCode === currentKey) {
      setClassName('correct');
    } else {
      setClassName('incorrect');
    }
  });

  return (
    <>
      <div className={styles.scoreBox}>{`Score: ${score}`}</div>
      <div className={styles.box}>
        <div className={styles.carousel}>
          <div className={styles.outer}>
            <p className={styles.textSmall}>{primaryKeymap[pastKey]}</p>
          </div>
          <div className={styles.main}>
            <p
              className={`${styles.text} ${className ? styles[className] : ''}`}
            >
              {primaryKeymap[currentKey]}
            </p>
          </div>
          <div className={styles.outer}>
            <p className={styles.textSmall}>{primaryKeymap[futureKey]}</p>
          </div>
        </div>
      </div>
      <KeyboardLayout currentKey={currentKey} />
    </>
  );
};
