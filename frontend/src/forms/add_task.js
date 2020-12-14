import React, { Component } from 'react';
import axios from 'axios';


export default class AddAffluance extends Component {
  constructor(props) {

    super(props);

    this.onChangeTask = this.onChangeTask.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
        task:'',
    }
  }


  onChangeTask(e) {
    this.setState({
      task: e.target.value
    })
  }


  onSubmit(e) {
    e.preventDefault();

    const todo = {
      task: this.state.task
    }


    axios.post('http://localhost:8000/todo/add', todo)
      .then(res => console.log(res.data));

    
  }

  render() {
    return (
    <div>
      <h3>Add Task</h3>
      <form onSubmit={this.onSubmit}>
        
        <div className="form-group"> 
          <label>A faire: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.task}
              onChange={this.onChangeTask}
              />
        </div>

        <div className="form-group">
          <input type="submit" value="Add task" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}