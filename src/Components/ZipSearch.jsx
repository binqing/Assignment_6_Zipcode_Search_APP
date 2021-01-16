import React, { Component } from "react";
import ZipResults from './ZipResults';

class ZipSearch extends Component {
  constructor(props) {  
    super(props) 
    this.state = {
      zipCode: "",    
      searchResults: [],   
    }
  }

  handleInput = (event) => {
    this.setState({zipCode: event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault()
    
    fetch(`http://ctp-zip-api.herokuapp.com/zip/${this.state.zipCode}`)
      .then(response => response.json())
      .then(locations => {
        this.setState({searchResults: locations})
      })
      .catch(error => {
        this.setState({searchResults: []})
        console.log(error)
      })
  }
  
  render() {
    return (
      <div>
        <header className="title">
          <h1>Zip Code Search</h1>
        </header>
        <div className="content">  
          <form className="input-bar" onSubmit={this.handleSubmit}>
            <p>Zip Code:</p>
            <input placeholder="Try 10016" onChange={this.handleInput}></input>
          </form>
          <ZipResults searchResults={this.state.searchResults} />
        </div>
      </div>
    )
  }
}

export default ZipSearch




