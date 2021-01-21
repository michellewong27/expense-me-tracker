import React from 'react';
import data from './data.js';
import ExpenseListItem from './ExpenseListItem';

class MainContainer extends React.Component{
  //update expenses based on filter
    //if filters not on all, set all expenses to false
  // state ={
  //   expenses: [],
  //   allExpenses: true
  // }

  //**PROPS => this.props.searchTerm */
  //use this searchTerm that's submitted to show the data that should be on the page


  renderExpenses=()=>{
    return data.map((expense, indx) => {
      return <ExpenseListItem key={indx} expense={expense}/>
    })
  }

  // if filters on, then show different data from Expense List Item
  // filterExpenses=()=>{
  //   fetch('http://192.168.1.6:3000/')
  //   .then( res => res.json())
  //   .then( data => {
  //     console.log(data)
  //   })
  // }
  
  render(){
    return (
      <div className="expenses-holder">
        {/* <button onClick={this.filterExpenses}>Apply Filter</button> */}
         {this.renderExpenses()}
      </div>
    )
  }
}

export default MainContainer