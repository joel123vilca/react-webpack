import React from 'react';
import { Component } from 'react';
class App extends Component {
    state = {
        task: {
            title: "Titulo desde el estado",
            done: true
        }
    }
    handledClick = () => {
        const task = this.state.task;
        task.done = !task.done;
        this.setState({task})
    }
    render(){
        return (
            <div>
                <h3>{this.state.task.title}</h3>
                <h3>{this.state.task.done.toString()}</h3>
                <button onClick={this.handledClick}>
                    Click
                </button>
            </div>
        )
    }
}

export default App;