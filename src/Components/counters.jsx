import React , { Component } from "react";
import Counter from "./counter";

class Counters extends React.Component {
    state = {
        counters : [
            {id:1,value:3},
            {id:2,value:0},
            {id:3,value:0},
            {id:4,value:0},
        ]
    };
    handleReset = () => {
        const counters = this.state.counters.map(c => {
            c.value = 0;
            return c;
        });
        this.setState({counters});
    }
    handleDelete = (counterId) => {
        const counters = this.state.counters.filter(c => c.id !== counterId); 
        this.setState({counters});
    }

    handleInc = (counter) => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = {...counter};
        counters[index].value++;
        console.log(counter);
        this.setState({counters});
    }
    render() { 
      return  ( 
        <div>
            <button 
            onClick={this.handleReset} 
            className="btn btn-primary btn-sm m-2">
                Reset
            </button>

            {this.state.counters.map(counter => (
            <Counter key={counter.id} 
            onDelete = {this.handleDelete}
            onInc = {this.handleInc}
            counter = {counter} />
            ))} 
        </div>
      );
    }
}
 
export default Counters;