/*eslint-disable*/
import React from 'react';
import styles from './TransactionHistory.module.css';

const TransactionHistory = ({ transactions }) => {
  return (
    <table className={styles.history}>
      <thead>
        <tr>
          <th>Transaction</th>
          <th>Amount</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map(el => (
          <tr key={el.id}>
            <td>{el.type}</td>
            <td>{el.inputValue}$</td>
            <td>{el.date}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
