import React from 'react'
import GuardianComponent from '../components/GuardianComponent.js'
import TableHeadComponent from '../components/TableHeadComponent.js'

class GuardiansContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      guardians: [],
      filter_pool: [],
    }
    this.handleFilter = this.handleFilter.bind(this)
  }


  componentDidMount() {
    this.setState({filter: this.props.filter})
    fetch('/api/v1/guardians')
    .then(response => response.json())
    .then(body =>
      this.setState( {guardians: body }))
    }

    handleFilter(event) {
      this.setState({ filter: event})
    }


    render() {
      console.log(this.props.filter)
      let filter_pool = null
      if(this.props.filter[0] == "ALL") {
        filter_pool = this.state.guardians
      } else if (this.props.filter[0] == "class-option") {
        filter_pool = this.state.guardians.filter(guardian => `${guardian.g_class}-option` == this.props.filter[1])
      } else if (this.props.filter[0] == "job-option") {
        filter_pool = this.state.guardians.filter(guardian => `${guardian.job}-option` == this.props.filter[1])
      } else if (this.props.filter[0] == "race-option") {
        filter_pool = this.state.guardians.filter(guardian => `${guardian.race}-option` == this.props.filter[1])
      }
    let guardians = filter_pool.map(guardian => {
      return(
      <GuardianComponent
        key={guardian.id}
        name={guardian.name}
        g_class={guardian.g_class}
        race={guardian.race}
        job={guardian.job}
        union_a={guardian.union_a}
        union_b={guardian.union_b}
        artwork={guardian.artwork}
      />
    )
  })
    return(
      <div>
        <table className="table-bordered" cellSpacing="0" cellPadding="0" >
          <TableHeadComponent />
          {guardians}
        </table>
      </div>
    )
  }
}
export default GuardiansContainer
