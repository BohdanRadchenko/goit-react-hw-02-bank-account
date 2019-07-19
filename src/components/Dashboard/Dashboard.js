import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Controls from '../Controls/Controls';
import Balance from '../Balance/Balance';
import TansactionHistory from '../TransactionHistory/TransactionHistory';

import styles from './Dashboard.module.css';

class Dashboard extends Component {
  state = {
    value: '',
    transactions: [],
    balance: 500,
    summDeposits: 50,
    summWithdrow: 165,
  };

  hendleSubmt = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  hendleDeposits = () => {};

  hendleWithdrow = () => {};

  render() {
    const { balance, summDeposits, summWithdrow, transactions } = this.state;
    return (
      <div>
        <Controls />
        <Balance
          balance={balance}
          summDeposits={summDeposits}
          summWithdrow={summWithdrow}
        />
        <TansactionHistory transactions={transactions} />
      </div>
    );
  }
}

export default Dashboard;
