import React, { Component } from "react";
import ListData from "./ListData"

class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: [],
      show: false
    };

    this.addTodo = this.addTodo.bind(this);
  }

  addTodo() {
    if(document.querySelector("#todo").value.toString().trim() != "" ){
        this.setState( { 
                todo: this.state.todo.concat(document.querySelector("#todo").value)
        });
        document.querySelector("#todo").value = "";
        return; 
    }

    this.setState( {show: true} );
    
    setTimeout(()=>{
        this.setState({show: false});
    }, 1000)
  }

  render() {
    return (
      <div className="container p-3 text-light"
      style={{ width: "50%", margin: "10% auto", backgroundColor: "purple"}}>
        <h1 className="text-center m-3">Todo Application</h1>
        <div className="container">
           {this.state.show ? <p className="text-white p-1 mx-3 bg-danger"> You cannot add an empty todo </p> : <></>}
          <form className="p-2">
            <input
              className="form-control my-2 mx-1 p-3"
              id="todo"
              type="text"
              placeholder="Add javascript"
              name="todo"
            />
            <input
              className="btn btn-success mx-1"
              type="button"
              name="add"
              value="Add"
              onClick={this.addTodo}
            />
          </form>
          <h6 className="m-3 p-1">List of todo's</h6>
          <ul> <ListData todo={this.state.todo} /> </ul>
        </div>
      </div>
    );
  }
}

export default class Todo extends Component {
  render() {
    return <Body />;
  }
}
