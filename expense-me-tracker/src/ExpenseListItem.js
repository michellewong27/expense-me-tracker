import React from 'react';

class ExpenseListItem extends React.Component{
  render(){
    const {id, name, monthly_income} =this.props.expense;
    const {emergency_fund,investments,retirement} = this.props.expense.monthly_savings;
    const {food, clothing, housing, medical, transportation, personal} = this.props.expense.monthly_expenses;
    return (
      <div className="expense" id={id}>
          <h1 id={id}>{name}'s Expense Tracker</h1>
          <h1>Monthly Savings</h1>
          <h2>Emergency Fund: ${emergency_fund}</h2>
          <h2>Investments: ${investments}</h2>
          <h2>Retirement: ${retirement}</h2>
          <h1>Monthly Expenses</h1>
          <h2>Food: ${food}</h2>
          <h2>CLothing: ${clothing}</h2>
          <h2>Housing: ${housing}</h2>
          <h2>Medical: ${medical}</h2>
          <h2>Transportation: ${transportation}</h2>
          <h2>Personal: ${personal}</h2>
          <h1>Monthly Income</h1>
          <h2>${monthly_income}</h2>
        </div>
    )
  }
}

export default ExpenseListItem;