import React from 'react';

class Form extends React.Component{
  render(){
    return (
      <div className="form-containter">
        <form id="expense-form">
        <div className="form-savings" style={{float:'left','margin-right':"20px"}}>
            <h3>Savings</h3>
            <label>Emergency Fund:</label>
            <input type="text" name="Emergency Fund"></input>
            <label>Investments: <input type="text"></input></label>
            <label>Retirement: <input type="text"></input></label>
          </div>
          <div className="form-expenses" style={{float:'left','margin-right':"20px"}}>
            <h3>Expenses</h3>
            <label>Food: <input type="text"></input></label>
            <label>Clothing: <input type="text"></input></label>
            <label>Housing: <input type="text"></input></label>
            <label>Medical: <input type="text"></input></label>
            <label>Transportation: <input type="text"></input></label>
            <label>Personal: <input type="text"></input></label>
          </div>
          <div className="form-income" style={{float:'left','margin-right':"20px"}}>
            <h3>Income</h3>
            <label>Income: <input type="text"></input></label>
          </div>
          <br />
          <button type="submit" className="form-submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default Form;