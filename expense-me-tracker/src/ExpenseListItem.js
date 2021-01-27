import React from 'react';

class ExpenseListItem extends React.Component{
  state = {
    savings: false
  }

  showAllResults=()=>{
    const {id, name, monthly_income} =this.props.expense;
    const {emergency_fund,investments,retirement} = this.props.expense.monthly_savings;
    const {food, clothing, housing, medical, transportation, personal} = this.props.expense.monthly_expenses;
    return (
        <div className="expense" id={id}>
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

  renderSavings=()=>{
    const {emergency_fund,investments,retirement} = this.props.expense;
    return (
      <div className="expense" >
          <div className="monthly-savings-containter">
            <h1 id="monthly-savings">Monthly Savings</h1>
            <h2 id="emergency-fund">Emergency Fund: ${emergency_fund}</h2>
            <h2 id="investments">Investments: ${investments}</h2>
            <h2 id="retirement">Retirement: ${retirement}</h2>
          </div>
        </div>
    )
  }

   renderExpenses=()=>{
    const {food, clothing, housing, medical, transportation, personal} = this.props.expense;
    return (
        <div className="monthly-expenses-container">
            <h1 id="monthly-expenses">Monthly Expenses</h1>
            <h2 id="food">Food: ${food}</h2>
            <h2 id="clothing">Clothing: ${clothing}</h2>
            <h2 id="housing">Housing: ${housing}</h2>
            <h2 id="medical">Medical: ${medical}</h2>
            <h2 id="transportation">Transportation: ${transportation}</h2>
            <h2 id="personal">Personal: ${personal}</h2>
          </div>

    )
  }

   renderIncome=()=>{
    return (
          <div className="monthly-income-container">
            <h1>Monthly Income</h1>
            <h2>${this.props.expense}</h2>
          </div> 
    )
  }

  render(){
    console.log(this.props)
    return (
      <div className="expense" >
        {this.props.searchTerm === "Savings" ? this.renderSavings() : null }
        {this.props.searchTerm === "Expenses" ? this.renderExpenses() : null }
        {this.props.searchTerm === "Income" ? this.renderIncome() : null }
        {this.props.searchTerm === "All" ? this.showAllResults() : null }
      </div>
    )
  }
}

export default ExpenseListItem;