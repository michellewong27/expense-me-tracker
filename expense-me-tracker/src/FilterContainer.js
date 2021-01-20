import React from 'react';

class FilterContainer extends React.Component{
  render(){
    return (
      <div className="filter-options">
        <form>
          <label className="filter-label"> Search:
            <select defaultValue="all">
              <option value="All">All</option>
              <option value="Savings">Savings</option>
              <option value="Expenses">Expenses</option>
              <option value="Income">Income</option>
            </select>
          </label>
        </form>
          <label className="filter-label"> Month: 
            <select defaultValue="all">
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
            <select defaultValue="all">
              <option value="All">All</option>
              <option value="2019">2019</option>
              <option value="2020">2020</option>
              <option value="2021">2021</option>
            </select>
          </label>
      </div>
    )
  }
}

export default FilterContainer