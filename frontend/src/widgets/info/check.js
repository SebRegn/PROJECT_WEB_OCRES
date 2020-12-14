import React from 'react';
import Checkbox from 'rc-checkbox';
import 'rc-checkbox/assets/index.css';
import axios from 'axios';


const Todo = props => (

    <div>
    <p>
      <label>
        <Checkbox
          onChange={() => { props.deleteTodo(props.thistodo._id) }}
          //disabled={this.state.disabled}
        />
        &nbsp; {props.thistodo.task}
      </label>
      &nbsp;&nbsp;
    </p>
  </div>

)

class SimpleDemo extends React.Component {

  constructor(props) {
    super(props);

    this.state = {todo: []};
  }

  

  componentDidMount() {
    axios.get('http://localhost:8000/todo/')
      .then(response => {
        this.setState({ todo: response.data })
        console.log(this.state.todo);
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteTodo(id) {
    axios.delete('http://localhost:8000/todo/'+id)
      .then(response => { console.log(response.data)});

    // this.setState({
    //   //todo: this.state.todo.filter(el => el._id !== id)
    // })
    window.location = '/';
  }


  todoList() {
    return this.state.todo.map(currenttodo => {
      return <Todo thistodo={currenttodo} deleteTodo={this.deleteTodo} key={currenttodo._id}/>;
    })
  }

  render() {
    return (

      <div >
        <h1>TO DO LIST</h1>
        { this.todoList() }
      </div> 
    );
  }
}

export default SimpleDemo;