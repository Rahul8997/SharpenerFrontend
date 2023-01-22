import React from 'react'

const Expensefilter = (props) => {
    const handleOnChange=(e)=>{
       props.selectYear(e.target.value);
    }
  return (
    <div className='expense-item'>
      <div>Filter By Year</div>
      <select value={props.currentYear} onChange={handleOnChange} className="btn btn-danger">
        <option value="2019">2019</option>
        <option value="2020">2020</option>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
      </select>
    </div>
  )
}

export default Expensefilter
