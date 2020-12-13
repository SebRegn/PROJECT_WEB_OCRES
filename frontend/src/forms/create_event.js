import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";



export default class CreateEvent extends Component {
  constructor(props) {
    super(props);

    this.onChangeEvent = this.onChangeEvent.bind(this);
    this.onChangeBoite = this.onChangeBoite.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onChangeNb = this.onChangeNb.bind(this);
    this.onChangeBateau = this.onChangeBateau.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      event: '',
      boite: '',
      nb: '',
      date: new Date(),
      bateau: 'blue',
    }
  }


  onChangeEvent(e) {
    this.setState({
      event: e.target.value
    })
  }

  onChangeBoite(e) {
    this.setState({
      boite: e.target.value
    })
  }

  onChangeNb(e) {
    console.log(e.target.value);
    this.setState({
      nb: e.target.value
    })
  }

  onChangeBateau(e) {
    console.log(e.target.value);
    this.setState({
      bateau: e.target.value
    })
  }

  onChangeDate(date) {
    this.setState({
      date: date
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const operation = {
      event: this.state.event,
      boite: this.state.boite,
      nb: this.state.nb,
      date: this.state.date,
      bateau: this.state.bateau
    }

    console.log(operation);

    axios.post('http://localhost:8000/tableau/add', operation)
      .then(res => console.log(res.data));

    //window.location = '/';
  }

  render() {
    return (
    <div>
      <h3>Create New Event</h3>
      <form onSubmit={this.onSubmit}>
        <div className="form-group"> 
          <label>Bateau: </label>
          <select ref="bateau"
              required
              className="form-control"
              value={this.state.bateau}
              onChange={this.onChangeBateau}>
                  <option value="yellow" > Mercure</option>
                  <option value="blue" > Poseidon</option>
          </select>
        </div>
        <div className="form-group"> 
          <label>Event: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.event}
              onChange={this.onChangeEvent}
              />
        </div>
        <div className="form-group"> 
          <label>Boite: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.boite}
              onChange={this.onChangeBoite}
              />
        </div>
        <div className="form-group">
          <label>Nombre de personnes: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.nb}
              onChange={this.onChangeNb}
              />
        </div>
        <div className="form-group">
          <label>Date: </label>
          <div>
            <DatePicker
              selected={this.state.date}
              onChange={this.onChangeDate}
            />
          </div>
        </div>

        <div className="form-group">
          <input type="submit" value="Create Event" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}