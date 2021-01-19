import './App.css';
import React from 'react';
import data from './data.js';
import ExpenseListItem from './ExpenseListItem';

class App extends React.Component{
  renderExpenses(){
      return data.map(expense => {
        return <ExpenseListItem key={expense.id} expense={expense}/>
      })
    }

    budgetReview(){
      //render total savings, total expenses & monthly income
      //Subtract expenses from income?
    }

  //show the month & previous months in nav bar

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
