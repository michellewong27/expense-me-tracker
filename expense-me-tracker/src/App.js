import './App.css';
import React from 'react';
import data from './data.js';

class App extends React.Component{
  renderExpenses(){
      return data.map(expense => {
        return <div className="expense" id={expense.id}>
          <h1 id={expense.id}>{expense.name}'s Expense Tracker</h1>
          <h1>Monthly Savings</h1>
          <h2>Emergency Fund: ${expense.monthly_savings.emergency_fund}</h2>
          <h2>Investments: ${expense.monthly_savings.investments}</h2>
          <h2>Retirement: ${expense.monthly_savings.retirement}</h2>
          <h1>Monthly Expenses</h1>
          <h2>Food: ${expense.monthly_expenses.food}</h2>
          <h2>CLothing: ${expense.monthly_expenses.clothing}</h2>
          <h2>Housing: ${expense.monthly_expenses.housing}</h2>
          <h2>Medical: ${expense.monthly_expenses.medical}</h2>
          <h2>Transportation: ${expense.monthly_expenses.transportation}</h2>
          <h2>Personal: ${expense.monthly_expenses.personal}</h2>
          <h1>Monthly Income</h1>
          <h2>${expense.monthly_income}</h2>
        </div>
      })
    }

  render(){
    return (
    <div className="App">
      <h1>Welcome to your Expense-Me-Tracker</h1>
      {this.renderExpenses()}
    </div>
    );
  }
}

export default App;
