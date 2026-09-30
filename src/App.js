import { Component } from 'react';
import Header from './components/header';
import Songs from './components/song';
import './App.css';

class App extends Component{

  componentDidMount(){    
    console.log('La app se montó'); 
  }

  render(){
    return (
    <div className="App">
      <Header appName="header"/>
      <Songs appName="songs"/>
    </div>
    );
  }
}

export default App;