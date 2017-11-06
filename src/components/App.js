import React, {Component} from 'react';

export class App extends Component {

  constructor(){
    super();
    this.state = {
      todos: [
      ],    
      filterBy: "All"
    }
  }

  handleOnSubmit = (e) => {
    e.preventDefault();
    console.log("Input value:" + this.inputElement.value);
    
    let newTodoItem = { title: this.inputElement.value, addedDate: new Date(), isClicked: false };

    let {todos: tmpTodos} = this.state
    tmpTodos.push(newTodoItem);
    
    this.updateState(tmpTodos);

    this.inputElement.value = "";
  }

  handleItemClicked = (index) => {
    console.log(index);

    let {todos: tmpTodos} = this.state;
    tmpTodos[index].isClicked = !tmpTodos[index].isClicked;

    this.updateState(tmpTodos);
  }


  handleFilterByChangeEvent = (e, selectedFilterBy) => {
    
    e.preventDefault();

    console.log(selectedFilterBy);

    this.setState({filterBy: selectedFilterBy});
  }

  getFilteredItems = () => {

      return this.state.filterBy === 'All'
      ? this.state.todos
      : this.state.filterBy === 'Done'
      ? this.state.todos.filter(todo => todo.isClicked)
      : this.state.todos.filter(todo => !todo.isClicked)
  }

  updateState = (newState) => {
    this.setState({todos:newState});
  }

  render() {
    return(
      <div>
        <div>
          <form onSubmit={this.handleOnSubmit}>
            <input type="text" ref={text1 => this.inputElement = text1}/>
            <input type="submit" value="Add" />
          </form>
        </div> 
        <div>
          <ul>
            {this.getFilteredItems().map((todo,i) => 
            <li key={i} onClick={() => this.handleItemClicked(i)}>
              {todo.isClicked?(
                <span style={{textDecoration: "line-through"}}>{todo.title} : {todo.addedDate.toDateString()}</span>
              ):(
                <span>{todo.title} : {todo.addedDate.toDateString()}</span>
              )}
            </li>)}
          </ul>
        </div>
        <div>
          <a href="" onClick={(e) => this.handleFilterByChangeEvent(e, 'All')}>
            {this.state.filterBy === 'All'?(
              <b><u>All</u></b>
            ):(
            <u>All</u>
            )}
          </a> <span> | </span>  

          <a href="" onClick={(e) => this.handleFilterByChangeEvent(e, 'Done')}>
            {this.state.filterBy === 'Done'?(
              <b><u>Done</u></b>
            ):(
            <u>Done</u>
            )}
          </a> <span> | </span>

          <a href="" onClick={(e) => this.handleFilterByChangeEvent(e, 'Waiting')}>
            {this.state.filterBy === 'Waiting'?(
              <b><u>Waiting</u></b>
            ):(
            <u>Waiting</u>
            )}
          </a>
        </div>  
      </div>
    );
  }
}