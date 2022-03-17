import { Component } from 'react'
import './input.css'

export class AddInput extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {name, onValueChange} = this.props;
    
    return (
      <input type='text' 
             placeholder='Введите имя' 
             className='input'
             onChange={onValueChange}
             value={name}
             />
    )
  }
}

