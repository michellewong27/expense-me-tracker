import './App.css';
import React from 'react';
import Form from'./Form';
import FilterContainer from './FilterContainer';
import MainContainer from './MainContainer';

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
      <FilterContainer />
      <Form />
      <MainContainer />
    </div>
    );
  }
}

export default App;