import React, { Component } from 'react';
import axios from 'axios';
// import DatePicker from 'react-datepicker';
// import "react-datepicker/dist/react-datepicker.css";



export default class AddAffluance extends Component {
  constructor(props) {

    super(props);

    this.onChangePoseidon = this.onChangePoseidon.bind(this);
    this.onChangeMercure = this.onChangeMercure.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      poseidon: '',
      mercure: '',
      date: new Date(),
    }
  }


  onChangePoseidon(e) {
      console.log(e.target.value);
    this.setState({
      poseidon: e.target.value
    })
  }

  onChangeMercure(e) {
    this.setState({
      mercure: e.target.value
    })
  }


  onChangeDate(date) {
    this.setState({
      date: date
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const affluance = {
      name: new Date(),  
      poseidon: this.state.poseidon,
      mercure: this.state.mercure,
    }

    console.log(affluance);

    axios.post('http://localhost:8000/affluance/add', affluance)
      .then(res => console.log(res.data));

    //window.location = '/';
  }

  render() {
    return (
    <div>
      <h3>Affluance aujourd'hui</h3>
      <form onSubmit={this.onSubmit}>
        
        <div className="form-group"> 
          <label>Poseidon: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.poseidon}
              onChange={this.onChangePoseidon}
              />
        </div>
        <div className="form-group"> 
          <label>Mercure: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.mercure}
              onChange={this.onChangeMercure}
              />
        </div>


        <div className="form-group">
          <input type="submit" value="Add afflaunce" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}