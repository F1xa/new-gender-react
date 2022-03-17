
import { Component } from 'react';
import './App.css';
import { SandButton } from './components/button/button';
import { AddInput} from './components/input/Input'
import { Result } from './components/output/output';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      gender: ''
    }
  }

  onValueChange = (e) => {
    this.setState({
      name: e.target.value
    })
  }

  sendRequest = () => {
    const {name} = this.state
    const serverUrl = 'https://api.genderize.io';
    const url = `${serverUrl}?name=${name}`;
    
      return fetch(url)
        .then(response => response.json())
        .then(result => this.setState({gender: result.gender}))
    }

  render() {
    const {name, gender} = this.state;
    return (
      <div className='wrapper'>
        <AddInput onValueChange={this.onValueChange} name={name}/>
        <SandButton gender={this.sendRequest}/>
        <Result value={gender}/>
      </div>
    )
  }
}
  

export default App;

