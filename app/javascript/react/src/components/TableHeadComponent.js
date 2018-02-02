import React from 'react'

const TableHeadComponent = (props) => {
  return(
    <thead>
      <tr className="table-head">
        <th className="table-head"></th>
        <th className="table-head">Class</th>
        <th className="table-head">Guardian</th>
        <th className="table-head">Race</th>
        <th className="table-head">Job</th>
        <th className="table-head">50% Union</th>
        <th className="table-head">100% Union</th>
      </tr>
    </thead>
  )
}
export default TableHeadComponent
