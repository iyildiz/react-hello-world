import React, {Component} from 'react';

export const RenderApp = () => <h1>Hello World</h1>
export const PI = 3.14

export class App extends Component {

  constructor(){
    this.state = {
      name: "Bob",
      city: "London",
      todos: []
    }
  }

  handleOnSubmit = (e) => {
    e.preventDefault();
    console.log("Hello:" + this.inputElement);
    this.h1.value = this.inputElement.value;
    console.log("State:", this.state);
    this.setState({name: this.inputElement.value});
  }

  handleOnChange = (e) => {
    console.log("Inside onchange:" + e.target.value);
    this.h1.value = e.target.value;
    //
  }

  render() {
    return(
      <div>
        <div>
          <form onSubmit={this.handleOnSubmit}>
            <input type="text" ref={text1 => this.inputElement = text1}/>
            <input type="submit" value="Add" />
            <input type="text" onChange={this.handleOnChange}/>
            <div ref={value => this.output = value}>
              <p>Start editing to see some magic happen :)</p>
            </div>
            <input type="text" ref={h1 => this.h1 = h1}/>
            <br/>
            Name from session : {this.state.name}
          </form>
          
        </div> 
      </div>
    );
  }
}