import React from 'react'

const FilterCategoryComponent = (props) => {
  return(
    <li>
      <input onChange={this.handleChange} type="radio" id={props.option} name="selector"/>
      <label htmlFor={props.htmlFor}>{props.label}</label>
    </li>
  )
}

export default FilterCategoryComponent
