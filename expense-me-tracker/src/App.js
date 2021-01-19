import './App.css';
import React from 'react';
import data from './data.js';
import ExpenseListItem from './ExpenseListItem';

class App extends React.Component{
  state = {
    backgroundColor: 'white',
    fontColor: 'black',
    darkModeBtn: 'Dark Mode'
  }

  darkMode=()=>{
    if(this.state.backgroundColor === 'white'){
      this.setState({
        backgroundColor: 'black',
        fontColor: 'white',
        darkModeBtn: 'Turn off Dark Mode'
      })
    } else {
      this.setState({
        backgroundColor:'white',
        fontColor: 'black',
        darkModeBtn: 'Dark Mode'
      })
    }
  }

  renderExpenses=()=>{
    return data.map(expense => {
      return <ExpenseListItem key={expense.id} expense={expense}/>
    })
  }

  budgetReview=()=>{
    //render total savings, total expenses & monthly income
    //Subtract expenses from income?
  }

  //show the month & previous months in nav bar

  render(){
    return (
    <div className="App" style={{backgroundColor: this.state.backgroundColor, color:this.state.fontColor}}>
      <button onClick={this.darkMode}>{this.state.darkModeBtn}</button>
      <h1>Welcome to your Expense-Me-Tracker</h1>
      {this.renderExpenses()}
    </div>
    );
  }
}

export default App;