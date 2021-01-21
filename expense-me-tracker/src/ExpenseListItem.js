import React from 'react';

class ExpenseListItem extends React.Component{
  //if filter is set to certain option, only show div name that matches
    //if im looking at all expenses, or just one category

  render(){
    const {id, name, monthly_income} =this.props.expense;
    const {emergency_fund,investments,retirement} = this.props.expense.monthly_savings;
    const {food, clothing, housing, medical, transportation, personal} = this.props.expense.monthly_expenses;
    return (
      <div className="expense" id={id}>
          <h1 id={id}>{name}'s Expense Tracker</h1>
          <div className="monthly-savings-containter">
            <h1 id="monthly-savings">Monthly Savings</h1>
            <h2 id="emergency-fund">Emergency Fund: ${emergency_fund}</h2>
            <h2 id="investments">Investments: ${investments}</h2>
            <h2 id="retirement">Retirement: ${retirement}</h2>
          </div>
          <div className="monthly-expenses-container">
            <h1 id="monthly-expenses">Monthly Expenses</h1>
            <h2 id="food">Food: ${food}</h2>
            <h2 id="clothing">Clothing: ${clothing}</h2>
            <h2 id="housing">Housing: ${housing}</h2>
            <h2 id="medical">Medical: ${medical}</h2>
            <h2 id="transportation">Transportation: ${transportation}</h2>
            <h2 id="personal">Personal: ${personal}</h2>
          </div>
          <div className="monthly-income-container">
            <h1>Monthly Income</h1>
            <h2>${monthly_income}</h2>
          </div>
        </div>
    )
  }
}

export default ExpenseListItem;