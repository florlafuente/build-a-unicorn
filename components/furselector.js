import React, {Component} from 'react'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'

const colors = require('../json/document.json')

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
      colors: false
    }
  }

  componentDidMount() {
    this.setState({
      colors: colors.fur_color
    })
  }

  handleChange = (event, index, value) => this.setState({value})

  render() {
    if (this.state.colors) {
      return (
        <SelectField
          floatingLabelText='Fur color'
          value={this.state.value}
          onChange={this.handleChange} 
        >
          {this.state.colors.map((color, i)=> 
            <MenuItem 
              value={color.value}
              primaryText={color.label}
              key={i} />
          )}
        </SelectField>
      )
    } else {
      return null
    }
  }
}