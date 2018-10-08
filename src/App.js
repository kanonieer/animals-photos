import React, { Component } from 'react';
import './App.css';
import Form from './Form/Form';

const API = 'http://shibe.online/api/'
class App extends Component {
  loading = false;
  render() {
    return (
      <div className="App">
        <Form loading={this.loading} onSearch={this.handleSearch}/>
      </div>
    );
  }
  handleSearch = async (animal, count) => {
    const url = `${API}${animal}?count=${count}`
    const headers = new Headers({
      'Accept': 'application/json',
      'Accept-Encoding': 'gzip',
      'Content-Type': 'application/json'
    });
    const init = { method: 'GET', mode: 'no-cors', headers };

    fetch(url, init)
      .then(res => console.log(res))
  }
}

export default App;
