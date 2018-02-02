import React from 'react'

class GuardianComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
    //.bind(this)
  }
  render() {
    return(
      <tbody>
        <tr>
          <td className="guardianTable artwork"><img src="http://www.bouldercrestranch.com/uploads/3/4/4/5/34453357/7765835_orig.jpg" /></td>
          <td className="guardianTable gClass">{this.props.g_class}</td>
          <td className="guardianTable name">{this.props.name}</td>
          <td className="guardianTable race">{this.props.race}</td>
          <td className="guardianTable job">{this.props.job}</td>
          <td className="guardianTable unionA">{this.props.union_a}</td>
          <td className="guardianTable unionB">{this.props.union_b}</td>
        </tr>
      </tbody>
    )
  }
}
export default GuardianComponent
