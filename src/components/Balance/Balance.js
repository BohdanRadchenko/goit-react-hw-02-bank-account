/*eslint-disable*/
import React from 'react';
import styles from './Balance.module.css';

const Balance = ({ balance, summDeposits, summWithdrow }) => (
  <section className={styles.balance}>
    <span role="img" aria-label="arrow-up">
      ⬆️ {summDeposits} $
    </span>
    <span role="img" aria-label="arrow-down">
      ⬇️ {summWithdrow} $
    </span>
    <span> Balance: {balance} $</span>
  </section>
);

export default Balance;
