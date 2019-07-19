/*eslint-disable*/
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import Controls from '../Controls/Controls';
import Balance from '../Balance/Balance';
import TansactionHistory from '../TransactionHistory/TransactionHistory';

import styles from './Dashboard.module.css';

const stateSum = items => {
  const depositsArr = items.filter(el => el.type === 'Deposits');
  const depositsSumm = depositsArr.reduce(
    (acc, el) => (acc += el.inputValue),
    0,
  );
  const withdrowArr = items.filter(el => el.type === 'Withdrow');
  const withdrowSumm = withdrowArr.reduce(
    (acc, el) => (acc += el.inputValue),
    0,
  );
  const newBalance = depositsSumm - withdrowSumm;

  const stateObj = {
    balance: newBalance,
    deposits: depositsSumm,
    withdrow: withdrowSumm,
  };
  return stateObj;
};

class Dashboard extends Component {
  state = {
    inputValue: '',
    transactions: [],
    balance: 0,
    deposits: 0,
    withdrow: 0,
  };

  componentDidMount() {
    if (localStorage.getItem('transactions')) {
      const transactions = localStorage.getItem('transactions');
      this.setState({
        transactions: JSON.parse(transactions),
        balance: stateSum(JSON.parse(transactions)).balance,
        deposits: stateSum(JSON.parse(transactions)).deposits,
        withdrow: stateSum(JSON.parse(transactions)).withdrow,
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { transactions } = this.state;
    if (prevState.transactions !== this.state.transactions) {
      this.setState({
        balance: stateSum(transactions).balance,
        deposits: stateSum(transactions).deposits,
        withdrow: stateSum(transactions).withdrow,
      });
      localStorage.setItem('transactions', JSON.stringify(transactions));
    }
  }

  hendleGetValue = e => {
    this.setState({ inputValue: e.target.value });
  };

  hendleDeposits = () => {
    const { inputValue } = this.state;
    const numberValue = Number(inputValue);
    if (numberValue > 0) {
      const createObj = {
        id: shortid.generate(),
        date: new Date().toLocaleString(),
        inputValue: numberValue,
        type: 'Deposits',
      };
      this.setState(state => ({
        transactions: [...state.transactions, createObj],
      }));
      this.resetInput();
    } else {
      alert('Incorrect number');
    }
  };

  hendleWithdrow = () => {
    const { inputValue, balance, transactions } = this.state;
    const numberValue = Number(inputValue);
    if (balance >= numberValue) {
      const createObj = {
        id: shortid.generate(),
        date: new Date().toLocaleString(),
        inputValue: numberValue,
        type: 'Withdrow',
      };
      this.setState(state => ({
        transactions: [...state.transactions, createObj],
      }));
      this.resetInput();
    } else {
      alert('So close');
    }
  };

  test = () => {
    const { transactions } = this.state;
    const stateS = stateSum(transactions);
    this.setState({
      balance: stateS.balance,
      deposits: stateS.deposits,
      withdrow: stateS.withdrow,
    });
    console.log(this.state);
  };

  resetInput = () => {
    this.setState({
      inputValue: '',
    });
  };

  render() {
    const {
      balance,
      withdrow,
      deposits,
      transactions,
      inputValue,
    } = this.state;
    const showDeposits = stateSum(transactions);
    console.log(showDeposits);

    return (
      <div>
        <Controls
          inputValue={inputValue}
          hendleGetValue={this.hendleGetValue}
          hendleDeposits={this.hendleDeposits}
          hendleWithdrow={this.hendleWithdrow}
        />
        <Balance
          balance={balance}
          summDeposits={deposits}
          summWithdrow={withdrow}
        />
        <TansactionHistory transactions={transactions} />
      </div>
    );
  }
}

export default Dashboard;
