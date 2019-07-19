import React from 'react';
import PropTypes from 'prop-types';
import styles from './Controls.module.css';

const Controls = () => {
  return (
    <section className={styles.controls}>
      <input
        className={styles.input}
        type="number"
        // value={value}
        name="value"
        // placeholder="title"
        onChange={this.hendleSubmt}
      />
      <button type="button" onCklick={this.hendleDeposits}>
        Deposit
      </button>
      <button type="button" onCklick={this.hendleWithdrow}>
        Withdraw
      </button>
    </section>
  );
};
export default Controls;
