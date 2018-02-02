import React from 'react'

class FilertMenuContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    let filter = event.target.className + " " + event.target.id
    this.props.handleFilter(filter)
  }

  render () {
    return(
      <div className="FilterMenu">
        <div className="filterTitle">Filter By:</div>
        <ul>
          <div className="filterContainer">
            <li>
              <input onChange={this.handleChange} type="radio" className="ALL" id="ALL" name="selector"/>
              <label htmlFor="ALL">  All</label>
            </li>
          </div>

          <div className="filterCategortTitle">
          <hr width="88%"/>
          <div className="filterCategory">Class</div>
          <hr width="88%"/>
        </div>
          <div className="filterContainer">
            <li>
              <input onChange={this.handleChange} type="radio" className="class-option" id="Z-option" name="selector"/>
              <label htmlFor="Z-option">  Z</label>
            </li>
            <li>
              <input onChange={this.handleChange} type="radio" className="class-option" id="SS-option" name="selector"/>
              <label htmlFor="SS-option">  SS</label>
            </li>
            <li>
              <input onChange={this.handleChange} type="radio" className="class-option" id="S-option" name="selector"/>
              <label htmlFor="S-option">  S</label>
            </li>
            <li>
              <input onChange={this.handleChange} type="radio" className="class-option" id="A-option" name="selector"/>
              <label htmlFor="A-option"> A</label>
            </li>
            <li>
              <input onChange={this.handleChange} type="radio" className="class-option" id="B-option" name="selector"/>
              <label htmlFor="B-option">  B</label>
            </li>
          </div>
          <div className="filterCategortTitle">
            <hr width="88%"/>
            <div className="filterCategory">Job</div>
            <hr width="88%"/>
            </div>
          <div className="filterContainer">
            <li>
              <input onChange={this.handleChange} type="radio" className="job-option" id="Warrior-option" name="selector"/>
              <label htmlFor="Warrior-option">Warrior</label>
            </li>
            <li>
              <input onChange={this.handleChange} type="radio" className="job-option" id="Mage-option" name="selector"/>
              <label htmlFor="Warrior-option">Mage</label>
            </li>
            <li>
              <input onChange={this.handleChange} type="radio" className="job-option" id="Spellblade-option" name="selector"/>
              <label htmlFor="Warrior-option">Spellblade</label>
            </li>
          </div>
          <div className="filterCategortTitle">
          <hr width="88%"/>
          <div className="filterCategory">Race</div>
          <hr width="88%"/>
        </div>
          <div className="filterContainer">
            <li>
              <input onChange={this.handleChange} type="radio" className="race-option" id="Human-option" name="selector"/>
              <label htmlFor="Human-option">Human</label>
            </li>
            <li>
              <input onChange={this.handleChange} type="radio" className="race-option" id="Machine-option" name="selector"/>
              <label htmlFor="Machine-option">Machine</label>
            </li>
            <li>
              <input onChange={this.handleChange} type="radio" className="race-option" id="Lizardfolk-option" name="selector"/>
              <label htmlFor="Lizardfolk-option">Lizardfolk</label>
            </li>
            <li>
              <input onChange={this.handleChange} type="radio" className="race-option" id="Beastfolk-option" name="selector"/>
              <label htmlFor="Beastfolk-option">Beastfolk</label>
            </li>
            <li>
              <input onChange={this.handleChange} type="radio" className="race-option" id="Fairy-option" name="selector"/>
              <label htmlFor="Fairy-option">Fairy</label>
            </li>
            <li>
              <input onChange={this.handleChange} type="radio" className="race-option" id="Golem-option" name="selector"/>
              <label htmlFor="Golem-option">Golem</label>
            </li>
            <li>
              <input onChange={this.handleChange} type="radio" className="race-option" id="Monster-option" name="selector"/>
              <label htmlFor="Monster-option">Monster</label>
            </li>
            <li>
              <input onChange={this.handleChange} type="radio" className="race-option" id="Animal-option" name="selector"/>
              <label htmlFor="Animal-option">Animal</label>
            </li>
          </div>
          </ul>
        </div>
    )
  }
}

export default FilertMenuContainer
