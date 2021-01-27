import React from 'react';
import data from './data.js';
import ExpenseListItem from './ExpenseListItem';

class MainContainer extends React.Component{
  //update expenses based on filter
    //if filters not on all, set all expenses to false
  state ={
    search: [],
    expense: {}
  }

  renderExpenses=()=>{
    let answerObj = [];
    this.state.search.filter(searchTerm => {
        if(this.props.searchTerm === "Savings"){
          answerObj.push(searchTerm.monthly_savings) 
        } else if (this.props.searchTerm === "Expenses"){
           answerObj.push(searchTerm.monthly_expenses) 
          
        } else if (this.props.searchTerm === "Income"){
           answerObj.push(searchTerm.monthly_income) 
        } else {
          answerObj.push(searchTerm)
        }
        return answerObj;
      })

    return answerObj.map((expense, indx) => {
      return <ExpenseListItem key={indx} expense={expense} searchTerm={this.props.searchTerm}/>
    })
  }

  componentDidMount(){
    this.setState({
      search: data
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