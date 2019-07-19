import React from 'react';
import PropTypes from 'prop-types';
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

Balance.propTypes = {
  balance: PropTypes.number.isRequired,
  summDeposits: PropTypes.string.isRequired,
  summWithdrow: PropTypes.string.isRequired,
};

export default Balance;
