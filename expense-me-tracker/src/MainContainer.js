import React from 'react';
import data from './data.js';
import ExpenseListItem from './ExpenseListItem';

class MainContainer extends React.Component{

  renderExpenses=()=>{
    return data.map(expense => {
      return <ExpenseListItem key={expense.id} expense={expense}/>
    })
  }

  // if filters on, then show different data from Expense List Item

  render(){
    return (
      <div>
         {this.renderExpenses()}
      </div>
    )
  }
}

export default MainContainer