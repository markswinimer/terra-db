import React from 'react'
import FilterCategoryComponent from './FilterCategoryComponent'

const FilterFieldComponent = (props) => {
  return(
    <ul>
      <div className="filterField">
        <hr width="88%"/>
        <h3>Rarity</h3>
        <hr width="88%"/>
      </div>
      <div className="filterCategory">
      <FilterCategoryComponent
        id="Z-option"
        htmlFor="Z-option"
        label="Z"
        handleChange={props.handleChange}
      />
      <FilterCategoryComponent
        id="SS-option"
        htmlFor="SS-option"
        label="SS"
        handleChange={props.handleChange}
      />
      <FilterCategoryComponent
        id="S-option"
        htmlFor="S-option"
        label="S"
        handleChange={props.handleChange}
      />
      <FilterCategoryComponent
        id="A-option"
        htmlFor="A-option"
        label="A"
        handleChange={props.handleChange}
      />
      <FilterCategoryComponent
        id="B-option"
        htmlFor="B-option"
        label="B"
        handleChange={props.handleChange}
      />
    </div>
    </ul>
  )
}

export default FilterFieldComponent
