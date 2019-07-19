/*eslint-disable*/
import React from 'react';
import PropTypes from 'prop-types';
import styles from './Controls.module.css';

const Controls = ({
  hendleGetValue,
  hendleDeposits,
  hendleWithdrow,
  inputValue,
}) => {
  return (
    <section className={styles.controls}>
      <input
        className={styles.input}
        type="number"
        name="value"
        onChange={e => hendleGetValue(e)}
        value={inputValue}
      />
      <button type="button" onClick={hendleDeposits}>
        Deposit
      </button>
      <button type="button" onClick={hendleWithdrow}>
        Withdraw
      </button>
    </section>
  );
};
export default Controls;
