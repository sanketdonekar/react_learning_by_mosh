import React, { Component } from 'react'
import Counter from './counter'

class Counters extends Component {
    render() {
        const { onReset, counters, onIncrement, onDelete, onDecrement } = this.props  /*using object distructuring to pick props of object, this is more cleaner */

        return (
            <div className="container">
                <button className="btn btn-primary btn-sm m-2" onClick={onReset}>Reset</button>
                {counters.map(counter => (
                    <div key={counter.id} className="row">
                        <Counter key={counter.id} onIncrement={onIncrement} onDelete={onDelete} counter={counter} onDecrement={onDecrement}>  {/* passing a reference for the medthod used here via props to counter component */}
                            {/* <h4>
                            Counter: #{counter.id}          children props to pass content in object, remember props can be only used from parent to child 
                        </h4> */}
                        </Counter>
                    </div>
                ))}
            </div >
        );
    }
}

export default Counters;