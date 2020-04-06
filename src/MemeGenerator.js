import React, { Component } from 'react'

class MemeGenerator extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      topText: '',
      bottomText: '',
      randomImg: []
     }
  }

  handleChange(event) {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }

  render() { 
    return ( 
      <div>
        <form>
          <input 
            name='topText'
            placeholder='Top Text'
            value={this.state.topText}
            onChange={this.handleChange}
          />
          <input 
            name='bottomText'
            placeholder='Bottom Text'
            value={this.state.bottomText}
            onChange={this.handleChange}
          />
          <button>Generate</button>
        </form>
      </div>
     )
  }
}
 
export default MemeGenerator