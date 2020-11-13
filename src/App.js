import React, { Component } from 'react'
import { Jumbotron } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Journal from './components/Journal'
import NewEntryForm from './components/NewEntryForm'

const baseUrl = 'http://localhost:3000/entries'
export default class App extends Component {

  state = {
    entries: [],
  }

  componentDidMount(){
    this.fetchEntries()
  }

  fetchEntries = () => {
    fetch(baseUrl)
      .then(response => response.json())
      .then(results => this.setState({entries: results}))
  }

  addEntry = (newEntry) => {
    this.setState({
      entries: [...this.state.entries, newEntry],
    })
    fetch(baseUrl, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'
      }, 
      body: JSON.stringify(newEntry)
    })
  }

  updateEntry = (updatedEntry) => {
    let entries = this.state.entries.map(entry => entry.id === updatedEntry.id ? updatedEntry : entry)

    this.setState({entries})
    fetch(baseUrl + "/" + updatedEntry.id, {
      method: "PATCH",
      headers: {"Content-Type": "application/json"
    },
    body: JSON.stringify({entry: updatedEntry})
    })
  }

  deleteEntry = (id) => {
    let filteredEntries = this.state.entries.filter(entry => {
      return entry.id !== id
    })
    this.setState({
      entries: filteredEntries
    })
    console.log(id)
    fetch(baseUrl + "/" + id, {method: 'DELETE'})
  }

  render(){
    return (
      <div className="App">
        <Jumbotron fluid className="header-banner">
          <div>
            <h1>Just a Thought</h1>
            <p>
              Take a moment to write down your thoughts
            </p>
          </div>
      </Jumbotron>
      <Journal 
        entries={this.state.entries} 
        updateEntry={this.updateEntry}
        deleteEntry={this.deleteEntry}
      />
      <NewEntryForm addEntry={this.addEntry}/>
    </div>
    )
  }
}
