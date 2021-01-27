import React from 'react';

class FilterContainer extends React.Component{
  state = {
    searchTerm: 'All'
  }

  //keeps track of changes
  handleChange=(e)=>{
    let newSearchTerm = e.target.value;
    this.setState({
      searchTerm: newSearchTerm
    })
  } 

  //once its actually submitted, send up to app so app can send back to down to ExpenseListItems
  handleSubmit=(e)=>{
    e.preventDefault();
    this.props.updateAppSearchTerm(this.state.searchTerm)
    //clears the form
    e.target.reset()
    this.setState({
      searchTerm: 'All'
    })
  }

  render(){
    return (
      <div className="filter-options">
        <form onSubmit={this.handleSubmit}>
          <label className="filter-label"> Search:
            <select defaultValue="All" onChange={this.handleChange}>
              <option value="All">All</option>
              <option value="Savings">Savings</option>
              <option value="Expenses">Expenses</option>
              <option value="Income">Income</option>
            </select>
          </label>
          <label className="filter-label"> Month: 
            <select defaultValue="All">
              <option value="All">All</option>
              <option value="January">January</option>
              <option value="February">February</option>
              <option value="March">March</option>
              <option value="April">April</option>
              <option value="May">May</option>
              <option value="June">June</option>
              <option value="July">July</option>
              <option value="August">August</option>
              <option value="September">September</option>
              <option value="October">October</option>
              <option value="November">November</option>
              <option value="December">December</option>
            </select>
          </label>
          <label className="filter-label"> Year: 
            <select defaultValue="All">
              <option value="All">All</option>
              <option value="2019">2019</option>
              <option value="2020">2020</option>
              <option value="2021">2021</option>
            </select>
          </label>
          <button type="submit">Apply Filter</button>
        </form>
      </div>
    )
  }
}

export default FilterContainer