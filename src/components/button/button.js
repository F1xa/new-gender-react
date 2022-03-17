import { Component } from 'react';
import './button.css';

 export class SandButton extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {gender} = this.props;

    return (
      <button className='button' onClick={gender}>Отправить</button>
    )
  }
  
}

