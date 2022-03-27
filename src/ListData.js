import React from 'react';

export default class ListData extends React.Component {

    constructor(props) {
        super(props);
        console.log(this.props.todo)

        this.removeIt = this.removeIt.bind(this);
      }
    
      removeIt(index) {
        this.setState({ todo: (this.props.todo.splice(index, 1))});
      }

  render() {
    let data = this.props.todo.length > 0 ? this.props.todo
    .map((todo, index) => (
        <li key={index} style={{ listStyle: "none", marginTop: "5px"}}>
            <div className="row bg-light text-dark">
                <div className="col-10"> 
                    {todo} 
                </div>
                <div className="col-2">
                    <input type="button" className=" text-white btn btn-danger" onClick={() => this.removeIt(index)} value="Delete" />
                </div>
            </div>
        </li>

    ))
    .reverse() : <p>You have no todo available </p>;

    return (
      <React.Fragment>
        {data}
      </React.Fragment>
    )
  }
}